let userInput;
let userInputAsInteger;
do {
    userInput = prompt("Enter a number between 0 and 100");
    userInputAsInteger = parseInt(userInput);
} while(!(userInputAsInteger > 0 && userInputAsInteger < 100))