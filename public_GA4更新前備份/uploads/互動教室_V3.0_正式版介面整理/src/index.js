import { DurableObject } from "cloudflare:workers";

const jsonResponse = (data, init = {}) =>
  new Response(JSON.stringify(data), {
    ...init,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "access-control-allow-origin": "*",
      ...(init.headers || {}),
    },
  });

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "access-control-allow-origin": "*",
          "access-control-allow-methods": "GET,POST,OPTIONS",
          "access-control-allow-headers": "content-type",
        },
      });
    }

    if (request.method === "POST" && url.pathname === "/api/rooms") {
      for (let attempt = 0; attempt < 12; attempt++) {
        const code = String(Math.floor(100000 + Math.random() * 900000));
        const id = env.ROOMS.idFromName(code);
        const stub = env.ROOMS.get(id);

        const status = await stub.fetch("https://room.local/status");
        const info = await status.json();

        if (!info.active) {
          const body = await request.json().catch(() => ({}));
          const title = String(body.title || "今天的互動活動").slice(0, 80);
          const joinMode = ["nickname", "name", "number", "anonymous"].includes(body.joinMode)
            ? body.joinMode
            : "nickname";

          await stub.fetch("https://room.local/init", {
            method: "POST",
            body: JSON.stringify({ code, title, joinMode }),
          });

          return jsonResponse({ ok: true, code, title, joinMode });
        }
      }
      return jsonResponse({ ok: false, error: "暫時無法建立房間，請再試一次。" }, { status: 503 });
    }

    const wsMatch = url.pathname.match(/^\/api\/rooms\/(\d{6})\/ws$/);
    if (wsMatch) {
      const code = wsMatch[1];
      const id = env.ROOMS.idFromName(code);
      return env.ROOMS.get(id).fetch(request);
    }

    const stateMatch = url.pathname.match(/^\/api\/rooms\/(\d{6})\/state$/);
    if (stateMatch) {
      const code = stateMatch[1];
      const id = env.ROOMS.idFromName(code);
      return env.ROOMS.get(id).fetch("https://room.local/state");
    }

    return env.ASSETS.fetch(request);
  },
};

export class Room extends DurableObject {
  constructor(ctx, env) {
    super(ctx, env);
    this.ctx = ctx;
    this.env = env;
  }

  async roomMeta() {
    return (await this.ctx.storage.get("room")) || null;
  }

  participants() {
    return this.ctx.getWebSockets()
      .map(ws => {
        try { return ws.deserializeAttachment(); } catch { return null; }
      })
      .filter(x => x && x.role === "participant")
      .map(x => ({
        participantId: x.participantId,
        displayName: x.displayName,
      }));
  }

  async snapshot() {
    return {
      room: await this.roomMeta(),
      activity: (await this.ctx.storage.get("activity")) || null,
      responses: (await this.ctx.storage.get("responses")) || {},
      participants: this.participants(),
    };
  }

  async broadcast(message, role = null) {
    const data = JSON.stringify(message);
    for (const ws of this.ctx.getWebSockets()) {
      let info = null;
      try { info = ws.deserializeAttachment(); } catch {}
      if (role && info?.role !== role) continue;
      try { ws.send(data); } catch {}
    }
  }

  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/status") {
      const room = await this.roomMeta();
      return jsonResponse({ active: Boolean(room && room.status !== "closed") });
    }

    if (url.pathname === "/init" && request.method === "POST") {
      const data = await request.json();
      await this.ctx.storage.put("room", {
        code: data.code,
        title: data.title,
        joinMode: data.joinMode,
        status: "open",
        createdAt: Date.now(),
      });
      await this.ctx.storage.put("activity", null);
      await this.ctx.storage.put("responses", {});
      return jsonResponse({ ok: true });
    }

    if (url.pathname === "/state") {
      return jsonResponse(await this.snapshot());
    }

    if (request.headers.get("Upgrade") === "websocket") {
      const room = await this.roomMeta();
      if (!room || room.status === "closed") {
        return new Response("Room not found", { status: 404 });
      }

      const role = url.searchParams.get("role");
      if (!["host", "participant"].includes(role)) {
        return new Response("Invalid role", { status: 400 });
      }

      const pair = new WebSocketPair();
      const client = pair[0];
      const server = pair[1];

      const participantId =
        role === "participant"
          ? (url.searchParams.get("participantId") || crypto.randomUUID())
          : "host";

      let displayName =
        role === "participant"
          ? String(url.searchParams.get("name") || "匿名參與者").slice(0, 40)
          : "主持人";

      if (role === "participant" && room.joinMode === "anonymous") {
        const animals = ["柴犬", "企鵝", "兔子", "海獺", "狐狸", "貓咪", "水豚", "熊貓"];
        const pick = animals[Math.floor(Math.random() * animals.length)];
        displayName = `${pick} ${String(Math.floor(Math.random() * 99) + 1).padStart(2, "0")}`;
      }

      server.serializeAttachment({ role, participantId, displayName });
      this.ctx.acceptWebSocket(server);

      server.send(JSON.stringify({ type: "state", payload: await this.snapshot() }));
      await this.broadcast({ type: "participants", payload: this.participants() });

      return new Response(null, { status: 101, webSocket: client });
    }

    return new Response("Not found", { status: 404 });
  }

  async webSocketMessage(ws, message) {
    let data;
    try {
      data = JSON.parse(typeof message === "string" ? message : new TextDecoder().decode(message));
    } catch {
      ws.send(JSON.stringify({ type: "error", payload: "無效訊息格式" }));
      return;
    }

    let info = {};
    try { info = ws.deserializeAttachment() || {}; } catch {}

    if (info.role === "host") {
      if (data.type === "publish") {
        const payload = data.payload || {};
        const activity = {
          activityId: crypto.randomUUID(),
          type: payload.type || "decision",
          question: String(payload.question || "").slice(0, 500),
          settings: payload.settings || {},
          status: "open",
          publishedAt: Date.now(),
        };
        await this.ctx.storage.put("activity", activity);
        await this.ctx.storage.put("responses", {});
        await this.broadcast({ type: "activity", payload: activity });
        return;
      }

      if (data.type === "lock" || data.type === "reopen") {
        const activity = await this.ctx.storage.get("activity");
        if (activity) {
          activity.status = data.type === "lock" ? "locked" : "open";
          await this.ctx.storage.put("activity", activity);
          await this.broadcast({ type: "activity_status", payload: { status: activity.status } });
        }
        return;
      }
    }

    if (info.role === "participant" && data.type === "submit") {
      const activity = await this.ctx.storage.get("activity");
      if (!activity || activity.status !== "open") {
        ws.send(JSON.stringify({ type: "error", payload: "目前未開放作答" }));
        return;
      }

      const responses = (await this.ctx.storage.get("responses")) || {};
      responses[info.participantId] = {
        participantId: info.participantId,
        displayName: info.displayName,
        activityId: activity.activityId,
        answer: data.payload?.answer ?? null,
        submittedAt: Date.now(),
      };

      await this.ctx.storage.put("responses", responses);
      ws.send(JSON.stringify({ type: "submitted", payload: { ok: true } }));
      await this.broadcast({ type: "response", payload: responses[info.participantId] }, "host");
      return;
    }
  }

  async webSocketClose() {
    await this.broadcast({ type: "participants", payload: this.participants() });
  }

  async webSocketError() {
    await this.broadcast({ type: "participants", payload: this.participants() });
  }
}
