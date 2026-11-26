/* 鈺見台語 × 班級養成樂園：通關碼
   網站介面、功能與教學整合設計／製作：張鈺聆　Copyright © 張鈺聆. All rights reserved.
   學生完成活動 → 顯示通關碼 → 老師佇「班級養成樂園」輸入通關碼打卡。
   通關碼格式：活動代號＋座號－4 碼檢查碼，例：TS07-K3M2（當日有效，七工內會使登記）。 */
(function () {
  if (window.YJPass) return;
  var ACTS = {
    TL: { name: '台羅練功房', icon: '🎵' },
    TM: { name: '台羅練功房・20 個', icon: '🎵' },
    TN: { name: '台羅練功房・30 個', icon: '🎵' },
    TA: { name: '聽聲辨拼音 Lv.3', icon: '🎧' },
    TB: { name: '聽聲辨拼音 Lv.6', icon: '🎧' },
    TS: { name: '聽聲辨拼音 Lv.9', icon: '🎧' },
    DK: { name: '台語組句任務', icon: '🧩' },
    DL: { name: '台語組句任務・10 句', icon: '🧩' },
    HY: { name: '形音義挑戰', icon: '🕵️' },
    HZ: { name: '形音義挑戰・90%', icon: '🕵️' },
    TZ: { name: '台語挑戰區', icon: '⭐' },
    ZA: { name: '台語挑戰區・完成 1 个', icon: '⭐' },
    ZB: { name: '台語挑戰區・完成 3 个', icon: '⭐' },
    ZC: { name: '台語挑戰區・完成 6 个', icon: '⭐' },
    ZD: { name: '台語挑戰區・進階', icon: '🚀' },
    ZE: { name: '台語挑戰區・BOSS', icon: '🔥' },
    KW: { name: '課文解碼站', icon: '🔎' },
    KX: { name: '課文解碼站・100%', icon: '🔎' },
    SD: { name: '台語聲調大挑戰・第二關', icon: '🎼' },
    SE: { name: '台語聲調大挑戰・第一關', icon: '🎼' },
    LG: { name: '聽聲練功坊', icon: '🥋' },
    LH: { name: '聽聲練功坊・90%', icon: '🥋' },
    PK: { name: '排句仔・入門', icon: '🧱' },
    PL: { name: '排句仔・進階', icon: '🧱' }
  };
  var ABC = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  var SEAT_KEY = 'yjtg-pass-seat', TRACK_KEY = 'yjtg-pass-track-v1', GOT_KEY = 'yjtg-pass-got-v1';
  function pagePath() { try { return decodeURIComponent(location.pathname).replace(/\.html$/, ''); } catch (e) { return location.pathname; } }

  function ymd(d) { d = d || new Date(); return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate(); }
  function fnv(str) { var h = 2166136261; for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; } return h >>> 0; }
  function check(act, seat, day) {
    var h = fnv(act + '|' + seat + '|' + day + '|yjtg-pass-v1'), s = '';
    for (var i = 0; i < 4; i++) { s += ABC[h % 32]; h = Math.floor(h / 32); }
    return s;
  }
  function makeCode(act, seat, day) { var n = String(seat).padStart(2, '0'); return act + n + '-' + check(act, n, day || ymd()); }
  function getSeat() { try { var v = parseInt(localStorage.getItem(SEAT_KEY), 10); return v >= 1 && v <= 99 ? v : null; } catch (e) { return null; } }
  function setSeat(v) { try { localStorage.setItem(SEAT_KEY, String(v)); } catch (e) {} }

  function css() {
    if (document.getElementById('yjpass-css')) return;
    var st = document.createElement('style'); st.id = 'yjpass-css';
    st.textContent =
      '#yjpass{position:fixed;inset:0;z-index:2147483000;background:rgba(20,38,35,.55);display:flex;align-items:center;justify-content:center;padding:18px;font-family:"Noto Sans TC","Microsoft JhengHei",sans-serif}' +
      '#yjpass .yp-box{background:#FAF8F2;border-radius:22px;max-width:380px;width:100%;padding:22px 20px 18px;text-align:center;box-shadow:0 18px 50px rgba(0,0,0,.28);border:3px solid #F4C65D;animation:yppop .35s ease}' +
      '@keyframes yppop{from{transform:scale(.85);opacity:0}to{transform:scale(1);opacity:1}}' +
      '#yjpass .yp-k{font-size:13px;font-weight:900;letter-spacing:.12em;color:#B15F2A}' +
      '#yjpass h3{margin:6px 0 4px;font-size:21px;color:#254E47}' +
      '#yjpass .yp-sub{font-size:14px;color:#5b6b66;line-height:1.6}' +
      '#yjpass .yp-code{margin:14px auto 8px;font-size:34px;font-weight:900;letter-spacing:.08em;color:#254E47;background:#fff;border:2px dashed #55A99C;border-radius:14px;padding:12px 8px;font-family:Consolas,"Courier New",monospace;user-select:all}' +
      '#yjpass .yp-seat{display:flex;gap:8px;justify-content:center;align-items:center;margin:14px 0 6px;font-weight:800;color:#254E47}' +
      '#yjpass input{width:90px;font-size:22px;text-align:center;padding:8px;border:2px solid #55A99C;border-radius:12px;font-weight:800}' +
      '#yjpass .yp-row{display:flex;gap:8px;justify-content:center;margin-top:14px;flex-wrap:wrap}' +
      '#yjpass button{font:inherit;font-weight:800;border:0;border-radius:999px;padding:10px 18px;cursor:pointer;min-height:44px}' +
      '#yjpass .yp-pri{background:#E88B4A;color:#fff}' +
      '#yjpass .yp-gh{background:#e7efec;color:#254E47}' +
      '#yjpass .yp-note{font-size:12.5px;color:#7a8783;margin-top:10px;line-height:1.6}';
    document.head.appendChild(st);
  }
  function close() { var o = document.getElementById('yjpass'); if (o) o.remove(); cur = null; recallBtn(); }

  /* 記錄這台裝置今仔日領過的通關碼（換平板就看無） */
  function getGot() { try { return JSON.parse(localStorage.getItem(GOT_KEY)) || []; } catch (e) { return []; } }
  function remember(act, seat, detail) {
    var day = ymd(), list = getGot().filter(function (r) { return r.day >= ymd(new Date(Date.now() - 14 * 864e5)); });
    list = list.filter(function (r) { return !(r.act === act && r.seat === seat && r.day === day); });
    list.push({ act: act, seat: seat, day: day, path: pagePath(), detail: detail || '' });
    try { localStorage.setItem(GOT_KEY, JSON.stringify(list.slice(-60))); } catch (e) {}
  }
  function todayHere() {
    var day = ymd(), p = pagePath();
    return getGot().filter(function (r) { return r.day === day && r.path === p && ACTS[r.act]; });
  }
  function recall() {
    var list = todayHere(); if (!list.length) return;
    css(); var old = document.getElementById('yjpass'); if (old) old.remove(); cur = null;
    var o = document.createElement('div'); o.id = 'yjpass'; document.body.appendChild(o);
    var d = new Date();
    o.innerHTML = '<div class="yp-box"><div class="yp-k">🎫 今仔日的通關碼</div><h3>' + (d.getMonth() + 1) + '/' + d.getDate() + '　這台裝置領過的</h3>' +
      list.slice().reverse().map(function (r) {
        var a = ACTS[r.act];
        return '<div class="yp-sub" style="margin-top:12px">' + a.icon + ' ' + a.name + '｜' + r.seat + ' 號' + (r.detail ? '<br>' + r.detail : '') + '</div>' +
          '<div class="yp-code" style="font-size:28px;margin:6px auto 4px">' + makeCode(r.act, r.seat) + '</div>';
      }).join('') +
      '<div class="yp-row"><button class="yp-pri" id="yp-x">好</button></div>' +
      '<div class="yp-note">仝一工、仝一个座號，通關碼攏仝款。</div></div>';
    o.querySelector('#yp-x').onclick = close;
    o.addEventListener('click', function (e) { if (e.target === o) close(); });
  }
  function recallBtn() {
    if (!document.body) return;
    var list = todayHere(), b = document.getElementById('yjpassBtn');
    if (!list.length) { if (b) b.remove(); return; }
    if (!b) {
      b = document.createElement('button'); b.id = 'yjpassBtn'; b.type = 'button';
      b.style.cssText = 'position:fixed;left:12px;z-index:2147481000;font:800 14px "Noto Sans TC","Microsoft JhengHei",sans-serif;border:2px solid #F4C65D;background:#FFF8E6;color:#8A4B17;border-radius:999px;padding:8px 14px;min-height:42px;cursor:pointer;box-shadow:0 4px 12px rgba(177,95,42,.18)';
      b.onclick = recall; document.body.appendChild(b);
    }
    b.style.bottom = (document.getElementById('yjBig') && document.getElementById('yjBig').style.display !== 'none') ? '58px' : '12px';
    b.textContent = '🎫 閣看通關碼' + (list.length > 1 ? '（' + list.length + '）' : '');
  }

  var cur = null;   // 這馬視窗內底的通關碼 [[act, detail], ...]
  function award(act, detail) {
    var items = (Array.isArray(act) ? act : [[act, detail]]).filter(function (i) { return ACTS[i[0]]; });
    if (!items.length) return;
    css();
    var o = document.getElementById('yjpass');
    if (o && cur) items.forEach(function (i) { if (!cur.some(function (c) { return c[0] === i[0]; })) cur.push(i); });
    else { close(); o = document.createElement('div'); o.id = 'yjpass'; document.body.appendChild(o); cur = items.slice(); }
    var seat = getSeat();
    if (!seat) return askSeat(o);
    showCodes(o, seat);
  }
  function askSeat(o) {
    var a = ACTS[cur[0][0]];
    o.innerHTML = '<div class="yp-box"><div class="yp-k">🎫 欲領通關碼</div><h3>' + a.icon + ' ' + a.name + '　完成！</h3>' +
      '<div class="yp-sub">先輸入你的座號，下擺就免閣輸入。</div>' +
      '<div class="yp-seat">座號 <input id="yp-in" type="number" min="1" max="99" inputmode="numeric"> 號</div>' +
      '<div class="yp-row"><button class="yp-gh" id="yp-x">先莫</button><button class="yp-pri" id="yp-ok">領通關碼 ➜</button></div></div>';
    var inp = o.querySelector('#yp-in'); setTimeout(function () { inp.focus(); }, 50);
    o.querySelector('#yp-x').onclick = close;
    function go() { var v = parseInt(inp.value, 10); if (!(v >= 1 && v <= 99)) { inp.style.borderColor = '#d9534f'; inp.focus(); return; } setSeat(v); showCodes(o, v); }
    o.querySelector('#yp-ok').onclick = go;
    inp.onkeydown = function (e) { if (e.key === 'Enter') go(); };
  }
  function showCodes(o, seat) {
    var d = new Date(), many = cur.length > 1, codes = [];
    var body = cur.map(function (i) {
      var a = ACTS[i[0]], code = makeCode(i[0], seat); codes.push(code);
      remember(i[0], seat, i[1]);
      return many
        ? '<div class="yp-sub" style="margin-top:12px">' + a.icon + ' <b>' + a.name + '</b>' + (i[1] ? '<br>' + i[1] : '') + '</div><div class="yp-code" style="font-size:28px;margin:6px auto 4px">' + code + '</div>'
        : '<div class="yp-sub">' + (i[1] ? i[1] + '<br>' : '') + seat + ' 號・' + (d.getMonth() + 1) + '/' + d.getDate() + '</div><div class="yp-code">' + code + '</div>';
    }).join('');
    var a0 = ACTS[cur[0][0]];
    o.innerHTML = '<div class="yp-box" style="max-height:92vh;overflow:auto"><div class="yp-k">🎫 通關碼' + (many ? '　×' + cur.length : '') + '</div>' +
      (many ? '<h3>一擺提著 ' + cur.length + ' 組通關碼！</h3><div class="yp-sub">' + seat + ' 號・' + (d.getMonth() + 1) + '/' + d.getDate() + '</div>'
            : '<h3>' + a0.icon + ' ' + a0.name + '　完成！</h3>') +
      body +
      '<div class="yp-sub">' + (many ? '每一組攏愛抄落來，交予老師打卡 ⭐' : '共這組碼抄落來，交予老師打卡 ⭐') + '</div>' +
      '<div class="yp-row"><button class="yp-gh" id="yp-seat">改座號</button><button class="yp-gh" id="yp-cp">📋 複製</button><button class="yp-pri" id="yp-x">好</button></div>' +
      '<div class="yp-note">通關碼七工內會使登記；仝一工閣玩，通關碼仝款。</div></div>';
    o.querySelector('#yp-x').onclick = close;
    o.querySelector('#yp-seat').onclick = function () { askSeat(o); };
    o.querySelector('#yp-cp').onclick = function () {
      var b = this, t = codes.join('\n'); try { navigator.clipboard.writeText(t).then(function () { b.textContent = '✅ 已複製'; }); } catch (e) { b.textContent = t; }
    };
  }
  /* 累積型任務：今仔日完成 need 个無仝的項目才發通關碼 */
  function track(act, key, need, detail) {
    var day = ymd(), d;
    try { d = JSON.parse(localStorage.getItem(TRACK_KEY)) || {}; } catch (e) { d = {}; }
    var r = d[act]; if (!r || r.day !== day) r = d[act] = { day: day, items: [], awarded: false };
    if (key && r.items.indexOf(key) < 0) r.items.push(key);
    var reached = r.items.length >= need, first = reached && !r.awarded;
    if (first) r.awarded = true;
    try { localStorage.setItem(TRACK_KEY, JSON.stringify(d)); } catch (e) {}
    if (first) award(act, detail);
    return { count: Math.min(r.items.length, need), need: need, done: reached };
  }
  /* 台語挑戰區：今仔日完成幾个基礎遊戲（1、3、6 个各一組通關碼） */
  var TZ_KEY = 'yjtg-tz-today-v1', TZ_STEPS = [[1, 'ZA'], [3, 'ZB'], [6, 'ZC']];
  function tzRead() { var d; try { d = JSON.parse(localStorage.getItem(TZ_KEY)) || {}; } catch (e) { d = {}; } if (d.day !== ymd()) d = { day: ymd(), games: {}, done: [] }; return d; }
  function tzGame(game, item, goal) {
    var d = tzRead(), g = d.games[game] || (d.games[game] = []);
    if (g.indexOf(String(item)) < 0) g.push(String(item));
    var newly = g.length >= goal && d.done.indexOf(game) < 0;
    if (newly) d.done.push(game);
    try { localStorage.setItem(TZ_KEY, JSON.stringify(d)); } catch (e) {}
    if (newly) TZ_STEPS.forEach(function (s) { if (d.done.length === s[0]) award(s[1], '今仔日完成 ' + s[0] + ' 个遊戲（' + game + '）'); });
    return d.done.length;
  }
  function tzCount() { return tzRead().done.length; }
  window.YJPass = { award: award, track: track, makeCode: makeCode, ACTS: ACTS, recall: recall, tzGame: tzGame, tzCount: tzCount };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { setTimeout(recallBtn, 300); });
  else setTimeout(recallBtn, 300);
})();
