//Object
var game = {
    winCount: 0,
    lossCount: 0,
    maxGuesses: 10,
    guessesLeft: 0,
    lettersGuessed: [],
    mysteryLetter: [],
    hasFinished: false,
    alphabet: ["a", "b", "c", "d", "e", "f", "g", "h",
        "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ],
};

//Reset Game
function resetGame() {
    game.guessesLeft = game.maxGuesses;
    game.hasFinished = false;
    game.lettersGuessed = [];
    game.lossCount = 0;
    game.winCount = 0;
};
//Run game
function endGame() {
    if (game.guessesLeft === 0 && game.lossCount > game.winCount) {
        alert("C'mon son!")
        resetGame();
        hasFinished = true;
    } else if (game.guessesLeft === 0 && game.winCount > game.lossCount) {
        alert("*Fist Bump*");
        resetGame();
        hasFinished = true;
    } else {
        resetGame();
        hasFinished = true;
    };
};

// //Create mystery letter
function mysteryLetter(letters) {
    return letters[Math.floor(Math.random() * game.alphabet.length)];
};
console.log(mysteryLetter(game.alphabet));
game.mysteryLetter.push(mysteryLetter(game.alphabet));

// //Update display
function updateDisplay() {
    document.getElementById("totalWins").innerHTML = game.winCount;
    document.getElementById("totalLosses").innerHTML = game.lossCount;
    document.getElementById("guessesLeft").innerHTML = game.guessesLeft;
    document.getElementById("lettersGuessed").innerHTML = game.lettersGuessed;
};

// // function makeGuess(letter) {
// //     if (game.guessesLeft > 0) {
// //         if (lettersGuessed.indexOf(letter) === -1) {
// //             lettersGuessed.push(letter);
// //             evaluateGuess(letter);
// //         }
// //     }
// //     mysteryLetter(letters);
// // };

// //Key functions
document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    var regexp = /[a-z]/gi;
    if (regexp.test(userGuess)) {
        game.lettersGuessed.push(userGuess);
    };
    if (game.guessesLeft <= 0 && game.lossCount > game.winCount) {
            alert("C'mon son!")
            resetGame();
            hasFinished = true;
        } else if (game.guessesLeft <= 0 && game.winCount > game.lossCount) {
            alert("*Fist Bump*");
            resetGame();
            hasFinished = true;
        } else {
            resetGame();
            hasFinished = true;
        };
    if (userGuess === game.mysteryLetter) {
        game.winCount++;
        document.getElementById("totalWins").innerHTML = game.winCount++;
        mysteryLetter(game.alphabet);
        game.lettersGuessed = [];
    } else {
        game.lossCount++;
        document.getElementById("totalLosses").innerHTML = game.lossCount++;
        mysteryLetter(game.alphabet);
        game.guessesLeft--;
        document.getElementById("guessesLeft").innerHTML = game.guessesLeft--;
        game.lettersGuessed.push(userGuess);
    };
};

// //define variables for game play
// var winCount = 0;
// var lossCount = 0;
// var guessesRemaining = 10;
// var guessedLetters = [];

// // set up array for computer to choose from
// var alphabet =
//     ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
//     ,"r","s","t","u","v","w","x","y","z"];

// // set up the computer to pick a random indexed value from aray
// var randomIndex = Math.floor(Math.random() * alphabet.length);
// var computerChoice = alphabet[randomIndex];

// console.log(computerChoice);

// // add a listener for the user to press a key
// document.onkeyup = function(event) {
//   var userChoice = event.key.toLowerCase;
//   // make sure the user selects a value a-z
//   var regexp = /[a-z]/gi;
//     if (!regexp.test(userChoice)) {
//       alert("please enter a letter");
//     }
//     else {
//       console.log(userChoice);
//     }
//     // reset computer choice if the user loses
//     if (guessesRemaining <= 0) {
//       lossCount++;
//       document.getElementById("totalLosses").innerHTML = lossCount++;
//       console.log("You lost!");
//       alert("You lost!");
//       guessesRemaining = 10;
//       guessedLetters = [];
//       document.getElementById("lettersGuessed").innerHTML = guessedLetters;
//       document.getElementById("guessesLeft").innerHTML = 10;
//       randomIndex = Math.floor(Math.random() * alphabet.length);
//       computerChoice = alphabet[randomIndex];
//       console.log(computerChoice);
//     }
//     // compares the randomly selected computer choice and user choice
//     if (computerChoice === userChoice) {
//       console.log("You won!");
//       alert("You won!");
//       document.getElementById("totalWins").innerHTML = winCount++;
//       guessedLetters = [];
//       document.getElementById("lettersGuessed").innerHTML = guessedLetters;
//       randomIndex = Math.floor(Math.random() * alphabet.length);
//       computerChoice = alphabet[randomIndex];
//       console.log(computerChoice);
//       guessesRemaining = 10;
//       document.getElementById("guessesLeft").innerHTML = 10;
//     } else {
//       console.log("Guess again!");
//       document.getElementById("guessesLeft").innerHTML = guessesRemaining--;
//       guessedLetters.push(userChoice);
//       document.getElementById("lettersGuessed").innerHTML = guessedLetters;
//     }
// }