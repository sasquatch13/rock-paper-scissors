let decide = Math.floor(Math.random() * 100);
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
var youWin = 0;
var computerWin = 0;

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("rock, paper, scissors");
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        computerWin++
        return "You Lose! Paper beats Rock"

    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        computerWin++
        return "You Lose! Rock beats Scissors"

    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        computerWin++
        return "You Lose! Scissors beats Paper"

    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        youWin++
        return "You Win! Paper beats Rock"
        

    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        youWin++
        return "You Win! Rock beats Scissors"

    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        youWin++
        return "You Win! Scissors beats Paper" 

    } else {return "You Tied!"}
}
console.log(playRound())
//console.log(game());

console.log(youWin);
console.log(computerWin);

//function game() {
    //for (let i = 0; i < 5; i++) {
        //playRound()
        //console.log(getComputerChoice())
            //if (youWin == 3) {
            //    return "you win"
            
            //} else if (computerWin++ == 3) {
            //    return "computer wins"
            //}
        
    // }
//}

console.log(youWin);
console.log(computerWin);