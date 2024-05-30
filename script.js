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

function getHumanChoice() {
    let choice = prompt("What do you choose?", "Rock");

    if (choice !== "Rock" && choice !== "Paper" && choice !== "Scissors") {
        console.log("This was no correct choice! It will deafult to Rock.");
        choice = "Rock";
    }

    return choice;
}

function playRound() {
    const userChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log(`Your choice: ${userChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    evaluateRound(userChoice, computerChoice);    
}

function evaluateRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        console.log(`Remi! Both took ${userChoice}`)
    } else {
        switch (userChoice) {
            case "Rock":
                if (computerChoice === "Scissors") {
                    processWinner("user");
                } else {
                    processWinner("computer");
                }
                break;
            case "Scissors":
                if (computerChoice === "Paper") {
                    processWinner("user");
                } else {
                    processWinner("computer");
                }
                break;
            case "Paper":
                if (computerChoice === "Rock") {
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

let userScore = 0;
let computerScore = 0;

playRound();