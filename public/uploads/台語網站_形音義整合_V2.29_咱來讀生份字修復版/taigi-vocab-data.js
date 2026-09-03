/* 台語共用題庫｜索引引擎。遊戲頁不需隨新增課次修改。 */
(function(){
const LESSONS = window.TAIGI_LESSONS || [];
const PUBLISHERS = [
 {key:'yuda',label:'育達版(國中)',books:[1,3]},
 {key:'kangxuan',label:'康軒版(國中)',books:[1,2,3]},
 {key:'zhenping',label:'真平版(國中)',books:[1,2,3,4]}
];
const PLACEHOLDER_ROWS={
 'yuda-3':3,
 'kangxuan-1':2,'kangxuan-2':2,'kangxuan-3':2,
 'zhenping-1':3,'zhenping-2':2,'zhenping-3':2,'zhenping-4':2
};
function lessonsFor(publisher,book){return LESSONS.filter(x=>x.publisher===publisher&&x.book===book).sort((a,b)=>a.lesson-b.lesson)}
function buildRows(publisher,book){
 const found=lessonsFor(publisher,book);
 const max=Math.max(PLACEHOLDER_ROWS[publisher+'-'+book]||0,...found.map(x=>x.lesson),0);
 const byNo=new Map(found.map(x=>[x.lesson,x]));
 const rows=[];
 for(let i=1;i<=max;i++){const x=byNo.get(i); rows.push(x?{label:`第${i}課 ${x.title}`,words:x.words,subtitle:`${PUBLISHERS.find(p=>p.key===publisher).label.replace('(國中)','')}國中第${book}冊 第${i}課 ${x.title}`,lessonId:x.id}:{label:`第${i}課`,words:null});}
 return rows;
}
const GROUPS_DEF=PUBLISHERS.map(p=>({key:p.key,label:p.label,cards:p.books.map(book=>{const rows=buildRows(p.key,book);const count=rows.filter(r=>r.words).length;return{title:`第${book}冊`,subtitle:`共 ${count} 課`,rows};})}));
window.TAIGI_VOCAB={GROUPS_DEF,LESSONS,getLesson:id=>LESSONS.find(x=>x.id===id)||null};
})();
