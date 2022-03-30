const choices = ["rock","paper","scissors"];


function playerInput(){ //passing an argument is necessary
    let input = prompt("Type in Rock, Paper, or Scissors.");
    input = input.toLowerCase();

    while(input == null) {prompt("Type in Rock, Paper, Or Scissors.")} //reloads prompt if input is null.
    while(!choices.includes(input))
    {input = prompt("Type in Rock, Paper, or Scissors.")}; 
    
    // HERE, IT IS VERY IMPORTANT TO REASSIGN INPUT TO PROMPT. IF YOU JUST PUT A PROMPT IN THE WHILE LOOP, IT WILL NEVER KNOW WHEN THE VALUE IS SET TO TRUE. WHEN YOU TELL IT THAT THE PROMPT IS INPUT, IT RECOGNIZES THE CONDITIONS. 
    
    
    input = input.toLowerCase();
    while(input == null) {prompt("Type in Rock, Paper, Or Scissors.")}
    if (choices.includes(input)) {
        return input; // QUESTION: IS IT POSSIBLE TO BOTH RETURN A VALUE AND CONSOLE.LOG IT AT THE END OF AN IF STATEMENT?
    }

}


function computerChoice() {

    return choices[Math.floor(Math.random()*choices.length)];

}

function checkWinner(computerSelection,playerSelection) {

    if (computerSelection === playerSelection) {
        return "Round Tied."
    } else if ( (computerSelection == "rock" && playerSelection == "paper") ||
                (computerSelection == "paper" && playerSelection == "scissors") ||
                (computerSelection == "scissors" && playerSelection == "rock")
    ) {
        return "You win!"
    } else return "You lose. "

}

function playRound() {
    const player = playerInput();
    console.log(`You chose ${player}`);
    const computer = computerChoice();
    console.log(`The computer chose ${computer}`);

    checkWinner(computer,player);
    
    console.log(checkWinner(computer,player));

}



function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    

}








