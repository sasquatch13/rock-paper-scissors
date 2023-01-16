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
