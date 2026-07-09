//guessing game//
let gameNumber = 25;
let guess = prompt("Guess the number (between 1 and 50):");
while (parseInt(guess) !== gameNumber) {
    if (parseInt(guess) < gameNumber) {
        guess = prompt("Too low! Guess again:");
    } else {
        guess = prompt("Too high! Guess again:");
    }
}
console.log("Congratulations! You guessed the number.");