
//create function to make computer pick rock paper or scissors randomly
function getComputerChoice() {
    let decide = Math.floor(Math.random() * 100);
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


//create iterable variables to keep score for game
let youWin = 0;
let computerWin = 0;

//create function to play a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("rock, paper, scissors");
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        alert("You Lose! Paper beats Rock")
        computerWin++

    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        alert("You Lose! Rock beats Scissors")
        computerWin++

    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        alert("You Lose! Scissors beats Paper")
        computerWin++

    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        alert("You Win! Paper beats Rock")
        youWin++
        
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        alert("You Win! Rock beats Scissors")
        youWin++

    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        alert("You Win! Scissors beats Paper")
        youWin++

    } else {alert("You Tied!")}
}
console.log(game())

console.log(youWin);
console.log(computerWin);

//create function that plays until someonee wins best out of 5
function game() {
    for (let i = 0; i < 10; i++) {
        playRound()
        console.log(getComputerChoice());
            if (youWin == 3) {
                alert("You win, best out of 5!")
                break
            
            } else if (computerWin == 3) {
                alert("Computer wins, best out of 5!")
                break
            }
        
     }
}
