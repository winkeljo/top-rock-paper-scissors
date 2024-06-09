function getComputerChoice() {
    const number = Math.floor(Math.random() * 3);

    if (number === 0) {
        return "Rock";
    } else if (number === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(userChoice) {
    const computerChoice = getComputerChoice();

    userChoiceDiv.textContent = `Your choice: ${userChoice}`;
    computerChoiceDiv.textContent = `Computer choice: ${computerChoice}`;

    evaluateRound(userChoice.toLowerCase(), computerChoice.toLowerCase());    
}

function evaluateRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        winnerDiv.textContent = `Remi! Both took ${userChoice}`;
    } else {
        switch (userChoice) {
            case "rock":
                if (computerChoice === "scissors") {
                    processWinner("user");
                } else {
                    processWinner("computer");
                }
                break;
            case "scissors":
                if (computerChoice === "paper") {
                    processWinner("user");
                } else {
                    processWinner("computer");
                }
                break;
            case "paper":
                if (computerChoice === "rock") {
                    processWinner("user");
                } else {
                    processWinner("computer");
                }
                break;
            default:
                winnerDiv.textContent = "Uups, something went wrong!";
                break;
        }
    }
}

function processWinner(winner) {
    if (winner === "user") {
        userScore += 1;
        winnerDiv.textContent = "Congratulations, you won this round!";
    } else {
        computerScore += 1;
        winnerDiv.textContent = "The Computer won this round, try again!";
    }

    userScoreDiv.textContent = `Your score: ${userScore}`;
    computerScoreDiv.textContent = `Computer score: ${computerScore}`;

    if (userScore === 5 && computerScore < 5) {
        resultDiv.textContent = "Congratulations, you won!";
    }
    if (computerScore === 5 && userScore < 5) {
        resultDiv.textContent = "The computer won this time, reload the page and try again";
    }
}

let userScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", takeChoice);
paperButton.addEventListener("click", takeChoice)
scissorsButton.addEventListener("click", takeChoice);

function takeChoice(e) {
    const choice = e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1)
    playRound(choice);
}

const userChoiceDiv = document.querySelector("#userchoice");
const computerChoiceDiv = document.querySelector("#computerchoice");
const winnerDiv = document.querySelector("#winner");
const userScoreDiv = document.querySelector("#userscore");
const computerScoreDiv = document.querySelector("#computerscore");
const resultDiv = document.querySelector("#result");

const restartButton = document.querySelector("#restartButton");
restartButton.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;
    userChoiceDiv.textContent = "";
    computerChoiceDiv.textContent = "";
    winnerDiv.textContent = "";
    userScoreDiv.textContent = "";
    computerScoreDiv.textContent = "";
    resultDiv.textContent = "";
});

