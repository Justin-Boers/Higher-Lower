console.log('Main loaded');

//Name players
const nameComputer = document.querySelector('.playerComputer');
const namePlayer = document.querySelector('.myPlayer');

let choose = 0;

//Thema buttons
const themaButtonOne = document.querySelector('.thema-1');

themaButtonOne.addEventListener('click', function () {
    document.body.style.setProperty('--background-color', 'orange');

});


const themaButtonTwo = document.querySelector('.thema-2');

themaButtonTwo.addEventListener('click', function () {
    document.body.style.setProperty('--background-color', 'brown');
})

const themaButtonThree = document.querySelector('.thema-3');

themaButtonThree.addEventListener('click', function (){
    document.body.style.setProperty('--background-color', 'green');
})



//Buttons
const diceButton = document.querySelector('.dice-button');
const higherButton = document.querySelector('.higher-button');
const lowerButton = document.querySelector('.lower-button');
const goButton = document.querySelector('.go-button');

//Text-alert
let startMessage = document.querySelector('.message-start');
let textAlert = document.querySelector('.message-box');

//alle knoppen worden hier gedeactiveerd
diceButton.disabled = true;
higherButton.disabled = true;
lowerButton.disabled = true;

//when you press go
goButton.addEventListener('click', function () {
    textAlert.textContent = 'Choose the "throw dice" to continue';
    goButton.disabled = true;
    diceButton.disabled = false;
    diceLogo();
    diceLogo2();
    diceLogo3();
    diceLogo4();
    updateGame();

    updateGame();

});

//dice buttons
diceButton.addEventListener('click', function () {
    diceButton.disabled = true;
    higherButton.disabled = false;
    lowerButton.disabled = false;

    computerRoll = diceRoll();
    computerRollTwo = diceRoll();
    playerRoll = diceRoll();
    playerRollTwo = diceRoll();

    diceLogo();
    diceLogo2();
    diceLogo3();
    diceLogo4();
    updateGame();
});

//credit systems en totals
let computerCredits = 10;
let playerCredits = 10;
let computerTotal = 0;
let playerTotal = 0;
//
let computerRoll;
let computerRollTwo;
let playerRoll;
let playerRollTwo;
//
computerRoll = diceRoll();
computerRollTwo = diceRoll();
playerRoll = diceRoll();
playerRollTwo = diceRoll();

//dice player/computer
let diceComputer1 = document.querySelector('.computer-dice-one');
let diceComputer2 = document.querySelector('.computer-dice-two');
let dicePlayer1 = document.querySelector('.player-dice-one');
let dicePlayer2 = document.querySelector('.player-dice-two');

const diceArray = ['&#9856', '&#9857', '&#9858', '&#9859', '&#9860', '&#9861']

//function diceLogo1
function diceLogo() {
    if (computerRoll === 1) {
        diceComputer1.innerHTML = '&#9856';

    } else if (computerRoll === 2) {
        diceComputer1.innerHTML = '&#9857';

    } else if (computerRoll === 3) {
        diceComputer1.innerHTML = '&#9858';

    } else if (computerRoll === 4) {
        diceComputer1.innerHTML = '&#9859';

    } else if (computerRoll === 5) {
        diceComputer1.innerHTML = '&#9860';

    } else if (computerRoll === 6) {
        diceComputer1.innerHTML = '&#9861';

    }
}

//function diceLogo2
function diceLogo2() {
    if (computerRollTwo === 1) {
        diceComputer2.innerHTML = '&#9856';

    } else if (computerRollTwo === 2) {
        diceComputer2.innerHTML = '&#9857';

    } else if (computerRollTwo === 3) {
        diceComputer2.innerHTML = '&#9858';

    } else if (computerRollTwo === 4) {
        diceComputer2.innerHTML = '&#9859';

    } else if (computerRollTwo === 5) {
        diceComputer2.innerHTML = '&#9860';

    } else if (computerRollTwo === 6) {
        diceComputer2.innerHTML = '&#9861';

    }
}


