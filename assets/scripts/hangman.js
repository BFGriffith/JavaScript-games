/* HANGMAN */
(function(window){
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
  wordBank:
   ["spaghetti",
    "poncho",
    "wagon",
    "stagecoach",
    "colt",
    "cowboy",
    "frontier",
    "huckster"
  ],
  /* word selection... */

  /*
  feedbackMessages = {
    victory: "You're the fastest gunslinger in the West! Congratulations, victory is yours, and you've just escaped a hanging at high noon.",
    loss: "You lose pardner... Time for you to do the gallows dance.",
    alreadyGuessed: "You already guessed that letter sucker, try again.",
    validateLetter: "Woah there cowboy. You must enter a valid letter from A-Z!"
  };
  */
}/*END-hangman-configuration_object*/

})(window);
