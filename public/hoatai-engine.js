/*
 * 華台雙語翻譯 換詞引擎
 * 網站介面、功能與教學整合設計／製作：張鈺聆
 */
const PUNCT = { '，': ',', '。': '.', '？': '?', '！': '!', '、': ',', '：': ':', '；': ';', '「': '“', '」': '”', '『': '“', '』': '”', '（': '(', '）': ')', '…': '...', '—': '-', ',': ',', '.': '.', '?': '?', '!': '!', ':': ':', ';': ';' };
const HAN = /[㐀-鿿豈-﫿\u{20000}-\u{3134f}]/u;

export function segment(text, D) {
  const ch = Array.from(text);
  const n = ch.length;
  const best = new Array(n + 1).fill(-Infinity);
  const back = new Array(n + 1).fill(null);
  best[0] = 0;
  for (let i = 0; i < n; i++) {
    if (best[i] === -Infinity) continue;
    const c = ch[i];
    if (!HAN.test(c)) {
      // run of non-Han characters
      let j = i + 1;
      const isP = c in PUNCT || /\s/.test(c);
      if (!isP) while (j < n && !HAN.test(ch[j]) && !(ch[j] in PUNCT) && !/\s/.test(ch[j])) j++;
      const sc = best[i];
      if (sc > best[j]) { best[j] = sc; back[j] = { i, kind: isP ? 'punct' : 'other' }; }
      continue;
    }
    for (let L = Math.min(8, n - i); L >= 1; L--) {
      const w = ch.slice(i, i + L).join('');
      if (!HAN.test(ch[i + L - 1])) continue;
      let kind = null, sc = -Infinity;
      if (D.M[w]) { kind = 'dict'; sc = L * L * 2 + 1; }
      else if (D.H[w]) { kind = 'same'; sc = L * L * 2; }
      else if (L === 1) { kind = 'raw'; sc = -3; }
      if (!kind) continue;
      if (best[i] + sc > best[i + L]) { best[i + L] = best[i] + sc; back[i + L] = { i, kind }; }
    }
  }
  const toks = [];
  for (let j = n; j > 0;) {
    const b = back[j];
    const zh = ch.slice(b.i, j).join('');
    toks.unshift({ zh, kind: b.kind });
    j = b.i;
  }
  for (const t of toks) {
    if (t.kind === 'dict') t.cands = D.M[t.zh];
    else if (t.kind === 'same') t.cands = D.H[t.zh];
    else t.cands = [];
    t.pick = 0;
  }
  return toks;
}

export function entry(t, D) { return t.cands.length ? D.E[t.cands[t.pick]] : null; }

export function render(toks, D, numeric) {
  let han = '', tl = '', capNext = true;
  for (const t of toks) {
    if (t.kind === 'punct') {
      if (/\s/.test(t.zh)) { tl += ' '; han += t.zh; continue; }
      han += t.zh;
      const p = PUNCT[t.zh] || t.zh;
      tl = tl.replace(/\s+$/, '') + p + (/[“(]/.test(p) ? '' : ' ');
      if (/[.?!]/.test(p)) capNext = true;
      continue;
    }
    const e = entry(t, D);
    let h = e ? e[0] : t.zh, r = e ? e[1] : t.zh;
    if (numeric) r = toNumeric(r);
    han += h;
    if (r.startsWith('--')) tl = tl.replace(/\s+$/, '') + r + ' ';
    else {
      if (capNext) r = r.charAt(0).toUpperCase() + r.slice(1);
      tl += r + ' ';
    }
    capNext = false;
  }
  return { han, tl: tl.replace(/\s+([,.?!:;”)])/g, '$1').trim() };
}

// 調符 → 數字調
const TONE = { '́': 2, '̀': 3, '̂': 5, '̄': 7, '̍': 8, '̋': 9, '̌': 6 };
export function toNumeric(s) {
  return s.normalize('NFD').replace(/[a-zA-Z̀-̏͘ⁿ]+/g, syl => {
    let tone = 0;
    const base = syl.replace(/[̀-̍̋̌]/g, m => { tone = TONE[m] || tone; return ''; });
    if (!tone) tone = /[ptkh]$/i.test(base) ? 4 : 1;
    return base + tone;
  }).normalize('NFC');
}
