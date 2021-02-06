var chances = 5;

var addLetters = () => {
  let lettersContainer = document.querySelector(".letters");
  document.querySelector(".cake-img-content img").src = `assets/img/bolo/${chances}.png`;
  let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Z"];

  alphabet.map((currentValue, index)=>{
    let button = document.createElement("button")
    button.innerText = currentValue;
    button.addEventListener("click", ()=>{
        for(i=0; i<=content[0].length; i++){
          if (content[0][i] == button.innerText) {
            var position = i;
        }
      }
      if (content[0][position] == button.innerText) {
        let wordScrambled = content[1].split("");
        wordScrambled.splice(content[0].indexOf(content[0][position]), 1, button.innerText);
        let wordUnited = wordScrambled.join("");
        content[1] = wordUnited;
        document.querySelector("#chosen_word").innerText =  wordUnited;
        if (content[0] == content[1]) {
          document.querySelector(".pontuation_screen").style.display = "flex";
          document.querySelector(".win").style.display = "grid";
        }
      }
      else {
        chances--;
        document.querySelector(".cake-img-content img").src = `assets/img/bolo/${chances}.png`;
        document.querySelector("#used_letters").innerText += ` ${button.innerText},`;
        document.querySelector(`.letters button:nth-child(${index+1})`).style.display = "none";
        if (chances == 0) {
          document.querySelector(".pontuation_screen").style.display = "flex";
          document.querySelector(".lost").style.display = "grid";
        }
      }
    })
    lettersContainer.append(button);
  })
}

addLetters();
