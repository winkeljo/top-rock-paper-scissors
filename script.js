function getComputerChoice() {
    number = Math.floor(Math.random() * 3);

    if (number === 0) {
        return "Rock";
    } else if (number === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    choice = prompt("What do you choose?", "Rock");

    if (choice !== "Rock" && choice !== "Paper" && choice !== "Scissors") {
        console.log("This was no correct choice! It will deafult to Rock.");
        choice = "Rock";
    }

    return choice
}

userChoice = getHumanChoice()
computerChoice = getComputerChoice()
console.log(`Your choice: ${userChoice}`);
console.log(`Computer choice: ${computerChoice}`);