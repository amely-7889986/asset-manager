var shade = document.getElementById("shade");
function materialLightAnime(){
  var pop = document.getElementById("material-light-anime");
  var text = document.getElementById("text-anime");
  pop.style.display = "block";
  shade.style.display = "block";
  setTimeout(function() {
      if(screen.width <600){
      pop.style.width = "90%";
      pop.style.height = "71%";
      pop.style.borderRadius = "2px";
    }
    else{
    pop.style.width = "40%";
    pop.style.height = "auto";
    pop.style.borderRadius = "2px";
  }
  }, 200);
  setTimeout(function() {
    text.style.marginTop = "0";
    text.style.opacity = "1.0";
  }, 800);
}
function exitLightAnime(){
  var pop = document.getElementById("material-light-anime");
  var text = document.getElementById("text-anime");
  pop.style.width = "20px";
  pop.style.height = "20px";
  pop.style.borderRadius = "100%";
  shade.style.display = "none";
  setTimeout(function(){
    pop.style.display = "none";  }, 600);
    text.style.opacity = "0.0";
    text.style.marginTop = "20px";
}

