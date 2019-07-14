var wordPool = ['PIKACHU', 'BULBASAUR', 'CHARMANDER', 'SQUIRTLE'];
var word = wordPool[Math.floor(Math.random() * wordPool.length)];
var image = document.querySelector('img');

switch (word) {
    case 'PIKACHU':
        image.src = 'assets/images/PIKACHU.jpg';
        break;
    case 'BULBASAUR':
        image.src = 'assets/images/BULBASAUR.png';
        break;
    case 'CHARMANDER':
        image.src = 'assets/images/CHARMANDER.jpg';
        break;
    case 'SQUIRTLE':
        image.src = 'assets/images/SQUIRTLE.jpg';
        break;
}

for (let i = 0; i < word.length; i++) {
    var letterHolder = document.createElement("div");
    letterHolder.className = 'letterHolder';
    letterHolder.id = i;
    document.getElementById('placeHolder').appendChild(letterHolder);
}

var startSearch = 0;
var wrongLetter = [];
var chancesLeft = 20;
var wordOnDisplay = [];

document.onkeyup = function(event) {
    var letter = event.key.toUpperCase();
                
    if (word.indexOf(letter) == -1) {
        if (wrongLetter.indexOf(letter) == -1) {
            wrongLetter.push(letter);
        }  
        chancesLeft--;
    }

    else {
        if (word.lastIndexOf(letter, startSearch) != word.indexOf(letter, startSearch)) {
            wordOnDisplay[parseInt(word.indexOf(letter, startSearch))] = letter;
            startSearch = word.indexOf(letter, startSearch);
        }

        else {
            wordOnDisplay[parseInt(word.indexOf(letter))] = letter;
            document.getElementById(parseInt(wordOnDisplay.indexOf(letter))).textContent = letter;
        }
    }

    document.getElementById('infoPage').innerHTML = 'Keep going!';
    document.getElementById('guessedLetters').innerHTML = 'Wrong letters: ' + wrongLetter;
    document.getElementById('chancesLeft').innerHTML = 'Chances left: ' + chancesLeft;

    if (chancesLeft <= 0) {
        document.getElementById('infoPage').innerHTML = 'You lose! Refresh the page to start over!';
        document.getElementById('chancesLeft').innerHTML = 'Chances left: 0';
    }

    else if (wordOnDisplay.join("") == word) {
        document.getElementById('infoPage').innerHTML = 'You win! Refresh the page to start over!';
    }
};