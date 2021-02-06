var action = () => {
  document.querySelector("#restart").addEventListener("click", () => {
    document.querySelector(".lost").style.display = "none";
    document.querySelector(".pontuation_screen").style.display = "none";
    for(i=0; i<24; i++) {
         document.querySelector(`.letters button:nth-child(${i+1})`).style.display = "block";
       }
    document.querySelector("#used_letters").innerText = "letras utilizadas:  ";
    chooseWord();
    chances = 5;
    document.querySelector(".cake-img-content img").src = `assets/img/bolo/${chances}.png`;
  })

  document.querySelector("#continue").addEventListener("click", () => {
    document.querySelector(".win").style.display = "none";
    document.querySelector(".pontuation_screen").style.display = "none";
    for(i=0; i<24; i++) {
         document.querySelector(`.letters button:nth-child(${i+1})`).style.display = "block";
       }
    document.querySelector("#used_letters").innerText = "letras utilizadas:  ";
    chooseWord();
    chances = 5;
    document.querySelector(".cake-img-content img").src = `assets/img/bolo/${chances}.png`;
  })
}

action();
