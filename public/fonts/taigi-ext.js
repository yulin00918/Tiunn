/*
 * 台語教學網站｜特殊漢字備援字型（豆腐烏 23.11 Bold）
 * 網站介面、功能與教學整合設計／製作：張鈺聆
 *
 * 只讓 68 個擴充區漢字使用豆腐烏，其他文字維持各頁原本的黑體與字重。
 * 1. 宣告 @font-face 'TaigiExt'（unicode-range 限定 68 字）。
 * 2. 載入 Google Fonts「Noto Sans TC」的頁面：在同名字型家族補上這 68 字的字形，
 *    頁面行內樣式不必修改。
 * 3. 頁面 <style> 規則中的 font-family：前面補上 'TaigiExt'。
 * 字型檔路徑依本檔位置自動計算，任何層級的頁面都能使用。
 */
(function () {
  if (window.__taigiExtLoaded) return;
  window.__taigiExtLoaded = true;

  var RANGE = 'U+3502,U+3909,U+39CC,U+39CE,U+39D2,U+39E3,U+39FB,U+3A02,U+3A11,U+3A28,U+3A3B,U+3D18,U+3D19,U+3F4E,U+3F80,U+4010,U+4180,U+4599,U+45B3,U+463C,U+4821,U+4ACC,U+20547,U+207A9,U+207AD,U+20895,U+20BD7,U+21883,U+21CDE,U+22AB1,U+22BFE,U+22CB8,U+22F0C,U+23073,U+236EE,U+23EF8,U+241AC,U+24259,U+24C8D,U+24D83,U+24EAA,U+25349,U+25435,U+25C14,U+25D0A,U+26293,U+26706,U+2725F,U+27B99,U+27FEC,U+280BE,U+280BF,U+28468,U+2947E,U+296A8,U+296E9,U+29D71,U+29E19,U+2A04E,U+2A41E,U+2A736,U+2B74F,U+2B75B,U+2B77A,U+2B77B,U+2B7BC,U+2B7C2,U+2C9B0';

  var me = document.currentScript && document.currentScript.src;
  var fontUrl = me ? me.replace(/[^\/]*$/, 'TauhuOo23.11-Bold.woff2') : 'fonts/TauhuOo23.11-Bold.woff2';
  var face = function (family) {
    return '@font-face{font-family:' + family + ';font-weight:100 900;font-display:swap;' +
      'src:url("' + fontUrl + '") format("woff2");unicode-range:' + RANGE + ';}';
  };

  var base = document.createElement('style');
  base.setAttribute('data-taigi-ext', 'base');
  base.textContent = face("'TaigiExt'");
  (document.head || document.documentElement).appendChild(base);

  // 只在網頁本身已從 Google Fonts 載入 Noto Sans TC 時才補同名字形，
  // 避免遮蔽使用者電腦本機安裝的 Noto Sans TC。
  var notoDone = false;
  function addNotoAlias() {
    if (notoDone) return;
    var links = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
    for (var i = 0; i < links.length; i++) {
      if (/Noto\+Sans\+TC/i.test(links[i].href)) {
        var s = document.createElement('style');
        s.setAttribute('data-taigi-ext', 'noto');
        s.textContent = face("'Noto Sans TC'");
        document.head.appendChild(s);
        notoDone = true;
        return;
      }
    }
  }

  // 頁面 <style> 內的 font-family 前面補上 TaigiExt（同源樣式表才可讀寫）。
  function patchRules(rules) {
    for (var i = 0; i < rules.length; i++) {
      var r = rules[i];
      var st = r.style;
      if (st && st.fontFamily && !/TaigiExt/.test(st.fontFamily) && !/^(inherit|initial|unset|revert)$/i.test(st.fontFamily.trim())) {
        var pri = st.getPropertyPriority('font-family');
        st.setProperty('font-family', "'TaigiExt', " + st.fontFamily, pri);
      }
      if (r.cssRules && r.cssRules.length) patchRules(r.cssRules);
    }
  }
  function patchSheets() {
    var sheets = document.styleSheets;
    for (var i = 0; i < sheets.length; i++) {
      var owner = sheets[i].ownerNode;
      if (owner && owner.getAttribute && owner.getAttribute('data-taigi-ext')) continue;
      try { patchRules(sheets[i].cssRules); } catch (e) { /* 跨網域樣式表無法讀取，略過 */ }
    }
  }

  function run() { addNotoAlias(); patchSheets(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
  window.addEventListener('load', run);
})();
