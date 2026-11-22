/*!
 * 鈺見台語｜大螢幕自動放大＋全螢幕
 * 網站介面、功能與教學整合設計／製作：張鈺聆　Copyright © 張鈺聆
 * 由 worker.js 自動加到每一頁。
 * - 螢幕寬度 1400px 以下（平板、手機、一般筆電）：完全不變。
 * - 越闊的螢幕，規頁照比例放大，上大 1.6 倍。
 * - 闊螢幕的左下角有「🔍 大小」「⛶ 全螢幕」細粒按鈕。
 * 某一頁無愛放大：佇 <body> 加 data-no-zoom，抑是 <meta name="yj-no-zoom">。
 */
(function () {
  if (window.__yjBig) return; window.__yjBig = true;
  if (window.top !== window.self) return;                       // 內嵌畫面免處理
  if (document.querySelector('meta[name="yj-no-zoom"]') || (document.body && document.body.hasAttribute('data-no-zoom'))) return;
  if (!('zoom' in document.documentElement.style)) return;

  var KEY = 'yjtg-zoom-v1';
  var BASE = 1400, MAX = 1.6, MIN_W_TOOLS = 1280;
  function mode() { try { return localStorage.getItem(KEY) || 'auto'; } catch (e) { return 'auto'; } }
  function setMode(m) { try { localStorage.setItem(KEY, m); } catch (e) {} }

  function scale() {
    if (mode() === 'off') return 1;
    var w = window.innerWidth;            // CSS zoom 袂改變 innerWidth
    if (w <= BASE) return 1;
    return Math.min(MAX, Math.round(w / BASE * 100) / 100);
  }
  var cur = 1;
  function apply() {
    var z = scale();
    if (z === cur) { tools(); return; }
    cur = z;
    document.documentElement.style.zoom = z === 1 ? '' : String(z);
    tools();
  }

  var box = null;
  function tools() {
    var realW = window.innerWidth;
    if (realW < MIN_W_TOOLS) { if (box) box.style.display = 'none'; return; }
    if (!box) {
      var st = document.createElement('style');
      st.textContent =
        '#yjBig{position:fixed;left:12px;bottom:12px;z-index:2147482000;display:flex;gap:6px;font-family:"Noto Sans TC","Microsoft JhengHei",sans-serif;opacity:.55;transition:opacity .2s}' +
        '#yjBig:hover,#yjBig:focus-within{opacity:1}' +
        '#yjBig button{font:inherit;font-size:13px;font-weight:800;border:1px solid rgba(37,78,71,.25);background:rgba(255,255,255,.92);color:#254E47;border-radius:999px;padding:6px 11px;cursor:pointer;box-shadow:0 3px 10px rgba(37,78,71,.12)}' +
        '#yjBig button:hover{background:#254E47;color:#fff}' +
        '@media print{#yjBig{display:none}}';
      document.head.appendChild(st);
      box = document.createElement('div'); box.id = 'yjBig'; box.className = 'no-emoji3d';
      box.innerHTML = '<button type="button" data-a="z"></button><button type="button" data-a="f"></button>';
      box.addEventListener('click', function (e) {
        var b = e.target.closest('button'); if (!b) return;
        if (b.dataset.a === 'z') { setMode(mode() === 'off' ? 'auto' : 'off'); apply(); }
        else {
          if (document.fullscreenElement) document.exitFullscreen && document.exitFullscreen();
          else document.documentElement.requestFullscreen && document.documentElement.requestFullscreen().catch(function () {});
        }
      });
      document.body.appendChild(box);
    }
    box.style.display = 'flex';
    box.children[0].textContent = mode() === 'off' ? '🔍 放大畫面' : '🔍 原本大小';
    box.children[0].title = mode() === 'off' ? '照螢幕闊度自動放大' : '恢復原本的大小';
    box.children[1].textContent = document.fullscreenElement ? '⛶ 離開全螢幕' : '⛶ 全螢幕';
  }

  var t = null;
  window.addEventListener('resize', function () { clearTimeout(t); t = setTimeout(apply, 120); });
  document.addEventListener('fullscreenchange', function () { setTimeout(apply, 60); });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply); else apply();
})();
