//Object
var game = {
    winCount: 0,
    lossCount: 0,
    guessesLeft: 10,
    lettersGuessed: [],
    alphabet: ["a", "b", "c", "d", "e", "f", "g", "h",
        "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ],
};

window.onload = function () {
    document.onkeyup = function (event) {
        var userGuess = event.key.toLowerCase();
        var mysteryLetter = game.alphabet[Math.floor(Math.random() * game.alphabet.length)];
        console.log(mysteryLetter);
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            if (userGuess === mysteryLetter) {
                game.guessesLeft--;
                game.winCount++;
            } else if (guessesLeft !== 0) {
                game.lossCount++;
                game.guessesLeft--;
            } else if (game.guessesLeft === 0) {
                if (game.lossCount > game.winCount) {
                    alert("C'mon son!")
                    resetGame();
                } else if (game.winCount > game.lossCount) {
                    alert("*Fist Bump*");
                    resetGame();
                } else {
                    resetGame();
                }
            }

            //Reset Game
            function resetGame() {
                if (guessesLeft === 0) {
                userGuess = "";
                game.lossCount = 0;
                game.winCount = 0;
                game.guessesLeft = 10;
            }
        }
        } else if (event.keyCode < 65 || event.keyCode > 90) {
            userGuess = "";
        }

        document.getElementById("totalWins").innerHTML = game.winCount;
        document.getElementById("totalLosses").innerHTML = game.lossCount;
        document.getElementById("guessesLeft").innerHTML = game.guessesLeft;
        document.getElementById("lettersGuessed").innerHTML = userGuess;

    };
};