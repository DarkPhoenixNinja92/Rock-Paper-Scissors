const titleScreen = document.querySelector(".title-screen");
const gameScreen = document.querySelector(".game-screen");
const startBtn = document.querySelector(".start-game");
let playerChoice = document.querySelector(".player-choice");
let compChoice;

function playerChoose(e) {

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

startBtn.addEventListener('click', function() {
    titleScreen.style.display = "none";
    gameScreen.style.display = "flex";
});

document.addEventListener('click', playerChoose);