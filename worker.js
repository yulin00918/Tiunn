// ── 拼音對照表：自動加到哪些頁面 ──────────────────────────
// 網址（含資料夾名稱）裡有下面任一個詞，就會自動出現「📖 拼音表」按鈕。
// 想多加或拿掉，直接改這兩行就好。
const CHART_PAGES = ['點讀', '羅馬字', '拼音', '聲調', '生份字', '形音義', '聽聲', '鬥句', '語境'];
// 網址裡有這些詞的頁面一律不加（例如備份、檢查用的頁面）
const CHART_SKIP = ['稽核', '檢查', '備份', 'backup'];
// ────────────────────────────────────────────────────────

export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);
    headers.set("X-Robots-Tag", "noindex");
    const out = new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers
    });

    if (!isHtmlPage(response)) return out;
    const addChart = shouldAddChart(request, response);

    return new HTMLRewriter()
      .on("body", {
        element(el) {
          // 每一頁：把 emoji 換成立體插圖
          el.append('<script src="/emoji3d.js"></script>', { html: true });
          // 學台語的頁面：加上拼音對照表
          if (addChart) el.append('<script src="/pinyin-chart.js"></script>', { html: true });
        }
      })
      .transform(out);
  }
};

function isHtmlPage(response) {
  return response.status === 200 && (response.headers.get("content-type") || "").includes("text/html");
}

function shouldAddChart(request, response) {
  let path;
  try {
    path = decodeURIComponent(new URL(request.url).pathname);
  } catch (e) {
    return false;
  }
  if (CHART_SKIP.some((k) => path.includes(k))) return false;
  return CHART_PAGES.some((k) => path.includes(k));
}
