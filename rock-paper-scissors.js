// computer must first pick between rock, paper, or scissors
// then, computer will ask for user choice
// logic will follow to determine winner
    // winning conditions = rock/scissors paper/rock scissors/paper
    // losing conditions = same as above
    // tie conditions = paper/paper rock/rock scissors scissors
// display results

const gameOptions = ['rock', 'paper', 'scissors'];
let playerWins = 0;
let computerWins = 0;


//when a button is clicked, playRound is run
const btns = document.querySelectorAll('.btn');
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        playRound();
    });
});

function getComputerChoice() {
    //sets computers choice
    let computerChoice = gameOptions[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function getPlayerChoice() {
    //asks for players choice
    let playerChoice = prompt("Choose rock, paper, or scissors.");
    return playerChoice.toLowerCase();
}


function gameLogic(computerChoice, playerChoice) {
    //tests the winning conditions and losing conditions
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') || 
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log(`${playerChoice} beats ${computerChoice}, you win!`);
        return playerWins += 1;
        
    } else if (
        (playerChoice === 'rock' && computerChoice === 'paper') || 
        (playerChoice === 'paper' && computerChoice === 'scissors') || 
        (playerChoice === 'scissors' && computerChoice === 'rock')
    ) {
        console.log(`${computerChoice} beats ${playerChoice}, you lose!`);
        return computerWins += 1;
    } else if (
        (playerChoice === computerChoice)
    ) {
        console.log(`${playerChoice} is the same as ${computerChoice}, you tied!`);
    } else {
        console.log(`${playerChoice} is not an option, next round.`)
    }
}

function getScore(scoreOne, scoreTwo) {
    //tests the players tally vs the computers tally
    if (scoreOne > scoreTwo) {
        console.log(`Player: ${scoreOne}\nComputer: ${scoreTwo}\nYou win!`);
    } else if (scoreTwo > scoreOne) {
        console.log(`Player: ${scoreOne}\nComputer: ${scoreTwo}\nYou lose!`);
    } else {
        console.log(`Player: ${scoreOne}\nComputer: ${scoreTwo}\nIt's a tie!`);
    }
}

function resetScore(scoreOne, scoreTwo) {
    //resets the score to 0 between rounds
    scoreOne = 0;
    scoreTwo = 0;
}

function playRound() {
    //plays one round of the game
    gameLogic(getComputerChoice(), getPlayerChoice());
}


function playGame() {
    //plays 5 rounds of the game and keeps a score, prints score at the end and resets
    for (let i = 1; i < 6; i) {
        console.log(`Round ${i}.`);
        playRound();
    }
    getScore(playerWins, computerWins);
    resetScore(playerWins, computerWins);
}

