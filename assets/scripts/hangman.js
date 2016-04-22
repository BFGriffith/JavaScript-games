/* HANGMAN 0.1 */
(function(window) {
  'use strict';
  /*
  document.addEventListener("DOMContentLoaded", function(event) {
    var MorriconeGoodBadUgly = new Audio('/assets/sounds/Ennio_Morricone-GoodBadUgly.ogg');
    MorriconeGoodBadUgly.play();
  });
  */

  /* function definitions in object refactor based on classwork examples */
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
      "huckster",
      "cheater",
      "grifter"
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
    /* GAME-OVER conditionals */
    gameOverPardner: function() {
      if (this.matchesList.indexOf("-") == -1) {
        this.winsCounter++; //victory!
        document.getElementById("totalWins").innerHTML = this.winsCounter;
        return true;
      } else if (this.bodypartsRemain > 0) {
        return false;
      } else {
        return true;
      }
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
      while (letterOrder >= 0) {
        hangman.showTarget(letterOrder);
        var letterOrder = hangman.targetWordArray.indexOf(guess);
      }
    } else {
      hangman.updateLettersGuessed(guess);
    }
    /* NEXT-GAME: */
    if (hangman.gameOverPardner()) {
    hangman.configHangman();
    }
    /*
    if (hangman.gameOverPardner() && (hangman.targetWordArray.length == hangmanTargetWord.length)) {
      var victory = document.getElementById('totalWins');
      victory.innerHTML = victory.innerHTML + "You\'re the fastest gunslinger in the West! Congratulations, victory is yours, and you\'ve just escaped a hanging at high noon.";
    } else {
      hangman.configHangman();
    }
    */
  };


  // };

})(window);
