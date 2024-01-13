

function getComputerChoice () {
    let randomOption = Math.floor(Math.random()*4) + 1;
    switch (randomOption) {
            case 1:
            console.log("Rock")
        break;
            case 2:
            console.log ("Pappel")
        break;
            case 3:
            console.log("Scissors")
        break;
    }
}

getComputerChoice();

// Make the computer ramdonly select between "Rock, pappel and scissors"
// 