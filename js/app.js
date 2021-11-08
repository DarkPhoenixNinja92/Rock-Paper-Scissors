let userScore = 0;
let compScore = 0;
const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("comp-score");
const scoreBoard = document.querySelector(".score-board");
const resultOutput = document.querySelector(".result > p");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function getCompChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randNum = Math.floor(Math.random() * 3);
    return choices[randNum];
}

function victory(playChoice, compChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    resultOutput.innerHTML = playChoice + " beats " + compChoice + ". You win!";
}

function defeat(playChoice, compChoice) {
    compScore++;
    compScoreSpan.innerHTML = compScore;
    resultOutput.innerHTML = compChoice + " beats " + playChoice + ". You lose!";
}

function draw(playChoice, compChoice) {
    resultOutput.innerHTML = playChoice + " and " + compChoice + " are the same. It's a tie.";
}

function game(choice) {
    const compChoice = getCompChoice();
    switch (choice + compChoice) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            victory(choice, compChoice);
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            defeat(choice, compChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(choice, compChoice);
            break;
    }
}

function primary() {
    rock.addEventListener('click', function() {
        game("Rock");
    });
    paper.addEventListener('click', function() {
        game("Paper");
    });
    scissors.addEventListener('click', function() {
        game("Scissors");
    })
}

primary();