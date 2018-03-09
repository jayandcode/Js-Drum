window.addEventListener("keyup", function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio){
    return;
  }
  else {
    resetStyle();
    audio.currentTime = 0;
    key.classList.add("active");
    audio.play();
  }

});

function resetStyle(){
  const allKeys = document.querySelectorAll(".key");
  allKeys.forEach(function(key){
  key.classList.remove("active");
  });
}
