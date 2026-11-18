/*!
 * 鈺見台語｜台羅 ↔ 方音符號 對照表（可隨時叫出的面板）
 * 用法：在任何頁面 </body> 前加一行
 *   <script src="/pinyin-chart.js"></script>
 * 預設為「側邊面板」：從右邊滑出（窄螢幕從下方滑出），不遮罩，課文照樣能看能點。
 * 想改回置中彈窗：<script src="/pinyin-chart.js" data-mode="modal"></script>
 * 不要右下角浮動按鈕：加上 data-button="off"
 * 用自己的按鈕叫出：TaigiChart.open() / close() / toggle() / show('聲調')
 */
(function () {
  if (window.TaigiChart) return;

  var C = { green: '#254E47', cream: '#FAF8F2', orange: '#E88B4A', amber: '#F4C65D', teal: '#55A99C' };

  // ---------- 資料 ----------
  var INITIALS = [
    { group: '雙唇音', items: [['p', 'ㄅ', '比 pí'], ['ph', 'ㄆ', '皮 phuê'], ['b', 'ㆠ', '馬 bé'], ['m', 'ㄇ', '毛 mn̂g']] },
    { group: '舌尖音', items: [['t', 'ㄉ', '茶 tê'], ['th', 'ㄊ', '天 thinn'], ['n', 'ㄋ', '年 nî'], ['l', 'ㄌ', '路 lōo']] },
    { group: '舌根音', items: [['k', 'ㄍ', '歌 kua'], ['kh', 'ㄎ', '去 khì'], ['g', 'ㆣ', '牛 gû'], ['ng', 'ㄫ', '雅 ngá']] },
    { group: '喉音', items: [['h', 'ㄏ', '火 hué']] },
    { group: '齒音', note: '後面接 i 時換一組符號', items: [
      ['ts', 'ㄗ／ㄐ', '早 tsá／酒 tsiú'], ['tsh', 'ㄘ／ㄑ', '草 tsháu／手 tshiú'],
      ['s', 'ㄙ／ㄒ', '山 suann／死 sí'], ['j', 'ㆡ／ㆢ', '字 jī／入 ji̍p']] }
  ];

  var FINALS = [
    { group: '基本母音', items: [['a', 'ㄚ'], ['i', 'ㄧ'], ['u', 'ㄨ'], ['e', 'ㆤ'], ['o', 'ㄜ'], ['oo', 'ㆦ']] },
    { group: '鼻化韻 -nn', items: [['ann', 'ㆩ'], ['inn', 'ㆪ'], ['unn', 'ㆫ'], ['enn', 'ㆥ'], ['onn', 'ㆧ']] },
    { group: '成音節鼻音', items: [['m', 'ㆬ'], ['ng', 'ㆭ']] },
    { group: '鼻音韻尾', items: [['am', 'ㆰ'], ['om', 'ㆱ'], ['an', 'ㄢ'], ['ang', 'ㄤ'], ['ong', 'ㆲ'], ['in', 'ㄧㄣ'], ['un', 'ㄨㄣ'], ['ing', 'ㄧㄥ']] },
    { group: '複合母音', items: [['ai', 'ㄞ'], ['au', 'ㄠ'], ['ia', 'ㄧㄚ'], ['ua', 'ㄨㄚ'], ['ue', 'ㄨㆤ'], ['ui', 'ㄨㄧ'], ['io', 'ㄧㄜ'], ['iu', 'ㄧㄨ']] },
    { group: '入聲韻尾', items: [['-p', 'ㆴ'], ['-t', 'ㆵ'], ['-k', 'ㆶ'], ['-h', 'ㆷ']] }
  ];

  var TONES = [
    ['1', 'a', '（不標）', '獅 sai'], ['2', 'á', 'ˋ', '虎 hóo'], ['3', 'à', '˪', '豹 pà'],
    ['4', 'ah', '（不標）', '鴨 ah'], ['5', 'â', 'ˊ', '猴 kâu'], ['7', 'ā', '˫', '象 tshiūnn'],
    ['8', 'a̍h', '˙', '鹿 lo̍k']
  ];

  var EXAMPLES = [
    ['台灣', 'Tâi-uân', 'ㄉㄞˊ ㄨㄢˊ'], ['食飯', 'tsia̍h-pn̄g', 'ㄐㄧㄚㆷ˙ ㄅㆭ˫'],
    ['媠', 'suí', 'ㄙㄨㄧˋ'], ['烏', 'oo', 'ㆦ'], ['阿母', 'a-bú', 'ㄚ ㆠㄨˋ']
  ];

  // ---------- 設定 ----------
  var script = document.currentScript;
  var attr = function (k) { return script ? script.getAttribute(k) : null; };
  var MODE = attr('data-mode') === 'modal' ? 'modal' : 'side';
  var SHOW_BTN = attr('data-button') !== 'off';

  // ---------- 樣式 ----------
  var css = '\
:host{all:initial}\
*{box-sizing:border-box;font-family:"Noto Sans TC","PingFang TC","Microsoft JhengHei",sans-serif}\
.fab{position:fixed;right:18px;bottom:calc(42px + env(safe-area-inset-bottom));z-index:2147483000;border:0;border-radius:999px;padding:12px 18px;background:' + C.green + ';color:' + C.cream + ';font-size:16px;font-weight:700;box-shadow:0 6px 18px rgba(0,0,0,.25);cursor:pointer}\
.fab:hover{background:' + C.teal + '}\
.fab.hide{display:none}\
.panel{background:' + C.cream + ';color:' + C.green + ';display:flex;flex-direction:column;overflow:hidden}\
.head{display:flex;align-items:center;gap:10px;padding:12px 16px;background:' + C.green + ';color:' + C.cream + '}\
.head h2{margin:0;font-size:18px;flex:1}\
.x{border:0;background:transparent;color:' + C.cream + ';font-size:28px;line-height:1;cursor:pointer;padding:0 4px}\
.tabs{display:flex;gap:6px;padding:10px 12px 0;flex-wrap:wrap}\
.tab{border:2px solid ' + C.green + ';background:#fff;color:' + C.green + ';border-radius:999px;padding:5px 14px;font-size:15px;font-weight:700;cursor:pointer}\
.tab.on{background:' + C.orange + ';border-color:' + C.orange + ';color:#fff}\
.body{padding:8px 14px 18px;overflow:auto;flex:1;-webkit-overflow-scrolling:touch}\
.grp{margin:8px 0 12px}\
.grp h3{margin:0 0 6px;font-size:15px;display:flex;gap:8px;align-items:baseline;flex-wrap:wrap}\
.grp h3 small{font-weight:400;font-size:13px;color:' + C.orange + '}\
.grid{display:grid;gap:6px}\
.card{background:#fff;border:2px solid #e7e2d5;border-radius:10px;padding:6px 4px;text-align:center}\
.card .r{font-weight:700;color:' + C.green + '}\
.card .z{color:' + C.orange + ';margin-top:1px}\
.card .eg{font-size:12px;color:#6b7a77;margin-top:3px}\
table{width:100%;border-collapse:collapse;background:#fff;border-radius:10px;overflow:hidden;margin-top:8px}\
th,td{padding:8px 6px;text-align:center;border-bottom:1px solid #eee7d8;font-size:16px}\
th{background:' + C.amber + ';color:' + C.green + '}\
td.z{color:' + C.orange + ';font-size:20px}\
.tip{margin-top:10px;background:#fff7e3;border-left:5px solid ' + C.amber + ';padding:8px 10px;border-radius:0;font-size:14px;line-height:1.6}\
\
/* ── 側邊面板模式（不遮罩） ── */\
.side .panel{position:fixed;z-index:2147483001;top:0;right:0;height:100vh;height:100dvh;width:min(380px,92vw);box-shadow:-8px 0 24px rgba(0,0,0,.2);border-radius:16px 0 0 16px;transform:translateX(105%);transition:transform .25s ease}\
.side.on .panel{transform:none}\
.side .grid{grid-template-columns:repeat(auto-fill,minmax(70px,1fr))}\
.side .card .r{font-size:17px}.side .card .z{font-size:21px}\
@media (max-width:700px),(orientation:portrait) and (max-width:900px){\
 .side .panel{top:auto;bottom:0;left:0;width:100%;height:50vh;height:50dvh;border-radius:16px 16px 0 0;box-shadow:0 -8px 24px rgba(0,0,0,.2);transform:translateY(105%)}\
 .side .head{padding:8px 14px}\
}\
\
/* ── 置中彈窗模式 ── */\
.modal{position:fixed;inset:0;z-index:2147483001;background:rgba(20,35,32,.55);display:none;align-items:center;justify-content:center;padding:14px}\
.modal.on{display:flex}\
.modal .panel{width:min(920px,100%);max-height:92vh;border-radius:18px;box-shadow:0 20px 50px rgba(0,0,0,.35)}\
.modal .grid{grid-template-columns:repeat(auto-fill,minmax(110px,1fr))}\
.modal .card .r{font-size:22px}.modal .card .z{font-size:26px}\
';

  // ---------- 畫面 ----------
  function cards(groups, withEg) {
    return groups.map(function (g) {
      return '<div class="grp"><h3>' + g.group + (g.note ? '<small>' + g.note + '</small>' : '') + '</h3><div class="grid">' +
        g.items.map(function (it) {
          return '<div class="card"><div class="r">' + it[0] + '</div><div class="z">' + it[1] + '</div>' +
            (withEg && it[2] ? '<div class="eg">' + it[2] + '</div>' : '') + '</div>';
        }).join('') + '</div></div>';
    }).join('');
  }

  var PAGES = {
    '聲母': function () { return cards(INITIALS, false); },
    '韻母': function () {
      return cards(FINALS, false) +
        '<div class="tip">⚠️ 台羅的 <b>o</b> 是 <b>ㄜ</b>，<b>oo</b> 才是 <b>ㆦ</b>。入聲韻尾寫成小字，接在韻母後面，例如 tsia̍h → ㄐㄧㄚㆷ。</div>';
    },
    '聲調': function () {
      return '<table><tr><th>調</th><th>台羅</th><th>方音</th><th>例字</th></tr>' +
        TONES.map(function (t) { return '<tr><td>' + t[0] + '</td><td>' + t[1] + '</td><td class="z">' + t[2] + '</td><td>' + t[3] + '</td></tr>'; }).join('') +
        '</table><div class="tip">台語沒有第 6 調（已和第 7 調合併），所以編號跳過 6。</div>';
    },
    '範例': function () {
      return '<table><tr><th>漢字</th><th>台羅</th><th>方音</th></tr>' +
        EXAMPLES.map(function (e) { return '<tr><td>' + e[0] + '</td><td>' + e[1] + '</td><td class="z">' + e[2] + '</td></tr>'; }).join('') + '</table>';
    }
  };

  var host = document.createElement('div');
  host.id = 'taigi-chart-host';
  var root = host.attachShadow({ mode: 'open' });

  root.innerHTML = '<style>' + css + '</style>' +
    (SHOW_BTN ? '<button class="fab" type="button" aria-label="開啟拼音對照表">📖 拼音表</button>' : '') +
    '<div class="wrap ' + MODE + '" role="dialog" aria-modal="' + (MODE === 'modal') + '" aria-label="台羅與方音符號對照表"><div class="panel">' +
    '<div class="head"><h2>台羅 ↔ 方音符號</h2><button class="x" type="button" aria-label="關閉">×</button></div>' +
    '<div class="tabs">' + Object.keys(PAGES).map(function (k, i) { return '<button class="tab' + (i ? '' : ' on') + '" data-k="' + k + '">' + k + '</button>'; }).join('') + '</div>' +
    '<div class="body"></div></div></div>';

  var wrap = root.querySelector('.wrap'), body = root.querySelector('.body'), fab = root.querySelector('.fab');
  function show(k) {
    body.innerHTML = PAGES[k]();
    body.scrollTop = 0;
    root.querySelectorAll('.tab').forEach(function (t) { t.classList.toggle('on', t.dataset.k === k); });
  }
  show('聲母');

  function open() { wrap.classList.add('on'); if (fab) fab.classList.add('hide'); }
  function close() { wrap.classList.remove('on'); if (fab) fab.classList.remove('hide'); }
  function toggle() { wrap.classList.contains('on') ? close() : open(); }

  if (fab) fab.addEventListener('click', open);
  root.querySelector('.x').addEventListener('click', close);
  if (MODE === 'modal') wrap.addEventListener('click', function (e) { if (e.target === wrap) close(); });
  root.querySelectorAll('.tab').forEach(function (t) { t.addEventListener('click', function () { show(t.dataset.k); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });

  function mount() { document.body.appendChild(host); }
  document.body ? mount() : document.addEventListener('DOMContentLoaded', mount);

  window.TaigiChart = { open: open, close: close, toggle: toggle, show: function (k) { open(); show(k); } };
})();
