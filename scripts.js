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
        console.log('It\'s a tie!');
    } else if (((playerSelection == "rock") && (computerChoice == "paper")) ||
        ((playerSelection == "paper") && (computerChoice == "scissors")) ||
        ((playerSelection == "scissors") && (computerChoice == "rock"))) {
        console.log(`It\'s your ${playerSelection} versus the computer\'s ${computerChoice}, the computer wins!`);
        computerScore++
    } else if (((playerSelection == "paper") && (computerChoice == "rock")) ||
        ((playerSelection == "scissors") && (computerChoice == "paper")) ||
        ((playerSelection == "rock") && (computerChoice == "scissors"))) {
        console.log(`It\'s your ${playerSelection} versus the computer\'s ${computerChoice}, you win!`);
        yourScore++
    }
};

