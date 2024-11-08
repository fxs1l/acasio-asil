let secretNumber = 6;

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
    }
    attempts++;
    console.log("It took you", attempts, "attempts.");
} while (guessedNumber != secretNumber);
