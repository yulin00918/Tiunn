/*
  🌿 生活語境題庫
  --------------------------------------------------
  新增題目只需在對應主題陣列加入資料，不必修改 index.html 或 assets/app.js。

  固定欄位：
  id          題目唯一編號，例如 school-001
  topic       school / food / family / transport / shopping / weather / festival / social
  type        scene / cloze / dialogue / speaking / judgement
  difficulty  1 / 2 / 3
  context     情境文字（可留空字串）
  question    題目
  options     選項陣列，建議 4 個
  answer      正確答案索引，第一個選項是 0
  explanation 答題解析

  未來若加入聽聲辨意，可再擴充 audio 欄位，不影響目前框架。
*/
window.LIFE_CONTEXT_BANK = {
  "school": [
  {
    "id": "school-001",
    "topic": "school",
    "type": "scene",
    "difficulty": 1,
    "context": "下課矣，你欲去便所，欲請同學等你一下。",
    "question": "你會當按怎講？",
    "options": [
      "你先去教室等我，我欲去揣老師。",
      "你等我一下，我欲去便所，等一下就轉來。",
      "你等我一下，我欲先去福利社買物件。",
      "你先轉去厝，明仔載才閣見面。"
    ],
    "answer": 1,
    "explanation": "這个情境是欲請同學稍等一下，所以「你等我一下」上適合。"
  },
  {
    "id": "school-002",
    "topic": "school",
    "type": "scene",
    "difficulty": 1,
    "context": "你無帶鉛筆，欲共同學借一枝。",
    "question": "你會當按怎講？",
    "options": [
      "你有鉛筆無？我欲看一下。",
      "你的鉛筆敢有賰？",
      "你的鉛筆會當借我一下無？",
      "你的鉛筆敢會當賣我？"
    ],
    "answer": 2,
    "explanation": "「會當借我一下無？」是在禮貌詢問對方敢會使借物件。"
  },
  {
    "id": "school-003",
    "topic": "school",
    "type": "scene",
    "difficulty": 1,
    "context": "鐘聲響矣，同學猶咧外口𨑨迌。你欲提醒伊愛入教室。",
    "question": "你欲提醒同學鐘聲已經響矣，應該緊入教室。佗一句上適合？",
    "options": [
      "鐘聲響矣，你欲先去福利社無？",
      "欲上課矣，緊入來！",
      "鐘聲響矣，咱去運動埕。",
      "鐘聲響矣，猶會當閣佇外口𨑨迌。"
    ],
    "answer": 1,
    "explanation": "鐘聲響、欲上課矣，提醒同學入教室上符合情境。"
  },
  {
    "id": "school-004",
    "topic": "school",
    "type": "scene",
    "difficulty": 2,
    "context": "同學欲交作業，煞揣無老師。你知影老師佇辦公室。",
    "question": "你會當按怎共伊講？",
    "options": [
      "老師可能佇教室，你去看覓。",
      "老師可能去開會，你等一下。",
      "你會當先共作業囥佇桌頂。",
      "老師這馬佇辦公室，你會當去遐揣伊。"
    ],
    "answer": 3,
    "explanation": "對方咧揣老師，直接提供老師佇辦公室的資訊上有幫助。"
  },
  {
    "id": "school-005",
    "topic": "school",
    "type": "scene",
    "difficulty": 2,
    "context": "小組討論的時陣，同學一直講，你聽無清楚伊的意思。",
    "question": "你欲請同學共頭拄仔講的內容閣講一擺。佗一句上適合？",
    "options": [
      "你會當講較緊一點無？",
      "你會當先莫講無？",
      "你會當閣講一擺無？我頭拄仔無聽清楚。",
      "你會當共這段寫落來無？"
    ],
    "answer": 2,
    "explanation": "聽無清楚的時陣，請對方閣講一擺是上自然的回應。"
  },
  {
    "id": "school-006",
    "topic": "school",
    "type": "scene",
    "difficulty": 2,
    "context": "同學共你的冊提去看，看了煞袂記得還你。你欲提醒伊。",
    "question": "你會當按怎講？",
    "options": [
      "你頭拄仔提去看的彼本冊，會當還我矣無？",
      "這本冊我已經看煞矣。",
      "你敢知影冊佇佗位？",
      "你敢欲買這本冊？"
    ],
    "answer": 0,
    "explanation": "情境是提醒對方還冊，第一句直接又有禮貌。"
  },
  {
    "id": "school-007",
    "topic": "school",
    "type": "scene",
    "difficulty": 3,
    "context": "老師拄仔交代一項重要的代誌，你無聽著，欲問同學。",
    "question": "你會當按怎問？",
    "options": [
      "老師頭拄仔敢有來？",
      "老師頭拄仔講啥物？我無聽著。",
      "老師敢有共你講話？",
      "老師今仔日欲去佗位？"
    ],
    "answer": 1,
    "explanation": "重點是問「老師頭拄仔交代啥物」，第一句有直接問著所需要的資訊。"
  },
  {
    "id": "school-008",
    "topic": "school",
    "type": "scene",
    "difficulty": 3,
    "context": "你佮同學約好下課做報告，毋過你臨時愛去揣老師。",
    "question": "你會當按怎共同學講？",
    "options": [
      "你家己做就好。",
      "我無愛做報告矣。",
      "老師叫你去辦公室。",
      "歹勢，我愛先去揣老師，等一下才閣來揣你。"
    ],
    "answer": 3,
    "explanation": "這句有說明原因，也有交代等一下會轉來，符合原本約定的情境。"
  },
  {
    "id": "school-009",
    "topic": "school",
    "type": "cloze",
    "difficulty": 1,
    "context": "老師：「明仔載愛考試，逐家轉去愛記得＿＿＿＿。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "共考卷交出來",
      "溫冊",
      "共課本借同學",
      "先去運動埕"
    ],
    "answer": 1,
    "explanation": "明仔載欲考試，轉去「溫冊」上符合前後文。"
  },
  {
    "id": "school-010",
    "topic": "school",
    "type": "cloze",
    "difficulty": 1,
    "context": "「我的鉛筆盒無佇桌頂，毋知我共伊囥佇＿＿＿＿。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "佗位",
      "當時",
      "按怎",
      "啥人"
    ],
    "answer": 0,
    "explanation": "問物件放在哪個地方，空格應填「佗位」。"
  },
  {
    "id": "school-011",
    "topic": "school",
    "type": "cloze",
    "difficulty": 1,
    "context": "老師欲收作業：「作業寫好的人，會當＿＿＿＿矣。」",
    "question": "老師欲收作業，空格內底囥佗一个上適合？",
    "options": [
      "先收起來",
      "先帶轉去",
      "交出來",
      "先囥書包"
    ],
    "answer": 2,
    "explanation": "作業寫好後通常是「交出來」，語意上符合校園情境。"
  },
  {
    "id": "school-012",
    "topic": "school",
    "type": "cloze",
    "difficulty": 2,
    "context": "「今仔日是阮這組做值日，我愛共烏枋＿＿＿＿。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "講予大聲",
      "穿予媠",
      "食予飽",
      "拭予清氣"
    ],
    "answer": 3,
    "explanation": "做值日愛整理教室，烏枋會共伊「拭予清氣」。"
  },
  {
    "id": "school-013",
    "topic": "school",
    "type": "cloze",
    "difficulty": 2,
    "context": "「老師咧講課，咱毋通一直＿＿＿＿，才袂吵著別人。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "看冊",
      "寫字",
      "講話",
      "聽課"
    ],
    "answer": 2,
    "explanation": "「才袂吵著別人」是重要線索，所以是毋通一直講話。"
  },
  {
    "id": "school-014",
    "topic": "school",
    "type": "cloze",
    "difficulty": 2,
    "context": "「我昨昏無來上課，會當共你的筆記借我＿＿＿＿無？」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "看一下",
      "睏一下",
      "行一下",
      "食一下"
    ],
    "answer": 0,
    "explanation": "借筆記的目的是欲看內容，所以「看一下」上適合。"
  },
  {
    "id": "school-015",
    "topic": "school",
    "type": "cloze",
    "difficulty": 3,
    "context": "「下禮拜愛小組報告，咱今仔日愛先共工課＿＿＿＿，看逐家欲做啥物。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "囥起來",
      "擲出去",
      "食予了",
      "分配好勢"
    ],
    "answer": 3,
    "explanation": "小組報告前先共工課分配好勢，才會知影逐个人負責啥物。"
  },
  {
  "id": "school-016",
  "topic": "school",
  "type": "cloze",
  "difficulty": 3,
  "context": "這題你想足久猶想無，欲＿＿老師，請伊閣解說一擺。",
  "question": "空格內底囥佗一个上適合？",
  "options": [
    "揣",
    "等",
    "叫",
    "問"
  ],
  "answer": 3,
  "explanation": "題目想無，會當「問」老師，請老師閣解說一擺。"
},
  {
    "id": "school-017",
    "topic": "school",
    "type": "dialogue",
    "difficulty": 1,
    "context": "阿明：「你的鉛筆會當借我一下無？」\n小華：「我這枝鉛筆暫時無欲用，會當借你。」\n阿明：「＿＿＿＿」",
    "question": "阿明想先向小華道謝，按怎應上自然？",
    "options": [
      "我這枝筆猶咧寫。",
      "我有帶鉛筆。",
      "你會當去借別人的。",
      "多謝你，等一下就還你。"
    ],
    "answer": 3,
    "explanation": "同學答應借筆，先道謝並說明會歸還，符合對話情境。"
  },
  {
    "id": "school-018",
    "topic": "school",
    "type": "dialogue",
    "difficulty": 1,
    "context": "小美：「你作業寫好未？」\n阿芳：「＿＿＿＿」",
    "question": "阿芳按怎應上自然？",
    "options": [
      "我欲食麭。",
      "今仔日真好天。",
      "遐是阮老師。",
      "猶未，我賰兩題。"
    ],
    "answer": 3,
    "explanation": "問題咧問作業完成未，「猶未，我賰兩題」有直接回答。"
  },
  {
    "id": "school-019",
    "topic": "school",
    "type": "dialogue",
    "difficulty": 1,
    "context": "阿華：「你欲去佗位？」\n小安：「＿＿＿＿」",
    "question": "小安按怎應上自然？",
    "options": [
      "我感覺真好食。",
      "我有帶鉛筆。",
      "我昨昏有溫冊。",
      "我欲去辦公室揣老師。"
    ],
    "answer": 3,
    "explanation": "「去佗位」是在問目的地，第一句有回答欲去辦公室。"
  },
  {
    "id": "school-020",
    "topic": "school",
    "type": "dialogue",
    "difficulty": 2,
    "context": "小玲：「頭拄仔老師交代啥物？我無聽著。」\n小美：「＿＿＿＿」",
    "question": "小美按怎應上自然？",
    "options": [
      "我無佮老師講話。",
      "伊講明仔載愛記得帶學習單。",
      "伊今仔日穿烏色的衫。",
      "明仔載是拜五。"
    ],
    "answer": 1,
    "explanation": "小玲欲知影老師交代啥物，第一句有提供交代的內容。"
  },
  {
    "id": "school-021",
    "topic": "school",
    "type": "dialogue",
    "difficulty": 2,
    "context": "阿哲：「歹勢，我頭拄仔毋細膩挵著你的桌仔。」\n小凱：「＿＿＿＿」",
    "question": "小凱按怎應上自然？",
    "options": [
      "我欲去福利社。",
      "你有寫作業無？",
      "無要緊，無代誌。",
      "這張桌仔真大張。"
    ],
    "answer": 2,
    "explanation": "對方咧道歉，若無造成問題，「無要緊，無代誌」是自然的回應。"
  },
  {
    "id": "school-022",
    "topic": "school",
    "type": "dialogue",
    "difficulty": 2,
    "context": "阿欣：「咱下課做伙去福利社，好無？」\n小琪：「＿＿＿＿」",
    "question": "小琪按怎應上自然？",
    "options": [
      "好啊，我嘛拄好欲買物件。",
      "這枝筆是我的。",
      "福利社佇學校內底。",
      "我昨昏有去學校。"
    ],
    "answer": 0,
    "explanation": "阿欣咧邀請，小琪答應閣補充家己嘛欲買物件，對話會當自然接落去。"
  },
  {
    "id": "school-023",
    "topic": "school",
    "type": "dialogue",
    "difficulty": 3,
    "context": "組長：「咱的報告猶欠一張圖，啥人會當鬥相共？」\n阿明：「＿＿＿＿」",
    "question": "阿明按怎應上自然？",
    "options": [
      "我會當揣圖，等一下傳予逐家。",
      "我看過彼張圖。",
      "報告是下禮拜。",
      "阮這組有五个人。"
    ],
    "answer": 0,
    "explanation": "組長咧問啥人會當鬥相共，阿明直接提出家己會當負責揣圖。"
  },
  {
    "id": "school-024",
    "topic": "school",
    "type": "dialogue",
    "difficulty": 3,
    "context": "小美：「我明仔載欲請假，敢會當拜託你共我抄老師交代的代誌？」\n小玲：「＿＿＿＿」",
    "question": "小玲按怎應上自然？",
    "options": [
      "你今仔日無請假。",
      "會使，若有重要的我閣傳予你。",
      "老師逐工攏會來。",
      "明仔載我嘛愛上課。"
    ],
    "answer": 1,
    "explanation": "小美提出請求，小玲答應閣講會傳重要資訊，是完整自然的回應。"
  },
  {
    "id": "school-025",
    "topic": "school",
    "type": "speaking",
    "difficulty": 1,
    "context": "你無聽清楚老師講的話，想請老師再講一次。",
    "question": "佗一句上適合？",
    "options": [
      "老師，我欲出去。",
      "老師，我無帶鉛筆。",
      "老師，會當閣講一擺無？",
      "老師，伊今仔日無來。"
    ],
    "answer": 2,
    "explanation": "欲請對方重複一次，可以講「會當閣講一擺無？」。"
  },
  {
    "id": "school-026",
    "topic": "school",
    "type": "speaking",
    "difficulty": 1,
    "context": "你欲問同學現在幾點。",
    "question": "會當按怎講？",
    "options": [
      "這馬幾點？",
      "你幾點欲轉去？",
      "咱幾點愛集合？",
      "你幾點來學校？"
    ],
    "answer": 0,
    "explanation": "「這馬」就是現在，問時間會當講「這馬幾點？」。"
  },
  {
    "id": "school-027",
    "topic": "school",
    "type": "speaking",
    "difficulty": 1,
    "context": "你欲請同學幫你一下。",
    "question": "會當按怎講？",
    "options": [
      "你啥物時陣來？",
      "你敢有食飽？",
      "你會當鬥相共一下無？",
      "你欲去佗位？"
    ],
    "answer": 2,
    "explanation": "「鬥相共」有幫忙、協助的意思，符合請同學幫忙的情境。"
  },
  {
    "id": "school-028",
    "topic": "school",
    "type": "speaking",
    "difficulty": 2,
    "context": "你毋細膩挵著同學，想欲共伊失禮。",
    "question": "佗一句上適合？",
    "options": [
      "無要緊，我無代誌。",
      "免客氣。",
      "多謝你鬥相共。",
      "歹勢，我毋是故意的。"
    ],
    "answer": 3,
    "explanation": "挵著別人後先講「歹勢」，閣說明毋是故意的，符合道歉情境。"
  },
  {
    "id": "school-029",
    "topic": "school",
    "type": "speaking",
    "difficulty": 2,
    "context": "你毋知作業愛寫到佗位，想欲問同學。",
    "question": "你毋知老師交代的作業應該寫到哪一頁，想問同學。佗一句上適合？",
    "options": [
      "今仔日的作業愛寫佗一科？",
      "今仔日的作業愛寫幾題？",
      "今仔日的作業愛寫到第幾頁？",
      "今仔日的作業愛啥物時陣交？"
    ],
    "answer": 2,
    "explanation": "題目明確詢問作業寫到第幾頁，應選詢問頁數的句子。"
  },
  {
    "id": "school-030",
    "topic": "school",
    "type": "speaking",
    "difficulty": 2,
    "context": "你想欲招同學做伙參加學校活動。",
    "question": "佗一句上適合？",
    "options": [
      "你有參加過矣。",
      "你欲佮我做伙參加無？",
      "我無知影你欲去。",
      "你敢知影學校佇佗位？"
    ],
    "answer": 1,
    "explanation": "「欲佮我做伙參加無？」是在邀請對方一同參加。"
  },
  {
    "id": "school-031",
    "topic": "school",
    "type": "speaking",
    "difficulty": 3,
    "context": "小組討論的時陣，你佮同學的想法無仝，毋過你想欲有禮貌提出家己的意見。",
    "question": "你欲表達家己的想法佮同學無仝，並邀請逐家繼續討論。佗一句上適合？",
    "options": [
      "你講的我有聽著，毋過我想欲先照家己的方法試看覓。",
      "我想的佮你無仝，咱會當閣討論看覓。",
      "你講的我有聽著，毋過這擺咱先照我的做。",
      "你講的我知影矣，毋過我無愛閣討論。"
    ],
    "answer": 1,
    "explanation": "先講想法無仝，再提出家己的看法，較有禮貌嘛較適合討論。"
  },
  {
    "id": "school-032",
    "topic": "school",
    "type": "speaking",
    "difficulty": 3,
    "context": "你今仔日來較晏，入教室了後想欲共老師說明。",
    "question": "你想先向老師道歉，並說明家己今仔日較晏到。佗一句上適合？",
    "options": [
      "老師，今仔日路上車真濟。",
      "老師，我昨昏真晏睏。",
      "老師，歹勢，我今仔日來較晏。",
      "老師，我等一下愛去辦公室。"
    ],
    "answer": 2,
    "explanation": "遲到後先講「歹勢」，閣說明今仔日來較晏，符合情境。"
  },
  {
    "id": "school-033",
    "topic": "school",
    "type": "judgement",
    "difficulty": 1,
    "context": "老師：「啥人猶未交作業？」\n小安：「老師，我昨昏袂記得寫，今仔日會補予你。」",
    "question": "小安發生啥物代誌？",
    "options": [
      "伊袂記得寫作業。",
      "伊揣無老師。",
      "伊無欲上課。",
      "伊無帶鉛筆。"
    ],
    "answer": 0,
    "explanation": "小安家己講「昨昏袂記得寫」，所以是袂記得寫作業。"
  },
  {
    "id": "school-034",
    "topic": "school",
    "type": "judgement",
    "difficulty": 1,
    "context": "阿明：「鐘聲響矣啦！」\n小華：「好啦，緊入教室。」",
    "question": "𪜶這馬欲做啥物？",
    "options": [
      "欲轉去厝。",
      "欲去運動埕。",
      "欲去食飯。",
      "欲入教室上課。"
    ],
    "answer": 3,
    "explanation": "鐘聲響矣，閣講「緊入教室」，表示欲入教室上課。"
  },
  {
    "id": "school-035",
    "topic": "school",
    "type": "judgement",
    "difficulty": 1,
    "context": "小美：「你有看著我的擦仔無？」\n阿玲：「有啊，佇你的椅仔跤。」",
    "question": "小美接落去上可能去佗位揣？",
    "options": [
      "鉛筆盒內",
      "書包內",
      "椅仔跤",
      "冊桌頂"
    ],
    "answer": 2,
    "explanation": "阿玲講擦仔佇椅仔跤，小美應該去椅仔跤揣。"
  },
  {
    "id": "school-036",
    "topic": "school",
    "type": "judgement",
    "difficulty": 2,
    "context": "阿哲：「你昨昏哪會無來上課？」\n小凱：「我身體無爽快，佇厝歇睏。」",
    "question": "若小凱今仔日猶是身體無爽快，佇學校上應該按怎做？",
    "options": [
      "無共任何人講，直接離開學校。",
      "借同學的藥家己食。",
      "共老師講身體狀況，必要時歇睏。",
      "勉強參加體育比賽。"
    ],
    "answer": 2,
    "explanation": "對話顯示小凱身體無爽快，若猶未恢復，應先告知老師並視需要休息。"
  },
  {
    "id": "school-037",
    "topic": "school",
    "type": "judgement",
    "difficulty": 2,
    "context": "老師：「十分鐘了後逐組愛派一个人上來報告。」\n組長：「好，咱先決定啥人欲上台。」",
    "question": "𪜶這馬上需要做啥物？",
    "options": [
      "決定欲食啥物。",
      "決定啥人欲轉去。",
      "決定報告的人。",
      "決定明仔載穿啥物。"
    ],
    "answer": 2,
    "explanation": "老師要求逐組派一个人報告，所以小組愛先決定上台的人。"
  },
  {
    "id": "school-038",
    "topic": "school",
    "type": "judgement",
    "difficulty": 2,
    "context": "小文：「我今仔日無帶課本。」\n小傑：「無要緊，咱兩个做伙看我的。」",
    "question": "小傑是啥物意思？",
    "options": [
      "伊欲叫小文轉去提冊。",
      "伊欲共小文借冊。",
      "伊嘛無帶冊。",
      "伊願意佮小文做伙看一本冊。"
    ],
    "answer": 3,
    "explanation": "「咱兩个做伙看我的」表示願意共小文分享家己的課本。"
  },
  {
    "id": "school-039",
    "topic": "school",
    "type": "judgement",
    "difficulty": 3,
    "context": "老師：「這擺報告毋是一个人做煞，逐个人攏愛有家己負責的部分。」\n組長：「按呢咱先共工課分予逐个人。」",
    "question": "老師上主要希望學生按怎做？",
    "options": [
      "毋免討論，直接開始報告。",
      "逐个人做仝款的內容。",
      "一个學生完成規个報告。",
      "小組逐个人攏愛參與。"
    ],
    "answer": 3,
    "explanation": "老師強調逐个人攏愛有家己負責的部分，意思就是每一个組員攏愛參與。"
  },
  {
    "id": "school-040",
    "topic": "school",
    "type": "judgement",
    "difficulty": 3,
    "context": "小安：「你等一下有閒無？我有兩題數學想袂出來。」\n小美：「我這馬愛去辦公室，轉來才佮你看，好無？」",
    "question": "小美的意思是啥物？",
    "options": [
      "伊嘛袂曉彼兩題。",
      "伊欲叫小安去問老師。",
      "伊毋願意鬥相共。",
      "伊這馬無閒，轉來了後會當鬥相共。"
    ],
    "answer": 3,
    "explanation": "小美這馬愛去辦公室，毋過有講轉來才佮小安看，表示了後願意鬥相共。"
  }
],
  "food": [
  {
    "id": "food-001",
    "topic": "food",
    "type": "scene",
    "difficulty": 1,
    "context": "你佮同學去早餐店，欲點一杯無糖豆奶。",
    "question": "你會當按怎共店員講？",
    "options": [
      "一杯豆奶，糖減一半。",
      "一杯紅茶，毋免加糖。",
      "一杯豆奶，加淡薄仔糖。",
      "一杯豆奶，毋免加糖。"
    ],
    "answer": 3,
    "explanation": "欲點無糖豆奶，直接講「一杯豆奶，毋免加糖」上符合情境。"
  },
  {
    "id": "food-002",
    "topic": "food",
    "type": "scene",
    "difficulty": 1,
    "context": "同學問你便當敢好食，你感覺誠好食。",
    "question": "你會當按怎應？",
    "options": [
      "這个便當我食袂落。",
      "真好食，我足佮意。",
      "這个便當我猶未食。",
      "這个便當我食了真飽。"
    ],
    "answer": 1,
    "explanation": "題目講你感覺誠好食，所以回應「真好食，我足佮意」上自然。"
  },
  {
    "id": "food-003",
    "topic": "food",
    "type": "scene",
    "difficulty": 1,
    "context": "你食袂了，想欲請店員共賰的物件包起來。",
    "question": "你會當按怎講？",
    "options": [
      "賰的會當共我包起來無？",
      "會當共這碗閣加一寡湯無？",
      "會當共這盤換做較細盤無？",
      "會當共這桌拭清氣無？"
    ],
    "answer": 0,
    "explanation": "「賰的共我包起來」就是欲將食袂了的物件拍包帶走。"
  },
  {
    "id": "food-004",
    "topic": "food",
    "type": "scene",
    "difficulty": 2,
    "context": "同學食著一口感覺誠辣，一直啉水。你欲關心伊。",
    "question": "佗一句上適合？",
    "options": [
      "你敢會傷燒？愛等較冷才食無？",
      "你敢會傷鹹？愛閣啉寡水無？",
      "敢會傷辣？愛閣啉寡水無？",
      "你敢會食傷飽？愛先歇睏無？"
    ],
    "answer": 2,
    "explanation": "對方因為辣一直啉水，問「敢會傷辣」上符合情境。"
  },
  {
    "id": "food-005",
    "topic": "food",
    "type": "scene",
    "difficulty": 2,
    "context": "你去麵店食麵，店員送來的毋是你點的。",
    "question": "你會當按怎有禮貌共店員講？",
    "options": [
      "歹勢，這碗會當加麵無？",
      "歹勢，這碗敢有加辣？",
      "歹勢，我頭拄仔點的毋是這碗。",
      "歹勢，這碗會當換較大碗無？"
    ],
    "answer": 2,
    "explanation": "餐點送毋著時，先講「歹勢」閣說明家己點的毋是這碗，較有禮貌。"
  },
  {
    "id": "food-006",
    "topic": "food",
    "type": "scene",
    "difficulty": 2,
    "context": "朋友問你欲食啥物，你猶未決定，想欲先看一下菜單。",
    "question": "你會當按怎講？",
    "options": [
      "我猶未決定，予我看一下菜單。",
      "我已經決定矣，免看菜單。",
      "我欲點佮你仝款的，免看菜單。",
      "我猶未食飽，會當閣加一碗無？"
    ],
    "answer": 0,
    "explanation": "猶未決定欲食啥物時，先看菜單是上自然的回應。"
  },
  {
    "id": "food-007",
    "topic": "food",
    "type": "scene",
    "difficulty": 3,
    "context": "同桌的人欲閣點真濟菜，毋過桌頂已經有真濟物件，你驚食袂了。",
    "question": "你會當按怎提醒？",
    "options": [
      "咱閣點兩盤，無夠才食。",
      "咱先食看覓，若猶無夠才閣點，較袂食賰。",
      "咱先點好勢，食袂了才包起來。",
      "咱逐个人閣點一盤，才有選擇。"
    ],
    "answer": 1,
    "explanation": "先食看覓、無夠才閣點，會當避免點傷濟造成浪費。"
  },
  {
    "id": "food-008",
    "topic": "food",
    "type": "scene",
    "difficulty": 3,
    "context": "你欲請同學食一塊你帶來的餅，餅內底有花生，你毋知同學敢會食花生。",
    "question": "你欲先確認同學敢會使食花生，佗一句上適合？",
    "options": [
      "這塊有花生，你敢會使食花生？",
      "這塊有芝麻，你敢會使食芝麻？",
      "這塊有牛奶，你敢會使食牛奶？",
      "這塊有雞卵，你敢會使食雞卵？"
    ],
    "answer": 0,
    "explanation": "分享含花生的食物前，應先確認對方是否能吃花生；如有過敏，不能提供。"
  },
  {
    "id": "food-009",
    "topic": "food",
    "type": "cloze",
    "difficulty": 1,
    "context": "「我朝早無食物件，這馬腹肚真＿＿＿＿。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "寒",
      "光",
      "飽",
      "枵"
    ],
    "answer": 3,
    "explanation": "朝早無食物件，腹肚會「枵」，就是肚子餓。"
  },
  {
    "id": "food-010",
    "topic": "food",
    "type": "cloze",
    "difficulty": 1,
    "context": "「這碗湯誠燒，愛等伊＿＿＿＿寡才食。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "鹹",
      "芳",
      "冷",
      "甜"
    ],
    "answer": 2,
    "explanation": "湯傷燒，通常愛等伊較冷寡才食。"
  },
  {
    "id": "food-011",
    "topic": "food",
    "type": "cloze",
    "difficulty": 1,
    "context": "「我已經食飽矣，這个便當猶賰一半，我食＿＿＿＿。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "袂曉",
      "袂落",
      "袂著",
      "袂記"
    ],
    "answer": 1,
    "explanation": "已經食飽、無法度閣食，就是「食袂落」。"
  },
  {
    "id": "food-012",
    "topic": "food",
    "type": "cloze",
    "difficulty": 2,
    "context": "「這杯茶傷甜矣，下擺我欲叫＿＿＿＿糖。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "足濟",
      "較少",
      "仝款",
      "較濟"
    ],
    "answer": 1,
    "explanation": "感覺傷甜，下擺自然會要求「較少糖」。"
  },
  {
    "id": "food-013",
    "topic": "food",
    "type": "cloze",
    "difficulty": 2,
    "context": "「食飯進前愛先共手＿＿＿＿，較衛生。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "講大聲",
      "洗清氣",
      "穿予媠",
      "囥好勢"
    ],
    "answer": 1,
    "explanation": "食飯進前洗手是基本衛生習慣，所以是「洗清氣」。"
  },
  {
    "id": "food-014",
    "topic": "food",
    "type": "cloze",
    "difficulty": 2,
    "context": "「這盤水果真濟，咱做伙＿＿＿＿食。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "關",
      "穿",
      "分",
      "寫"
    ],
    "answer": 2,
    "explanation": "一盤水果真濟，做伙「分食」符合分享的情境。"
  },
  {
  "id": "food-015",
  "topic": "food",
  "type": "cloze",
  "difficulty": 3,
  "context": "「這碗湯我猶未啉過，想知影滋味，先＿＿＿＿一喙看覓。」",
  "question": "空格內底囥佗一个上適合？",
  "options": [
    "咬",
    "拭",
    "啉",
    "提"
  ],
  "answer": 2,
  "explanation": "欲試湯的滋味，會當先「啉一喙」看覓。"
},
  {
    "id": "food-016",
    "topic": "food",
    "type": "cloze",
    "difficulty": 3,
    "context": "「欲食偌濟就挾偌濟，毋通挾傷濟煞食袂了，按呢較袂＿＿＿＿。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "歡喜",
      "方便",
      "清氣",
      "浪費"
    ],
    "answer": 3,
    "explanation": "挾傷濟煞食袂了會造成浪費，所以句尾是「較袂浪費」。"
  },
  {
    "id": "food-017",
    "topic": "food",
    "type": "dialogue",
    "difficulty": 1,
    "context": "阿明：「你食飽未？」\n小美猶未食飯，欲去食便當。",
    "question": "小美欲表達猶未食飽，佗一句上適合？",
    "options": [
      "我食飽矣，這馬欲去買飲料。",
      "我今仔日無帶便當。",
      "我朝早食過矣，下晡才欲食。",
      "猶未，我欲去食便當。"
    ],
    "answer": 3,
    "explanation": "「食飽未」是在問有食飯未，第一句有直接回答。"
  },
  {
    "id": "food-018",
    "topic": "food",
    "type": "dialogue",
    "difficulty": 1,
    "context": "小華：「這个麭你欲食無？」\n阿玲：「＿＿＿＿」",
    "question": "阿玲按怎應上自然？",
    "options": [
      "好啊，多謝你。",
      "我今仔日無帶冊。",
      "遐有一台車。",
      "我欲先寫作業。"
    ],
    "answer": 0,
    "explanation": "對方咧分享麭，若欲接受，講「好啊，多謝你」上自然。"
  },
  {
    "id": "food-019",
    "topic": "food",
    "type": "dialogue",
    "difficulty": 1,
    "context": "店員：「你欲食啥物？」\n學生想點一碗乾麵：「＿＿＿＿」",
    "question": "學生欲點一碗乾麵，佗一句上適合？",
    "options": [
      "我欲一碗湯，毋免麵。",
      "我欲一碗湯麵。",
      "我欲一碗米粉。",
      "我欲一碗乾麵。"
    ],
    "answer": 3,
    "explanation": "題目指定點乾麵，其他選項雖然也可以點餐，但點的是不同食物。"
  },
  {
    "id": "food-020",
    "topic": "food",
    "type": "dialogue",
    "difficulty": 2,
    "context": "阿芳：「這碗湯敢會真辣？」\n阿文：「＿＿＿＿」",
    "question": "阿文按怎應上自然？",
    "options": [
      "有淡薄仔辣，毋過我感覺猶會使。",
      "我感覺傷鹹，愛閣啉水。",
      "我感覺傷燒，愛等較冷。",
      "我感覺傷甜，食袂落。"
    ],
    "answer": 0,
    "explanation": "問題是在問辣的程度，第一句有直接描述口味。"
  },
  {
    "id": "food-021",
    "topic": "food",
    "type": "dialogue",
    "difficulty": 2,
    "context": "小琪：「你哪會干焦食一半？」\n阿仁：「＿＿＿＿」",
    "question": "阿仁按怎應上自然？",
    "options": [
      "我這馬真飽，食袂落矣。",
      "我欲去買新鞋。",
      "今仔日真好天。",
      "我有帶雨傘。"
    ],
    "answer": 0,
    "explanation": "食一半的原因是已經真飽、食袂落，前後文相合。"
  },
  {
    "id": "food-022",
    "topic": "food",
    "type": "dialogue",
    "difficulty": 2,
    "context": "媽媽：「冰箱內底有水果，你欲食啥物？」\n小安：「＿＿＿＿」",
    "question": "小安按怎應上自然？",
    "options": [
      "我欲穿彼領衫。",
      "我欲寫數學。",
      "我欲去樓頂。",
      "我欲食一粒柑仔。"
    ],
    "answer": 3,
    "explanation": "媽媽咧問欲食啥物水果，回答一種水果上自然。"
  },
  {
    "id": "food-023",
    "topic": "food",
    "type": "dialogue",
    "difficulty": 3,
    "context": "阿傑：「咱欲閣點一盤薯條無？」\n小美：「＿＿＿＿」",
    "question": "小美若驚食袂了，按怎應上自然？",
    "options": [
      "你先去洗手。",
      "先莫，桌頂猶有真濟，食煞閣看覓。",
      "我無愛食暗頓。",
      "好，閣點三盤。"
    ],
    "answer": 1,
    "explanation": "驚食袂了時，先食桌頂現有的，食煞閣決定，較符合情境。"
  },
  {
  "id": "food-024",
  "topic": "food",
  "type": "dialogue",
  "difficulty": 3,
  "context": "店員：「這个有加花生粉，你會使食無？」\n學生對花生過敏，無法度食花生，也需要避免交叉接觸。",
  "question": "學生欲安全回應店員，佗一句上適合？",
  "options": [
    "歹勢，我對花生過敏，這个我袂使食。若無法度確認無接觸著花生，我就毋食。",
    "歹勢，我對花生過敏，花生粉減一半就好。",
    "歹勢，我對花生過敏，花生粉放旁爿就好。",
    "歹勢，我對花生過敏，共花生粉拌予勻就好。"
  ],
  "answer": 0,
  "explanation": "對花生過敏時應清楚告知店家，避免食用含花生或可能交叉接觸花生的食物；不能只移除表面配料。"
},
  {
    "id": "food-025",
    "topic": "food",
    "type": "speaking",
    "difficulty": 1,
    "context": "你欲問朋友敢有食早餐。",
    "question": "會當按怎講？",
    "options": [
      "你有食暗頓無？",
      "你有食中晝無？",
      "你有食點心無？",
      "你有食早餐無？"
    ],
    "answer": 3,
    "explanation": "欲問對方早餐食了未，講「你有食早餐無？」就會使。"
  },
  {
    "id": "food-026",
    "topic": "food",
    "type": "speaking",
    "difficulty": 1,
    "context": "你感覺一碗湯傷鹹。",
    "question": "佗一句上適合？",
    "options": [
      "這碗湯傷鹹矣。",
      "這碗湯傷甜矣。",
      "這碗湯真冷。",
      "這碗湯無味。"
    ],
    "answer": 0,
    "explanation": "「傷鹹」就是太鹹，符合題目情境。"
  },
  {
    "id": "food-027",
    "topic": "food",
    "type": "speaking",
    "difficulty": 1,
    "context": "朋友請你食餅，你欲共伊道謝。",
    "question": "會當按怎講？",
    "options": [
      "多謝你。",
      "無要緊。",
      "免客氣。",
      "歹勢。"
    ],
    "answer": 0,
    "explanation": "接受別人的分享，講「多謝你」上適合。"
  },
  {
    "id": "food-028",
    "topic": "food",
    "type": "speaking",
    "difficulty": 2,
    "context": "你欲點飲料，而且希望冰較少。",
    "question": "佗一句上適合？",
    "options": [
      "一杯紅茶，糖較濟。",
      "一杯紅茶，冰較少。",
      "一杯紅茶，毋免吸管。",
      "一杯紅茶，換大碗。"
    ],
    "answer": 1,
    "explanation": "要求冰量較少，直接講「冰較少」符合點餐情境。"
  },
  {
    "id": "food-029",
    "topic": "food",
    "type": "speaking",
    "difficulty": 2,
    "context": "你欲問店員這道菜敢有辣。",
    "question": "會當按怎講？",
    "options": [
      "歹勢，這个敢有辣？",
      "歹勢，這个敢有花生？",
      "歹勢，這个敢有加糖？",
      "歹勢，這个敢有加冰？"
    ],
    "answer": 0,
    "explanation": "欲確認餐點有無辣，直接問「這个敢有辣？」最清楚。"
  },
  {
    "id": "food-030",
    "topic": "food",
    "type": "speaking",
    "difficulty": 2,
    "context": "你欲請同學共桌頂的筷仔提予你。",
    "question": "佗一句上適合？",
    "options": [
      "會當共筷仔提予我無？",
      "會當共湯匙提予我無？",
      "會當共碗提予我無？",
      "會當共盤仔提予我無？"
    ],
    "answer": 0,
    "explanation": "欲請對方提筷仔，直接講「共筷仔提予我」符合請求。"
  },
  {
    "id": "food-031",
    "topic": "food",
    "type": "speaking",
    "difficulty": 3,
    "context": "朋友一直欲共你挾菜，毋過你已經真飽，想有禮貌婉拒。",
    "question": "佗一句上適合？",
    "options": [
      "我攏毋食你挾的。",
      "多謝，我已經真飽矣，免閣挾予我。",
      "這盤菜真大盤。",
      "你莫閣食矣。"
    ],
    "answer": 1,
    "explanation": "先道謝閣說明家己真飽，是較有禮貌的婉拒方式。"
  },
  {
  "id": "food-032",
  "topic": "food",
  "type": "speaking",
  "difficulty": 3,
  "context": "你發現同學欲共食袂了的便當擲掉，想提醒伊下擺會當先評估食量，減少浪費。",
  "question": "佗一句上適合？",
  "options": [
    "下擺會當先買兩份，食袂了才擲掉。",
    "下擺會當共便當囥佇桌頂一工。",
    "下擺會當先評估食量，毋通買傷濟。",
    "下擺會當請別人一定愛食煞。"
  ],
  "answer": 2,
  "explanation": "先評估食量、避免買傷濟，比要求保存放置過久的剩食較安全。"
},
  {
    "id": "food-033",
    "topic": "food",
    "type": "judgement",
    "difficulty": 1,
    "context": "小華：「我朝早睏傷晏，無閒食早餐。」\n阿明：「難怪你頭拄仔一直講腹肚枵。」",
    "question": "小華為啥物腹肚枵？",
    "options": [
      "伊欲去運動。",
      "伊無帶冊。",
      "伊無食早餐。",
      "伊食傷濟。"
    ],
    "answer": 2,
    "explanation": "小華講家己朝早無閒食早餐，所以會腹肚枵。"
  },
  {
    "id": "food-034",
    "topic": "food",
    "type": "judgement",
    "difficulty": 1,
    "context": "店員：「你的麵欲加辣無？」\n小美：「毋免，我袂食辣。」",
    "question": "小美希望這碗麵按怎？",
    "options": [
      "辣加較濟。",
      "愛加糖。",
      "毋免加辣。",
      "毋免加麵。"
    ],
    "answer": 2,
    "explanation": "小美直接講「毋免，我袂食辣」，所以是毋免加辣。"
  },
  {
    "id": "food-035",
    "topic": "food",
    "type": "judgement",
    "difficulty": 1,
    "context": "阿玲：「這粒蘋果我食一半就飽矣。」\n阿芳：「賰的先囥冰箱，等一下閣食。」",
    "question": "阿芳建議按怎處理賰的蘋果？",
    "options": [
      "提去煮湯。",
      "閣買一粒。",
      "直接擲掉。",
      "先囥冰箱。"
    ],
    "answer": 3,
    "explanation": "阿芳直接建議「賰的先囥冰箱」。"
  },
  {
    "id": "food-036",
    "topic": "food",
    "type": "judgement",
    "difficulty": 2,
    "context": "阿傑：「你哪會無食這盤菜？」\n小琪：「我頭拄仔食了兩碗飯，這馬食袂落矣。」",
    "question": "小琪無食這盤菜的主要原因是啥物？",
    "options": [
      "伊無帶錢。",
      "伊已經真飽。",
      "伊無筷仔。",
      "伊毋知這是啥物。"
    ],
    "answer": 1,
    "explanation": "小琪講已經食兩碗飯、食袂落，表示主要是因為真飽。"
  },
  {
    "id": "food-037",
    "topic": "food",
    "type": "judgement",
    "difficulty": 2,
    "context": "小安：「這杯飲料甜甲我啉袂落。」\n小美：「下擺會當叫半糖抑是無糖。」",
    "question": "小美的建議是啥物？",
    "options": [
      "下擺冰加較濟。",
      "下擺糖叫較少。",
      "下擺毋免買食物。",
      "下擺換較大杯。"
    ],
    "answer": 1,
    "explanation": "半糖、無糖攏是減少糖量，所以建議是下擺糖叫較少。"
  },
  {
    "id": "food-038",
    "topic": "food",
    "type": "judgement",
    "difficulty": 2,
    "context": "老師：「欲食偌濟就挾偌濟，食煞若無夠才閣挾。」\n學生：「按呢就較袂食賰矣。」",
    "question": "老師主要欲提醒啥物？",
    "options": [
      "愛先食甜點。",
      "逐个人攏愛食仝款。",
      "愛食較緊。",
      "毋通挾傷濟造成浪費。"
    ],
    "answer": 3,
    "explanation": "老師強調食偌濟挾偌濟，目的就是避免食賰造成浪費。"
  },
  {
    "id": "food-039",
    "topic": "food",
    "type": "judgement",
    "difficulty": 3,
    "context": "阿文：「這盤炸物真芳，咱閣點一盤？」\n阿玲：「咱桌頂猶有兩盤未食煞，先食看覓啦。」",
    "question": "阿玲按呢講上可能是因為啥物？",
    "options": [
      "伊欲隨時轉去。",
      "伊毋知炸物是啥物。",
      "伊驚點傷濟食袂了。",
      "伊無帶筷仔。"
    ],
    "answer": 2,
    "explanation": "桌頂猶有兩盤未食煞，先食看覓表示伊驚點傷濟會食袂了。"
  },
  {
    "id": "food-040",
    "topic": "food",
    "type": "judgement",
    "difficulty": 3,
    "context": "小美：「這塊餅有花生，你會使食無？」\n阿哲：「我袂使食花生，毋過多謝你先問我。」",
    "question": "小美先問的主要目的可能是啥物？",
    "options": [
      "問阿哲欲食幾塊。",
      "問阿哲敢有帶錢。",
      "問阿哲餅佇佗位買。",
      "確認阿哲敢會使食這个食物。"
    ],
    "answer": 3,
    "explanation": "分享食物進前先確認對方敢會食其中的成分，是為著避免對方食著袂使食的物件。"
  }
],
  "family": [
  {
    "id": "family-001",
    "topic": "family",
    "type": "scene",
    "difficulty": 1,
    "context": "阿媽提重物欲入厝，你看著矣。",
    "question": "你會當按怎講？",
    "options": [
      "阿媽，我來共你提。",
      "阿媽，這袋物件會傷重無？",
      "阿媽，你欲共物件囥佇佗位？",
      "阿媽，這袋物件是啥物？"
    ],
    "answer": 0,
    "explanation": "看著長輩提重物，主動表示欲鬥相共。"
  },
  {
    "id": "family-002",
    "topic": "family",
    "type": "scene",
    "difficulty": 1,
    "context": "阿爸咧煮暗頓，你欲問有啥物通鬥相共。",
    "question": "佗一句上適合？",
    "options": [
      "暗頓敢煮好矣？",
      "阿爸，我會當鬥做啥物？",
      "阿爸，你今仔日煮啥物？",
      "阿爸，你欲先煮菜抑是煮飯？"
    ],
    "answer": 1,
    "explanation": "詢問會當鬥做啥物，是主動分擔家事。"
  },
  {
    "id": "family-003",
    "topic": "family",
    "type": "scene",
    "difficulty": 1,
    "context": "你欲出門，阿母佇客廳。",
    "question": "你應該按怎講？",
    "options": [
      "阿母，我昨昏較晏轉來。",
      "阿母，我的衫囥佇佗位？",
      "阿母，我欲出去一下。",
      "阿母，我有物件欲共你講。"
    ],
    "answer": 2,
    "explanation": "出門進前共家人交代一聲，符合情境。"
  },
  {
    "id": "family-004",
    "topic": "family",
    "type": "scene",
    "difficulty": 2,
    "context": "阿兄咧讀冊，你欲聽音樂，驚吵著伊。",
    "question": "你會當按怎問？",
    "options": [
      "你欲讀到啥物時陣？",
      "我欲共音樂開大聲，你免理我。",
      "你讀冊愛坐佇遮無？",
      "我欲聽音樂，會吵著你無？"
    ],
    "answer": 3,
    "explanation": "先詢問聲量敢會影響對方，較會體貼家人。"
  },
  {
    "id": "family-005",
    "topic": "family",
    "type": "scene",
    "difficulty": 2,
    "context": "厝裡欲大掃除，阿姊已經咧拭桌仔。",
    "question": "你會當按怎講？",
    "options": [
      "我來掃塗跤，咱做伙較緊。",
      "阿姊，你拭桌仔拭好未？",
      "阿姊，掃帚囥佇佗位？",
      "阿姊，你欲先掃塗跤抑是拭桌仔？"
    ],
    "answer": 0,
    "explanation": "提出具體分工，符合共同整理環境的情境。"
  },
  {
    "id": "family-006",
    "topic": "family",
    "type": "scene",
    "difficulty": 2,
    "context": "你較晏轉到厝，家人咧煩惱。",
    "question": "佗一句上適合？",
    "options": [
      "我有轉來就好，免閣問。",
      "歹勢，我較晏轉來，後擺會先講。",
      "我頭拄仔咧外口，無閒通講。",
      "我下擺較晏轉來，你就知影矣。"
    ],
    "answer": 1,
    "explanation": "先說明並道歉，承諾下次提早通知。"
  },
  {
    "id": "family-007",
    "topic": "family",
    "type": "scene",
    "difficulty": 3,
    "context": "阿公袂曉用手機看相片，你欲教伊。",
    "question": "佗一句較合適？",
    "options": [
      "阿公，你家己看說明書就好。",
      "阿公，這支手機是啥物牌？",
      "阿公，我慢慢仔教你按怎看。",
      "阿公，你若袂曉，就先莫看。"
    ],
    "answer": 2,
    "explanation": "願意放慢速度說明，符合協助長輩的情境。"
  },
  {
    "id": "family-008",
    "topic": "family",
    "type": "scene",
    "difficulty": 3,
    "context": "家人咧討論週末欲去佗位，逐个人意見無仝。",
    "question": "你會當按怎講？",
    "options": [
      "咱先去我想欲去的所在。",
      "若無仝意，這擺就免出門。",
      "我無愛講，恁家己決定。",
      "咱逐个講看覓，再來決定。"
    ],
    "answer": 3,
    "explanation": "先聽逐个人的意見再做決定。"
  },
  {
    "id": "family-009",
    "topic": "family",
    "type": "cloze",
    "difficulty": 1,
    "context": "「阿母今仔日真無閒，我欲鬥伊＿＿＿＿。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "做家事",
      "睏晝",
      "看戲",
      "𨑨迌"
    ],
    "answer": 0,
    "explanation": "家人無閒時主動鬥做家事，語意相合。"
  },
  {
    "id": "family-010",
    "topic": "family",
    "type": "cloze",
    "difficulty": 1,
    "context": "「欲食飯矣，阿爸叫我先去＿＿＿＿。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "穿鞋",
      "洗手",
      "寫批",
      "看冊"
    ],
    "answer": 1,
    "explanation": "食飯進前先洗手，符合日常生活。"
  },
  {
    "id": "family-011",
    "topic": "family",
    "type": "cloze",
    "difficulty": 1,
    "context": "「阿媽講伊寒著矣，我共窗仔＿＿＿＿。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "拍開來",
      "拭清氣",
      "關起來",
      "搬出去"
    ],
    "answer": 2,
    "explanation": "感覺寒時共窗仔關起來，符合情境。"
  },
  {
    "id": "family-012",
    "topic": "family",
    "type": "cloze",
    "difficulty": 2,
    "context": "「阿兄猶咧睏，咱講話愛＿＿＿＿，才袂吵醒伊。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "較大聲",
      "較緊",
      "較慢",
      "較細聲"
    ],
    "answer": 3,
    "explanation": "避免吵醒人，講話就愛較細聲。"
  },
  {
    "id": "family-013",
    "topic": "family",
    "type": "cloze",
    "difficulty": 2,
    "context": "「我欲借阿姊的冊，愛先共伊＿＿＿＿。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "問一下",
      "食一下",
      "洗一下",
      "擲一下"
    ],
    "answer": 0,
    "explanation": "借用別人的物件，應先詢問。"
  },
  {
    "id": "family-014",
    "topic": "family",
    "type": "cloze",
    "difficulty": 2,
    "context": "「阮厝逐禮拜攏會做伙＿＿＿＿，共厝裡整理清氣。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "唱歌",
      "掃除",
      "買衫",
      "畫圖"
    ],
    "answer": 1,
    "explanation": "整理厝裡清氣，符合掃除的意思。"
  },
  {
    "id": "family-015",
    "topic": "family",
    "type": "cloze",
    "difficulty": 3,
    "context": "「阿母講做家事毋是一个人的代誌，逐家愛＿＿＿＿。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "攏毋免做",
      "攏等別人",
      "做伙分擔",
      "做予一个人"
    ],
    "answer": 2,
    "explanation": "家事應共同分擔，不是單一人的責任。"
  },
  {
    "id": "family-016",
    "topic": "family",
    "type": "cloze",
    "difficulty": 3,
    "context": "「家人有無仝的想法，咱愛先＿＿＿＿，毋通隨便罵人。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "大聲講贏",
      "先決定好",
      "搶先講",
      "聽伊講"
    ],
    "answer": 3,
    "explanation": "有意見差異時先聆聽，有助於溝通。"
  },
  {
    "id": "family-017",
    "topic": "family",
    "type": "dialogue",
    "difficulty": 1,
    "context": "阿母：「你食飽未？」\n阿明：「＿＿＿＿」",
    "question": "若阿明已經食飽，閣想多謝阿母，佗一句上適合？",
    "options": [
      "食飽矣，多謝阿母。",
      "猶未，我等一下才欲食。",
      "我今仔日無啥食欲。",
      "我欲先啉一杯水。"
    ],
    "answer": 0,
    "explanation": "題目指定已吃飽並道謝，因此選擇「食飽矣，多謝阿母」。其他回應可能在不同情況成立，但不符合指定條件。"
  },
  {
    "id": "family-018",
    "topic": "family",
    "type": "dialogue",
    "difficulty": 1,
    "context": "阿爸：「你會當鬥我提這袋物件無？」\n小華：「＿＿＿＿」",
    "question": "小華按怎應上自然？",
    "options": [
      "這袋物件欲提去佗位？",
      "會使，我來提。",
      "這袋物件敢會傷重？",
      "我頭拄仔有提過一袋矣。"
    ],
    "answer": 1,
    "explanation": "對方請求協助，答應並採取行動。"
  },
  {
    "id": "family-019",
    "topic": "family",
    "type": "dialogue",
    "difficulty": 1,
    "context": "阿姊：「我的水壺你有看著無？」\n阿弟：「＿＿＿＿」",
    "question": "阿弟按怎應上自然？",
    "options": [
      "我有看著一支別人的水壺。",
      "你的水壺是啥物色？",
      "有，佇桌頂。",
      "我今仔日無帶水壺。"
    ],
    "answer": 2,
    "explanation": "回答有無看著，並指出位置。"
  },
  {
    "id": "family-020",
    "topic": "family",
    "type": "dialogue",
    "difficulty": 2,
    "context": "阿媽：「我袂曉用這个遙控器。」\n孫仔：「＿＿＿＿」",
    "question": "孫仔按怎應上自然？",
    "options": [
      "這个遙控器有真濟鈕。",
      "你欲看佗一个節目？",
      "你先家己試看覓啦。",
      "我教你按佗一个鈕。"
    ],
    "answer": 3,
    "explanation": "對方袂曉使用，應提供具體協助。"
  },
  {
    "id": "family-021",
    "topic": "family",
    "type": "dialogue",
    "difficulty": 2,
    "context": "阿兄：「我這馬欲讀冊，會當請你較細聲無？」\n阿妹：「＿＿＿＿」",
    "question": "阿妹按怎應上自然？",
    "options": [
      "好，我共聲音轉細。",
      "你讀冊讀到啥物時陣？",
      "我欲聽一下音樂就好。",
      "我等一下才欲讀冊。"
    ],
    "answer": 0,
    "explanation": "對方希望較安靜，直接調低音量。"
  },
  {
    "id": "family-022",
    "topic": "family",
    "type": "dialogue",
    "difficulty": 2,
    "context": "阿爸：「今仔日輪著你倒糞埽，記得無？」\n阿哲：「＿＿＿＿」",
    "question": "阿哲按怎應上自然？",
    "options": [
      "糞埽車敢猶未來？",
      "記得，我等一下就去倒。",
      "今仔日的糞埽敢有真濟？",
      "你今仔日欲倒佗一袋？"
    ],
    "answer": 1,
    "explanation": "回應家事提醒並交代何時處理。"
  },
  {
    "id": "family-023",
    "topic": "family",
    "type": "dialogue",
    "difficulty": 3,
    "context": "阿姊：「你無共我講就提我的衫去穿，我無歡喜。」\n阿弟：「＿＿＿＿」",
    "question": "阿弟按怎應上自然？",
    "options": [
      "我以為你無咧穿這領衫。",
      "這領衫我已經穿出來矣。",
      "歹勢，後擺我會先問你。",
      "我下擺提別領就好。"
    ],
    "answer": 2,
    "explanation": "承認未先詢問並表示會改進。"
  },
  {
    "id": "family-024",
    "topic": "family",
    "type": "dialogue",
    "difficulty": 3,
    "context": "阿母：「拜六欲去看阿公，毋過阿爸彼工愛做工。」\n小安：「＿＿＿＿」",
    "question": "小安按怎應上自然？",
    "options": [
      "阿公敢知影咱欲去？",
      "咱拜六先去看阿公就好。",
      "阿爸無閒，咱就攏免去。",
      "咱會當先問阿公，改拜日好無？"
    ],
    "answer": 3,
    "explanation": "提出協調時間的具體方法。"
  },
  {
    "id": "family-025",
    "topic": "family",
    "type": "speaking",
    "difficulty": 1,
    "context": "你想請阿爸幫忙修理壞掉的椅仔。",
    "question": "佗一句上適合？",
    "options": [
      "阿爸，你會當鬥我修椅仔無？",
      "阿爸，這張椅仔啥物時陣買的？",
      "阿爸，這張椅仔是啥物材質？",
      "阿爸，這張椅仔囥佇佗位較好？"
    ],
    "answer": 0,
    "explanation": "用「會當……無」禮貌提出請求。"
  },
  {
    "id": "family-026",
    "topic": "family",
    "type": "speaking",
    "difficulty": 1,
    "context": "阿母煮好飯，你想表示感謝。",
    "question": "佗一句上適合？",
    "options": [
      "阿母，今仔日的飯菜有真濟。",
      "多謝阿母，辛苦矣。",
      "阿母，你今仔日煮幾項菜？",
      "阿母，你是啥物時陣開始煮的？"
    ],
    "answer": 1,
    "explanation": "感謝對方準備飯菜，符合情境。"
  },
  {
  "id": "family-027",
  "topic": "family",
  "type": "speaking",
  "difficulty": 1,
  "context": "阿媽這幾工身體無爽快，你欲關心伊敢有較好。",
  "question": "佗一句上適合？",
  "options": [
    "阿媽，你有較好無？",
    "阿媽，你欲食啥物？",
    "阿媽，你欲去佗位？",
    "阿媽，你的目鏡佇佗位？"
  ],
  "answer": 0,
  "explanation": "關心阿媽身體敢有較好，會當問「阿媽，你有較好無？」。"
},
  {
    "id": "family-028",
    "topic": "family",
    "type": "speaking",
    "difficulty": 2,
    "context": "你借用阿兄的物件，想先得到同意。",
    "question": "佗一句上適合？",
    "options": [
      "阿兄，這个我提去用一下喔。",
      "阿兄，你無咧用，我先提去。",
      "阿兄，這个我會用啦。",
      "阿兄，這个會當借我用一下無？"
    ],
    "answer": 3,
    "explanation": "借物件進前先詢問。"
  },
  {
    "id": "family-029",
    "topic": "family",
    "type": "speaking",
    "difficulty": 2,
    "context": "家人做家事做甲真累，你欲請伊先歇睏。",
    "question": "佗一句上適合？",
    "options": [
      "你先歇睏一下，賰的我來做。",
      "你若做較緊，等一下就會使歇睏。",
      "你做甲遮爾累，哪會無先講？",
      "我先歇睏，等一下閣來鬥做。"
    ],
    "answer": 0,
    "explanation": "關心家人疲累並主動接手。"
  },
  {
    "id": "family-030",
    "topic": "family",
    "type": "speaking",
    "difficulty": 2,
    "context": "你臨時無法照原本約定的時間倒糞埽，想先交代。",
    "question": "佗一句上適合？",
    "options": [
      "今仔日的糞埽真濟，我等你倒就好。",
      "歹勢，我這馬有代誌，等一下才去倒，會使無？",
      "今仔日的糞埽真濟，你先倒，我下擺閣做。",
      "糞埽車欲來矣，我這馬欲先去買物件。"
    ],
    "answer": 1,
    "explanation": "說明原因並協調新的時間。"
  },
  {
    "id": "family-031",
    "topic": "family",
    "type": "speaking",
    "difficulty": 3,
    "context": "家人咧講一件你無仝意的代誌，你欲有禮貌表達想法。",
    "question": "佗一句上適合？",
    "options": [
      "我有無仝的想法，毋過這擺毋免討論。",
      "我有無仝的想法，咱就照我的做。",
      "我有無仝的想法，會當予我講一下無？",
      "我有無仝的想法，你先莫講矣。"
    ],
    "answer": 2,
    "explanation": "有禮貌提出不同想法，避免直接否定對方。"
  },
  {
    "id": "family-032",
    "topic": "family",
    "type": "speaking",
    "difficulty": 3,
    "context": "你發現家事分工無平均，想提出討論。",
    "question": "佗一句上適合？",
    "options": [
      "家事攏毋是我的代誌。",
      "我以後攏無愛做。",
      "你家己做就好。",
      "咱會當閣討論一下家事按怎分工無？"
    ],
    "answer": 3,
    "explanation": "以討論方式協調家事分工。"
  },
  {
    "id": "family-033",
    "topic": "family",
    "type": "judgement",
    "difficulty": 1,
    "context": "阿爸：「你若欲出去，記得共厝裡的人講一聲。」\n阿明：「好，我會記得。」",
    "question": "阿爸主要咧提醒啥物？",
    "options": [
      "出門愛先告知家人。",
      "出門愛先確認時間。",
      "出門愛先整理物件。",
      "出門愛先安排交通。"
    ],
    "answer": 0,
    "explanation": "出門前共家人講一聲，是交代行蹤。"
  },
  {
    "id": "family-034",
    "topic": "family",
    "type": "judgement",
    "difficulty": 1,
    "context": "阿母：「碗箸食煞愛收起來。」\n小美：「好，我來收。」",
    "question": "小美接下來上可能做啥物？",
    "options": [
      "共桌仔拭清氣。",
      "收碗箸。",
      "共菜端入去。",
      "共地板掃清氣。"
    ],
    "answer": 1,
    "explanation": "答應收碗箸，應接著整理餐具。"
  },
  {
    "id": "family-035",
    "topic": "family",
    "type": "judgement",
    "difficulty": 1,
    "context": "阿公：「我的目鏡毋知囥佇佗位。」\n小華：「我鬥你揣。」",
    "question": "小華欲做啥物？",
    "options": [
      "問阿公目鏡的款式。",
      "鬥阿公買新目鏡。",
      "鬥阿公揣目鏡。",
      "共目鏡囥入櫥仔。"
    ],
    "answer": 2,
    "explanation": "「鬥你揣」就是協助尋找。"
  },
  {
    "id": "family-036",
    "topic": "family",
    "type": "judgement",
    "difficulty": 2,
    "context": "阿姊：「你欲用我的電腦，愛先問我。」\n阿弟：「我知影矣。」",
    "question": "阿姊上在意啥物？",
    "options": [
      "電腦愛保持清氣。",
      "電腦用煞愛關機。",
      "電腦愛囥佇桌頂。",
      "使用進前先徵求同意。"
    ],
    "answer": 3,
    "explanation": "重點是尊重物件的使用權。"
  },
  {
    "id": "family-037",
    "topic": "family",
    "type": "judgement",
    "difficulty": 2,
    "context": "阿母：「咱厝的家事逐个人攏有份，毋是我一个人的。」\n阿明：「按呢咱來分工。」",
    "question": "這段對話主要咧講啥物？",
    "options": [
      "家事愛共同分擔。",
      "家事愛排好時間。",
      "家事愛用仝款方式做。",
      "家事愛先準備工具。"
    ],
    "answer": 0,
    "explanation": "家事不是單一成員的責任。"
  },
  {
    "id": "family-038",
    "topic": "family",
    "type": "judgement",
    "difficulty": 2,
    "context": "阿兄：「你頭拄仔講話傷大聲，我無法度專心。」\n阿妹：「歹勢，我會較細聲。」",
    "question": "阿妹做啥物改變？",
    "options": [
      "停止讀冊。",
      "降低講話聲量。",
      "換去別間房間。",
      "改用耳機聽音樂。"
    ],
    "answer": 1,
    "explanation": "阿妹承諾會較細聲。"
  },
  {
    "id": "family-039",
    "topic": "family",
    "type": "judgement",
    "difficulty": 3,
    "context": "阿爸：「這禮拜逐家攏真無閒，拜日才來掃除好無？」\n阿母：「好，咱先共時間講好。」",
    "question": "這段對話顯示家人按怎處理家事？",
    "options": [
      "逐家攏等拜日才做。",
      "予阿爸家己決定。",
      "討論時間，協調安排。",
      "等別人先做。"
    ],
    "answer": 2,
    "explanation": "雙方討論並約定時間。"
  },
  {
    "id": "family-040",
    "topic": "family",
    "type": "judgement",
    "difficulty": 3,
    "context": "阿媽：「我想欲家己試看覓用手機。」\n孫仔：「好，我佇邊仔，有需要閣叫我。」",
    "question": "孫仔的做法上符合佗一个意思？",
    "options": [
      "孫仔欲教阿媽逐个鈕按看覓。",
      "孫仔欲共手機先收起來。",
      "孫仔欲替阿媽做所有操作。",
      "尊重阿媽家己試，嘛願意協助。"
    ],
    "answer": 3,
    "explanation": "尊重長輩自主嘗試，並提供需要時的協助。"
  }
],
  "transport": [
  {
    "id": "transport-001",
    "topic": "transport",
    "type": "scene",
    "difficulty": 1,
    "context": "你欲搭公車，毋知影站牌佇佗位。",
    "question": "佗一句上適合？",
    "options": [
      "歹勢，請問公車站牌佇佗位？",
      "歹勢，請問這站牌有幾班車？",
      "歹勢，請問這班車啥物時陣來？",
      "歹勢，請問這站牌有車到車頭無？"
    ],
    "answer": 0,
    "explanation": "問路應明確詢問站牌的位置。"
  },
  {
    "id": "transport-002",
    "topic": "transport",
    "type": "scene",
    "difficulty": 1,
    "context": "落雨矣，你欲出門行路去學校。",
    "question": "佗一句上適合？",
    "options": [
      "落雨嘛無要緊，我免紮雨具。",
      "外口咧落雨，我愛紮雨傘。",
      "落雨就愛行較緊，較袂淋著雨。",
      "外口咧落雨，我愛穿較薄的衫。"
    ],
    "answer": 1,
    "explanation": "下雨出門需準備雨具。"
  },
  {
    "id": "transport-003",
    "topic": "transport",
    "type": "scene",
    "difficulty": 1,
    "context": "你欲過馬路，路口的紅燈猶未轉綠。",
    "question": "佗一句上適合？",
    "options": [
      "咱先看有車無，無車就直接過。",
      "咱先行到路中央，閣等綠燈。",
      "咱先等綠燈，才過馬路。",
      "咱看別人有過，就做伙過。"
    ],
    "answer": 2,
    "explanation": "應等行人通行號誌允許才過馬路。"
  },
  {
    "id": "transport-004",
    "topic": "transport",
    "type": "scene",
    "difficulty": 2,
    "context": "公車欲來矣，站牌前有真濟人咧等。",
    "question": "佗一句上適合？",
    "options": [
      "公車欲來矣，咱先徛佇車門口擋位。",
      "公車欲來矣，咱看佗一个先上車。",
      "公車欲來矣，咱趕緊行到隊伍頭前。",
      "咱照順序排隊，毋通相搶。"
    ],
    "answer": 3,
    "explanation": "候車應依序排隊。"
  },
  {
    "id": "transport-005",
    "topic": "transport",
    "type": "scene",
    "difficulty": 2,
    "context": "你坐公車，看著一位老人家徛咧。",
    "question": "佗一句上適合？",
    "options": [
      "阿伯，這个位予你坐。",
      "阿伯，你敢欲佇下一站落車？",
      "阿伯，你欲徛佇車門邊無？",
      "阿伯，你敢知影下一站是佗位？"
    ],
    "answer": 0,
    "explanation": "主動讓座符合情境。"
  },
  {
    "id": "transport-006",
    "topic": "transport",
    "type": "scene",
    "difficulty": 2,
    "context": "你欲去車頭搭火車，毋知影月台佇佗位。",
    "question": "佗一句上適合？",
    "options": [
      "請問這班車幾點開？",
      "請問欲搭這班車，愛去佗一个月台？",
      "請問這班車有停佇佗一站？",
      "請問這張車票愛按怎買？"
    ],
    "answer": 1,
    "explanation": "詢問月台能幫助確認搭車位置。"
  },
  {
    "id": "transport-007",
    "topic": "transport",
    "type": "scene",
    "difficulty": 3,
    "context": "你佇車站發現火車誤點，欲通知咧等你的人。",
    "question": "佗一句上適合？",
    "options": [
      "火車較晏到，你敢已經到車站矣？",
      "火車較晏到，你會當等我一下無？",
      "火車較晏到，我可能會較晏到，歹勢。",
      "火車較晏到，咱欲改搭別班無？"
    ],
    "answer": 2,
    "explanation": "行程延誤應主動通知對方。"
  },
  {
    "id": "transport-008",
    "topic": "transport",
    "type": "scene",
    "difficulty": 3,
    "context": "你佇無熟似的所在迷路矣，欲請人鬥相共。",
    "question": "佗一句上適合？",
    "options": [
      "歹勢，我揣無路，你敢知影這條路的名？",
      "歹勢，我揣無路，你敢嘛欲去彼爿？",
      "歹勢，我揣無路，你敢有來過遮？",
      "歹勢，我揣無路，會當請你共我指路無？"
    ],
    "answer": 3,
    "explanation": "迷路時可禮貌詢問方向。"
  },
  {
    "id": "transport-009",
    "topic": "transport",
    "type": "cloze",
    "difficulty": 1,
    "context": "「過馬路愛看＿＿＿＿，毋通直接衝過去。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "紅綠燈",
      "菜單",
      "電視",
      "桌仔"
    ],
    "answer": 0,
    "explanation": "過馬路應注意號誌。"
  },
  {
    "id": "transport-010",
    "topic": "transport",
    "type": "cloze",
    "difficulty": 1,
    "context": "「我欲搭公車，愛先去＿＿＿＿等車。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "廚房",
      "站牌",
      "操場中央",
      "眠床"
    ],
    "answer": 1,
    "explanation": "搭公車應到站牌或指定候車處。"
  },
  {
    "id": "transport-011",
    "topic": "transport",
    "type": "cloze",
    "difficulty": 1,
    "context": "「公車頂人真濟，咱愛共扶手＿＿＿＿。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "食落去",
      "寫落去",
      "扶予牢",
      "擲出去"
    ],
    "answer": 2,
    "explanation": "搭車站立時要扶穩。"
  },
  {
    "id": "transport-012",
    "topic": "transport",
    "type": "cloze",
    "difficulty": 2,
    "context": "「欲搭火車進前，愛先確認＿＿＿＿佮時間。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "菜色",
      "衫仔",
      "功課",
      "車次"
    ],
    "answer": 3,
    "explanation": "搭火車前應核對車次及時間。"
  },
  {
    "id": "transport-013",
    "topic": "transport",
    "type": "cloze",
    "difficulty": 2,
    "context": "「落雨天騎車，路面較＿＿＿＿，愛較細膩。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "滑",
      "甜",
      "芳",
      "燒"
    ],
    "answer": 0,
    "explanation": "雨天路滑需注意安全。"
  },
  {
    "id": "transport-014",
    "topic": "transport",
    "type": "cloze",
    "difficulty": 2,
    "context": "「路口車真濟，咱先＿＿＿＿，看清楚才過。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "唱歌",
      "停落來",
      "睏晝",
      "食飯"
    ],
    "answer": 1,
    "explanation": "過路口前停看聽。"
  },
  {
    "id": "transport-015",
    "topic": "transport",
    "type": "cloze",
    "difficulty": 3,
    "context": "「我毋知影欲按怎去圖書館，先共人＿＿＿＿。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "借碗",
      "洗衫",
      "問路",
      "煮飯"
    ],
    "answer": 2,
    "explanation": "不清楚路線時可先問路。"
  },
  {
    "id": "transport-016",
    "topic": "transport",
    "type": "cloze",
    "difficulty": 3,
    "context": "「若是趕袂赴這班車，就愛＿＿＿＿下一班的時間。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "煮",
      "洗",
      "畫",
      "查"
    ],
    "answer": 3,
    "explanation": "錯過班次時查詢下一班車。"
  },
  {
    "id": "transport-017",
    "topic": "transport",
    "type": "dialogue",
    "difficulty": 1,
    "context": "阿明：「請問公車站佇佗位？」\n路人：「＿＿＿＿」",
    "question": "路人按怎應上自然？",
    "options": [
      "佇前面的路口，向正爿轉。",
      "這站牌的車一點鐘來一班。",
      "欲搭公車愛先準備車資。",
      "你欲搭的公車是幾號？"
    ],
    "answer": 0,
    "explanation": "回答位置及方向。"
  },
  {
    "id": "transport-018",
    "topic": "transport",
    "type": "dialogue",
    "difficulty": 1,
    "context": "阿母：「你到車站矣未？」\n小安：「＿＿＿＿」",
    "question": "小安按怎應上自然？",
    "options": [
      "我已經到車站，咧等你。",
      "猶未，我閣五分鐘就到。",
      "我猶佇厝裡，欲等一下才出門。",
      "我已經上車矣，毋免去車站。"
    ],
    "answer": 1,
    "explanation": "直接回答抵達狀態。"
  },
  {
    "id": "transport-019",
    "topic": "transport",
    "type": "dialogue",
    "difficulty": 1,
    "context": "阿姊：「外口落雨，你有紮雨傘無？」\n阿弟：「＿＿＿＿」",
    "question": "阿弟按怎應上自然？",
    "options": [
      "我欲去看冊。",
      "這雙鞋真媠。",
      "有，我有紮雨傘。",
      "阿姊佇厝裡。"
    ],
    "answer": 2,
    "explanation": "回應是否攜帶雨傘。"
  },
  {
    "id": "transport-020",
    "topic": "transport",
    "type": "dialogue",
    "difficulty": 2,
    "context": "司機：「這站欲落車的人，請準備。」\n乘客：「＿＿＿＿」",
    "question": "乘客按怎應上自然？",
    "options": [
      "我欲食暗頓。",
      "我昨昏有讀冊。",
      "這台車真新。",
      "好，我欲佇這站落車。"
    ],
    "answer": 3,
    "explanation": "回應下車提醒。"
  },
  {
    "id": "transport-021",
    "topic": "transport",
    "type": "dialogue",
    "difficulty": 2,
    "context": "同學：「咱欲去的所在，是毋是過彼个路口？」\n你：「＿＿＿＿」",
    "question": "你按怎應上自然？",
    "options": [
      "咱先看地圖確認一下。",
      "咱先問這條路有幾間店。",
      "咱先確認集合時間有改無。",
      "咱先看公車幾點會來。"
    ],
    "answer": 0,
    "explanation": "不確定路線時先確認。"
  },
  {
    "id": "transport-022",
    "topic": "transport",
    "type": "dialogue",
    "difficulty": 2,
    "context": "阿爸：「你搭的火車幾點到？」\n小美：「＿＿＿＿」",
    "question": "小美按怎應上自然？",
    "options": [
      "我欲買一領衫。",
      "照時刻表是下晡三點到。",
      "火車有真濟車廂。",
      "今仔日真熱。"
    ],
    "answer": 1,
    "explanation": "回答預計到站時間。"
  },
  {
    "id": "transport-023",
    "topic": "transport",
    "type": "dialogue",
    "difficulty": 3,
    "context": "同學：「這條路咱無熟，按怎行較好？」\n你：「＿＿＿＿」",
    "question": "你按怎應上自然？",
    "options": [
      "咱先問這條路敢有公車行。",
      "咱先揣看有啥物所在通歇睏。",
      "咱先查地圖，揣較安全的路。",
      "咱先看車站的時刻表。"
    ],
    "answer": 2,
    "explanation": "先確認安全路線。"
  },
  {
    "id": "transport-024",
    "topic": "transport",
    "type": "dialogue",
    "difficulty": 3,
    "context": "朋友：「公車已經開走矣，按怎辦？」\n你：「＿＿＿＿」",
    "question": "你按怎應上自然？",
    "options": [
      "咱先看這站牌有啥物車會來。",
      "咱先看欲去的所在有偌遠。",
      "咱先問別人這班車欲去佗位。",
      "咱來查下一班幾點到，閣決定。"
    ],
    "answer": 3,
    "explanation": "錯過公車後應查詢替代班次。"
  },
  {
  "id": "transport-025",
  "topic": "transport",
  "type": "speaking",
  "difficulty": 1,
  "context": "你想問捷運站怎麼走。",
  "question": "佗一句上適合？",
  "options": [
    "歹勢，請問欲去捷運站愛按怎行？",
    "歹勢，請問捷運幾點開？",
    "歹勢，請問捷運票欲去佗位買？",
    "歹勢，請問這站捷運有幾个出口？"
  ],
  "answer": 0,
  "explanation": "問「欲去捷運站愛按怎行？」是詢問到捷運站的路線。"
},
  {
    "id": "transport-026",
    "topic": "transport",
    "type": "speaking",
    "difficulty": 1,
    "context": "你佮朋友佇有紅綠燈的路口，朋友欲過馬路，你想提醒伊先確認號誌及來車。",
    "question": "佗一句上適合？",
    "options": [
      "咱看著無車就直接過，毋免看燈。",
      "咱緊衝過去，較袂予車擋著。",
      "咱等綠燈，閣注意車，才行斑馬線。",
      "咱先看手機，等一下才過。"
    ],
    "answer": 2,
    "explanation": "行人應依號誌通行，走行人穿越道並留意轉彎及其他車輛。"
  },
  {
  "id": "transport-027",
  "topic": "transport",
  "type": "speaking",
  "difficulty": 1,
  "context": "你想告訴家人自己會晚一點到家。",
  "question": "佗一句上適合？",
  "options": [
    "我今仔日會較早到厝。",
    "我今仔日會較晏到厝。",
    "我今仔日欲先去買物件。",
    "我今仔日想欲較早睏。"
  ],
  "answer": 1,
  "explanation": "「較晏到厝」是告知家人今天比較晚到家。"
},
  {
    "id": "transport-028",
    "topic": "transport",
    "type": "speaking",
    "difficulty": 2,
    "context": "你想請旁邊乘客讓你下車。",
    "question": "佗一句上適合？",
    "options": [
      "你坐佇佗位？",
      "這站真濟人。",
      "我昨昏有看戲。",
      "歹勢，我欲落車，借過一下。"
    ],
    "answer": 3,
    "explanation": "禮貌請求讓路。"
  },
  {
    "id": "transport-029",
    "topic": "transport",
    "type": "speaking",
    "difficulty": 2,
    "context": "你想問司機這班車會不會到醫院。",
    "question": "佗一句上適合？",
    "options": [
      "請問這班車有到病院無？",
      "請問這班車有經過車頭無？",
      "請問這班車有到學校無？",
      "請問這班車有停佇市場無？"
    ],
    "answer": 0,
    "explanation": "直接確認行經地點。"
  },
  {
    "id": "transport-030",
    "topic": "transport",
    "type": "speaking",
    "difficulty": 2,
    "context": "你想跟朋友確認集合的地點。",
    "question": "佗一句上適合？",
    "options": [
      "我欲先睏一下。",
      "咱約佇車站的出口等，好無？",
      "車站真大間。",
      "你欲食啥物？"
    ],
    "answer": 1,
    "explanation": "提出具體集合地點。"
  },
  {
    "id": "transport-031",
    "topic": "transport",
    "type": "speaking",
    "difficulty": 3,
    "context": "你發現朋友欲邊行路邊看手機。",
    "question": "佗一句上適合？",
    "options": [
      "你行較緊咧。",
      "免看路啦。",
      "咱先停落來才看手機，較安全。",
      "我欲去買新衫。"
    ],
    "answer": 2,
    "explanation": "提醒行路專心。"
  },
  {
    "id": "transport-032",
    "topic": "transport",
    "type": "speaking",
    "difficulty": 3,
    "context": "你搭錯車，想請站務人員協助。",
    "question": "佗一句上適合？",
    "options": [
      "歹勢，我毋知影車票欲去佗位買。",
      "歹勢，我揣無月台，請問佇佗位？",
      "歹勢，我欲查這班車幾點到。",
      "歹勢，我搭毋著車，請問按怎轉車？"
    ],
    "answer": 3,
    "explanation": "清楚說明問題並詢問轉乘。"
  },
  {
    "id": "transport-033",
    "topic": "transport",
    "type": "judgement",
    "difficulty": 1,
    "context": "阿爸：「過馬路愛行斑馬線。」\n小安：「好，我知影。」",
    "question": "阿爸主要咧提醒啥物？",
    "options": [
      "過馬路愛行斑馬線。",
      "過馬路愛跑較緊。",
      "出門愛帶水壺。",
      "愛先買車票。"
    ],
    "answer": 0,
    "explanation": "提醒遵守行人穿越規則。"
  },
  {
    "id": "transport-034",
    "topic": "transport",
    "type": "judgement",
    "difficulty": 1,
    "context": "同學：「公車欲來矣，咱先排隊。」\n你：「好。」",
    "question": "這段對話主要咧講啥物？",
    "options": [
      "坐車愛食物件。",
      "候車愛照順序排隊。",
      "出門愛穿新衫。",
      "毋免等車。"
    ],
    "answer": 1,
    "explanation": "候車排隊的禮儀。"
  },
  {
    "id": "transport-035",
    "topic": "transport",
    "type": "judgement",
    "difficulty": 1,
    "context": "阿母：「今仔日會落雨，騎車愛較細膩。」\n阿明：「我會注意。」",
    "question": "阿母咧提醒啥物？",
    "options": [
      "落雨天毋免看路。",
      "落雨天愛食麵。",
      "落雨天行車愛注意安全。",
      "落雨天毋免出門。"
    ],
    "answer": 2,
    "explanation": "雨天路況可能較危險。"
  },
  {
    "id": "transport-036",
    "topic": "transport",
    "type": "judgement",
    "difficulty": 2,
    "context": "阿姊：「火車較晏到，咱先共阿爸講一聲。」\n阿弟：「好。」",
    "question": "阿姊的意思是啥物？",
    "options": [
      "毋免告知家人。",
      "改去買物件。",
      "火車站欲關門。",
      "行程延誤愛通知咧等的人。"
    ],
    "answer": 3,
    "explanation": "延誤時應主動通知。"
  },
  {
    "id": "transport-037",
    "topic": "transport",
    "type": "judgement",
    "difficulty": 2,
    "context": "朋友：「這條路我無熟，咱先查地圖。」\n你：「好。」",
    "question": "朋友欲按怎處理？",
    "options": [
      "先確認路線才出發。",
      "隨便行就好。",
      "等天暗才出發。",
      "改去食飯。"
    ],
    "answer": 0,
    "explanation": "先查路線避免迷路。"
  },
  {
    "id": "transport-038",
    "topic": "transport",
    "type": "judgement",
    "difficulty": 2,
    "context": "乘客：「這个位予你坐。」\n阿媽：「多謝。」",
    "question": "乘客做啥物？",
    "options": [
      "向阿媽問路。",
      "讓座予有需要的人。",
      "請阿媽買票。",
      "共阿媽借手機。"
    ],
    "answer": 1,
    "explanation": "主動讓座。"
  },
  {
    "id": "transport-039",
    "topic": "transport",
    "type": "judgement",
    "difficulty": 3,
    "context": "站務人員：「你欲去的所在，愛佇下一站轉車。」\n旅客：「好，多謝。」",
    "question": "旅客接下來上可能做啥物？",
    "options": [
      "這站就轉去厝。",
      "去買便當。",
      "下一站落車轉乘。",
      "一直坐到終點。"
    ],
    "answer": 2,
    "explanation": "依照轉乘資訊換車。"
  },
  {
    "id": "transport-040",
    "topic": "transport",
    "type": "judgement",
    "difficulty": 3,
    "context": "阿爸：「你若揣無路，先去安全的所在停落來，閣問人。」\n小美：「好。」",
    "question": "這段話主要強調啥物？",
    "options": [
      "迷路就一直衝。",
      "無愛問任何人。",
      "只顧緊緊到目的地。",
      "迷路時先顧安全，再確認方向。"
    ],
    "answer": 3,
    "explanation": "迷路時先確認自身安全。"
  }
],
  "shopping": [
  {
    "id": "shopping-001",
    "topic": "shopping",
    "type": "scene",
    "difficulty": 1,
    "context": "你佇文具店欲買一枝鉛筆。",
    "question": "佗一句上適合？",
    "options": [
      "頭家，一枝鉛筆偌濟錢？",
      "頭家，這款鉛筆有別款色水無？",
      "頭家，這枝鉛筆會當試寫無？",
      "頭家，這枝鉛筆有較長的無？"
    ],
    "answer": 0,
    "explanation": "欲買物件，先問價數符合情境。"
  },
  {
    "id": "shopping-002",
    "topic": "shopping",
    "type": "scene",
    "difficulty": 1,
    "context": "你佇菜市仔揀著欲買的菜。",
    "question": "佗一句上適合？",
    "options": [
      "這把菜敢有較細把的？",
      "這把菜偌濟錢？",
      "這把菜是今仔日採的無？",
      "這把菜會當共我包起來無？"
    ],
    "answer": 1,
    "explanation": "買菜時詢問價數，符合情境。"
  },
  {
    "id": "shopping-003",
    "topic": "shopping",
    "type": "scene",
    "difficulty": 1,
    "context": "你買物件，頭家已經共物件裝好。",
    "question": "你欲表達感謝，會當按怎講？",
    "options": [
      "這寡物件我先看覓。",
      "這个袋仔會當閣裝一个無？",
      "多謝。",
      "這寡物件總共偌濟錢？"
    ],
    "answer": 2,
    "explanation": "完成交易時向店家道謝。"
  },
  {
    "id": "shopping-004",
    "topic": "shopping",
    "type": "scene",
    "difficulty": 2,
    "context": "你欲買一領衫，毋知影尺寸敢合。",
    "question": "佗一句上適合？",
    "options": [
      "這領衫有別款色水無？",
      "這領衫有較大號的無？",
      "這領衫敢有較薄的？",
      "這領衫會當試穿無？"
    ],
    "answer": 3,
    "explanation": "買衫時詢問能否試穿，以確認尺寸。"
  },
  {
    "id": "shopping-005",
    "topic": "shopping",
    "type": "scene",
    "difficulty": 2,
    "context": "你發現架頂的物件標價和結帳金額無仝。",
    "question": "你會當按怎講？",
    "options": [
      "歹勢，架頂標的價數佮這馬算的無仝，會當幫我看一下無？",
      "歹勢，架頂標的價數佮這馬算的無仝，我閣買一件好無？",
      "歹勢，架頂標的價數佮這馬算的無仝，我先提轉去好無？",
      "歹勢，架頂標的價數佮這馬算的無仝，我免提發票好無？"
    ],
    "answer": 0,
    "explanation": "禮貌請店家核對價格差異。"
  },
  {
    "id": "shopping-006",
    "topic": "shopping",
    "type": "scene",
    "difficulty": 2,
    "context": "你欲買一袋米，毋過無看著價數。",
    "question": "佗一句上適合？",
    "options": [
      "這袋米是佗位出產的？",
      "請問這袋米賣偌濟錢？",
      "這袋米有較細包的無？",
      "這袋米會當先寄放佇遮無？"
    ],
    "answer": 1,
    "explanation": "不知價數時應詢問售價。"
  },
  {
    "id": "shopping-007",
    "topic": "shopping",
    "type": "scene",
    "difficulty": 3,
    "context": "你欲買一件較貴的物件，預算無夠。",
    "question": "佗一个做法上合適？",
    "options": [
      "先借錢，無管會當還無。",
      "無看價數就買。",
      "先比較價數，想看覓敢真正需要。",
      "買落去才想辦法。"
    ],
    "answer": 2,
    "explanation": "先比較價格與需求，符合有計畫的消費。"
  },
  {
    "id": "shopping-008",
    "topic": "shopping",
    "type": "scene",
    "difficulty": 3,
    "context": "你買著的物件有瑕疵，欲共店家反映。",
    "question": "佗一句上適合？",
    "options": [
      "歹勢，這个物件有問題，我先囥佇店內底好無？",
      "歹勢，這个物件有問題，我欲閣買一个。",
      "歹勢，這个物件有問題，我會當共伊送予別人無？",
      "歹勢，這个物件有問題，會當請你幫我看一下無？"
    ],
    "answer": 3,
    "explanation": "具體說明商品問題並禮貌請求協助。"
  },
  {
    "id": "shopping-009",
    "topic": "shopping",
    "type": "cloze",
    "difficulty": 1,
    "context": "「這枝筆＿＿＿＿？我想欲買一枝。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "偌濟錢",
      "有較長的無",
      "有別款色水無",
      "會當試寫無"
    ],
    "answer": 0,
    "explanation": "購物時詢問價格用「偌濟錢」。"
  },
  {
    "id": "shopping-010",
    "topic": "shopping",
    "type": "cloze",
    "difficulty": 1,
    "context": "「我欲買兩粒蘋果，這馬欲結帳，請頭家共我＿＿＿＿。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "包做伙",
      "算錢",
      "揀較大粒的",
      "提去秤看覓"
    ],
    "answer": 1,
    "explanation": "買物件後請店家算錢。"
  },
  {
    "id": "shopping-011",
    "topic": "shopping",
    "type": "cloze",
    "difficulty": 1,
    "context": "「我欲買這領衫，毋過愛先＿＿＿＿。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "問價數",
      "揣別款色水",
      "試穿",
      "看洗滌標示"
    ],
    "answer": 2,
    "explanation": "買衣服前可先試穿。"
  },
  {
    "id": "shopping-012",
    "topic": "shopping",
    "type": "cloze",
    "difficulty": 2,
    "context": "「這个物件傷貴，我欲閣＿＿＿＿別間的價數。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "問看覓",
      "揣看覓",
      "記起來",
      "比較"
    ],
    "answer": 3,
    "explanation": "購物前比較不同店家的價格。"
  },
  {
    "id": "shopping-013",
    "topic": "shopping",
    "type": "cloze",
    "difficulty": 2,
    "context": "「頭家共我找錢，我愛先＿＿＿＿有正確無。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "看一下",
      "數一下",
      "問一下",
      "寫一下"
    ],
    "answer": 0,
    "explanation": "收到找錢先確認金額。"
  },
  {
  "id": "shopping-014",
  "topic": "shopping",
  "type": "cloze",
  "difficulty": 2,
  "context": "「欲買物件進前，先想看覓這是生活需要，抑是干焦＿＿＿＿。」",
  "question": "空格內底囥佗一个上適合？",
  "options": [
    "想欲",
    "已經買",
    "需要",
    "借來"
  ],
  "answer": 0,
  "explanation": "買物件進前，分清楚「需要」佮「想欲」，會當幫助咱思考敢有必要買。"
},
  {
    "id": "shopping-015",
    "topic": "shopping",
    "type": "cloze",
    "difficulty": 3,
    "context": "「這个物件雖然較俗，毋過品質無仝，愛＿＿＿＿才決定。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "直接買",
      "共伊擲掉",
      "詳細比較",
      "毋免看"
    ],
    "answer": 2,
    "explanation": "價格以外也需比較品質與需求。"
  },
  {
  "id": "shopping-016",
  "topic": "shopping",
  "type": "cloze",
  "difficulty": 3,
  "context": "「買著有問題的物件，愛留著單據，才較好＿＿＿＿。」",
  "question": "空格內底囥佗一个上適合？",
  "options": [
    "確認價數",
    "揣著頭家",
    "記得店名",
    "共店家講欲退抑是換"
  ],
  "answer": 3,
  "explanation": "單據是購買憑證，物件若有問題，會當用來向店家詢問退貨抑是換貨。"
},
  {
    "id": "shopping-017",
    "topic": "shopping",
    "type": "dialogue",
    "difficulty": 1,
    "context": "客人：「這盒餅偌濟錢？」\n頭家：「＿＿＿＿」",
    "question": "頭家按怎應上自然？",
    "options": [
      "一盒五十箍。",
      "一盒有十塊。",
      "這盒餅有較大盒的。",
      "這盒餅今仔日有特價。"
    ],
    "answer": 0,
    "explanation": "回答詢價應提供價數。"
  },
  {
    "id": "shopping-018",
    "topic": "shopping",
    "type": "dialogue",
    "difficulty": 1,
    "context": "頭家：「你欲買啥物？」\n客人：「＿＿＿＿」",
    "question": "客人按怎應上自然？",
    "options": [
      "我欲問這枝筆偌濟錢。",
      "我欲買一枝筆。",
      "我欲看別款的筆。",
      "我欲知影這枝筆有別款色水無。"
    ],
    "answer": 1,
    "explanation": "回答要買什麼物品。"
  },
  {
    "id": "shopping-019",
    "topic": "shopping",
    "type": "dialogue",
    "difficulty": 1,
    "context": "客人：「會當試穿無？」\n店員：「＿＿＿＿」",
    "question": "店員按怎應上自然？",
    "options": [
      "這領衫有三種色水。",
      "這領衫有較大號的。",
      "會使，試穿間佇遐。",
      "這領衫今仔日有特價。"
    ],
    "answer": 2,
    "explanation": "回答能否試穿並說明地點。"
  },
  {
    "id": "shopping-020",
    "topic": "shopping",
    "type": "dialogue",
    "difficulty": 2,
    "context": "客人：「歹勢，這个標價佮結帳的錢無仝。」\n店員：「＿＿＿＿」",
    "question": "店員按怎應上自然？",
    "options": [
      "這物件真好看。",
      "我欲出去一下。",
      "你敢有帶雨傘？",
      "歹勢，我幫你閣確認一下。"
    ],
    "answer": 3,
    "explanation": "店員應協助核對價格。"
  },
  {
    "id": "shopping-021",
    "topic": "shopping",
    "type": "dialogue",
    "difficulty": 2,
    "context": "頭家：「總共一百二十箍。」\n客人：「＿＿＿＿」",
    "question": "客人按怎應上自然？",
    "options": [
      "這是兩百箍，麻煩你找錢。",
      "這个有較細盒的無？",
      "這个會當換別款無？",
      "這个有保固無？"
    ],
    "answer": 0,
    "explanation": "根據總價付款並請店家找錢。"
  },
  {
    "id": "shopping-022",
    "topic": "shopping",
    "type": "dialogue",
    "difficulty": 2,
    "context": "朋友：「這个特價，咱攏買一个好無？」\n小安：「＿＿＿＿」",
    "question": "小安按怎應上自然？",
    "options": [
      "這个是紅色的。",
      "我先想看覓敢有需要。",
      "我欲去運動。",
      "你昨昏食啥物？"
    ],
    "answer": 1,
    "explanation": "特價也應先評估需求。"
  },
  {
    "id": "shopping-023",
    "topic": "shopping",
    "type": "dialogue",
    "difficulty": 3,
    "context": "客人：「我昨昏買的這个物件無法度用。」\n店員：「＿＿＿＿」",
    "question": "店員按怎應上自然？",
    "options": [
      "你今仔日真早來。",
      "這个顏色真媠。",
      "會當請你講一下是啥物問題無？",
      "我欲去買飲料。"
    ],
    "answer": 2,
    "explanation": "先了解商品問題，才能協助處理。"
  },
  {
    "id": "shopping-024",
    "topic": "shopping",
    "type": "dialogue",
    "difficulty": 3,
    "context": "阿母：「這雙鞋較俗，彼雙較耐穿，你按怎想？」\n小華：「＿＿＿＿」",
    "question": "小華按怎應上自然？",
    "options": [
      "我無愛看價數。",
      "兩雙攏買。",
      "鞋仔攏仝款啦。",
      "咱比較價數佮品質，再來決定。"
    ],
    "answer": 3,
    "explanation": "比較價格與品質後再選購。"
  },
  {
    "id": "shopping-025",
    "topic": "shopping",
    "type": "speaking",
    "difficulty": 1,
    "context": "你欲問店員這个鉛筆盒的價數。",
    "question": "佗一句上適合？",
    "options": [
      "請問這个鉛筆盒偌濟錢？",
      "請問這个鉛筆盒有別款色水無？",
      "請問這个鉛筆盒有較大的無？",
      "請問這个鉛筆盒有現貨無？"
    ],
    "answer": 0,
    "explanation": "詢問物品售價的自然表達。"
  },
  {
    "id": "shopping-026",
    "topic": "shopping",
    "type": "speaking",
    "difficulty": 1,
    "context": "你想欲買三粒橘仔。",
    "question": "佗一句上適合？",
    "options": [
      "頭家，我欲買三粒蘋果。",
      "頭家，我欲買三粒橘仔。",
      "頭家，我欲買三粒柑仔。",
      "頭家，我欲買三粒梨仔。"
    ],
    "answer": 1,
    "explanation": "說明欲買的品項與數量。"
  },
  {
    "id": "shopping-027",
    "topic": "shopping",
    "type": "speaking",
    "difficulty": 1,
    "context": "你想欲問店員有較大的尺寸無。",
    "question": "佗一句上適合？",
    "options": [
      "有較細號的無？",
      "有較厚的無？",
      "有較大號的無？",
      "有別款色水的無？"
    ],
    "answer": 2,
    "explanation": "詢問尺寸應使用「較大號」。"
  },
  {
    "id": "shopping-028",
    "topic": "shopping",
    "type": "speaking",
    "difficulty": 2,
    "context": "你想請店員幫忙揣另一種色水。",
    "question": "佗一句上適合？",
    "options": [
      "你欲去佗位？",
      "這个有夠貴。",
      "我無愛買矣。",
      "會當幫我揣別款色水無？"
    ],
    "answer": 3,
    "explanation": "請求店員協助找不同顏色。"
  },
  {
    "id": "shopping-029",
    "topic": "shopping",
    "type": "speaking",
    "difficulty": 2,
    "context": "你想確認這个物件有保固無。",
    "question": "佗一句上適合？",
    "options": [
      "請問這个有保固無？",
      "請問這个會當退貨無？",
      "請問這个有使用說明無？",
      "請問這个會當試用無？"
    ],
    "answer": 0,
    "explanation": "購買商品前確認保固。"
  },
  {
    "id": "shopping-030",
    "topic": "shopping",
    "type": "speaking",
    "difficulty": 2,
    "context": "你欲請頭家共買的物件裝佇仝一个袋仔。",
    "question": "佗一句上適合？",
    "options": [
      "會當共這寡物件分做兩袋無？",
      "會當共這寡物件裝做伙無？",
      "會當幫我閣提一个袋仔無？",
      "會當幫我共這寡物件包較牢無？"
    ],
    "answer": 1,
    "explanation": "請店家將物品裝在一起。"
  },
  {
    "id": "shopping-031",
    "topic": "shopping",
    "type": "speaking",
    "difficulty": 3,
    "context": "你買的物件有問題，欲有禮貌提出換貨。",
    "question": "佗一句上適合？",
    "options": [
      "你賣的物件攏歹。",
      "我無欲講原因。",
      "歹勢，這个物件有問題，請問會當換貨無？",
      "我欲閣買一件。"
    ],
    "answer": 2,
    "explanation": "說明問題並詢問能否換貨。"
  },
  {
    "id": "shopping-032",
    "topic": "shopping",
    "type": "speaking",
    "difficulty": 3,
    "context": "朋友一直勸你買無需要的物件，你欲婉轉拒絕。",
    "question": "佗一句上適合？",
    "options": [
      "你毋通閣共我講話。",
      "我一定愛買。",
      "我先買落去才算。",
      "多謝你，毋過我這馬無需要。"
    ],
    "answer": 3,
    "explanation": "表達感謝並說明沒有購買需求。"
  },
  {
    "id": "shopping-033",
    "topic": "shopping",
    "type": "judgement",
    "difficulty": 1,
    "context": "頭家：「一粒十箍，三粒三十箍。」\n客人：「好，我買三粒。」",
    "question": "客人欲付偌濟錢？",
    "options": [
      "三十箍。",
      "十箍。",
      "二十箍。",
      "四十箍。"
    ],
    "answer": 0,
    "explanation": "三粒共三十箍。"
  },
  {
    "id": "shopping-034",
    "topic": "shopping",
    "type": "judgement",
    "difficulty": 1,
    "context": "小安：「這領衫傷細領，我欲換較大號的。」",
    "question": "小安欲換啥物？",
    "options": [
      "較細號的衫。",
      "較大號的衫。",
      "較厚的衫。",
      "別款色水的衫。"
    ],
    "answer": 1,
    "explanation": "「傷細領」表示尺寸太小。"
  },
  {
    "id": "shopping-035",
    "topic": "shopping",
    "type": "judgement",
    "difficulty": 1,
    "context": "阿母：「買菜愛看新鮮無，毋是干焦看價數。」",
    "question": "阿母提醒啥物？",
    "options": [
      "菜愈貴愈好。",
      "買菜免看品質。",
      "買菜愛注意新鮮佮品質。",
      "買菜攏毋免問價數。"
    ],
    "answer": 2,
    "explanation": "除了價格，也要看食材新鮮程度。"
  },
  {
    "id": "shopping-036",
    "topic": "shopping",
    "type": "judgement",
    "difficulty": 2,
    "context": "店員：「這个物件今仔日有特價。」\n小華：「我先想看覓敢有需要。」",
    "question": "小華的想法是啥物？",
    "options": [
      "特價攏愛買。",
      "買愈濟愈好。",
      "毋免看價數。",
      "有需要才考慮買。"
    ],
    "answer": 3,
    "explanation": "不因特價衝動購買。"
  },
  {
    "id": "shopping-037",
    "topic": "shopping",
    "type": "judgement",
    "difficulty": 2,
    "context": "小美：「這間較俗，彼間較貴，毋過有保固。」",
    "question": "小美咧比較啥物？",
    "options": [
      "價數佮保固。",
      "色水佮尺寸。",
      "店面佮招牌。",
      "包裝佮袋仔。"
    ],
    "answer": 0,
    "explanation": "對話比較商品價格與保固。"
  },
  {
    "id": "shopping-038",
    "topic": "shopping",
    "type": "judgement",
    "difficulty": 2,
    "context": "阿爸：「這个你上禮拜才買，今仔日閣欲買？」\n阿明：「我先看覓厝裡猶有無。」",
    "question": "阿明欲先確認啥物？",
    "options": [
      "這个物件敢有特價。",
      "厝裡敢猶有仝款物件。",
      "這个物件敢有別款色水。",
      "這个物件敢有較大號的。"
    ],
    "answer": 1,
    "explanation": "避免重複購買，先檢查家中存量。"
  },
  {
    "id": "shopping-039",
    "topic": "shopping",
    "type": "judgement",
    "difficulty": 3,
    "context": "店員：「這件有問題，若有購買證明，咱會當協助處理。」\n客人：「好，我有留發票。」",
    "question": "留發票的作用是啥物？",
    "options": [
      "證明物件的色水。",
      "證明物件的尺寸。",
      "做為購買證明，方便後續處理。",
      "證明物件的重量。"
    ],
    "answer": 2,
    "explanation": "發票可作為購買憑證。"
  },
  {
    "id": "shopping-040",
    "topic": "shopping",
    "type": "judgement",
    "difficulty": 3,
    "context": "阿姊：「這个較俗，毋過用無幾擺就歹去。」\n阿弟：「按呢咱毋通干焦看價數。」",
    "question": "這段對話強調啥物？",
    "options": [
      "買物件只看色水。",
      "較俗的一定較好。",
      "買愈濟愈划算。",
      "購物愛兼顧價數佮品質。"
    ],
    "answer": 3,
    "explanation": "不只看售價，也要考量耐用程度。"
  }
],
  "weather": [
  {
    "id": "weather-001",
    "topic": "weather",
    "type": "scene",
    "difficulty": 1,
    "context": "你欲出門，外口咧落雨。",
    "question": "佗一句上適合？",
    "options": [
      "我愛紮雨傘。",
      "我愛紮雨傘，毋過今仔日無落雨。",
      "我愛紮雨傘，等雨停才出門。",
      "我愛紮雨傘，毋過我欲先放佇厝裡。"
    ],
    "answer": 0,
    "explanation": "落雨出門愛準備雨具。"
  },
  {
  "id": "weather-002",
  "topic": "weather",
  "type": "scene",
  "difficulty": 1,
  "context": "今仔日日頭真猛，欲出去運動。",
  "question": "佗一句上適合？",
  "options": [
    "我愛啉夠水，嘛愛注意遮日。",
    "我愛穿較厚的外套，毋免啉水。",
    "我愛一直佇日頭下曝，毋免歇睏。",
    "我愛等喙焦才啉水。"
  ],
  "answer": 0,
  "explanation": "日頭猛的時陣，愛啉夠水、適當歇睏，嘛愛注意遮日。"
},
  {
    "id": "weather-003",
    "topic": "weather",
    "type": "scene",
    "difficulty": 1,
    "context": "你看著天頂烏雲愈來愈厚。",
    "question": "佗一句上適合？",
    "options": [
      "烏雲厚厚，今仔日一定會落雨。",
      "烏雲厚厚，今仔日一定袂落雨。",
      "天遐爾仔烏，凡勢會落雨。",
      "烏雲厚厚，明仔載才有可能落雨。"
    ],
    "answer": 2,
    "explanation": "天頂烏雲厚，凡勢會落雨，毋過猶未確定。"
  },
  {
    "id": "weather-004",
    "topic": "weather",
    "type": "scene",
    "difficulty": 2,
    "context": "明仔載學校欲去戶外教學，你驚天氣無好。",
    "question": "佗一个做法上適合？",
    "options": [
      "等到欲出門才問同學天氣。",
      "只看昨昏的天氣，毋免看明仔載。",
      "看明仔載的天氣，毋過毋免準備雨具。",
      "先看天氣預報，準備雨具。"
    ],
    "answer": 3,
    "explanation": "戶外活動進前參考預報並做準備。"
  },
  {
    "id": "weather-005",
    "topic": "weather",
    "type": "scene",
    "difficulty": 2,
    "context": "早起真寒，你欲去學校。",
    "question": "佗一句上適合？",
    "options": [
      "我愛加穿一領外套。",
      "我愛先脫外套，較袂寒。",
      "我愛開冷氣，予房間較寒。",
      "我愛穿較薄的衫，較袂寒。"
    ],
    "answer": 0,
    "explanation": "天氣寒時適當加穿衣物。"
  },
  {
    "id": "weather-006",
    "topic": "weather",
    "type": "scene",
    "difficulty": 2,
    "context": "下晡突然落大雨，阿母叫你先莫出去。",
    "question": "佗一句上適合？",
    "options": [
      "我先出去，雨較大才轉來。",
      "好，我等雨較細才出去。",
      "雨若落較大，行路嘛無需要注意。",
      "雨愈大，我愈愛趕緊出去。"
    ],
    "answer": 1,
    "explanation": "大雨時先避免不必要外出。"
  },
  {
    "id": "weather-007",
    "topic": "weather",
    "type": "scene",
    "difficulty": 3,
    "context": "天氣預報講下晡有可能落雨，這馬猶有日頭。",
    "question": "佗一个判斷較合理？",
    "options": [
      "這馬有日頭，下晡一定袂落雨。",
      "這馬有日頭，就毋免看下晡的預報。",
      "猶是紮雨傘較保險。",
      "若下晡落雨，就一定會落到暗。"
    ],
    "answer": 2,
    "explanation": "預報講有可能落雨，先紮雨傘較妥當。"
  },
  {
    "id": "weather-008",
    "topic": "weather",
    "type": "scene",
    "difficulty": 3,
    "context": "颱風欲來，厝邊有一寡物件囥佇陽台。",
    "question": "佗一个做法上適合？",
    "options": [
      "等颱風來才共物件收起來。",
      "先共盆栽徙去陽台邊仔。",
      "共窗仔攏打開，予風會當入來。",
      "先共會當予風吹落去的物件收好。"
    ],
    "answer": 3,
    "explanation": "強風前應固定或收妥易被吹落的物品。"
  },
  {
    "id": "weather-009",
    "topic": "weather",
    "type": "cloze",
    "difficulty": 1,
    "context": "「外口咧落雨，出門愛紮＿＿＿＿。」",
    "question": "空格內底囥啥物上適合？",
    "options": [
      "雨傘",
      "扇仔",
      "目鏡",
      "拖鞋"
    ],
    "answer": 0,
    "explanation": "雨傘是落雨時的雨具。"
  },
  {
    "id": "weather-010",
    "topic": "weather",
    "type": "cloze",
    "difficulty": 1,
    "context": "「今仔日真＿＿＿＿，我想欲穿外套。」",
    "question": "空格內底囥啥物上適合？",
    "options": [
      "燒",
      "寒",
      "光",
      "暗"
    ],
    "answer": 1,
    "explanation": "穿外套符合天氣寒的情境。"
  },
  {
    "id": "weather-011",
    "topic": "weather",
    "type": "cloze",
    "difficulty": 1,
    "context": "「日頭真＿＿＿＿，行一段路就流汗。」",
    "question": "空格內底囥啥物上適合？",
    "options": [
      "暗",
      "寒",
      "猛",
      "細"
    ],
    "answer": 2,
    "explanation": "日頭猛烈容易感覺熱。"
  },
  {
    "id": "weather-012",
    "topic": "weather",
    "type": "cloze",
    "difficulty": 2,
    "context": "「風真大，出門愛共帽仔＿＿＿＿。」",
    "question": "空格內底囥啥物上適合？",
    "options": [
      "戴較鬆",
      "戴佇手裡",
      "戴較懸",
      "戴予牢"
    ],
    "answer": 3,
    "explanation": "大風時要避免帽子被風吹走。"
  },
  {
    "id": "weather-013",
    "topic": "weather",
    "type": "cloze",
    "difficulty": 2,
    "context": "「落雨落甲真大，路面積水，行路愛＿＿＿＿。」",
    "question": "空格內底囥啥物上適合？",
    "options": [
      "較細膩",
      "較緊行",
      "毋免看路",
      "專門行積水較深的所在"
    ],
    "answer": 0,
    "explanation": "路面積水時應注意安全。"
  },
  {
    "id": "weather-014",
    "topic": "weather",
    "type": "cloze",
    "difficulty": 2,
    "context": "「明仔載欲去爬山，咱先看＿＿＿＿。」",
    "question": "空格內底囥啥物上適合？",
    "options": [
      "電影時間",
      "天氣預報",
      "菜單",
      "課表"
    ],
    "answer": 1,
    "explanation": "戶外活動可先看天氣預報。"
  },
  {
    "id": "weather-015",
    "topic": "weather",
    "type": "cloze",
    "difficulty": 3,
    "context": "「這馬無落雨，毋過天頂烏雲厚厚，咱猶是愛＿＿＿＿。」",
    "question": "空格內底囥啥物上適合？",
    "options": [
      "趁這馬無落雨，將雨傘囥佇厝裡",
      "看著烏雲，猶是免紮雨傘",
      "準備雨具",
      "等落雨才去借雨傘"
    ],
    "answer": 2,
    "explanation": "有落雨可能時宜備雨具。"
  },
  {
    "id": "weather-016",
    "topic": "weather",
    "type": "cloze",
    "difficulty": 3,
    "context": "「若有發布強風警報，陽台的盆栽愛先＿＿＿＿。」",
    "question": "空格內底囥啥物上適合？",
    "options": [
      "徙去欄杆外口",
      "放佇欄杆頂",
      "囥佇較懸的架仔頂",
      "收妥當"
    ],
    "answer": 3,
    "explanation": "強風時先收妥易墜落的物件。"
  },
  {
    "id": "weather-017",
    "topic": "weather",
    "type": "dialogue",
    "difficulty": 1,
    "context": "阿母：「外口咧落雨，你有紮雨傘無？」\n阿明：「＿＿＿＿」",
    "question": "阿母問阿明有紮雨傘無；若阿明有紮，應按怎應？",
    "options": [
      "有，我有紮。",
      "無，我今仔日無紮雨傘。",
      "有，毋過我共雨傘囥佇學校。",
      "無，我欲等雨停才出去。"
    ],
    "answer": 0,
    "explanation": "直接回答有無帶雨傘。"
  },
  {
    "id": "weather-018",
    "topic": "weather",
    "type": "dialogue",
    "difficulty": 1,
    "context": "阿爸：「今仔日寒無？」\n小華：「＿＿＿＿」",
    "question": "若小華感覺真寒，閣有穿外套，應按怎應？",
    "options": [
      "無寒，我今仔日穿短䘼仔。",
      "真寒，我有穿外套。",
      "有小可寒，毋過我無穿外套。",
      "無寒，毋免穿外套。"
    ],
    "answer": 1,
    "explanation": "回答天氣寒熱。"
  },
  {
    "id": "weather-019",
    "topic": "weather",
    "type": "dialogue",
    "difficulty": 1,
    "context": "阿姊：「你看天頂，敢欲落雨？」\n阿弟：「＿＿＿＿」",
    "question": "阿弟按怎應上自然？",
    "options": [
      "烏雲真厚，毋過一定袂落雨。",
      "天頂烏雲真厚，今仔日一定無雨。",
      "烏雲真厚，凡勢會落雨。",
      "烏雲真厚，明仔載才可能落雨。"
    ],
    "answer": 2,
    "explanation": "看著烏雲，會當講「凡勢會落雨」，無講死一定會落。"
  },
  {
    "id": "weather-020",
    "topic": "weather",
    "type": "dialogue",
    "difficulty": 2,
    "context": "朋友：「下晡欲去拍球，毋過預報講會落雨。」\n小安：「＿＿＿＿」",
    "question": "小安按怎應上自然？",
    "options": [
      "咱照原本的計畫，落雨嘛佇室外拍球。",
      "若落雨，咱照原本的計畫佇操場拍球。",
      "咱先去操場，落雨嘛毋免改所在。",
      "咱先看下晡的天氣，若落雨就改佇室內拍球。"
    ],
    "answer": 3,
    "explanation": "下晡若落雨，會當改佇室內活動。"
  },
  {
    "id": "weather-021",
    "topic": "weather",
    "type": "dialogue",
    "difficulty": 2,
    "context": "阿媽：「日頭真猛，你出去愛注意啥物？」\n孫仔：「＿＿＿＿」",
    "question": "孫仔按怎應上自然？",
    "options": [
      "愛啉夠水，嘛愛注意遮日。",
      "愛穿厚外套，毋免啉水。",
      "愛一直佇日頭下曝。",
      "愛等喙焦才啉水。"
    ],
    "answer": 0,
    "explanation": "日頭猛，出門愛紮水，嘛愛注意遮日。"
  },
  {
    "id": "weather-022",
    "topic": "weather",
    "type": "dialogue",
    "difficulty": 2,
    "context": "阿爸：「風愈來愈大，陽台的物件按怎辦？」\n阿明：「＿＿＿＿」",
    "question": "阿明按怎應上自然？",
    "options": [
      "先共物件徙去陽台邊仔。",
      "咱先共伊收起來。",
      "等風較大，才共物件收起來。",
      "物件放佇欄杆頂較無問題。"
    ],
    "answer": 1,
    "explanation": "強風前收妥陽台物件。"
  },
  {
    "id": "weather-023",
    "topic": "weather",
    "type": "dialogue",
    "difficulty": 3,
    "context": "朋友：「今仔日有日頭，明仔載一定袂落雨啦！」\n小美：「＿＿＿＿」",
    "question": "小美按怎應上自然？",
    "options": [
      "今仔日有日頭，明仔載一定仝款。",
      "明仔載的天氣攏毋免看預報。",
      "明仔載天氣可能無仝，咱先看預報。",
      "今仔日有日頭，明仔載就免紮雨具。"
    ],
    "answer": 2,
    "explanation": "今天晴天不代表明天一定晴天。"
  },
  {
    "id": "weather-024",
    "topic": "weather",
    "type": "dialogue",
    "difficulty": 3,
    "context": "阿母：「明仔載可能有颱風，咱愛按怎準備？」\n小華：「＿＿＿＿」",
    "question": "小華按怎應上自然？",
    "options": [
      "等颱風來才準備。",
      "先開窗仔，等風來才關。",
      "先共陽台的物件放較外口。",
      "先看官方消息，檢查厝裡的防颱準備。"
    ],
    "answer": 3,
    "explanation": "颱風前以官方資訊及防災準備為主。"
  },
  {
    "id": "weather-025",
    "topic": "weather",
    "type": "speaking",
    "difficulty": 1,
    "context": "你欲問朋友外口敢有落雨。",
    "question": "你欲問朋友這馬外口敢有落雨，佗一句上適合？",
    "options": [
      "外口敢有落雨？",
      "外口的雨敢有停？",
      "明仔載外口敢會落雨？",
      "這馬外口的雨敢真大？"
    ],
    "answer": 0,
    "explanation": "直接詢問有無落雨。"
  },
  {
    "id": "weather-026",
    "topic": "weather",
    "type": "speaking",
    "difficulty": 1,
    "context": "你欲講今仔日天氣真寒。",
    "question": "佗一句上適合？",
    "options": [
      "今仔日真熱。",
      "今仔日真寒。",
      "今仔日真光。",
      "今仔日真暗。"
    ],
    "answer": 1,
    "explanation": "用「真寒」描述冷的天氣。"
  },
  {
    "id": "weather-027",
    "topic": "weather",
    "type": "speaking",
    "difficulty": 1,
    "context": "你欲提醒朋友紮雨傘。",
    "question": "佗一句上適合？",
    "options": [
      "記得等落雨了才去借雨傘。",
      "雨傘若有紮，記得囥佇厝裡。",
      "記得紮雨傘。",
      "記得紮雨傘，毋過莫提來學校。"
    ],
    "answer": 2,
    "explanation": "提醒帶雨傘符合可能落雨的情境。"
  },
  {
    "id": "weather-028",
    "topic": "weather",
    "type": "speaking",
    "difficulty": 2,
    "context": "你想問明仔載天氣會按怎。",
    "question": "你想問明仔載整體的天氣狀況，毋是單問落雨抑是寒熱。佗一句上適合？",
    "options": [
      "明仔載的天氣敢會落雨？",
      "明仔載敢會真寒？",
      "明仔載敢會出日頭？",
      "明仔載的天氣會按怎？"
    ],
    "answer": 3,
    "explanation": "詢問明天天氣狀況。"
  },
  {
    "id": "weather-029",
    "topic": "weather",
    "type": "speaking",
    "difficulty": 2,
    "context": "你欲提醒同學路面真滑，行路愛小心。",
    "question": "佗一句上適合？",
    "options": [
      "塗跤真滑，行路愛較細膩。",
      "塗跤真滑，咱行較緊。",
      "塗跤真滑，毋免看路。",
      "塗跤真滑，咱行佇積水的所在。"
    ],
    "answer": 0,
    "explanation": "提醒濕滑路面要小心。"
  },
  {
    "id": "weather-030",
    "topic": "weather",
    "type": "speaking",
    "difficulty": 2,
    "context": "你欲講下晡可能會落雨。",
    "question": "佗一句上適合？",
    "options": [
      "下晡一定會落雪。",
      "下晡凡勢會落雨。",
      "下晡一定無風。",
      "下晡一定真寒。"
    ],
    "answer": 1,
    "explanation": "「凡勢」會當表達有可能發生、猶未確定。"
  },
  {
    "id": "weather-031",
    "topic": "weather",
    "type": "speaking",
    "difficulty": 3,
    "context": "你欲勸朋友颱風天莫去海邊看浪。",
    "question": "佗一句上適合？",
    "options": [
      "颱風天海湧真大，咱去較近的所在看。",
      "颱風天風真大，咱去海邊看較清楚。",
      "颱風天海邊真危險，咱莫去。",
      "颱風天若無落雨，就會當去海邊看浪。"
    ],
    "answer": 2,
    "explanation": "颱風天遠離海邊及危險區域。"
  },
  {
    "id": "weather-032",
    "topic": "weather",
    "type": "speaking",
    "difficulty": 3,
    "context": "你欲提醒家人注意官方停班停課公告。",
    "question": "佗一句上適合？",
    "options": [
      "咱先聽朋友講，免看官方公告。",
      "學校有無停課，毋免看公告。",
      "咱家己決定明仔載有停課無。",
      "咱看官方公告，確認明仔載有停課無。"
    ],
    "answer": 3,
    "explanation": "停課資訊以官方公告為準。"
  },
  {
    "id": "weather-033",
    "topic": "weather",
    "type": "judgement",
    "difficulty": 1,
    "context": "阿母：「落雨矣，出門愛紮雨傘。」",
    "question": "阿母主要咧提醒啥物？",
    "options": [
      "準備雨具。",
      "準備便當。",
      "準備運動鞋。",
      "準備課本。"
    ],
    "answer": 0,
    "explanation": "落雨時需要雨具。"
  },
  {
    "id": "weather-034",
    "topic": "weather",
    "type": "judgement",
    "difficulty": 1,
    "context": "阿爸：「今仔日真寒，外套愛穿咧。」",
    "question": "阿爸希望你做啥物？",
    "options": [
      "開冷氣。",
      "穿外套。",
      "食冰。",
      "穿短䘼仔。"
    ],
    "answer": 1,
    "explanation": "天氣寒時提醒保暖。"
  },
  {
    "id": "weather-035",
    "topic": "weather",
    "type": "judgement",
    "difficulty": 1,
    "context": "小華：「天頂烏雲厚厚，可能欲落雨。」",
    "question": "小華咧判斷啥物？",
    "options": [
      "明仔載會落雪。",
      "今仔日一定無風。",
      "凡勢會落雨。",
      "日頭一定真猛。"
    ],
    "answer": 2,
    "explanation": "烏雲厚厚，凡勢會落雨，毋是講一定會落。"
  },
  {
    "id": "weather-036",
    "topic": "weather",
    "type": "judgement",
    "difficulty": 2,
    "context": "阿姊：「預報講下晡有陣雨，咱紮雨傘較保險。」",
    "question": "阿姊的意思是啥物？",
    "options": [
      "下晡一定袂落雨。",
      "雨傘毋免紮。",
      "預報一定百分百正確。",
      "猶未確定會落雨，先紮雨傘較保險。"
    ],
    "answer": 3,
    "explanation": "預報講有陣雨，先紮雨傘較妥當。"
  },
  {
    "id": "weather-037",
    "topic": "weather",
    "type": "judgement",
    "difficulty": 2,
    "context": "阿公：「落雨了後塗跤濕濕，行路愛較細膩。」",
    "question": "阿公咧提醒啥物？",
    "options": [
      "注意路面濕滑。",
      "提醒行路愛較緊。",
      "提醒路面若濕就免注意。",
      "提醒落雨了後會當踢水。"
    ],
    "answer": 0,
    "explanation": "雨後路面可能濕滑。"
  },
  {
    "id": "weather-038",
    "topic": "weather",
    "type": "judgement",
    "difficulty": 2,
    "context": "阿母：「明仔載欲去郊外，先看天氣預報。」",
    "question": "阿母認為出門進前愛做啥物？",
    "options": [
      "先買玩具。",
      "先確認天氣資訊。",
      "先看電影。",
      "先換手機。"
    ],
    "answer": 1,
    "explanation": "戶外活動前確認天氣資訊。"
  },
  {
    "id": "weather-039",
    "topic": "weather",
    "type": "judgement",
    "difficulty": 3,
    "context": "朋友：「昨昏無落雨，今仔日嘛一定袂落雨。」\n小美：「天氣會變，無一定。」",
    "question": "小美欲表達啥物？",
    "options": [
      "昨昏佮今仔日天氣一定仝款。",
      "天氣預報無需要。",
      "昨昏無落雨，毋代表今仔日嘛袂落雨。",
      "有日頭就一定無雨。"
    ],
    "answer": 2,
    "explanation": "天氣會變，袂當干焦看昨昏的天氣。"
  },
  {
    "id": "weather-040",
    "topic": "weather",
    "type": "judgement",
    "difficulty": 3,
    "context": "阿爸：「颱風欲來，咱先收陽台的物件，閣看官方消息。」",
    "question": "阿爸的做法上符合佗一个原則？",
    "options": [
      "等風大才準備。",
      "去海邊看風浪。",
      "只聽無來源的消息。",
      "事先防颱並注意可靠資訊。"
    ],
    "answer": 3,
    "explanation": "颱風來臨前先準備並參考官方資訊。"
  }
],
  "festival": [
  {
    "id": "festival-001",
    "topic": "festival",
    "type": "scene",
    "difficulty": 1,
    "context": "過年時，你欲共阿公阿媽拜年。",
    "question": "佗一句上適合？",
    "options": [
      "阿公阿媽，新年快樂！",
      "阿公阿媽，元宵節快樂！",
      "阿公阿媽，端午節快樂！",
      "阿公阿媽，中秋節快樂！"
    ],
    "answer": 0,
    "explanation": "過年向長輩講祝福的話，符合拜年情境。"
  },
  {
    "id": "festival-002",
    "topic": "festival",
    "type": "scene",
    "difficulty": 1,
    "context": "元宵節暗時，你佮家人去看花燈。",
    "question": "你想稱讚花燈的模樣。佗一句上適合？",
    "options": [
      "這寡花燈攏是紙糊的無？",
      "這寡花燈真媠。",
      "咱敢會當提花燈轉去？",
      "這寡花燈敢有通買？"
    ],
    "answer": 1,
    "explanation": "元宵節賞花燈，稱讚花燈符合情境。"
  },
  {
    "id": "festival-003",
    "topic": "festival",
    "type": "scene",
    "difficulty": 1,
    "context": "端午節，阿媽共你一粒肉粽。",
    "question": "你想先多謝阿媽，閣講你真愛食肉粽。佗一句上適合？",
    "options": [
      "阿媽，這肉粽是佗位買的？",
      "阿媽，這肉粽敢有包花生？",
      "多謝阿媽，我真愛食肉粽。",
      "阿媽，這肉粽是啥人包的？"
    ],
    "answer": 2,
    "explanation": "端午節常見肉粽，回應贈送並道謝。"
  },
  {
    "id": "festival-004",
    "topic": "festival",
    "type": "scene",
    "difficulty": 2,
    "context": "中秋節，你佮家人佇厝埕看月娘。",
    "question": "你想描述今暗月娘的形狀。佗一句上適合？",
    "options": [
      "今暗的月娘敢有出來？",
      "今暗的月娘佇佗位？",
      "今暗的月娘敢會予雲遮著？",
      "今暗的月娘真圓。"
    ],
    "answer": 3,
    "explanation": "中秋賞月，描述月娘圓符合情境。"
  },
  {
    "id": "festival-005",
    "topic": "festival",
    "type": "scene",
    "difficulty": 2,
    "context": "過年進前，厝裡欲大掃除。",
    "question": "你欲主動講出家己會當做的清潔工作。佗一句上適合？",
    "options": [
      "我來鬥掃塗跤。",
      "咱欲先掃灶跤抑是客廳？",
      "掃帚囥佇佗位？",
      "這寡舊物件愛按怎整理？"
    ],
    "answer": 0,
    "explanation": "年節前協助打掃符合情境。"
  },
  {
    "id": "festival-006",
    "topic": "festival",
    "type": "scene",
    "difficulty": 2,
    "context": "清明節，家人準備去掃墓，你想了解祭拜的意義。",
    "question": "你欲確認掃墓的意義。佗一句上適合？",
    "options": [
      "阿爸，掃墓愛準備啥物？",
      "阿爸，掃墓是欲紀念祖先，對無？",
      "阿爸，咱欲幾點去掃墓？",
      "阿爸，這擺欲去佗位掃墓？"
    ],
    "answer": 1,
    "explanation": "清明掃墓與追思祖先有關。"
  },
  {
  "id": "festival-007",
  "topic": "festival",
  "type": "scene",
  "difficulty": 3,
  "context": "同學講伊厝過年無包紅包，習俗佮你厝無仝。",
  "question": "佗一句有直接表達尊重無仝家庭的習俗？",
  "options": [
    "你厝無包紅包，敢有其他過年的活動？",
    "你厝無包紅包，敢是逐年攏按呢？",
    "逐家習俗無仝，咱會當互相尊重。",
    "你厝無包紅包，敢是攏無過年？"
  ],
  "answer": 2,
  "explanation": "尊重不同家庭的節慶做法。"
},
  {
    "id": "festival-008",
    "topic": "festival",
    "type": "scene",
    "difficulty": 3,
    "context": "廟口有節慶活動，現場真濟人，你佮同學欲入去看。",
    "question": "佗一个做法上合適？",
    "options": [
      "先看入口佇佗位，毋免管集合地點。",
      "先買食物，等人較少才入去。",
      "先各人去看，欲轉去才聯絡。",
      "先共集合地點講好，照秩序行。"
    ],
    "answer": 3,
    "explanation": "人潮多時事先約定集合地點並遵守秩序。"
  },
  {
    "id": "festival-009",
    "topic": "festival",
    "type": "cloze",
    "difficulty": 1,
    "context": "「過年矣，我共阿公講＿＿＿＿。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "新年快樂",
      "端午安康",
      "中秋快樂",
      "生日快樂"
    ],
    "answer": 0,
    "explanation": "過年拜年常用新年祝福。"
  },
  {
    "id": "festival-010",
    "topic": "festival",
    "type": "cloze",
    "difficulty": 1,
    "context": "「元宵節暗時，咱去看＿＿＿＿。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "龍船",
      "花燈",
      "肉粽",
      "春聯"
    ],
    "answer": 1,
    "explanation": "元宵節有賞花燈的活動。"
  },
  {
    "id": "festival-011",
    "topic": "festival",
    "type": "cloze",
    "difficulty": 1,
    "context": "「端午節，阿媽教我包＿＿＿＿。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "湯圓",
      "月餅",
      "肉粽",
      "紅包"
    ],
    "answer": 2,
    "explanation": "端午節常見包肉粽的習俗。"
  },
  {
    "id": "festival-012",
    "topic": "festival",
    "type": "cloze",
    "difficulty": 2,
    "context": "「中秋節，咱佇厝埕看＿＿＿＿。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "龍船",
      "春聯",
      "花燈",
      "月娘"
    ],
    "answer": 3,
    "explanation": "中秋節常見賞月活動。"
  },
  {
    "id": "festival-013",
    "topic": "festival",
    "type": "cloze",
    "difficulty": 2,
    "context": "「過年進前，阮厝逐家做伙＿＿＿＿，共厝裡整理清氣。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "大掃除",
      "看龍船",
      "食月餅",
      "放天燈"
    ],
    "answer": 0,
    "explanation": "年節前常會大掃除。"
  },
  {
    "id": "festival-014",
    "topic": "festival",
    "type": "cloze",
    "difficulty": 2,
    "context": "「清明節，家人去＿＿＿＿，追思祖先。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "賞月",
      "掃墓",
      "看花燈",
      "貼春聯"
    ],
    "answer": 1,
    "explanation": "清明掃墓與追思祖先相關。"
  },
  {
    "id": "festival-015",
    "topic": "festival",
    "type": "cloze",
    "difficulty": 3,
    "context": "「朋友厝的節慶習俗佮阮厝無仝，咱愛＿＿＿＿。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "講伊一定毋著",
      "強迫伊改",
      "互相尊重",
      "笑伊真奇怪"
    ],
    "answer": 2,
    "explanation": "不同家庭的習俗應彼此尊重。"
  },
  {
    "id": "festival-016",
    "topic": "festival",
    "type": "cloze",
    "difficulty": 3,
    "context": "「參加節慶活動，現場若真濟人，咱愛＿＿＿＿。」",
    "question": "空格內底囥佗一个上適合？",
    "options": [
      "一直擠入去",
      "離開同行的人",
      "隨便亂走",
      "照秩序行"
    ],
    "answer": 3,
    "explanation": "人多時遵守秩序可降低危險。"
  },
  {
    "id": "festival-017",
    "topic": "festival",
    "type": "dialogue",
    "difficulty": 1,
    "context": "阿公：「新年快樂！」\n小安：「＿＿＿＿」",
    "question": "小安欲回一句仝款的新年祝福。佗一句上適合？",
    "options": [
      "阿公，新年快樂！",
      "阿公，你今仔日有出去無？",
      "阿公，咱今仔日欲去佗位？",
      "阿公，你有食飽未？"
    ],
    "answer": 0,
    "explanation": "回應新年祝福。"
  },
  {
    "id": "festival-018",
    "topic": "festival",
    "type": "dialogue",
    "difficulty": 1,
    "context": "阿母：「今暗元宵節，欲去看花燈無？」\n小華：「＿＿＿＿」",
    "question": "小華欲直接接受阿母的邀請。佗一句上適合？",
    "options": [
      "我欲先看今暗有啥物花燈。",
      "好啊，我真想欲看花燈。",
      "今暗的花燈敢有真濟？",
      "花燈是佇廟口抑是公園？"
    ],
    "answer": 1,
    "explanation": "回應賞花燈的邀請。"
  },
  {
    "id": "festival-019",
    "topic": "festival",
    "type": "dialogue",
    "difficulty": 1,
    "context": "阿媽：「這粒肉粽予你食。」\n阿明：「＿＿＿＿」",
    "question": "阿明欲先有禮貌地道謝。佗一句上適合？",
    "options": [
      "阿媽，這粒肉粽是啥物口味？",
      "阿媽，這粒肉粽敢有燒？",
      "多謝阿媽。",
      "阿媽，這粒肉粽是你包的無？"
    ],
    "answer": 2,
    "explanation": "收到食物時道謝。"
  },
  {
    "id": "festival-020",
    "topic": "festival",
    "type": "dialogue",
    "difficulty": 2,
    "context": "阿爸：「今暗中秋節，咱來看月娘。」\n小美：「＿＿＿＿」",
    "question": "小美欲答應賞月，閣講月娘的模樣。佗一句上適合？",
    "options": [
      "今暗的月娘敢有予雲遮著？",
      "今暗咱欲佇佗位看月娘？",
      "今暗欲看月娘愛幾點出去？",
      "好啊，今暗月娘真圓。"
    ],
    "answer": 3,
    "explanation": "中秋賞月，回應活動並描述月亮。"
  },
  {
    "id": "festival-021",
    "topic": "festival",
    "type": "dialogue",
    "difficulty": 2,
    "context": "阿母：「過年進前欲掃厝，你會當鬥做啥物？」\n小安：「＿＿＿＿」",
    "question": "小安欲回答家己會當做啥物家事。佗一句上適合？",
    "options": [
      "我會當鬥拭桌仔。",
      "掃帚囥佇佗位？",
      "今仔日欲掃到幾點？",
      "阿爸敢有鬥掃厝？"
    ],
    "answer": 0,
    "explanation": "提出具體的家事分工。"
  },
  {
    "id": "festival-022",
    "topic": "festival",
    "type": "dialogue",
    "difficulty": 2,
    "context": "阿爸：「清明節咱去掃墓，毋過今仔日可能會落雨。」\n小華：「＿＿＿＿」",
    "question": "小華按怎應上自然？",
    "options": [
      "咱先看天氣預報，免準備雨具。",
      "咱先看天氣預報，準備雨具。",
      "咱先看天氣預報，落雨嘛一定愛出門。",
      "咱先看天氣預報，雨若大就去海邊。"
    ],
    "answer": 1,
    "explanation": "戶外活動前確認天氣並備雨具。"
  },
  {
    "id": "festival-023",
    "topic": "festival",
    "type": "dialogue",
    "difficulty": 3,
    "context": "小安：「阮厝中秋節無烤肉，咱攏做伙食飯。」\n小美：「＿＿＿＿」",
    "question": "小美欲表達逐家過節方式攏會當無仝。佗一句上適合？",
    "options": [
      "你厝無烤肉，敢有食月餅？",
      "你厝中秋節攏佇厝裡食飯無？",
      "原來逐家過節的方式無仝。",
      "你厝食飯是中晝抑是暗時？"
    ],
    "answer": 2,
    "explanation": "理解並尊重家庭習俗的差異。"
  },
  {
    "id": "festival-024",
    "topic": "festival",
    "type": "dialogue",
    "difficulty": 3,
    "context": "阿姊：「活動現場人真濟，若行散去按怎辦？」\n阿弟：「＿＿＿＿」",
    "question": "阿弟按怎應上自然？",
    "options": [
      "若行散去，我就家己亂走。",
      "若行散去，我就佇人上濟的所在等。",
      "若行散去，咱閣去揣花燈。",
      "咱先講好集合的所在。"
    ],
    "answer": 3,
    "explanation": "人潮活動先約定集合地點。"
  },
  {
    "id": "festival-025",
    "topic": "festival",
    "type": "speaking",
    "difficulty": 1,
    "context": "過年，你欲共阿媽講祝福的話。",
    "question": "佗一句是直接向阿媽拜年的祝福？",
    "options": [
      "阿媽，新年快樂！",
      "阿媽，今年欲去佗位過年？",
      "阿媽，過年欲準備啥物？",
      "阿媽，咱今仔日欲去拜年無？"
    ],
    "answer": 0,
    "explanation": "向長輩拜年使用新年祝福。"
  },
  {
    "id": "festival-026",
    "topic": "festival",
    "type": "speaking",
    "difficulty": 1,
    "context": "元宵節，你欲邀請朋友做伙去看花燈。",
    "question": "佗一句是邀請朋友做伙看花燈？",
    "options": [
      "今暗的花燈敢有真濟？",
      "咱做伙去看花燈好無？",
      "今暗看花燈愛幾點去？",
      "你有看著彼个花燈無？"
    ],
    "answer": 1,
    "explanation": "邀請朋友賞花燈。"
  },
  {
    "id": "festival-027",
    "topic": "festival",
    "type": "speaking",
    "difficulty": 1,
    "context": "端午節，你欲問阿母有肉粽通食無。",
    "question": "佗一句是問阿母敢有肉粽通食？",
    "options": [
      "阿母，肉粽敢有包花生？",
      "阿母，肉粽是佗位買的？",
      "阿母，有肉粽無？",
      "阿母，肉粽敢有燒？"
    ],
    "answer": 2,
    "explanation": "端午節詢問肉粽。"
  },
  {
    "id": "festival-028",
    "topic": "festival",
    "type": "speaking",
    "difficulty": 2,
    "context": "中秋節，你欲講今暗的月娘真圓。",
    "question": "佗一句是直接講月娘真圓？",
    "options": [
      "今暗的月娘敢有真圓？",
      "今暗的月娘佇佗位？",
      "今暗的月娘敢有予雲遮著？",
      "今暗的月娘真圓。"
    ],
    "answer": 3,
    "explanation": "描述中秋夜的月亮。"
  },
  {
    "id": "festival-029",
    "topic": "festival",
    "type": "speaking",
    "difficulty": 2,
    "context": "過年大掃除，你欲問家人會當鬥做啥物。",
    "question": "佗一句是問家己會當鬥做啥物？",
    "options": [
      "我會當鬥做啥物？",
      "咱欲先掃佗一間？",
      "掃帚敢有囥佇灶跤？",
      "阿爸敢有鬥掃厝？"
    ],
    "answer": 0,
    "explanation": "主動詢問如何協助家事。"
  },
  {
    "id": "festival-030",
    "topic": "festival",
    "type": "speaking",
    "difficulty": 2,
    "context": "你欲問阿爸清明節為啥物愛去掃墓。",
    "question": "佗一句是問掃墓的原因？",
    "options": [
      "阿爸，清明節欲幾點去掃墓？",
      "阿爸，清明節為啥物愛掃墓？",
      "阿爸，清明節欲去佗位掃墓？",
      "阿爸，清明節掃墓愛準備啥物？"
    ],
    "answer": 1,
    "explanation": "詢問清明掃墓的意義。"
  },
  {
    "id": "festival-031",
    "topic": "festival",
    "type": "speaking",
    "difficulty": 3,
    "context": "同學分享伊厝無仝的過年習俗，你欲表示尊重。",
    "question": "佗一句上會當表達你願意閣聽伊分享？",
    "options": [
      "你厝的做法佮阮厝無仝，我猶未聽過。",
      "你厝過年敢攏按呢？",
      "原來你厝按呢過年，我想欲閣聽你講。",
      "你厝過年敢無包紅包？"
    ],
    "answer": 2,
    "explanation": "用好奇與尊重的態度回應。"
  },
  {
    "id": "festival-032",
    "topic": "festival",
    "type": "speaking",
    "difficulty": 3,
    "context": "你欲提醒朋友廟會現場人濟，愛顧安全。",
    "question": "佗一句上適合？",
    "options": [
      "遮人真濟，咱先各人去看。",
      "遮人真濟，咱緊行才袂塞著。",
      "遮人真濟，咱佇出口等就好。",
      "遮人真濟，咱愛照秩序行，莫行散去。"
    ],
    "answer": 3,
    "explanation": "人多時提醒秩序與同行安全。"
  },
  {
    "id": "festival-033",
    "topic": "festival",
    "type": "judgement",
    "difficulty": 1,
    "context": "阿明：「過年矣，我欲共阿公阿媽拜年。」",
    "question": "阿明欲做啥物？",
    "options": [
      "向長輩講新年祝福。",
      "向長輩問掃墓的時間。",
      "向長輩問元宵的活動。",
      "向長輩問中秋的活動。"
    ],
    "answer": 0,
    "explanation": "拜年是向長輩致意祝福。"
  },
  {
    "id": "festival-034",
    "topic": "festival",
    "type": "judgement",
    "difficulty": 1,
    "context": "阿母：「元宵節暗時，廟口有花燈通看。」",
    "question": "阿母講的是啥物活動？",
    "options": [
      "問花燈佇佗位。",
      "看花燈。",
      "買花燈的材料。",
      "做花燈的工課。"
    ],
    "answer": 1,
    "explanation": "元宵節的活動是賞花燈。"
  },
  {
    "id": "festival-035",
    "topic": "festival",
    "type": "judgement",
    "difficulty": 1,
    "context": "阿媽：「端午節，咱來包肉粽。」",
    "question": "阿媽欲包啥物食物？",
    "options": [
      "問肉粽的價錢。",
      "問肉粽的材料。",
      "肉粽。",
      "問肉粽的口味。"
    ],
    "answer": 2,
    "explanation": "端午節包肉粽。"
  },
  {
    "id": "festival-036",
    "topic": "festival",
    "type": "judgement",
    "difficulty": 2,
    "context": "小美：「中秋節暗時，阮厝會做伙看月娘。」",
    "question": "小美的家庭中秋節會做啥物活動？",
    "options": [
      "討論月娘的形狀。",
      "詢問賞月的時間。",
      "準備賞月的點心。",
      "賞月。"
    ],
    "answer": 3,
    "explanation": "中秋節家人一起賞月。"
  },
  {
    "id": "festival-037",
    "topic": "festival",
    "type": "judgement",
    "difficulty": 2,
    "context": "阿爸：「過年進前，咱愛共厝裡整理清氣。」",
    "question": "阿爸希望逐家做啥物？",
    "options": [
      "做伙大掃除。",
      "討論欲買啥物年貨。",
      "討論欲去佗位拜年。",
      "討論欲換啥物家具。"
    ],
    "answer": 0,
    "explanation": "過年前整理家中環境。"
  },
  {
    "id": "festival-038",
    "topic": "festival",
    "type": "judgement",
    "difficulty": 2,
    "context": "阿媽：「清明節去掃墓，是欲追思祖先。」",
    "question": "阿媽主要咧說明掃墓的啥物？",
    "options": [
      "清明掃墓的時間。",
      "清明掃墓的意義。",
      "清明掃墓的路線。",
      "清明掃墓的物品。"
    ],
    "answer": 1,
    "explanation": "掃墓與追思祖先相關。"
  },
  {
    "id": "festival-039",
    "topic": "festival",
    "type": "judgement",
    "difficulty": 3,
    "context": "小安：「阮厝過年無包紅包。」\n小華：「逐家習俗無仝，無要緊。」",
    "question": "小華主要表達啥物態度？",
    "options": [
      "詢問彼个家庭為啥物無包紅包。",
      "建議逐家過年攏愛包紅包。",
      "尊重不同家庭的習俗。",
      "認為無包紅包就毋是過年。"
    ],
    "answer": 2,
    "explanation": "對家庭習俗差異表示尊重。"
  },
  {
    "id": "festival-040",
    "topic": "festival",
    "type": "judgement",
    "difficulty": 3,
    "context": "阿姊：「廟會人真濟，咱先講好集合地點。」\n阿弟：「好，才袂行散去。」",
    "question": "這段對話主要咧注意啥物？",
    "options": [
      "活動的集合時間。",
      "廟會的活動路線。",
      "活動現場的食物。",
      "人潮中的安全與集合安排。"
    ],
    "answer": 3,
    "explanation": "約定集合地點有助於人潮活動安全。"
  }
],
  "social": [
  {
    "id": "social-001",
    "topic": "social",
    "type": "scene",
    "difficulty": 1,
    "context": "你佇走廊看著老師。",
    "question": "你欲先共老師拍招呼，佗一句上適合？",
    "options": [
      "老師，早安！",
      "老師，今仔日是拜幾？",
      "老師，這堂課欲上啥物？",
      "老師，等一下欲去教室無？"
    ],
    "answer": 0,
    "explanation": "看著老師時主動拍招呼，符合情境。"
  },
  {
    "id": "social-002",
    "topic": "social",
    "type": "scene",
    "difficulty": 1,
    "context": "同學共你借橡皮擦，用了後共你還。",
    "question": "同學共橡皮擦還你，你欲講已經收著，閣表示感謝。佗一句上適合？",
    "options": [
      "你欲閣借幾工？",
      "好，我收著矣，多謝你。",
      "橡皮擦敢有好用？",
      "你敢有揣著你家己的？"
    ],
    "answer": 1,
    "explanation": "對方歸還借用物品時，確認收回並道謝，符合題目指定的回應目的。"
  },
  {
    "id": "social-003",
    "topic": "social",
    "type": "scene",
    "difficulty": 1,
    "context": "新同學轉來你們班，你欲認捌伊。",
    "question": "你欲先自我介紹，閣問伊的名。佗一句上適合？",
    "options": [
      "你敢是新轉來的同學？",
      "你佇佗一組？",
      "你好，我叫阿明，你叫啥物名？",
      "你敢有認捌咱班的人？"
    ],
    "answer": 2,
    "explanation": "自我介紹並詢問對方姓名，適合初次見面。"
  },
  {
    "id": "social-004",
    "topic": "social",
    "type": "scene",
    "difficulty": 2,
    "context": "你行路無注意，毋小心挵著同學。",
    "question": "你欲先道歉，閣關心同學敢有受傷。佗一句上適合？",
    "options": [
      "歹勢，我無注意，你會當讓我過無？",
      "歹勢，我無注意，借過一下。",
      "歹勢，我無注意，我欲先走矣。",
      "歹勢，我毋是故意的，你有按怎無？"
    ],
    "answer": 3,
    "explanation": "撞到別人先道歉並關心有無受傷。"
  },
  {
    "id": "social-005",
    "topic": "social",
    "type": "scene",
    "difficulty": 2,
    "context": "朋友今仔日心情無好，你欲關心伊。",
    "question": "你欲關心朋友，閣表示願意聽伊講。佗一句上適合？",
    "options": [
      "你敢有啥物煩惱？欲講我會當聽。",
      "你毋通想遐濟，緊去運動就好。",
      "你先莫講，我這馬無閒。",
      "你哪會無歡喜？真奇怪。"
    ],
    "answer": 0,
    "explanation": "先詢問並願意聆聽，不強迫對方。"
  },
  {
    "id": "social-006",
    "topic": "social",
    "type": "scene",
    "difficulty": 2,
    "context": "小組討論時，你佮同學意見無仝。",
    "question": "你欲有禮貌地提出無仝的想法。佗一句上適合？",
    "options": [
      "我有無仝的想法，毋過我無欲講。",
      "我有無仝的想法，會當予我講一下無？",
      "你講的我無同意，免閣討論。",
      "咱攏照我的想法做就好。"
    ],
    "answer": 1,
    "explanation": "禮貌表達不同想法，有助於討論。"
  },
  {
    "id": "social-007",
    "topic": "social",
    "type": "scene",
    "difficulty": 3,
    "context": "同學共你講一个秘密，毋過內容牽涉伊可能受傷。",
    "question": "你應該按怎做？",
    "options": [
      "先共全班講，逐家才會知。",
      "先共其他朋友講，請伊傳出去。",
      "關心伊，並揣信任的大人鬥處理。",
      "先答應永遠保密，毋免揣大人。"
    ],
    "answer": 2,
    "explanation": "若牽涉安全，應尋求可信任的大人協助。"
  },
  {
    "id": "social-008",
    "topic": "social",
    "type": "scene",
    "difficulty": 3,
    "context": "朋友邀你加入嘲笑別人的群組。",
    "question": "佗一个做法上適合？",
    "options": [
      "我無欲加入，毋過我會鬥轉傳。",
      "我無欲加入，毋過我會笑伊。",
      "我無欲加入，毋過我會揣別人加入。",
      "拒絕參與，嘛提醒朋友尊重別人。"
    ],
    "answer": 3,
    "explanation": "不參與傷害他人的互動。"
  },
  {
    "id": "social-009",
    "topic": "social",
    "type": "cloze",
    "difficulty": 1,
    "context": "「同學共我鬥相共，我欲共伊講＿＿＿＿。」",
    "question": "空格內底囥啥物上適合？",
    "options": [
      "多謝",
      "歹勢",
      "再會",
      "免客氣"
    ],
    "answer": 0,
    "explanation": "接受協助後表達感謝。"
  },
  {
    "id": "social-010",
    "topic": "social",
    "type": "cloze",
    "difficulty": 1,
    "context": "「我毋小心踏著別人的跤，愛先講＿＿＿＿。」",
    "question": "空格內底囥啥物上適合？",
    "options": [
      "免客氣",
      "歹勢",
      "多謝",
      "再會"
    ],
    "answer": 1,
    "explanation": "不小心碰到別人應道歉。"
  },
  {
    "id": "social-011",
    "topic": "social",
    "type": "cloze",
    "difficulty": 1,
    "context": "「朋友欲轉去厝矣，我共伊講＿＿＿＿。」",
    "question": "空格內底囥啥物上適合？",
    "options": [
      "多謝",
      "歹勢",
      "再會",
      "免客氣"
    ],
    "answer": 2,
    "explanation": "分別時可說再會。"
  },
  {
    "id": "social-012",
    "topic": "social",
    "type": "cloze",
    "difficulty": 2,
    "context": "「朋友咧講伊的煩惱，我先＿＿＿＿，無隨便插喙。」",
    "question": "空格內底囥啥物上適合？",
    "options": [
      "隨便改話題",
      "替伊做決定",
      "一直問伊細節",
      "聽伊講"
    ],
    "answer": 3,
    "explanation": "先聆聽再回應，符合情境。"
  },
  {
    "id": "social-013",
    "topic": "social",
    "type": "cloze",
    "difficulty": 2,
    "context": "「我欲借同學的冊，愛先＿＿＿＿伊。」",
    "question": "空格內底囥啥物上適合？",
    "options": [
      "問",
      "家己提",
      "先藏起來",
      "請別人偷提"
    ],
    "answer": 0,
    "explanation": "借用別人物件應先詢問。"
  },
  {
    "id": "social-014",
    "topic": "social",
    "type": "cloze",
    "difficulty": 2,
    "context": "「兩个人意見無仝，會當坐落來＿＿＿＿。」",
    "question": "空格內底囥啥物上適合？",
    "options": [
      "相罵",
      "討論",
      "攏無講話",
      "互相責怪"
    ],
    "answer": 1,
    "explanation": "不同意見可透過討論協調。"
  },
  {
    "id": "social-015",
    "topic": "social",
    "type": "cloze",
    "difficulty": 3,
    "context": "「朋友講伊這馬無想欲講，我愛＿＿＿＿伊的意思。」",
    "question": "空格內底囥啥物上適合？",
    "options": [
      "一直追問",
      "共別人講",
      "尊重",
      "要求伊一定愛講"
    ],
    "answer": 2,
    "explanation": "對方暫時不願談，應尊重其意願。"
  },
  {
    "id": "social-016",
    "topic": "social",
    "type": "cloze",
    "difficulty": 3,
    "context": "「網路頂看著有人欺負同學，毋通鬥＿＿＿＿傷人的話。」",
    "question": "空格內底囥啥物上適合？",
    "options": [
      "提醒",
      "阻止",
      "關心",
      "轉傳"
    ],
    "answer": 3,
    "explanation": "不應轉傳傷害他人的訊息。"
  },
  {
    "id": "social-017",
    "topic": "social",
    "type": "dialogue",
    "difficulty": 1,
    "context": "阿明：「多謝你借我鉛筆。」\n小華：「＿＿＿＿」",
    "question": "小華欲回應阿明的感謝。佗一句上適合？",
    "options": [
      "免客氣。",
      "這枝筆你明仔載閣借我。",
      "這枝筆我猶咧用。",
      "這枝筆是啥物色？"
    ],
    "answer": 0,
    "explanation": "對感謝可回答免客氣。"
  },
  {
    "id": "social-018",
    "topic": "social",
    "type": "dialogue",
    "difficulty": 1,
    "context": "小美：「你好，我是新來的同學。」\n阿安：「＿＿＿＿」",
    "question": "阿安欲表示歡迎。佗一句上適合？",
    "options": [
      "你是佗一班的？",
      "你好，歡迎你！",
      "你有帶課本無？",
      "你欲坐佗位？"
    ],
    "answer": 1,
    "explanation": "回應新同學的招呼並表示歡迎。"
  },
  {
    "id": "social-019",
    "topic": "social",
    "type": "dialogue",
    "difficulty": 1,
    "context": "阿弟：「歹勢，我毋小心共你的冊弄落去。」\n阿姊：「＿＿＿＿」",
    "question": "阿姊欲接受道歉，閣做伙處理落去的冊。佗一句上適合？",
    "options": [
      "我欲先揣別本冊。",
      "你共冊囥佇佗位？",
      "無要緊，咱共冊提起來。",
      "這本冊敢有破去？"
    ],
    "answer": 2,
    "explanation": "回應道歉並處理掉落的書。"
  },
  {
    "id": "social-020",
    "topic": "social",
    "type": "dialogue",
    "difficulty": 2,
    "context": "小華：「我這馬有一寡煩惱。」\n阿明：「＿＿＿＿」",
    "question": "阿明欲表示願意聽小華講煩惱。佗一句上適合？",
    "options": [
      "你想欲講的時陣才講，毋過我無欲聽。",
      "你有煩惱就免講予別人知。",
      "你有煩惱就一定愛講清楚。",
      "你若想欲講，我會當聽。"
    ],
    "answer": 3,
    "explanation": "提供聆聽與支持。"
  },
  {
    "id": "social-021",
    "topic": "social",
    "type": "dialogue",
    "difficulty": 2,
    "context": "小美：「這个做法我無仝意。」\n阿安：「＿＿＿＿」",
    "question": "阿安欲邀請小美說明伊的想法。佗一句上適合？",
    "options": [
      "你會當講看覓你的想法無？",
      "你有無仝意見，就免閣講。",
      "你無仝意就照我的做法。",
      "你有意見，我嘛無欲聽。"
    ],
    "answer": 0,
    "explanation": "詢問不同意見，促進對話。"
  },
  {
    "id": "social-022",
    "topic": "social",
    "type": "dialogue",
    "difficulty": 2,
    "context": "阿明：「我欲借你的平板一下，會使無？」\n小華：「＿＿＿＿」",
    "question": "小華欲婉轉說明這馬無法度借，等一下才會當借。佗一句上適合？",
    "options": [
      "我這馬咧用，你家己直接提去。",
      "我這馬咧用，等一下才借你，好無？",
      "我這馬咧用，你免問我。",
      "我這馬咧用，你毋通閣來問。"
    ],
    "answer": 1,
    "explanation": "清楚表達目前無法借用並協調時間。"
  },
  {
    "id": "social-023",
    "topic": "social",
    "type": "dialogue",
    "difficulty": 3,
    "context": "小美：「我無愛逐家共我的相片傳出去。」\n阿安：「＿＿＿＿」",
    "question": "阿安欲明確答應無轉傳相片。佗一句上適合？",
    "options": [
      "我知影，毋過我欲先傳予朋友。",
      "我知影，毋過我欲先放上網。",
      "好，我會尊重你，無共人轉傳。",
      "我知影，毋過我欲先傳予群組。"
    ],
    "answer": 2,
    "explanation": "尊重對方的影像分享意願。"
  },
  {
    "id": "social-024",
    "topic": "social",
    "type": "dialogue",
    "difficulty": 3,
    "context": "阿明：「同學佇群組內底一直笑我。」\n小華：「＿＿＿＿」",
    "question": "小華欲提出安全而且會當得到協助的做法。佗一句上適合？",
    "options": [
      "這毋應該，你先共訊息轉予全班看。",
      "這毋應該，你家己忍耐就好。",
      "這毋應該，你去罵轉去就好。",
      "這毋應該，我陪你揣老師鬥處理。"
    ],
    "answer": 3,
    "explanation": "面對霸凌訊息應支持當事人並尋求協助。"
  },
  {
    "id": "social-025",
    "topic": "social",
    "type": "speaking",
    "difficulty": 1,
    "context": "你欲共初次見面的同學拍招呼。",
    "question": "佗一句有拍招呼，嘛有表達真歡喜認捌對方？",
    "options": [
      "你好，真歡喜認捌你。",
      "你好，你是佗一班的？",
      "你好，你有帶課本無？",
      "你好，你欲去佗位？"
    ],
    "answer": 0,
    "explanation": "初次見面可打招呼並表達認識的喜悅。"
  },
  {
    "id": "social-026",
    "topic": "social",
    "type": "speaking",
    "difficulty": 1,
    "context": "同學幫你提重物，你欲表達感謝。",
    "question": "佗一句是直接表達感謝？",
    "options": [
      "這袋敢會傷重？",
      "多謝你鬥我提。",
      "你會當閣鬥我提無？",
      "你欲提去佗位？"
    ],
    "answer": 1,
    "explanation": "明確感謝對方的幫忙。"
  },
  {
    "id": "social-027",
    "topic": "social",
    "type": "speaking",
    "difficulty": 1,
    "context": "你欲請同學等你一下。",
    "question": "佗一句是請對方等你一下？",
    "options": [
      "你會當借我一下無？",
      "你會當鬥我一下無？",
      "你會當等我一下無？",
      "你會當教我一下無？"
    ],
    "answer": 2,
    "explanation": "用詢問方式禮貌請對方稍等。"
  },
  {
    "id": "social-028",
    "topic": "social",
    "type": "speaking",
    "difficulty": 2,
    "context": "你毋小心講話傷著朋友，想欲道歉。",
    "question": "佗一句有承認家己講話傷著朋友？",
    "options": [
      "歹勢，我頭拄仔講的話你莫放佇心內。",
      "歹勢，我頭拄仔講的話你嘛有責任。",
      "歹勢，我頭拄仔講的話無啥物。",
      "歹勢，我頭拄仔講的話傷著你矣，我會注意。"
    ],
    "answer": 3,
    "explanation": "承認傷人的言語並道歉。"
  },
  {
    "id": "social-029",
    "topic": "social",
    "type": "speaking",
    "difficulty": 2,
    "context": "你無法度答應朋友的邀請，想欲婉轉拒絕。",
    "question": "佗一句有表達感謝，閣說明彼工無閒？",
    "options": [
      "多謝你揣我，毋過我彼工無閒。",
      "多謝你揣我，毋過你家己去就好。",
      "多謝你揣我，毋過你莫閣揣我。",
      "多謝你揣我，毋過我無愛佮你做伙。"
    ],
    "answer": 0,
    "explanation": "先表達感謝，再說明無法參加。"
  },
  {
    "id": "social-030",
    "topic": "social",
    "type": "speaking",
    "difficulty": 2,
    "context": "你欲請同學先聽你講煞。",
    "question": "佗一句有禮貌地請同學先予你講煞？",
    "options": [
      "我講的才著，等我講煞。",
      "會當予我先講煞，才換你講無？",
      "你先莫講，攏聽我講。",
      "我無欲聽你的，先聽我講。"
    ],
    "answer": 1,
    "explanation": "禮貌請對方讓自己說完。"
  },
  {
    "id": "social-031",
    "topic": "social",
    "type": "speaking",
    "difficulty": 3,
    "context": "朋友一直問你毋想欲回答的私事。",
    "question": "佗一句有表明這是私事，而且這馬無想欲講？",
    "options": [
      "歹勢，這是我的私事，我欲講予全班知。",
      "歹勢，這是我的私事，你去問別人。",
      "歹勢，這是我的私事，我這馬無想欲講。",
      "歹勢，這是我的私事，你毋通有問題。"
    ],
    "answer": 2,
    "explanation": "清楚而有禮貌地表達界線。"
  },
  {
    "id": "social-032",
    "topic": "social",
    "type": "speaking",
    "difficulty": 3,
    "context": "你看著有人佇網路群組傳同學的相片，欲提醒伊。",
    "question": "佗一句是提醒未經同意毋通轉傳相片？",
    "options": [
      "未經同意，先傳予好朋友就好。",
      "未經同意，先改圖才傳就好。",
      "未經同意，先傳予群組就好。",
      "未經同意，毋通隨便共別人的相片傳出去。"
    ],
    "answer": 3,
    "explanation": "尊重他人影像與隱私。"
  },
  {
    "id": "social-033",
    "topic": "social",
    "type": "judgement",
    "difficulty": 1,
    "context": "小華：「多謝你借我冊。」\n阿明：「免客氣。」",
    "question": "阿明主要咧做啥物？",
    "options": [
      "回應感謝。",
      "要求借冊。",
      "說明借冊的原因。",
      "提醒別人還冊。"
    ],
    "answer": 0,
    "explanation": "免客氣是回應感謝的用語。"
  },
  {
    "id": "social-034",
    "topic": "social",
    "type": "judgement",
    "difficulty": 1,
    "context": "小美：「歹勢，我來較晏。」",
    "question": "小美咧表達啥物？",
    "options": [
      "為較晏到找理由。",
      "為較晏到道歉。",
      "為較晏到道謝。",
      "為較晏到責怪別人。"
    ],
    "answer": 1,
    "explanation": "歹勢在此表示道歉。"
  },
  {
    "id": "social-035",
    "topic": "social",
    "type": "judgement",
    "difficulty": 1,
    "context": "阿明：「你會當借我橡皮擦無？」",
    "question": "阿明欲做啥物？",
    "options": [
      "詢問橡皮擦的價錢。",
      "歸還橡皮擦。",
      "借橡皮擦。",
      "介紹橡皮擦的用法。"
    ],
    "answer": 2,
    "explanation": "這句話是在詢問能否借用。"
  },
  {
    "id": "social-036",
    "topic": "social",
    "type": "judgement",
    "difficulty": 2,
    "context": "小華：「我有無仝的想法，會當予我講一下無？」",
    "question": "小華的態度是啥物？",
    "options": [
      "要求別人一定同意。",
      "拒絕別人表達想法。",
      "直接否定別人的意見。",
      "有禮貌表達不同意見。"
    ],
    "answer": 3,
    "explanation": "尊重討論並提出自己的看法。"
  },
  {
    "id": "social-037",
    "topic": "social",
    "type": "judgement",
    "difficulty": 2,
    "context": "阿安：「小美今仔日無想欲講伊的代誌，我就先無閣問。」",
    "question": "阿安主要咧做啥物？",
    "options": [
      "尊重小美的意願。",
      "要求小美講出全部細節。",
      "共小美的代誌傳出去。",
      "一直問小美發生啥物代誌。"
    ],
    "answer": 0,
    "explanation": "對方不願談時不強迫。"
  },
  {
    "id": "social-038",
    "topic": "social",
    "type": "judgement",
    "difficulty": 2,
    "context": "小美：「借別人的物件，愛先問過對方。」",
    "question": "小美咧提醒啥物？",
    "options": [
      "借物件免問對方。",
      "借物件進前先徵求同意。",
      "借物件免還予對方。",
      "借物件會當隨便轉借。"
    ],
    "answer": 1,
    "explanation": "借用前應得到對方同意。"
  },
  {
  "id": "social-039",
  "topic": "social",
  "type": "judgement",
  "difficulty": 3,
  "context": "小華：「朋友共我講秘密，毋過伊講伊可能會傷害家己。我想欲趕緊揣老師抑是其他可信任的大人鬥幫忙。」",
  "question": "小華的做法上符合啥物原則？",
  "options": [
    "先共秘密傳予全班。",
    "先答應無論啥物攏保密。",
    "安全重要，應揣可信任的大人協助。",
    "先無理伊的安全問題。"
  ],
  "answer": 2,
  "explanation": "朋友可能傷害自己時，應儘快告訴可信任的大人或校園輔導人員協助，不應為保守秘密而忽略安全。"
},
  {
    "id": "social-040",
    "topic": "social",
    "type": "judgement",
    "difficulty": 3,
    "context": "阿明：「同學無同意，我就無共伊的相片放上網。」",
    "question": "阿明主要咧尊重啥物？",
    "options": [
      "別人的上課時間。",
      "別人的功課內容。",
      "別人的消費習慣。",
      "別人的影像與隱私。"
    ],
    "answer": 3,
    "explanation": "未經同意不分享他人影像，符合隱私尊重。"
  }
]
};
