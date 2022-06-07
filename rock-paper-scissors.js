const choices = ["rock","paper","scissors"];
const computerWins = [];
const playerWins = [];
const ties = [];
const displayWins = document.querySelector('.wins');
const displayLosses = document.querySelector('.losses');
const displayTies = document.querySelector('.tie');


function startGame() {
    const buttons = document.querySelectorAll('button')
        
        buttons.forEach((button) => button.addEventListener('click',() => {
            if(choices.includes(button.className)) {
                playRound(button.className);
                
            }
        }))  
}

function scoreTally() {

    displayWins.textContent = `Wins: ${playerWins.length}`;
    displayLosses.textContent = `Losses: ${computerWins.length}`;
    displayTies.textContent = `Ties: ${ties.length}`;
}


function computerInput() {
    return choices[Math.floor(Math.random() * choices.length)];
}


function checkWinner(computerChoice,playerChoice) {

    const result = document.querySelector('.result');
    const computer = document.querySelector('.computer-choice-text')
    const player = document.querySelector('.player-choice-text')

    player.textContent = `You chose ${playerChoice}`;
    computer.textContent = `The computer chose ${computerChoice}`;

    if(computerChoice === playerChoice) {
        ties.push("Tie");
        result.textContent = "Game tied."  // console.log("Game tied.")
    }else if((playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "scissors" && computerChoice === "paper") ||
            (playerChoice === "paper" && computerChoice === "rock"))  {
        playerWins.push("Player") ;      
        result.textContent = "You win!"    // console.log("You win!")
    }else{
        computerWins.push("Computer");
        result.textContent = "You lose."   // console.log("You lose")
    }
    
}


function playRound(playerInput) {

    checkWinner(computerInput(),playerInput);
    scoreTally();

    if(playerWins.length === 5 || computerWins.length === 5) {
        endGame();
        return;
    }
}

startGame();



function endGame() {

    const playAgain = document.querySelector('.play-again');
    const resetButton = document.querySelector('.reset');


    resetButton.style.visibility = 'visible';
    playAgain.style.visibility = 'visible';
    if(computerWins.length === 5) {
        playAgain.textContent = "The computer won five rounds.";
    }else if (playerWins.length === 5) {
        playAgain.textContent = "Congratulations, you won five rounds!";
    }

    // once someone wins five rounds, we want the "play again" button to appear
    // we want to display the winner of five rounds.

}

function resetGame() {
    document.querySelector('.wins').textContent = ''
    document.querySelector('.losses').textContent = ''
    document.querySelector('.tie').textContent = ''
    document.querySelector('.player-choice-text').textContent = ''
    document.querySelector('.computer-choice-text').textContent = '';
    document.querySelector('.play-again').visibility = 'hidden';
    document.querySelector('.reset').visibility = 'hidden';
    document.querySelector('.result').textContent = '';

}