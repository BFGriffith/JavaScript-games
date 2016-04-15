/* HANGMAN */
(function(window){
  'use strict';
/* variables */
var alphabet, wordBank, guess, guessesList, matchesList, matchesNumber, bodypartsRemain, mysteryWord, feedbackMessages;

/* hangman configuration */
function configAssets() {
  var alphabet =
    ['a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  bodypartsRemain = 5;
  wordBank =
    ["spaghetti",
    "poncho",
    "wagon",
    "stagecoach",
    "colt"];
  feedbackMessages = {
    victory: "You're the fastest gunslinger in the West! Congratulations, victory is yours, and you've just escaped a hanging at high noon."
    loss: "You lose pardner... Time for you to do the hangman's dance.";
    alreadyGuessed: "You already guessed that letter sucker, try again.";
    validateLetter: "Woah there cowboy: enter a letter from A-Z!";
  };
}
/* initial guess state */
guessesList = matchesList = '';
matchesNumber = 0;

/* word selection */


})(window);
