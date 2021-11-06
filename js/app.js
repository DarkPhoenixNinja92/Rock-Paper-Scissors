const titleScreen = document.querySelector(".title-screen");
const gameScreen = document.querySelector(".game-screen");
const startBtn = document.querySelector(".start-game");
let playerChoice = document.querySelector(".player-choice");
let compChoice;

function playerChoose() {
    let choice = playerChoice.innerHTML;
}

function compChoose() {
    let randNum = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    if (randNum <= 3) {
        compChoice = "Rock";
    } else if (randNum > 3 && randNum < 7) {
        compChoice = "Paper";
    } else {
        compChoice = "Scissors";
    }
    console.log(compChoice);
}

function choiceCompare() {
    playerChoose();
    compChoose()
    let outcome;
    if (choice === compChoice) {
        outcome = "The Game is a draw";
    } else if (choice === "Rock" && compChoice === "Paper") {
        outcome = "The computer wins";
    } else if (choice === "Rock" && compChoice === "Scissors") {
        outcome = "You win";
    } else if (choice === "Paper" && compChoice === "Scissors") {
        outcome = "The computer wins";
    } else if (choice === "Paper" && compChoice === "Rock") {
        outcome = "You win";
    } else if (choice === "Scissors" && compChoice === "Rock") {
        outcome = "The computer wins";
    } else if (choice === "Scissors" && compChoice === "Paper") {
        outcome = "You win";
    }
    alert(outcome);
    return outcome;
}

startBtn.addEventListener('click', function() {
    titleScreen.style.display = "none";
    gameScreen.style.display = "flex";
});

document.addEventListener('click', playerChoose);
playerChoice.addEventListener('click', choiceCompare);