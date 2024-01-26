
// First step: Computer choose one option!

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3) + 1;
    switch (computerChoice) {
            case 1:
                computerChoice = "Rock";
                break;
            case 2:
                computerChoice = "Paper";
                break;
            case 3:
                computerChoice = "Scissors";
                break;
    }
    return computerChoice;
}

let computerSelection = getComputerChoice();

let winPlayer = 0;
let winComputer = 0;
let numberTies = 0;

// Part 2: where the player enters his/her option and plays a round!.

let result = " ";
let playerOption = document.querySelectorAll("button");
const yourOption = document.getElementById("results");

playerOption.forEach (function(button,index) {
    button.addEventListener("click", () => {
        playerOption = button.textContent;
        yourOption.innerHTML = "Results:<br>Your option is: " + playerOption +"<br>"+
                               "Computer choice is: " + computerSelection ; 
        const resultRound = document.createElement("div");
        yourOption.appendChild(resultRound);
        resultRound.textContent = playRound(playerOption,computerSelection);
        result = resultRound.textContent;
        game();
        updateResults();
        computerSelection = getComputerChoice();
        declarateWinner();
    });
});

function playRound(playerOption,computerSelection) {

    if (playerOption === computerSelection){
        return("It´s a Tie!")
    } else if (playerOption === "Rock" && computerSelection === "Paper"){
        return("You lose! Paper beats rock");
    } else if(playerOption === "Rock" && computerSelection === "Scissors") {
        return("You win! Rock beats scissors");
    } else if(playerOption === "Paper" && computerSelection === "Rock") {
        return("You win! Paper beats rock");
    } else if(playerOption === "Paper" && computerSelection === "Scissors") {
        return("You lose! Scissors beats paper");
    } else if(playerOption === "Scissors" && computerSelection === "Rock") {
        return("You lose! Rock beats scissors");
    } else if(playerOption === "Scissors" && computerSelection === "Paper") {
        return("You win! Scissors beats paper");
    } else {
        return("error");
    }
}

// Part 3: Completing the game.

function game() {    
    switch (result) {
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
    }
}

// Part 4: Results
const container = document.getElementById("container");
const results = document.createElement("div");
const score = document.createElement("div");
score.textContent = "Score:"
results.appendChild(score);
results.style.border = "solid black 10px"; // Border
results.style.padding = "40px"; // Padding
results.style.backgroundColor = "white"; // background color
results.style.fontSize = "25px"; // Font size
results.style.marginBottom = "20px";

container.appendChild(results);
const resultWins = document.createElement("div");
results.appendChild(resultWins);
const resultLoses = document.createElement("div");
results.appendChild(resultLoses);
const resultTies = document.createElement("div");
results.appendChild(resultTies);

function updateResults () {
    resultWins.textContent = "You win "+ winPlayer +" times.";
    resultLoses.textContent = "You lose "+ winComputer +" times.";
    resultTies.textContent = numberTies +" ties!";
};


function declarateWinner () {
    if(winPlayer === 5 ){
        winPlayer = 0;
        winComputer = 0;
        numberTies = 0;
        alert("Game finished! You won! Play again!");
    } else if (winComputer === 5){
        winPlayer = 0;
        winComputer = 0;
        numberTies = 0;
        alert("Game finished! You lose! Play again!");
    } 
}

// Rock = 1; Pappel = 2; Scissors = 3