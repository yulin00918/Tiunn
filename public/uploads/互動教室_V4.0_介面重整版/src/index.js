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
    const seen = new Map();
    for (const ws of this.ctx.getWebSockets()) {
      let x = null;
      try { x = ws.deserializeAttachment(); } catch {}
      if (x?.role === "participant" && !seen.has(x.participantId)) {
        seen.set(x.participantId, { participantId: x.participantId, displayName: x.displayName });
      }
    }
    return [...seen.values()];
  }

  boardMembers() {
    const members = [];
    for (const ws of this.ctx.getWebSockets("board-participant")) {
      let x = null;
      try { x = ws.deserializeAttachment(); } catch {}
      members.push({
        role: "participant",
        participantId: x?.participantId || "",
        displayName: x?.displayName || "參與者"
      });
    }
    for (const ws of this.ctx.getWebSockets("board-host")) {
      members.push({ role: "host", participantId: "host", displayName: "主持人" });
    }
    return members;
  }

  async snapshot() {
    return {
      room: await this.roomMeta(),
      activity: (await this.ctx.storage.get("activity")) || null,
      responses: (await this.ctx.storage.get("responses")) || {},
      board: (await this.ctx.storage.get("board")) || { status: "closed", mode: "teacher", locked: true, objects: {} },
      participants: this.participants(),
      boardMembers: this.boardMembers(),
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
      await this.ctx.storage.put("board", { status: "closed", mode: "teacher", locked: true, objects: {} });
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

      const surface = url.searchParams.get("surface") === "board" ? "board" : "classroom";
      server.serializeAttachment({ role, participantId, displayName, surface });

      const tags = [];
      if (surface === "board") {
        tags.push(role === "participant" ? "board-participant" : "board-host");
      } else {
        tags.push(role === "participant" ? "classroom-participant" : "classroom-host");
      }
      this.ctx.acceptWebSocket(server, tags);

      server.send(JSON.stringify({ type: "state", payload: await this.snapshot() }));
      await this.broadcast({ type: "participants", payload: this.participants() });
      await this.broadcast({ type: "board_presence", payload: this.boardMembers() });

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

    // ---- 互動白板 V3.1：先同步便利貼物件 ----
    if (data.type === "board_open" && info.role === "host") {
      const board = (await this.ctx.storage.get("board")) || { objects: {} };
      const requestedMode = data.payload?.mode === "fullclass" ? "fullclass" : "teacher";
      board.status = "open";
      board.mode = requestedMode;
      board.locked = requestedMode === "teacher";
      board.objects = board.objects || {};
      await this.ctx.storage.put("board", board);
      await this.broadcast({ type: "board_status", payload: { status: board.status, mode: board.mode, locked: board.locked } });
      await this.broadcast({ type: "board_presence", payload: this.boardMembers() });
      return;
    }

    if (data.type === "board_close" && info.role === "host") {
      const board = (await this.ctx.storage.get("board")) || { objects: {} };
      board.status = "closed";
      await this.ctx.storage.put("board", board);
      await this.broadcast({ type: "board_status", payload: { status: "closed", mode: board.mode, locked: true } });
      return;
    }

    if (data.type === "board_lock" && info.role === "host") {
      const board = (await this.ctx.storage.get("board")) || { objects: {} };
      board.locked = !!data.payload?.locked;
      await this.ctx.storage.put("board", board);
      await this.broadcast({ type: "board_status", payload: { status: board.status || "open", mode: board.mode || "teacher", locked: board.locked } });
      return;
    }

    if (data.type === "board_template_set" && info.role === "host") {
      const payload = data.payload || {};
      if (!["classify", "sort", "quad", "match", "flow", "imageMark", "decision", "task"].includes(payload.type)) return;

      const board = (await this.ctx.storage.get("board")) || { objects: {} };

      if (payload.type === "classify") {
        const count = Math.max(2, Math.min(5, Number(payload.count) || 2));
        const labels = Array.isArray(payload.labels)
          ? payload.labels.slice(0, count).map(x => String(x).slice(0, 40))
          : [];

        board.template = {
          type: "classify",
          title: String(payload.title || "分類活動").slice(0, 100),
          count,
          labels,
          updatedAt: Date.now(),
        };
      }

      if (payload.type === "sort") {
        board.template = {
          type: "sort",
          title: String(payload.title || "排序活動").slice(0, 100),
          count: Math.max(3, Math.min(6, Number(payload.count) || 5)),
          direction: payload.direction === "right" ? "right" : "down",
          updatedAt: Date.now(),
        };
      }

      if (payload.type === "quad") {
        board.template = {
          type: "quad",
          title: String(payload.title || "四象限活動").slice(0, 100),
          x1: String(payload.x1 || "低").slice(0, 40),
          x2: String(payload.x2 || "高").slice(0, 40),
          y1: String(payload.y1 || "低").slice(0, 40),
          y2: String(payload.y2 || "高").slice(0, 40),
          q1: String(payload.q1 || "").slice(0, 40),
          q2: String(payload.q2 || "").slice(0, 40),
          q3: String(payload.q3 || "").slice(0, 40),
          q4: String(payload.q4 || "").slice(0, 40),
          updatedAt: Date.now(),
        };
      }

      if (payload.type === "match") {
        board.template = {
          type: "match",
          title: String(payload.title || "配對活動").slice(0, 100),
          left: String(payload.left || "題目").slice(0, 40),
          right: String(payload.right || "答案").slice(0, 40),
          count: Math.max(3, Math.min(6, Number(payload.count) || 4)),
          updatedAt: Date.now(),
        };
      }
      if (payload.type === "flow") {
        board.template = {
          type: "flow",
          title: String(payload.title || "流程活動").slice(0, 100),
          count: Math.max(3, Math.min(7, Number(payload.count) || 5)),
          updatedAt: Date.now(),
        };
      }
      if (payload.type === "imageMark") {
        board.template = {
          type: "imageMark",
          title: String(payload.title || "圖片標註活動").slice(0, 100),
          prompt: String(payload.prompt || "").slice(0, 240),
          updatedAt: Date.now(),
        };
      }

      if (payload.type === "decision") {
        const criteria = Array.isArray(payload.criteria)
          ? payload.criteria.slice(0, 6).map(x => String(x).slice(0, 40))
          : [];
        board.template = {
          type: "decision",
          title: String(payload.title || "選擇決策").slice(0, 100),
          count: Math.max(2, Math.min(4, Number(payload.count) || 3)),
          criteria,
          updatedAt: Date.now(),
        };
      }

      if (payload.type === "task") {
        board.template = {
          type: "task",
          title: String(payload.title || "今日任務").slice(0, 100),
          task: String(payload.task || "").slice(0, 1000),
          updatedAt: Date.now(),
        };
      }

      await this.ctx.storage.put("board", board);
      await this.broadcast({ type: "board_template_set", payload: board.template });
      return;
    }

    if (data.type === "board_clear" && info.role === "host") {
      const board = (await this.ctx.storage.get("board")) || {};
      board.objects = {};
      board.template = null;
      await this.ctx.storage.put("board", board);
      await this.broadcast({ type: "board_clear" });
      return;
    }

    if (["board_object_add", "board_object_move", "board_object_update", "board_object_delete"].includes(data.type)) {
      const board = (await this.ctx.storage.get("board")) || { status: "closed", mode: "teacher", locked: true, objects: {} };
      const canParticipantEdit = info.role === "participant" && board.status === "open" && board.mode === "fullclass" && !board.locked;
      if (info.role !== "host" && !canParticipantEdit) {
        ws.send(JSON.stringify({ type: "error", payload: "目前白板為僅觀看模式" }));
        return;
      }
      board.objects = board.objects || {};
      const payload = data.payload || {};
      const id = String(payload.id || "");
      if (!id) return;

      if (data.type === "board_object_add") {
        const objectType = ["note", "text", "image"].includes(payload.type) ? payload.type : "note";

        const obj = {
          id,
          type: objectType,
          left: Number(payload.left) || 0,
          top: Number(payload.top) || 0,
          authorId: info.participantId,
          authorName: info.displayName,
          createdAt: Date.now(),
        };

        if (objectType === "image") {
          const src = String(payload.src || "");
          // 僅接受 data:image，並限制字串大小，避免單張圖片塞爆房間資料。
          if (!src.startsWith("data:image/") || src.length > 900000) {
            ws.send(JSON.stringify({ type: "error", payload: "圖片太大或格式不支援" }));
            return;
          }
          obj.src = src;
          obj.width = Math.max(60, Math.min(700, Number(payload.width) || 220));
          obj.height = Math.max(40, Math.min(700, Number(payload.height) || 160));
        } else {
          obj.text = String(payload.text || "").slice(0, 1500);
        }

        board.objects[id] = obj;
        await this.ctx.storage.put("board", board);
        await this.broadcast({ type: "board_object_add", payload: obj });
        return;
      }

      const existing = board.objects[id];
      if (!existing) return;
      if (info.role === "participant" && existing.authorId !== info.participantId) {
        ws.send(JSON.stringify({ type: "error", payload: "只能修改自己的白板物件" }));
        return;
      }
      if (data.type === "board_object_move") {
        existing.left = Number(payload.left) || 0;
        existing.top = Number(payload.top) || 0;
        await this.ctx.storage.put("board", board);
        await this.broadcast({ type: data.type, payload: { id, left: existing.left, top: existing.top } });
        return;
      }
      if (data.type === "board_object_update") {
        if (existing.type === "image") return;
        existing.text = String(payload.text || "").slice(0, 1500);
        await this.ctx.storage.put("board", board);
        await this.broadcast({ type: data.type, payload: { id, text: existing.text } });
        return;
      }
      if (data.type === "board_object_delete") {
        delete board.objects[id];
        await this.ctx.storage.put("board", board);
        await this.broadcast({ type: data.type, payload: { id } });
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
    await this.broadcast({ type: "board_presence", payload: this.boardMembers() });
  }

  async webSocketError() {
    await this.broadcast({ type: "participants", payload: this.participants() });
    await this.broadcast({ type: "board_presence", payload: this.boardMembers() });
  }
}
