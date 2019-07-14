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
    document.getElementById(i).textContent = word[i];
}

var wrongLetter = [];
var verifyForWin = [];
var chancesLeft = 20;

document.onkeyup = function(event) {
    var letter = event.key.toUpperCase();
                
    if (word.indexOf(letter) == -1) {
        if (wrongLetter.indexOf(letter) == -1) {
            wrongLetter.push(letter);
        }  

        chancesLeft--;
    }

    else {
        document.getElementById(word.indexOf(letter)).className = 'letterHolder shown';
        document.getElementById(word.lastIndexOf(letter)).className = 'letterHolder shown';
        verifyForWin[word.indexOf(letter)] = letter;
        verifyForWin[word.lastIndexOf(letter)] = letter;
    }

    document.getElementById('infoPage').innerHTML = 'Keep going!';
    document.getElementById('guessedLetters').innerHTML = 'Wrong letters: ' + wrongLetter;
    document.getElementById('chancesLeft').innerHTML = 'Chances left: ' + chancesLeft;

    if (verifyForWin.join("") == word) {
        document.getElementById('infoPage').innerHTML = 'You Win! Refresh the page if you want to play again!';
    }

    else if (chancesLeft <= 0) {
        document.getElementById('infoPage').innerHTML = 'You lose! Refresh the page to start over!';
        document.getElementById('chancesLeft').innerHTML = 'Chances left: 0';
    }
};

