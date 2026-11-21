/* 鈺見台語 × 班級養成樂園：通關碼
   網站介面、功能與教學整合設計／製作：張鈺聆　Copyright © 張鈺聆. All rights reserved.
   學生完成活動 → 顯示通關碼 → 老師佇「班級養成樂園」輸入通關碼打卡。
   通關碼格式：活動代號＋座號－4 碼檢查碼，例：TS07-K3M2（當日有效，七工內會使登記）。 */
(function () {
  if (window.YJPass) return;
  var ACTS = {
    TL: { name: '台羅練功房', icon: '🎵' },
    TS: { name: '聽聲辨拼音', icon: '🎧' },
    DK: { name: '台語組句任務', icon: '🧩' },
    HY: { name: '形音義挑戰', icon: '🕵️' },
    TZ: { name: '台語挑戰區', icon: '⭐' }
  };
  var ABC = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  var SEAT_KEY = 'yjtg-pass-seat', TRACK_KEY = 'yjtg-pass-track-v1';

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
  function close() { var o = document.getElementById('yjpass'); if (o) o.remove(); }

  function award(act, detail) {
    var a = ACTS[act]; if (!a) return;
    css(); close();
    var o = document.createElement('div'); o.id = 'yjpass';
    document.body.appendChild(o);
    var seat = getSeat();
    if (!seat) return askSeat(o, act, detail);
    showCode(o, act, detail, seat);
  }
  function askSeat(o, act, detail) {
    var a = ACTS[act];
    o.innerHTML = '<div class="yp-box"><div class="yp-k">🎫 欲領通關碼</div><h3>' + a.icon + ' ' + a.name + '　完成！</h3>' +
      '<div class="yp-sub">先輸入你的座號，下擺就免閣輸入。</div>' +
      '<div class="yp-seat">座號 <input id="yp-in" type="number" min="1" max="99" inputmode="numeric"> 號</div>' +
      '<div class="yp-row"><button class="yp-gh" id="yp-x">先莫</button><button class="yp-pri" id="yp-ok">領通關碼 ➜</button></div></div>';
    var inp = o.querySelector('#yp-in'); setTimeout(function () { inp.focus(); }, 50);
    o.querySelector('#yp-x').onclick = close;
    function go() { var v = parseInt(inp.value, 10); if (!(v >= 1 && v <= 99)) { inp.style.borderColor = '#d9534f'; inp.focus(); return; } setSeat(v); showCode(o, act, detail, v); }
    o.querySelector('#yp-ok').onclick = go;
    inp.onkeydown = function (e) { if (e.key === 'Enter') go(); };
  }
  function showCode(o, act, detail, seat) {
    var a = ACTS[act], code = makeCode(act, seat), d = new Date();
    o.innerHTML = '<div class="yp-box"><div class="yp-k">🎫 通關碼</div><h3>' + a.icon + ' ' + a.name + '　完成！</h3>' +
      '<div class="yp-sub">' + (detail ? detail + '<br>' : '') + seat + ' 號・' + (d.getMonth() + 1) + '/' + d.getDate() + '</div>' +
      '<div class="yp-code">' + code + '</div>' +
      '<div class="yp-sub">共這組碼抄落來，交予老師打卡 ⭐</div>' +
      '<div class="yp-row"><button class="yp-gh" id="yp-seat">改座號</button><button class="yp-gh" id="yp-cp">📋 複製</button><button class="yp-pri" id="yp-x">好</button></div>' +
      '<div class="yp-note">通關碼七工內會使登記；仝一工閣玩，通關碼仝款。</div></div>';
    o.querySelector('#yp-x').onclick = close;
    o.querySelector('#yp-seat').onclick = function () { askSeat(o, act, detail); };
    o.querySelector('#yp-cp').onclick = function () {
      var b = this; try { navigator.clipboard.writeText(code).then(function () { b.textContent = '✅ 已複製'; }); } catch (e) { b.textContent = code; }
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
  window.YJPass = { award: award, track: track, makeCode: makeCode, ACTS: ACTS };
})();
