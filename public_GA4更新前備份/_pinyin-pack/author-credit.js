/*
 * 台語教學網站
 * 網站介面、功能與教學整合設計／製作：張鈺聆
 * Copyright © 張鈺聆
 *
 * 「張鈺聆 製」係指本網站之介面設計、功能整合、互動設計與教學資源整合，
 * 不代表頁面中所有教材文字、課文、圖片、音檔、辭典資料或第三方素材均為作者原創。
 * 教材、課文、音檔、圖片、辭典資料及其他第三方素材之著作權，仍屬原權利人所有。
 */
(function () {
  var SITE_AUTHOR = '張鈺聆';
  var SITE_COPYRIGHT = '© 張鈺聆';

  function addMeta(name, content) {
    if (document.querySelector('meta[name="' + name + '"]')) return;
    var m = document.createElement('meta');
    m.setAttribute('name', name);
    m.setAttribute('content', content);
    (document.head || document.documentElement).appendChild(m);
  }

  function addCredit() {
    if (document.querySelector('.author-credit')) return;
    var style = document.createElement('style');
    style.textContent =
      '/*\n * 台語教學網站\n * 網站介面、功能與教學整合設計／製作：張鈺聆\n * Copyright © 張鈺聆\n */\n' +
      '.author-credit{position:fixed;right:12px;bottom:calc(10px + env(safe-area-inset-bottom));' +
      'font-family:"Noto Sans TC","PingFang TC","Microsoft JhengHei",sans-serif;font-size:12px;' +
      'line-height:1;letter-spacing:.04em;color:#5a5148;opacity:.5;z-index:50;pointer-events:none;' +
      'white-space:nowrap;text-shadow:0 1px 2px rgba(255,255,255,.75);}' +
      '@media(max-width:520px){.author-credit{font-size:10px;right:9px;bottom:calc(8px + env(safe-area-inset-bottom));}}';
    document.head.appendChild(style);

    var el = document.createElement('div');
    el.className = 'author-credit';
    el.setAttribute('aria-hidden', 'false');
    el.textContent = SITE_AUTHOR + ' 製';
    document.body.appendChild(el);
  }

  addMeta('author', SITE_AUTHOR);
  addMeta('copyright', SITE_COPYRIGHT);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addCredit);
  } else {
    addCredit();
  }
})();
