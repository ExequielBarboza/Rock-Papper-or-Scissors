
// First step: Computer choose one option!

function getComputerChoice() {

    let computerChoice = Math.floor(Math.random()*3) + 1;

    switch (computerChoice) {
            case 1:
                computerChoice = "rock";
                break;
            case 2:
                computerChoice = "paper";
                break;
            case 3:
                computerChoice = "scissors";
                break;
    }
    return computerChoice;
}


// Part 2: where the player enters his/her option and plays a round!.


const computerSelection = getComputerChoice();
console.log(computerSelection);
const playerSelection = prompt("Enter a option: ");

function playRound(playerSelection,computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection){
        return("It´s a Tie!")
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        return("You lose! Paper beats rock");
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
        return("You win! Rock beats scissors");
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        return("You win! Paper beats rock");
    } else if(playerSelection === "paper" && computerSelection === "scissors") {
        return("You lose! Scissors beats paper");
    } else if(playerSelection === "scissors" && computerSelection === "rock") {
        return("You lose! Rock beats scissors");
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        return("You win! Scissors beats paper");
    } else {
        return("error");
    }

}

console.log(playRound(playerSelection, computerSelection));


// Rock = 1; Pappel = 2; Scissors = 3