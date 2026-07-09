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

function printReceipt(item, price) {
  let cleanedItem = item.trim();
  console.log(`--- RECEIPT ---`);
  console.log(`Item: ${cleanedItem}`);
  console.log(`Price: $${price}`);
  console.log(`---------------`);
}

// Calling the function with different items
printReceipt("  MacBook Pro  ", 1299);
printReceipt("Hard Drive", 85); 

const calculateArea = (length, width) => {
  return length * width;
}

let area = calculateArea(5, 10);
console.log(`The area is: ${area}`); // Outputs: The area is: 50

//return the number of vowels in a string//

function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";
  
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  
  return count;
}

let vowelCount = countVowels("Hello World");
console.log(`Number of vowels: ${vowelCount}`); // Outputs: Number of vowels: 3

//arrow function version of the countVowels function//
const countVowels = (str) => {
  let count = 0;
  const vowels = "aeiouAEIOU";
  
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  
  return count;
}

let vowelCount = countVowels("Hello World");
console.log(`Number of vowels: ${vowelCount}`); // Outputs: Number of vowels: 3

countVowels("This is a test string with several vowels."); // Outputs: Number of vowels: 11

//foreach loop version of the countVowels function//
const countVowels = (str) => {
  let count = 0;
  const vowels = "aeiouAEIOU";
  
  str.split('').forEach(char => {
    if (vowels.includes(char)) {
      count++;
    }
  });
  
  return count;
}

let vowelCount = countVowels("Hello World");
console.log(`Number of vowels: ${vowelCount}`); // Outputs: Number of vowels: 3

//foreach loop array function to print squares of numbers//
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => {
  console.log(`The square of ${num} is ${num * num}`);
});

//Map method//
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);

console.log(squares); // Outputs: [1, 4, 9, 16, 25]

//Filter method//
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
 
console.log(evenNumbers); // Outputs: [2, 4]

//Reduce method//
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Outputs: 15

let marks = [85, 90, 78, 92, 88];
let maxmarks = marks.filter(marks => marks > 90);
console.log(maxmarks); // Outputs: [90, 92]

let  n = prompt("Enter a number: ");
let arr=[];
for(let i=1; i<=n; i++){
  arr[i-1]=i;
}
console.log(arr); // Outputs: [1, 2, 3, ..., n]

let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Outputs: sum of numbers from 1 to n

let factorial = arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(factorial); // Outputs: factorial of n