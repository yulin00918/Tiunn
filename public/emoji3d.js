/*!
 * 鈺見台語｜立體 emoji
 * 把網頁裡的 emoji 自動換成 Microsoft Fluent Emoji 3D 插圖（MIT 授權，圖檔在 /images/emoji3d/）。
 * 由 worker.js 自動加到每一頁，網頁本身不用改。
 * 某個元素不想被換：加上 class="no-emoji3d"
 */
(function () {
  if (window.__emoji3d) return; window.__emoji3d = true;
  var RE = new RegExp('(' + '\\u{1f469}\\u{fe0f}?\\u{200d}\\u{fe0f}?\\u{1f3eb}\\u{fe0f}?|\\u{1f415}\\u{fe0f}?\\u{200d}\\u{fe0f}?\\u{1f9ba}\\u{fe0f}?|\\u{1f3a1}\\u{fe0f}?|\\u{1f96c}\\u{fe0f}?|\\u{1f440}\\u{fe0f}?|\\u{2705}\\u{fe0f}?|\\u{1f4a1}\\u{fe0f}?|\\u{1f955}\\u{fe0f}?|\\u{1f50a}\\u{fe0f}?|\\u{1f4da}\\u{fe0f}?|\\u{23f1}\\u{fe0f}?|\\u{2b50}\\u{fe0f}?|\\u{1f389}\\u{fe0f}?|\\u{26a1}\\u{fe0f}?|\\u{23f0}\\u{fe0f}?|\\u{1f3c6}\\u{fe0f}?|\\u{1f50e}\\u{fe0f}?|\\u{1f33f}\\u{fe0f}?|\\u{1f442}\\u{fe0f}?|\\u{1f3a7}\\u{fe0f}?|\\u{1f524}\\u{fe0f}?|\\u{26a0}\\u{fe0f}?|\\u{1f44f}\\u{fe0f}?|\\u{1f3e0}\\u{fe0f}?|\\u{1f3b5}\\u{fe0f}?|\\u{1f4d6}\\u{fe0f}?|\\u{1f5f3}\\u{fe0f}?|\\u{1f95a}\\u{fe0f}?|\\u{1f52d}\\u{fe0f}?|\\u{1f420}\\u{fe0f}?|\\u{1f41f}\\u{fe0f}?|\\u{1f421}\\u{fe0f}?|\\u{1f990}\\u{fe0f}?|\\u{1f980}\\u{fe0f}?|\\u{1f419}\\u{fe0f}?|\\u{1f991}\\u{fe0f}?|\\u{1f99e}\\u{fe0f}?|\\u{1f422}\\u{fe0f}?|\\u{1f434}\\u{fe0f}?|\\u{1f988}\\u{fe0f}?|\\u{1f431}\\u{fe0f}?|\\u{1f436}\\u{fe0f}?|\\u{1f430}\\u{fe0f}?|\\u{1f439}\\u{fe0f}?|\\u{1f425}\\u{fe0f}?|\\u{1f98a}\\u{fe0f}?|\\u{1f43c}\\u{fe0f}?|\\u{1f427}\\u{fe0f}?|\\u{1f428}\\u{fe0f}?|\\u{1f984}\\u{fe0f}?|\\u{1f99a}\\u{fe0f}?|\\u{1f42f}\\u{fe0f}?|\\u{1f409}\\u{fe0f}?|\\u{1f432}\\u{fe0f}?|\\u{1f994}\\u{fe0f}?|\\u{1f41d}\\u{fe0f}?|\\u{1f426}\\u{fe0f}?|\\u{1f98c}\\u{fe0f}?|\\u{1f4e1}\\u{fe0f}?|\\u{1f335}\\u{fe0f}?|\\u{1f5fa}\\u{fe0f}?|\\u{1f381}\\u{fe0f}?|\\u{1f320}\\u{fe0f}?|\\u{1f9c3}\\u{fe0f}?|\\u{1f527}\\u{fe0f}?|\\u{1f305}\\u{fe0f}?|\\u{1f6f0}\\u{fe0f}?|\\u{1f364}\\u{fe0f}?|\\u{1f30a}\\u{fe0f}?|\\u{1f41a}\\u{fe0f}?|\\u{2693}\\u{fe0f}?|\\u{1f3f0}\\u{fe0f}?|\\u{1f3dd}\\u{fe0f}?|\\u{1f528}\\u{fe0f}?|\\u{26fa}\\u{fe0f}?|\\u{1f334}\\u{fe0f}?|\\u{1f3ea}\\u{fe0f}?|\\u{1f35c}\\u{fe0f}?|\\u{1f309}\\u{fe0f}?|\\u{1f3eb}\\u{fe0f}?|\\u{1f411}\\u{fe0f}?|\\u{26f2}\\u{fe0f}?|\\u{1f5fb}\\u{fe0f}?|\\u{1f5fc}\\u{fe0f}?|\\u{1f3df}\\u{fe0f}?|\\u{1f6a2}\\u{fe0f}?|\\u{1f386}\\u{fe0f}?|\\u{1f333}\\u{fe0f}?|\\u{1f4a7}\\u{fe0f}?|\\u{2728}\\u{fe0f}?|\\u{1f338}\\u{fe0f}?|\\u{1f98b}\\u{fe0f}?|\\u{1f344}\\u{fe0f}?|\\u{1f33b}\\u{fe0f}?|\\u{1f43f}\\u{fe0f}?|\\u{1f332}\\u{fe0f}?|\\u{1f989}\\u{fe0f}?|\\u{1f337}\\u{fe0f}?|\\u{1f9da}\\u{fe0f}?|\\u{1f319}\\u{fe0f}?|\\u{1f680}\\u{fe0f}?|\\u{26fd}\\u{fe0f}?|\\u{1f30d}\\u{fe0f}?|\\u{1f315}\\u{fe0f}?|\\u{2604}\\u{fe0f}?|\\u{1f48e}\\u{fe0f}?|\\u{1f534}\\u{fe0f}?|\\u{1f47e}\\u{fe0f}?|\\u{1fa90}\\u{fe0f}?|\\u{1f47d}\\u{fe0f}?|\\u{1f535}\\u{fe0f}?|\\u{1f6f8}\\u{fe0f}?|\\u{1f7e2}\\u{fe0f}?|\\u{1f995}\\u{fe0f}?|\\u{1f30c}\\u{fe0f}?|\\u{1f7e3}\\u{fe0f}?|\\u{1f52e}\\u{fe0f}?|\\u{1f3c5}\\u{fe0f}?|\\u{1f497}\\u{fe0f}?|\\u{1f9f8}\\u{fe0f}?|\\u{1f6cf}\\u{fe0f}?|\\u{1f380}\\u{fe0f}?|\\u{1f370}\\u{fe0f}?|\\u{1f3a0}\\u{fe0f}?|\\u{1f331}\\u{fe0f}?|\\u{1f31f}\\u{fe0f}?|\\u{1f501}\\u{fe0f}?|\\u{1f465}\\u{fe0f}?|\\u{1f9ea}\\u{fe0f}?|\\u{267b}\\u{fe0f}?|\\u{2600}\\u{fe0f}?|\\u{1f3e1}\\u{fe0f}?|\\u{2754}\\u{fe0f}?|\\u{1f360}\\u{fe0f}?|\\u{1f981}\\u{fe0f}?|\\u{1f406}\\u{fe0f}?|\\u{1f412}\\u{fe0f}?|\\u{1f418}\\u{fe0f}?|\\u{1f525}\\u{fe0f}?|\\u{2b55}\\u{fe0f}?|\\u{274c}\\u{fe0f}?|\\u{1f4aa}\\u{fe0f}?|\\u{1f4be}\\u{fe0f}?|\\u{1f5d1}\\u{fe0f}?|\\u{1f451}\\u{fe0f}?|\\u{1f4dd}\\u{fe0f}?|\\u{1f9ed}\\u{fe0f}?|\\u{1f4bc}\\u{fe0f}?|\\u{1f4ac}\\u{fe0f}?|\\u{1f3ae}\\u{fe0f}?|\\u{1f4ca}\\u{fe0f}?|\\u{1f3b2}\\u{fe0f}?|\\u{1f500}\\u{fe0f}?|\\u{1f455}\\u{fe0f}?|\\u{1f3af}\\u{fe0f}?|\\u{1f4cb}\\u{fe0f}?|\\u{1f5a8}\\u{fe0f}?|\\u{270f}\\u{fe0f}?|\\u{1f522}\\u{fe0f}?|\\u{1f5bc}\\u{fe0f}?|\\u{2615}\\u{fe0f}?|\\u{26bd}\\u{fe0f}?|\\u{1f3c0}\\u{fe0f}?|\\u{1f6b2}\\u{fe0f}?|\\u{1f697}\\u{fe0f}?|\\u{2708}\\u{fe0f}?|\\u{1f438}\\u{fe0f}?|\\u{1f34e}\\u{fe0f}?|\\u{1f34c}\\u{fe0f}?|\\u{1f349}\\u{fe0f}?|\\u{1f347}\\u{fe0f}?|\\u{1f353}\\u{fe0f}?|\\u{1f5e3}\\u{fe0f}?|\\u{1f517}\\u{fe0f}?|\\u{1fa91}\\u{fe0f}?|\\u{1f4c2}\\u{fe0f}?|\\u{1f575}\\u{fe0f}?|\\u{1f4ad}\\u{fe0f}?|\\u{1f9e9}\\u{fe0f}?|\\u{1f50d}\\u{fe0f}?|\\u{1f441}\\u{fe0f}?|\\u{1f38b}\\u{fe0f}?|\\u{1f3a8}\\u{fe0f}?|\\u{1f4d5}\\u{fe0f}?|\\u{1f4d8}\\u{fe0f}?|\\u{1f4d7}\\u{fe0f}?|\\u{1f68c}\\u{fe0f}?|\\u{1f6cd}\\u{fe0f}?|\\u{1f326}\\u{fe0f}?|\\u{1f308}\\u{fe0f}?|\\u{1f336}\\u{fe0f}?|\\u{2753}\\u{fe0f}?|\\u{1f9e0}\\u{fe0f}?|\\u{2699}\\u{fe0f}?|\\u{1f9f9}\\u{fe0f}?|\\u{1f504}\\u{fe0f}?|\\u{1f464}\\u{fe0f}?|\\u{1f4e6}\\u{fe0f}?|\\u{1f3c3}\\u{fe0f}?|\\u{1f550}\\u{fe0f}?|\\u{1f512}\\u{fe0f}?|\\u{1f513}\\u{fe0f}?|\\u{23f3}\\u{fe0f}?|\\u{1f4e5}\\u{fe0f}?|\\u{1f9f0}\\u{fe0f}?|\\u{1f4c7}\\u{fe0f}?|\\u{1f4c4}\\u{fe0f}?|\\u{1f9e7}\\u{fe0f}?|\\u{1f91d}\\u{fe0f}?|\\u{1f9cb}\\u{fe0f}?|\\u{1f9fe}\\u{fe0f}?|\\u{1f9fa}\\u{fe0f}?|\\u{2709}\\u{fe0f}?|\\u{1f916}\\u{fe0f}?|\\u{1f415}\\u{fe0f}?|\\u{1f49a}\\u{fe0f}?|\\u{1f3ca}\\u{fe0f}?|\\u{1f32a}\\u{fe0f}?|\\u{1f300}\\u{fe0f}?|\\u{1f604}\\u{fe0f}?|\\u{1f35a}\\u{fe0f}?|\\u{1f3ad}\\u{fe0f}?|\\u{1f3aa}\\u{fe0f}?|\\u{1f469}\\u{fe0f}?|\\u{1f4d2}\\u{fe0f}?|\\u{1f474}\\u{fe0f}?|\\u{1f361}\\u{fe0f}?|\\u{1f36c}\\u{fe0f}?|\\u{1f9e8}\\u{fe0f}?|\\u{1f96b}\\u{fe0f}?|\\u{1f4f1}\\u{fe0f}?|\\u{1f327}\\u{fe0f}?|\\u{1f6e0}\\u{fe0f}?|\\u{1f6e1}\\u{fe0f}?|\\u{1f3a4}\\u{fe0f}?|\\u{1f4b0}\\u{fe0f}?|\\u{1f3ac}\\u{fe0f}?|\\u{270d}\\u{fe0f}?|\\u{1f5a5}\\u{fe0f}?|\\u{1f449}\\u{fe0f}?|\\u{1f3b4}\\u{fe0f}?|\\u{1f526}\\u{fe0f}?|\\u{1f6ab}\\u{fe0f}?|\\u{2696}\\u{fe0f}?|\\u{2764}\\u{fe0f}?|\\u{1f94b}\\u{fe0f}?|\\u{1faa8}\\u{fe0f}?|\\u{1fab5}\\u{fe0f}?|\\u{1f399}\\u{fe0f}?|\\u{1f444}\\u{fe0f}?|\\u{1f445}\\u{fe0f}?|\\u{1f9b7}\\u{fe0f}?|\\u{231b}\\u{fe0f}?|\\u{1f38a}\\u{fe0f}?|\\u{1f9ba}\\u{fe0f}?|\\u{1f9ae}\\u{fe0f}?|\\u{1f9f3}\\u{fe0f}?|\\u{1f49b}\\u{fe0f}?|\\u{1f3c1}\\u{fe0f}?|\\u{1f33e}\\u{fe0f}?|\\u{1f44b}\\u{fe0f}?|\\u{1faf6}\\u{fe0f}?|\\u{1f642}\\u{fe0f}?|\\u{2702}\\u{fe0f}?|\\u{1f4cd}\\u{fe0f}?|\\u{1f5d3}\\u{fe0f}?|\\u{1f3e8}\\u{fe0f}?|\\u{1f686}\\u{fe0f}?|\\u{1f9d2}\\u{fe0f}?|\\u{1f475}\\u{fe0f}?|\\u{1f30f}\\u{fe0f}?|\\u{1f914}\\u{fe0f}?|\\u{1f44d}\\u{fe0f}?|\\u{1f4f7}\\u{fe0f}?|\\u{1f6d2}\\u{fe0f}?|\\u{1f304}\\u{fe0f}?|\\u{1f359}\\u{fe0f}?|\\u{1f392}\\u{fe0f}?' + ')', 'gu');
  var SKIP = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, INPUT: 1, OPTION: 1, SELECT: 1, TITLE: 1, NOSCRIPT: 1, CODE: 1, PRE: 1, svg: 1, SVG: 1, CANVAS: 1 };
  var css = document.createElement('style');
  css.textContent = 'img.e3d{display:inline-block;width:1.2em;height:1.2em;vertical-align:-0.22em;object-fit:contain;margin:0 .03em;pointer-events:none;-webkit-user-drag:none;user-select:none}';
  (document.head || document.documentElement).appendChild(css);

  var made = new WeakMap(); // 文字節點 → 它旁邊插入的圖

  function code(s) {
    var out = [];
    for (var ch of s.replace(/️/g, '')) out.push(ch.codePointAt(0).toString(16));
    return out.join('-');
  }
  function skip(node) {
    for (var p = node.parentNode; p && p !== document.body; p = p.parentNode) {
      if (p.nodeType !== 1) continue;
      if (SKIP[p.nodeName] || p.isContentEditable || (p.classList && p.classList.contains('no-emoji3d'))) return true;
    }
    return !node.parentNode;
  }
  function clear(t) {
    var list = made.get(t);
    if (list) { list.forEach(function (n) { if (n.parentNode) n.parentNode.removeChild(n); }); made.delete(t); }
  }
  // 原本的文字節點保留在原位（React 之後還會更新它），只把 emoji 拿掉，在它前面插入「圖片＋文字」。
  function fix(t) {
    var s = t.data;
    RE.lastIndex = 0;
    if (!RE.test(s) || skip(t)) return;
    clear(t);
    RE.lastIndex = 0;
    var frag = document.createDocumentFragment(), list = [], last = 0, m;
    while ((m = RE.exec(s))) {
      if (m.index > last) { var tx = document.createTextNode(s.slice(last, m.index)); frag.appendChild(tx); list.push(tx); }
      var img = document.createElement('img');
      img.className = 'e3d'; img.alt = m[0]; img.draggable = false; img.decoding = 'async';
      img.src = '/images/emoji3d/' + code(m[0]) + '.webp';
      (function (img, raw) { img.onerror = function () { img.replaceWith(document.createTextNode(raw)); }; })(img, m[0]);
      frag.appendChild(img); list.push(img);
      last = m.index + m[0].length;
    }
    t.parentNode.insertBefore(frag, t);
    list.expect = s.slice(last);
    t.data = list.expect;
    made.set(t, list);
  }
  function scan(root) {
    if (root.nodeType === 3) return fix(root);
    if (root.nodeType !== 1 || SKIP[root.nodeName]) return;
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), n, all = [];
    while ((n = w.nextNode())) all.push(n);
    all.forEach(fix);
  }
  function start() {
    scan(document.body);
    new MutationObserver(function (muts) {
      muts.forEach(function (m) {
        if (m.type === 'characterData') {
          var l = made.get(m.target);
          if (l && m.target.data === l.expect) return; // 自己剛改的，不用理
          clear(m.target); fix(m.target);
        }
        else {
          m.removedNodes.forEach(function (n) { if (n.nodeType === 3) clear(n); });
          m.addedNodes.forEach(scan);
        }
      });
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
  }
  document.body ? start() : document.addEventListener('DOMContentLoaded', start);
})();
