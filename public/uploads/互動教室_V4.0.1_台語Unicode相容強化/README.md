# 互動教室 V4.0.1｜台語／Unicode 相容強化

基於已驗收的 V4.0。

## 這版處理
- UTF-8 全程維持
- 台羅調號與組合字元使用 Unicode NFC 正規化
- 比對／統計時使用 NFC key，避免外觀看起來相同的字被拆成兩個答案
- 顯示時保留原本可讀文字，不做不必要的轉寫
- 強化字型 fallback：
  Noto Sans TC / Noto Sans / PingFang TC / Microsoft JhengHei / Arial Unicode MS
- input / textarea / contenteditable 加強組合符號與行高顯示
- Worker 對教師建立的題目、選項、活動標題做 NFC
- 白板文字更新做 NFC
- 不對學生自由作答做語義改寫，只在必要的比較／儲存邊界做 Unicode 正規化

## 建議測試字串
gí
hóo
pà
kâu
tshiūnn
lo̍k
o͘
𠢕

## 快速測試頁
部署後可開：
/unicode-test.html

## 建議回歸測試
1. 想法牆輸入：gí / lo̍k / o͘ / 𠢕
2. 即時投票選項加入上述字
3. 快問快答選項加入上述字
4. 配對／排序／分類卡片加入上述字
5. 白板便利貼／文字輸入上述字
6. 手機、桌機、教師端三邊確認不亂碼、不掉調號
