/* 台語點讀 V2｜shared-engine：全文依正式逐段音檔連續播放
   不處理版面；各課既有 CSS/HTML 不變。 */
window.TWReadSequence = {
  start(audio, files, rate, onIndex, onDone) {
    let i=0, stopped=false;
    const oldEnded=audio.onended;
    function next(){
      if(stopped) return;
      if(i>=files.length){
        audio.onended=oldEnded || null;
        if(onDone) onDone();
        return;
      }
      if(onIndex) onIndex(i);
      audio.src=files[i++];
      audio.playbackRate=rate();
      audio.play();
    }
    audio.onended=next;
    next();
    return ()=>{stopped=true;audio.pause();audio.onended=oldEnded||null;};
  }
};