var yourScore = 0;
var computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)]
};

function playRound(playerSelection, computerChoice) {
    playerSelection = playerSelection.toLowerCase()
    console.log(playerSelection)
    console.log(computerChoice)
    if (playerSelection == computerChoice) {
        return "tie";
    } else if (((playerSelection == "rock") && (computerChoice == "paper")) ||
        ((playerSelection == "paper") && (computerChoice == "scissors")) ||
        ((playerSelection == "scissors") && (computerChoice == "rock"))) {
        console.log(`It\'s your ${playerSelection} versus the computer\'s ${computerChoice}, the computer wins!`);
        computerScore++;
        return "computer"
    } else if (((playerSelection == "paper") && (computerChoice == "rock")) ||
        ((playerSelection == "scissors") && (computerChoice == "paper")) ||
        ((playerSelection == "rock") && (computerChoice == "scissors"))) {
        console.log(`It\'s your ${playerSelection} versus the computer\'s ${computerChoice}, you win!`);
        yourScore++;
        return "user"
    }
};

function finishGame() {
    if ((yourScore === 5) || (computerScore === 5)) {
        if (yourScore === 5) {
            finalResult.textContent = "You win the game! Click anywhere to restart."
        } else if (computerScore === 5) {
            finalResult.textContent = "The computer wins the game. Click again to restart."
        };
        yourScore = 0;
        computerScore = 0;
        cScore.textContent = computerScore;
        yScore.textContent = yourScore;
        finalResult.style.width = "auto";
    } else return;
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const finalResult = document.querySelector(".computerChoice");
const results = document.getElementById("results");
const yScore = document.querySelector(".yScore");
const cScore = document.querySelector(".cScore");

window.addEventListener('click', function (e) {
    let computerChoice = getComputerChoice();
    let result = playRound(e.target.id, computerChoice);
    finalResult.textContent = computerChoice;
    if (result === "tie") {
        results.innerHTML = "Tie!";
    } else if (result === "computer") {
        results.innerHTML = "Computer wins!";
        cScore.textContent = computerScore;
    } else if (result === "user") {
        results.innerHTML = "You win!";
        yScore.textContent = yourScore;
    }
    console.log(yourScore, computerScore);
    finishGame(yourScore, computerScore);
});

