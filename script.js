let decide = Math.random() *100;
console.log(decide);

function getComputerChoice() {
    let play;
    if (decide <= 33) {
        play = 'rock' 
        return play;
    } else if (decide > 33 && decide < 66) {
        play = 'paper';
        return play;
    } else  {play = 'scissors'
    return play;}
}

console.log(getComputerChoice());
//let playerSelection = prompt("rock, paper, scissors");
//prompt(playRound());

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("rock, paper, scissors");
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock"

    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock beats Scissors"

    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beats Paper"

    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats Rock"

    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        return "You Win! Rock beats Scissors"

    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper")
        {return "You Win! Scissors beats Paper" 

    } else {return "You Tied!"}
}

console.log(playRound());

function game() {
    for (let i = 0; i < 5; i++) {
        
     }
}