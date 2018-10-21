//Object
var game = {
    winCount: 0,
    lossCount: 0,
    maxGuesses: 10,
    guessesLeft: 0,
    lettersGuessed: [],
    mysteryLetter: [],
    hasFinished: false,
    letters: ["a", "b", "c", "d", "e", "f", "g", "h",
            "i", "j", "k", "l", "m", "n", "o", "p",
            "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
};

//Reset Game
function resetGame(){
    game.guessesLeft = game.maxGuesses;
    game.hasFinished = false;
    game.lettersGuessed = [];
    game.lossCount = 0;
    game.winCount = 0;

};
//Run game
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

//Create mystery letter
function mysteryLetter(letters) {
    return letters[Math.floor(Math.random() * game.letters.length)];
};
console.log(mysteryLetter(game.letters));
game.mysteryLetter.push(mysteryLetter(game.letters));

//Update display
function updateDisplay() {
    document.getElementById("totalWins").innerHTML = game.winCount;
    document.getElementById("totalLosses").innerHTML = game.lossCount;
    document.getElementById("guessesLeft").innerHTML = game.guessesLeft;
    document.getElementById("lettersGuessed").innerHTML = game.lettersGuessed;
};

// function makeGuess(letter) {
//     if (game.guessesLeft > 0) {
//         if (lettersGuessed.indexOf(letter) === -1) {
//             lettersGuessed.push(letter);
//             evaluateGuess(letter);
//         }
//     }
//     mysteryLetter(letters);
// };

//Key functions
document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    if (game.hasFinished) {
        resetGame();
        hasFinished = false;
    } else {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            game.lettersGuessed.push();
        }
    };
    if (userGuess === game.mysteryLetter) {
        game.winCount++;
        mysteryLetter(game.letters);
        game.lettersGuessed = [];
    } else (userGuess != game.mysteryLetter); {
        game.lossCount++;
        mysteryLetter(game.letters);
        game.guessesLeft--;
    };
};

