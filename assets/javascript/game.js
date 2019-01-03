//Create array of words
var wordList = [
   "christmas", 
   "new years", 
   "christmas tree", 
   "noel", 
   "party", 
   "family",
   "lights",
   "holiday",
   "decorations",
   "mistletoe",
   "holiday music",
   "resolutions",
   "friends",
   "love",
   "fireworks"
];
var wins= 0;
document.getElementById("win-box").innerHTML = wins;

var guesses= 5;
document.getElementById("remainingGuess").innerHTML = guesses;

//Create random word choice
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];

//Display the word in current word box
 var wordText = document.getElementById("wordOption");

for (var i = 0; i < randomWord.length; i++){

   var newWordP = document.createElement('wordOption');

   wordText.appendChild(newWordP);

   console.log("The current word: "+ randomWord);
};

//Create underscores for each letter of the word
var progressWord = [];

for (i = 0; i < randomWord.length; i++) {
   progressWord.push("_");
}
document.getElementById("wordOption").innerHTML = progressWord.join(" ");



function lettersLeft(){
   var lettersLeft=0;
   for(i in progressWord){
      if (progressWord[i] === "_")
         lettersLeft++;
   }
   return lettersLeft;
}

//Input users guess
document.onkeyup = function (event){

   var userGuess= event.key;
   var i;

   function letterInWord (randomWord){
      var positions = new Array ();
      for (i = 0; i < randomWord.length;i++){
         if (randomWord[i] == userGuess)
               positions.push(i);
      }
      return positions;
   }
   console.log('User guess: '.concat(userGuess));

   var positions = letterInWord (randomWord);

   //When user guesses a correct letter then show it in replace of the underscore
   if(positions.length){
      console.log("User guessed a letter from the current word: " + userGuess);

      for (i=0; i < positions.length; i++){
         progressWord[positions[i]] = userGuess;
      }

      document.getElementById('wordOption').innerHTML = progressWord.join(" ");
   } 
   //If user guesses other letters, display it in 'Letters Already Guessed' and lower number of guesses
      else {
      document.getElementById('lettersGuessed').innerHTML += userGuess + " ";

      guesses--;
      document.getElementById("remainingGuess").innerHTML= guesses;
   }

   //Reset the word after win or lose
   if(guesses === -1){
      alert("Maybe next time! The word was: " + randomWord);
      location.reload();
   }

   if(lettersLeft() === 0){
      wins++
      document.getElementById("win-box").innerHTML = wins;
      alert("Nice! You have won: "+ wins + " times!");

      randomWord = wordList[Math.floor(Math.random() * wordList.length)];

            progressWord = [];
            for (i = 0; i < randomWord.length; i++) {
                progressWord.push("_");
            }
            document.getElementById("wordOption").innerHTML = progressWord.join(" ");
      var resetLettersGuessed= " ";
      document.getElementById('lettersGuessed').innerHTML= resetLettersGuessed;

      guesses = 5;
      document.getElementById('remainingGuess').innerHTML= guesses;
   }
  

}





//If user guesses the whole word then increase number of wins







