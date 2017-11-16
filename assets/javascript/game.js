var wins = 0;
var guessesLeft = 10;
var guesses = "";
var aHeroes = ["superman", "batman", "spiderman", "thor", "wonder woman", "captain america", "iron man", "aquaman"];
var bStarted = false;
var hero = "";
var heroString = "";
var numLetters = 0;
var filledLetter = 0;

function displayGame() {
    document.getElementById("game").innerHTML = `<h2>Wins ${wins}</h2><h2>Current Word</h2><h2>${heroString}</h2><h2>Number of Guesses Remaining is: ${guessesLeft}</h2><h2>Letters Already Guessed: ${guesses}</h2>`;
}

function newGame() {
    hero = aHeroes[Math.floor(Math.random() * aHeroes.length)];
    getHeroString(hero);
    guessesLeft = 10;
    guesses = "";
    filledLetter = 0;
    displayGame();
}

function getHeroString() {
    numLetters = 0;
    heroString = "";
    for (var i = 0; i < hero.length; i++) {
        if (hero[i] === " ") {
            heroString += " ";
        } else {
            numLetters++;
            heroString += "-";
        }
    }
}

function isInWord(userGuess) {
    var bool = false;
    heroString = heroString.split("");
    for (var i = 0; i < hero.length; i++) {
        if (hero[i] === userGuess) {
            heroString[i] = userGuess;
            bool = true;
            filledLetter++;
        }
    }
    heroString = heroString.join("");
    return bool;
}

function isGuessed(userGuess) {
    for (var i = 0; i < guesses.length; i++){
        if (guesses[i] === userGuess) {
            return true;
        }
    }
    return false;
}

function winGame() {
    wins++;
    console.log("win");
}

function lossGame() {
    console.log("loss");
}

document.onkeyup = function (event) {
    if (!bStarted) {
        bStarted = true;
        newGame();
    } else {
        var userGuess = event.key;
        if (!isGuessed(userGuess)) {
            if (isInWord(userGuess)) {
                guessesLeft--;
                displayGame();
                console.log(numLetters + " " + filledLetter);
                if (numLetters === filledLetter) {
                    winGame();
                }
            } else {
                guessesLeft--;
                guesses += userGuess + " ";
                displayGame();
                if (guessesLeft === 0) {
                    lossGame();
                }
            }
        } else {
            alert(userGuess + " is already guessed");
        }

    }
}