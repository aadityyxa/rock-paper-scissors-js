const choices = ["rock","paper","scissors"];


function playerInput(){ //passing an argument is necessary
    let input = prompt("Type in Rock, Paper, or Scissors.");
    input = input.toLowerCase();

    while(input == null) {prompt("Type in Rock, Paper, Or Scissors.")} //reloads prompt if input is null.
    while(!choices.includes(input))
    {input = prompt("Type in Rock, Paper, or Scissors.")}; 
    
    // HERE, IT IS VERY IMPORTANT TO REASSIGN INPUT TO PROMPT. IF YOU JUST PUT A PROMPT IN THE WHILE LOOP, IT WILL NEVER KNOW WHEN THE VALUE IS SET TO TRUE. WHEN YOU TELL IT THAT THE PROMPT IS INPUT, IT RECOGNIZES THE CONDITIONS. 
    
    
    input = input.toLowerCase();
    if (choices.includes(input)) {
        return input; // QUESTION: IS IT POSSIBLE TO BOTH RETURN A VALUE AND CONSOLE.LOG IT AT THE END OF AN IF STATEMENT?
    }

}


function computerChoice() {

    return choices[Math.floor(Math.random()*choices.length)];

}






