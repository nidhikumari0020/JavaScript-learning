// 1. Defining the function (Writing the recipe)
function greet() {
  console.log("Hello!");
  console.log("Welcome to my Git.");
}

// 2. Calling the function (Cooking the recipe)
greet(); 
greet(); // You can call it as many times as you want!

// 'name' is the parameter (the placeholder)
function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

// "Alice" and "Bob" are the arguments (the real data)
sayHello("Alice"); // Outputs: Hello, Alice!
sayHello("Bob");   // Outputs: Hello, Bob!

function displayScore(playerName, score) {
  console.log(`${playerName} has a score of ${score}.`);
}

displayScore("Player1", 350); // Outputs: Player1 has a score of 350.

function add(num1, num2) {
  return num1 + num2; // Sends the result back
}

// You can capture that returned value in a new variable:
let total = add(5, 10); 
console.log(total); // Outputs: 15

function multiply(a, b) {
  return a * b;
}

let result = multiply(4, 5);