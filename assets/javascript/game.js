var wins = 0;
var guessesLeft = 10;
var guesses = "";
var aHeroes = ["superman","batman","spiderman","thor","wonder woman","captain america","iron man", "aquaman"];
var bStarted = false;
var hero = "";
var heroString = "";

document.onkeyup = function (event) {
    if (!bStarted) {
        bStarted = true;
        hero = getHero();
        heroString = getHeroString(hero);
        displayGame();
    } else {
        var userGuess = event.key;

        if (hero.indexOf(userGuess) >= 0) {
            heroString.replace(hero.indexOf(userGuess), userGuess);
            displayGame();
        } else {
            guessesLeft--;
            guesses += userGuess + " ";
            displayGame();
        }
    }
}

function displayGame() {
    document.getElementById("game").innerHTML = `<h2>Wins ${wins}</h2><h2>Current Word</h2><h2>${heroString}</h2><h2>Number of Guesses Remaining is: ${guessesLeft}</h2><h2>Letters Already Guessed: ${guesses}</h2>`;
}

function getHeroString(hero) {
    var string = "";
    for (var i = 0; i < hero.length; i++) {
        string += " -";
    }
    return string;
}

function getHero() {
    return aHeroes[Math.floor(Math.random() * aHeroes.length)];
}
