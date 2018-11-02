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
    var mysteryLetter = game.alphabet[Math.floor(Math.random() * game.alphabet.length)];
    document.onkeyup = function (event) {
        var userGuess = event.key.toLowerCase();
        game.lettersGuessed.push(userGuess);
        document.getElementById("lettersGuessed").innerHTML = game.lettersGuessed;
        console.log(game.lettersGuessed);
        console.log(mysteryLetter);
        if (game.guessesLeft !== 0) {
            if (event.keyCode >= 65 && event.keyCode <= 90) {
                if (userGuess === mysteryLetter) {
                    game.guessesLeft--;
                    document.getElementById("guessesLeft").innerHTML = game.guessesLeft;
                    game.winCount++;
                    document.getElementById("totalWins").innerHTML = game.winCount;
                } else {
                    game.lossCount++;
                    document.getElementById("totalLosses").innerHTML = game.lossCount;
                    game.guessesLeft--;
                    document.getElementById("guessesLeft").innerHTML = game.guessesLeft;
                }
                
        
        
        
 
        }

        if (game.guessesLeft === 0 || game.winCount === 1) {
            console.log(game.winCount);
                if (game.winCount === 1) {
                    alert("*Fist Bump*");
                    resetGame();
                } else {
                    alert("C'mon son!");
                    resetGame();
                }

            }    
            //Reset Game
            function resetGame() {
                console.log("Game reset");
                userGuess = "";
                game.lossCount = 0;
                game.winCount = 0;
                game.guessesLeft = 10;
                mysteryLetter = game.alphabet[Math.floor(Math.random() * game.alphabet.length)];
                game.lettersGuessed = [];
            
            }
        } 
        else if (event.keyCode < 65 || event.keyCode > 90) {
            userGuess = "";
        }


        
    };
};