//function diceLogo3
function diceLogo3() {
    if (playerRoll === 1) {
        dicePlayer1.innerHTML = '&#9856';

    } else if (playerRoll === 2) {
        dicePlayer1.innerHTML = '&#9857';

    } else if (playerRoll === 3) {
        dicePlayer1.innerHTML = '&#9858';

    } else if (playerRoll === 4) {
        dicePlayer1.innerHTML = '&#9859';

    } else if (playerRoll === 5) {
        dicePlayer1.innerHTML = '&#9860';

    } else if (playerRoll === 6) {
        dicePlayer1.innerHTML = '&#9861';

    }
}

//function diceLogo4
function diceLogo4() {
    if (playerRollTwo === 1) {
        dicePlayer2.innerHTML = '&#9856'

    } else if (playerRollTwo === 2) {
        dicePlayer2.innerHTML = '&#9857'

    } else if (playerRollTwo === 3) {
        dicePlayer2.innerHTML = '&#9858'

    } else if (playerRollTwo === 4) {
        dicePlayer2.innerHTML = '&#9859'

    } else if (playerRollTwo === 5) {
        dicePlayer2.innerHTML = '&#9860'

    } else if (playerRollTwo === 6) {
        dicePlayer2.innerHTML = '&#9861'

    }
}

//function update gamme
function updateGame() {
    document.querySelector('.computerCredits').textContent = computerCredits;
    document.querySelector('.playerCredits').textContent = playerCredits;
    //function game over
    if (computerCredits == 14) {
        higherButton.disabled = true;
        lowerButton.disabled = true;
        diceButton.disabled = true;
        textAlert.textContent = 'Computer have won the match';
        goButton.disabled = true;

    } else if (playerCredits == 14) {
        higherButton.disabled = true;
        lowerButton.disabled = true;
        diceButton.disabled = true;
        textAlert.textContent = 'Player have won the match';
        goButton.disabled = true;
    }
}

//function roll dice
function diceRoll() {
    return Math.floor(Math.random() * 6) + 1;
}

//update het totaal
playerTotal += playerRoll;
computerTotal += computerRoll;



//function "hoger" knop
higherButton.addEventListener('click', function () {
    choose = 2;
    diceButton.disabled = false;
    lowerButton.disabled = true;
    higherButton.disabled = true;

    console.log(playerRoll);

    playerTotal += playerRoll;
    computerTotal += computerRoll;

    if (playerRoll > computerRoll) {

        // speler wint
        computerCredits -= 1;
        playerCredits += 1;
        textAlert.textContent = 'Speler heeft gewonnen';
        console.log('speler krijgt nu 1 credit erbij, speler heeft nu ${playerCredits} credits.');
        console.log('computer verliest 1 credit. speler heeft nu ${computerCredits} credits.');

    } else {
        // computer wint
        playerCredits -= 1;
        computerCredits += 1;
        textAlert.textContent = 'Computer heeft gewonnen';
        console.log('computer krijgt 1 credit. computer heeft nu ${computerCredits} credits.');
        console.log('speler verliest 1 credit. speler heeft nu ${playerCredits} credits.');

    }
    updateGame();
});

//functie "lager" knop
lowerButton.addEventListener('click', function () {
    choose = 1;

    diceButton.disabled = false;
    higherButton.disabled = true;
    lowerButton.disabled = true;

    console.log(playerRoll);

    playerTotal += playerRoll;
    computerTotal += computerRoll;

    //vergelijk de rol en update de credits van allebei
    if (playerRoll < computerRoll) {

        // speler wint
        computerCredits -= 1;
        playerCredits += 1;
        textAlert.textContent = 'Speler heeft gewonnen';
        console.log('speler krijgt nu 1 credit erbij, speler heeft nu ${playerCredits} credits.');
        console.log('computer verliest 1 credit. speler heeft nu ${computerCredits} credits.');

    } else {
        // computer wint
        playerCredits -= 1;
        computerCredits += 1;
        textAlert.textContent = 'Computer heeft gewonnen';
        console.log('computer krijgt 1 credit. computer heeft nu ${computerCredits} credits.');
        console.log('speler verliest 1 credit. speler heeft nu ${playerCredits} credits.')

    }
    updateGame();


});
