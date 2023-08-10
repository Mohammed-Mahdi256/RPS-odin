const array = ["rock", "paper", "scissors"];


const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

const resultDiv = document.querySelector('.result');

const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');

let playerScore = 0;
let computerScore = 0;

let message = '';


function launchGame(one) {
    message = playGame(one.classList[0], getComputerChoice());
    display(message);
}


[rockBtn, paperBtn, scissorsBtn].forEach((one) => {one.addEventListener('click', () => launchGame(one))
});



function display(message) {
    resultDiv.textContent = message;
}



function getComputerChoice () {
    return array[Math.floor(Math.random() * 3)];

}



function endGame() {

    playerScoreDisplay.textContent = 0;
    playerScore = 0;
    computerScoreDisplay.textContent = 0;
    computerScore = 0;
    
}


function playGame(playerChoice, computerChoice) {
    if(playerChoice == computerChoice){
        ;
    }
    // if the player wins:
    else if((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")){

        playerScore += 1;
        playerScoreDisplay.textContent = playerScore;
        if(playerScore == 5) {
            endGame()
            message = 'You Scored 5 Points! You won The game!';
            return message;
        }


    }
    // if the computer wins:
    else {
        computerScore += 1;
        computerScoreDisplay.textContent = (computerScore);
        if(computerScore == 5) {
            endGame();
            message = 'The Computer Scored 5 Points! You Lost!';
            return message;
        }

    }
    return '';
}





