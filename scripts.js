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

function finishGame(playerScore, cpuScore) {
    if ((playerScore === 5) || (cpuScore === 5)) {
        if (playerScore === 5) {
            finalResult.textContent = "You win the game! Click anywhere to restart."
        } else if (cpuScore === 5) {
            finalResult.textContent = "The computer wins the game. Click again to restart."
        };
        playerScore = 0;
        cpuScore = 0;
        cScore.textContent = cpuScore;
        yScore.textContent = playerScore;
    } else return;
}

const finalResult = document.querySelector(".computerChoice");
const results = document.getElementById("results");
const yScore = document.querySelector(".yScore");
const cScore = document.querySelector(".cScore");

window.addEventListener('click', function (e) {
    let computerChoice = getComputerChoice();
    let result = playRound(e.target.id, computerChoice);
    console.log(yScore);
    console.log(cScore);
    if (result === "tie") {
        results.innerHTML = "Tie!";
    } else if (result === "computer") {
        results.innerHTML = "Computer wins!";
        cScore.textContent = computerScore;
    } else if (result === "user") {
        results.innerHTML = "You win!";
        yScore.textContent = yourScore;
    }
    finishGame(yourScore, computerScore);
});

