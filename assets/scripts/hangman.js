/* HANGMAN */
(function(window) {
  'use strict';
  // var alphabet, wordBank, guess, guessesList, matchesList, matchesNumber, bodypartsRemain, mysteryWord, feedbackMessages;
  /*
  var alphabet =
    ['a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  */
  /* functions in object refactor based on classwork examples */
  var hangman = {
    bodypartsRemain: 10,
    targetWordArray: [],
    mysteryWord: "",
    lettersGuessed: [],
    matchesList: [],
    winsCounter: 0,
    wordBank: ["spaghetti",
      "poncho",
      "wagon",
      "stagecoach",
      "colt",
      "cowboy",
      "frontier",
      "huckster"
    ],
    /* word selection */
    configHangman: function() {
      this.mysteryWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
      this.targetWordArray = [];
      this.matchesList = [];
      for (var i = 0; i < this.mysteryWord.length; i++) {
        this.targetWordArray.push(this.mysteryWord.charAt(i));
      }
      for (var i = 0; i < this.mysteryWord.length; i++) {
        this.matchesList.push("-");
      }
      document.getElementById("hangmanTargetWord").innerHTML = this.matchesList.join(" ");
      this.bodypartsRemain = 10;
      document.getElementById("bodypartsRemain").innerHTML = this.bodypartsRemain;
      this.lettersGuessed = [];
      document.getElementById("guessed").innerHTML = " ";
    },

    /* guessed-letters */
    updateLettersGuessed: function(incorrectLetter) {
      this.lettersGuessed.push(incorrectLetter);
      document.getElementById("guessed").innerHTML = this.lettersGuessed.join(", ");
      this.bodypartsRemain--;
      document.getElementById("bodypartsRemain").innerHTML = this.bodypartsRemain;
    },
    /* VIEW */
    showTarget: function(letterPosition) {
      this.matchesList[letterPosition] = this.targetWordArray[letterPosition];
      this.targetWordArray[letterPosition] = "-";
      document.getElementById("hangmanTargetWord").innerHTML = hangman.matchesList.join(" ");
    }

  }/*END-hangman-configuration_object*/

  /* EXECUTE */
  hangman.configHangman();

  document.onkeyup = function execute(event) {

    var guess = String.fromCharCode(event.keyCode).toLowerCase();
    var letterOrder = hangman.targetWordArray.indexOf(guess);

    console.log(guess);
    console.log(hangman.targetWordArray);
    console.log(letterOrder);

    if (letterOrder >= 0) {
      hangman.showTarget(letterOrder);
      var letterOrder = hangman.targetWordArray.indexOf(guess);
    }


  };

})(window);
/*
feedbackMessages = {
  victory: "You're the fastest gunslinger in the West! Congratulations, victory is yours, and you've just escaped a hanging at high noon.",
  loss: "You lose pardner... Time for you to do the gallows dance.",
  alreadyGuessed: "You already guessed that letter sucker, try again.",
  validateLetter: "Woah there cowboy. You must enter a valid letter from A-Z!"
};
*/
