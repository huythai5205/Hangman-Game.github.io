var wins = 0;
var guessesLeft = 10;
var guesses = "";
var aHeroes = ["superman", "batman", "spiderman", "thor", "wonder woman", "captain america", "iron man", "aquaman"];
var bStarted = false;
var hero = "";
var heroString = "";

function replaceLetter(index, character, string) {
    return string.substr(0, index) + character + string.substr(index + character.length);
}

function displayGame() {
    document.getElementById("game").innerHTML = `<h2>Wins ${wins}</h2><h2>Current Word</h2><h2>${heroString}</h2><h2>Number of Guesses Remaining is: ${guessesLeft}</h2><h2>Letters Already Guessed: ${guesses}</h2>`;
}

function getHeroString(hero) {
    var string = "";
    for (var i = 0; i < hero.length; i++) {
        string += "-";
    }
    return string;
}

function getGuessed(string) {
    for (var i = 0; i < string.length; i++){
        
    }
}

document.onkeyup = function (event) {
    if (!bStarted) {
        bStarted = true;
        hero = aHeroes[Math.floor(Math.random() * aHeroes.length)];
        heroString = getHeroString(hero);
        displayGame();
    } else {
        var userGuess = event.key;
        var index = hero.indexOf(userGuess);
        if (index >= 0) {
            heroString = replaceLetter(index, userGuess, heroString);
            displayGame();
        } else {
            guessesLeft--;
            guesses += userGuess + " ";
            displayGame();
        }
    }
}