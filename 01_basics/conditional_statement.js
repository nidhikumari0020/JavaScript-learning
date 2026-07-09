//conditional statements//


let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
}

let number = 7;
if (number % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

let score = 65;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else if (score >= 40) {
    console.log("Grade: E");
} else {
    console.log("FAIL.");
}

let age1 = 25;
age1 >= 18 ? console.log("You are an adult.") : console.log("You are a minor.");//ternary operator//


let number1 = prompt("Enter a number:");
if (number1 % 5 === 0) {
    console.log("The number is divisible by 5.");
} else {
    console.log("The number is not divisible by 5.");
}