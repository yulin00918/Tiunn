
const ROUND = 1;
const QUIZ_SECONDS = 8;
const RAPID_SECONDS = 5;

const Q = QUESTION_BANK.filter(x=>x.round===ROUND);
let i=0, score=0, locked=false, rapidList=[], ri=0;
let timerId=null, timeLeft=0;
let audioCtx=null, tickLoop=null;

const $ = id => document.getElementById(id);

function ensureAudio(){
  if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if(audioCtx.state==="suspended") audioCtx.resume();
}
function tone(freq,dur=.08,type="sine",vol=.04,delay=0){
  ensureAudio();
  const o=audioCtx.createOscillator(), g=audioCtx.createGain();
  const t=audioCtx.currentTime+delay;
  o.type=type; o.frequency.value=freq;
  g.gain.setValueAtTime(vol,t);
  g.gain.exponentialRampToValueAtTime(.001,t+dur);
  o.connect(g); g.connect(audioCtx.destination);
  o.start(t); o.stop(t+dur);
}
function tickSound(){ tone(950,.03,"square",.02); }
function correctSound(){ tone(660,.08,"sine",.05); tone(880,.11,"sine",.05,.09); tone(1100,.14,"sine",.045,.20); }
function wrongSound(){ tone(220,.12,"sawtooth",.035); tone(165,.18,"sawtooth",.035,.11); }
function timeoutSound(){ tone(440,.10,"square",.04); tone(330,.13,"square",.04,.12); tone(220,.20,"square",.04,.28); }

function stopTimer(){
  if(timerId){ clearInterval(timerId); timerId=null; }
}
function paintTimer(el, sec){
  el.textContent=sec;
  el.classList.remove("warn","danger");
  if(sec<=2) el.classList.add("danger");
  else if(sec<=4) el.classList.add("warn");
}
function startTimer(seconds, timerEl, areaEl, onTimeout){
  stopTimer();
  timeLeft=seconds;
  areaEl.classList.remove("idle");
  paintTimer(timerEl,timeLeft);
  tickSound();
  timerId=setInterval(()=>{
    timeLeft--;
    paintTimer(timerEl,timeLeft);
    if(timeLeft>0) tickSound();
    if(timeLeft<=0){
      stopTimer();
      timeoutSound();
      onTimeout();
    }
  },1000);
}

function renderQuestion(){
  locked=false;
  const x=Q[i];
  $("qIndex").textContent=`第 ${i+1} 題 / ${Q.length}`;
  $("scoreText").textContent=`答對 ${score} 題`;
  $("progressBar").style.width=`${((i+1)/Q.length)*100}%`;
  $("quizImage").src=x.image;
  $("quizImage").alt=x.zh;
  $("quizTimer").textContent=QUIZ_SECONDS;
  $("timerArea").classList.add("idle");

  $("choiceA").textContent=x.options[0];
  $("choiceB").textContent=x.options[1];
  ["choiceA","choiceB"].forEach(id=>{
    $(id).className="choice";
    $(id).disabled=false;
  });

  $("choices").classList.add("hidden");
  $("startArea").classList.remove("hidden");
  $("feedback").classList.remove("show");
  $("nextBtn").classList.add("hidden");
}

function startQuestion(){
  ensureAudio();
  $("startArea").classList.add("hidden");
  $("choices").classList.remove("hidden");
  startTimer(QUIZ_SECONDS,$("quizTimer"),$("timerArea"),quizTimeout);
}

function choose(ans, btn){
  if(locked) return;
  ensureAudio();
  const x=Q[i];
  if(ans===x.roman){
    stopTimer(); correctSound(); locked=true; score++;
    $("choiceA").disabled=$("choiceB").disabled=true;
    btn.classList.add("correct");
    $("feedbackBig").textContent="🎉 著矣！";
    $("feedbackDetail").innerHTML=`<strong>${x.word}</strong>　${x.roman}<br>華語：${x.zh}`;
    $("feedback").classList.add("show");
    $("scoreText").textContent=`答對 ${score} 題`;
    $("nextBtn").classList.remove("hidden");
  }else{
    wrongSound();
    btn.classList.add("wrong");
    $("feedbackBig").textContent="💡 閣想看覓！";
    $("feedbackDetail").textContent="答案猶未公布，你閣會使選一擺。";
    $("feedback").classList.add("show");
    setTimeout(()=>btn.classList.remove("wrong"),400);
  }
}

function quizTimeout(){
  if(locked) return;
  locked=true;
  $("choiceA").disabled=$("choiceB").disabled=true;
  const x=Q[i];
  $("feedbackBig").textContent="⏰ 時間到！";
  $("feedbackDetail").innerHTML=`正確答案：<strong>${x.word}</strong>　${x.roman}<br>華語：${x.zh}`;
  $("feedback").classList.add("show");
  $("nextBtn").classList.remove("hidden");
}

function shuffle(arr){ return [...arr].sort(()=>Math.random()-.5); }

function enterRapid(){
  rapidList=shuffle(Q).slice(0,2);
  ri=0;
  $("midPanel").classList.add("hidden");
  $("rapidPanel").classList.remove("hidden");
  renderRapid();
}
function renderRapid(){
  const x=rapidList[ri];
  $("rapidIndex").textContent=`第 ${ri+1} 題 / 2`;
  $("rapidImage").src=x.image;
  $("rapidImage").alt=x.zh;
  $("rapidTimer").textContent=RAPID_SECONDS;
  $("rapidTimerArea").classList.add("idle");
  $("rapidStartArea").classList.remove("hidden");
  $("rapidAnswer").classList.add("hidden");
  $("revealBtn").classList.add("hidden");
  $("rapidNextBtn").classList.add("hidden");
}
function startRapid(){
  ensureAudio();
  $("rapidStartArea").classList.add("hidden");
  $("revealBtn").classList.remove("hidden");
  startTimer(RAPID_SECONDS,$("rapidTimer"),$("rapidTimerArea"),rapidTimeout);
}
function rapidTimeout(){
  revealRapid();
}
function revealRapid(){
  stopTimer();
  const x=rapidList[ri];
  $("rapidWord").textContent=x.word;
  $("rapidRoman").textContent=x.roman;
  $("rapidZh").textContent=`華語：${x.zh}`;
  $("rapidAnswer").classList.remove("hidden");
  $("revealBtn").classList.add("hidden");
  $("rapidNextBtn").classList.remove("hidden");
}

$("startQuestionBtn").onclick=startQuestion;
$("choiceA").onclick=e=>choose(Q[i].options[0],e.currentTarget);
$("choiceB").onclick=e=>choose(Q[i].options[1],e.currentTarget);
$("nextBtn").onclick=()=>{
  stopTimer();
  if(i<Q.length-1){ i++; renderQuestion(); }
  else{
    $("quizPanel").classList.add("hidden");
    $("midPanel").classList.remove("hidden");
  }
};
$("enterRapidBtn").onclick=enterRapid;
$("startRapidBtn").onclick=startRapid;
$("revealBtn").onclick=revealRapid;
$("rapidNextBtn").onclick=()=>{
  stopTimer();
  if(ri<1){ ri++; renderRapid(); }
  else{
    $("rapidPanel").classList.add("hidden");
    $("donePanel").classList.remove("hidden");
  }
};
$("restartBtn").onclick=()=>{
  stopTimer();
  i=0; score=0; ri=0;
  $("donePanel").classList.add("hidden");
  $("quizPanel").classList.remove("hidden");
  renderQuestion();
};

renderQuestion();
