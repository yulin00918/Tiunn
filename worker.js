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

    if (!shouldAddChart(request, response)) return out;

    return new HTMLRewriter()
      .on("body", {
        element(el) {
          el.append('<script src="/pinyin-chart.js"></script>', { html: true });
        }
      })
      .transform(out);
  }
};

function shouldAddChart(request, response) {
  if (response.status !== 200) return false;
  const type = response.headers.get("content-type") || "";
  if (!type.includes("text/html")) return false;
  let path;
  try {
    path = decodeURIComponent(new URL(request.url).pathname);
  } catch (e) {
    return false;
  }
  if (CHART_SKIP.some((k) => path.includes(k))) return false;
  return CHART_PAGES.some((k) => path.includes(k));
}
