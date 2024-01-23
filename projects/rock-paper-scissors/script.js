function getComputerChoice() {
    /* returns computer's choice */

    // random number from 0-2
    let num = Math.floor(Math.random()*3);
    // use number to pick choice
    let choice = "";
    if (num == 0) {
        choice = "rock";
    } else if (num == 1) {
        choice = "paper";
    } else {
        choice = "scissors"
    }
    // return choice
    return choice;
    
}

function getPlayerChoice() {
    /* returns player's choice */
    
    return prompt("Rock, Paper, or Scissors!!!").toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    /* 1 round of rock-paper-scissors, returns Win/Lose */

    // tie
    if (playerSelection == computerSelection) {
        console.log("TIE");
        playRound(getPlayerChoice(), getComputerChoice())
    // win
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')
    ) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        return 'Win';
    // lose
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
        return 'Lose';
    }

}

function game() {
    /* main game */

    // set wins/loses
    let win = 0;
    let lose = 0;
    let result = "";
    // set conditions for loop
    while (win < 3 && lose < 3) {
        result = playRound(getPlayerChoice(), getComputerChoice());
        result === 'Win' ? win++ : lose++;
    }
    // results
    (win == 3) ? console.log(`You WON ${win} to ${lose}!`) : console.log(`you lost ${lose} to ${win}.`);
    
    // displaying result
    (win == 3) ? document.getElementById("result").innerHTML = `You WON ${win} to ${lose}!` : document.getElementById("result").innerHTML = `you lost ${lose} to ${win}.`;
}
