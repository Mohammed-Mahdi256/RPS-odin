const array = ["rock", "paper", "scissors"];

function getComputerChoice () {
    return array[Math.floor(Math.random() * 3)];

}


function getPlayerChoice (addintionalMessage="") {
    let input = parseInt(prompt(`${addintionalMessage}\n enter your choice:
        1-Rock,
        2-Paper,
        3-Scissors`));
    if(input<=3 && input>=1){
        return array[input - 1];
    }
    else {
        return getPlayerChoice("invalide input!");
    }

}


function playGame(playerChoice, computerChoice) {
    if(playerChoice == computerChoice){
        let message = `Tie Game! both chose ${playerChoice}`;
        return message;
    }
    else if((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")){
        let message = `You Won! ${playerChoice} beats ${computerChoice}`;
        return message;
    }
    else {
        let message = `You Lost! ${computerChoice} beats ${playerChoice}`;
        return message;
    }
    
}

console.log(playGame(getPlayerChoice(), getComputerChoice()));