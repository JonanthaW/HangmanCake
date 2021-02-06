function chooseWord() {
  let palavra = document.getElementById("chosen_word");

  // Words who can be selected \/

  const randomWord = ["ESCOLHA", "PASTEL", "BOLA", "GATO", "HOTEL", "FATO", "VIDA", "LIVRO", "CANTO", "PEDRO", "MARIO", "NUVEM",
  "FILME", "VENTILADOR"];

  let chosenWord = randomWord[Math.floor(Math.random() * randomWord.length)]; // Choose one word randomly
  let lettersLength = chosenWord.length-1; // letters length
  let wordScrambled = "";

  document.getElementById("used_letters").innerText = "letras utilizadas:  ";
  palavra.innerText = chosenWord;


  for(var i=0; i<=lettersLength; i++) { // Troca todas as letras por "_"
    wordScrambled += chosenWord[i].replace(chosenWord[i], "_");
  }

  palavra.innerText = wordScrambled;
  return content = [chosenWord, wordScrambled];
}
chooseWord();
