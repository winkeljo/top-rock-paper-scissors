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
        console.log(`Remi! Both took ${userChoice}`)
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
                print("Something went wrong!");
                break;
        }
    }
}

function processWinner(winner) {
    if (winner === "user") {
        userScore += 1;
        console.log("Congratulations, you won this round!");
    } else {
        computerScore += 1;
        console.log("The Computer won this round, try again!");
    }

}

function playGame() {
    userScore = 0;
    computerScore = 0;

    playRound();

    if (userScore > computerScore) {
        console.log("You won");
    } else if (computerScore > userScore) {
        console.log("The computer won this time");
    } else {
        console.log("Remi!");
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

