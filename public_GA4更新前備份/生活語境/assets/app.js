const TOPICS={
 school:{icon:'🏫',name:'校園生活',desc:'上課、下課、作業、同學互動與校園日常'},
 food:{icon:'🍜',name:'飲食生活',desc:'點餐、用餐、口味、買食物與餐桌對話'},
 family:{icon:'🏠',name:'家庭生活',desc:'家人互動、家務、作息與日常照顧'},
 transport:{icon:'🚌',name:'交通出行',desc:'搭車、問路、時間、方向與外出情境'},
 shopping:{icon:'🛍️',name:'買物消費',desc:'詢價、挑選、付款、數量與市場商店對話'},
 weather:{icon:'🌦️',name:'天氣生活',desc:'冷熱、落雨、風勢與生活提醒'},
 festival:{icon:'🎉',name:'節慶文化',desc:'過年、端午、中秋與臺灣生活文化'},
 social:{icon:'👥',name:'人際互動',desc:'邀請、關心、道歉、請求與回應'}
};
const TYPES={scene:'💬 情境選句',cloze:'🧩 語境填空',dialogue:'🔄 對話接龍',speaking:'🗣️ 按怎講？',judgement:'🎭 情境判斷'};
const $=id=>document.getElementById(id);const bank=window.LIFE_CONTEXT_BANK||{};let currentTopic=null,set=[],idx=0,score=0,answered=[];
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function show(id){['topics','setup','quiz','result'].forEach(x=>$(x).classList.add('hidden'));$(id).classList.remove('hidden');window.scrollTo(0,0)}
function renderTopics(){const box=$('topicGrid');box.innerHTML='';Object.entries(TOPICS).forEach(([key,t])=>{const n=(bank[key]||[]).length;const ready=n>0;const el=document.createElement(ready?'button':'div');el.className='topicCard'+(ready?'':' disabled');el.innerHTML=`<div class="topicIcon">${t.icon}</div><div><h3>${t.name}</h3><p>${t.desc}</p><span class="count">${ready?`${n} 題`:'題庫準備中'}</span></div><b class="arrow">${ready?'→':'—'}</b>`;if(ready)el.onclick=()=>chooseTopic(key);box.appendChild(el)})}
function chooseTopic(key){currentTopic=key;const t=TOPICS[key],n=(bank[key]||[]).length;$('setupIcon').textContent=t.icon;$('setupTitle').textContent=t.name;$('setupDesc').textContent=t.desc;$('available').textContent=`目前題庫 ${n} 題`;const choices=$('amounts');choices.innerHTML='';[8,15,'all'].forEach(v=>{const want=v==='all'?n:v;const b=document.createElement('button');b.className='amount';b.disabled=n===0;b.textContent=v==='all'?`全部｜${n} 題`:`${v} 題`;if(v!=='all'&&n<v){b.textContent+=`（目前不足，將出 ${n} 題）`}b.onclick=()=>startQuiz(v);choices.appendChild(b)});show('setup')}
function buildMixedSet(items,n){
 const groups={};Object.keys(TYPES).forEach(k=>groups[k]=shuffle(items.filter(q=>q.type===k)));
 const out=[];const keys=shuffle(Object.keys(TYPES));let turn=0;
 while(out.length<n){let added=false;for(let j=0;j<keys.length&&out.length<n;j++){const k=keys[(turn+j)%keys.length];if(groups[k]&&groups[k].length){out.push(groups[k].pop());added=true}}if(!added)break;turn++}
 if(out.length<n){const used=new Set(out.map(q=>q.id));out.push(...shuffle(items.filter(q=>!used.has(q.id))).slice(0,n-out.length))}
 return shuffle(out.slice(0,n));
}
function startQuiz(amount){let all=bank[currentTopic]||[];let n=amount==='all'?all.length:Math.min(amount,all.length);set=amount==='all'?shuffle(all):buildMixedSet(all,n);idx=0;score=0;answered=[];if(!set.length){show('topics');return}show('quiz');renderQuestion()}
function renderQuestion(){const q=set[idx],t=TOPICS[currentTopic];$('quizTitle').textContent=`${t.icon} ${t.name}`;$('progressText').textContent=`第 ${idx+1} / ${set.length} 題`;$('scoreNow').textContent=`目前 ${score} 分`;$('fill').style.width=`${(idx+1)/set.length*100}%`;const stars='⭐'.repeat(Math.max(1,Math.min(3,q.difficulty||1)));$('qcard').innerHTML=`<div class="qmeta"><span>${TYPES[q.type]||q.type}</span><span>${stars}</span></div>${q.context?`<div class="context">${q.context}</div>`:''}<div class="question">${q.question}</div><div class="options">${q.options.map((o,i)=>`<button class="opt" data-i="${i}"><b>${String.fromCharCode(65+i)}</b><span>${o}</span></button>`).join('')}</div><div id="feedback"></div>`;document.querySelectorAll('.opt').forEach(b=>b.onclick=()=>pick(Number(b.dataset.i),b))}
function pick(n,el){if(document.querySelector('.opt.locked'))return;const q=set[idx],correct=n===q.answer;document.querySelectorAll('.opt').forEach((b,i)=>{b.classList.add('locked');if(i===q.answer)b.classList.add('correct')});if(!correct)el.classList.add('wrong');if(correct)score++;answered.push({type:q.type,correct});$('feedback').innerHTML=`<div class="feedback ${correct?'ok':'bad'}"><b>${correct?'✅ 著矣！':'💡 正確答案：'+q.options[q.answer]}</b><div>${q.explanation||''}</div></div><button class="next" id="nextBtn">${idx===set.length-1?'看結果 →':'下一題 →'}</button>`;$('nextBtn').onclick=next}
function next(){idx++;if(idx<set.length)renderQuestion();else finish()}
function finish(){$('finalIcon').textContent=score===set.length?'🏆':score/set.length>=.7?'🌟':'🌱';$('finalScore').textContent=`${score} / ${set.length}`;$('finalRate').textContent=`答對率 ${Math.round(score/set.length*100)}%`;const rows=Object.entries(TYPES).map(([k,name])=>{const list=answered.filter(x=>x.type===k);if(!list.length)return'';const ok=list.filter(x=>x.correct).length;return `<div class="typeRow"><span>${name}</span><b>${ok} / ${list.length}</b></div>`}).join('');$('breakdown').innerHTML=rows||'<p>這次沒有題型統計。</p>';show('result')}
$('backHome').onclick=()=>location.href='../語境填空.dc.html';$('setupBack').onclick=()=>show('topics');$('quizBack').onclick=()=>show('setup');$('retry').onclick=()=>startQuiz(set.length);$('resultTopics').onclick=()=>show('topics');renderTopics();
