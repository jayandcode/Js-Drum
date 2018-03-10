window.addEventListener("keyup", function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio){
    return;
  }
  else {
    audio.currentTime = 0;
    key.classList.add("active");
    setTimeout(function(){
      key.classList.remove("active");
    },1000);
    audio.play();
  }
});
