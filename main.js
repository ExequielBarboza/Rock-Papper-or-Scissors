
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
    console.log("Computer choice is: " + computerChoice); // First console output
    return computerChoice;
}


// Part 2: where the player enters his/her option and plays a round!.

let computerSelection = getComputerChoice();

let playerOption = " ";

function getPlayerOption(){
    playerOption = prompt("Enter a option: ");
    console.log("Your option is: " + playerOption);
    return(playerOption.toLowerCase());
}

playerOption = getPlayerOption();

function playRound(playerOption,computerSelection) {

    if (playerOption === computerSelection){
        return("It´s a Tie!")
    } else if (playerOption === "rock" && computerSelection === "paper"){
        return("You lose! Paper beats rock");
    } else if(playerOption === "rock" && computerSelection === "scissors") {
        return("You win! Rock beats scissors");
    } else if(playerOption === "paper" && computerSelection === "rock") {
        return("You win! Paper beats rock");
    } else if(playerOption === "paper" && computerSelection === "scissors") {
        return("You lose! Scissors beats paper");
    } else if(playerOption === "scissors" && computerSelection === "rock") {
        return("You lose! Rock beats scissors");
    } else if(playerOption === "scissors" && computerSelection === "paper") {
        return("You win! Scissors beats paper");
    } else {
        return("error");
    }

}

console.log(playRound(playerOption,computerSelection)); // Second console output

// Part 3: Completing the game.

let winPlayer = 0;
let winComputer = 0;
let numberTies = 0;

function game() {
    
    switch (playRound(playerOption,computerSelection)) {
        case "It´s a Tie!":
            numberTies++;
            break;
        case "You lose! Paper beats rock":
        case "You lose! Rock beats scissors":
        case "You lose! Scissors beats paper":
            winComputer++;
            break;
        case "You win! Paper beats rock":
        case "You win! Rock beats scissors":
        case "You win! Scissors beats paper":
            winPlayer++;
            break;
        default:
            numberTies++;
    }
    console.log("You won " + winPlayer + " times.");
    console.log("You lose " + winComputer + " times.");
    console.log("Number of ties: " + numberTies);

}
game(); 


function playGame() {
    playerOption = getPlayerOption();
    computerSelection = getComputerChoice();
    playRound(playerOption,computerSelection);
    game();
    
    playerOption = getPlayerOption();
    computerSelection = getComputerChoice();
    playRound(playerOption,computerSelection);
    game();

    playerOption = getPlayerOption();
    computerSelection = getComputerChoice();
    playRound(playerOption,computerSelection);
    game();

    playerOption = getPlayerOption();
    computerSelection = getComputerChoice();
    playRound(playerOption,computerSelection);
    game();

    playerOption = getPlayerOption();
    computerSelection = getComputerChoice();
    playRound(playerOption,computerSelection);
    game();
    }

playGame();
// Rock = 1; Pappel = 2; Scissors = 3