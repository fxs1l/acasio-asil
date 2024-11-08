// const secretNumber = 6;
const secretNumber = Math.floor(Math.random() * 10);

let attempts = 0;
let guessedNumber;

console.log("Welcome to guess the number! ");

do {
    guessedNumber = parseInt(prompt("What number am I thinking of?"));
    if (guessedNumber < secretNumber) {
        console.log("Too low! Try again.");
    } else if (guessedNumber > secretNumber) {
        console.log("Too high! Try again.");
    } else {
        console.log(
            "Congratulations! You guessed the correct number: ",
            secretNumber,
        );
        console.log("It took you", attempts, "attempts.");
    }
    attempts++;
} while (guessedNumber != secretNumber);
