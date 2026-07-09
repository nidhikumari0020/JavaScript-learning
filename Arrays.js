// An array of strings
let fruits = ["Apple", "Banana", "Cherry"];

// An array of numbers
let luckyNumbers = [7, 13, 21, 42];

// An empty array (ready to be filled later)
let shoppingList = [];

//Accessing Items (The Index System)//
let fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits[0]); // Outputs: "Apple"
console.log(fruits[1]); // Outputs: "Banana"

// You can also use the index to update an item:
fruits[1] = "Blueberry"; 
console.log(fruits);    // Outputs: ["Apple", "Blueberry", "Cherry"]

//Finding the Size: .length//
let tools = ["Hammer", "Screwdriver", "Wrench", "Pliers"];
console.log(tools.length); // Outputs: 4

//Basic Array Methods (Adding & Removing)

//.push() (Add to the End)
let ModernArt = ["Painting", "Sculpture"];
ModernArt.push("Photography"); 
// Result: ["Painting", "Sculpture", "Photography"]

//.pop() (Remove from the End)
let numbers = [1, 2, 3];
numbers.pop(); 
// Result: [1, 2]

//.unshift() (Add to the Front)
let queue = ["Bob", "Charlie"];
queue.unshift("Alice"); 
// Result: ["Alice", "Bob", "Charlie"]

//.shift() (Remove from the Front)
let tasks = ["Clean", "Cook", "Code"];
tasks.shift(); 
// Result: ["Cook", "Code"]

                           //LOOPING OVER AN ARRAY//

const fruits = ["Apple", "Banana", "Cherry"];

for (const fruit of fruits) {
    console.log("I want to eat a " + fruit);
}

const fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach((fruit) => {
    console.log("Fresh " + fruit);
});

const fruits = ["Apple", "Banana", "Cherry"];

for (let i = 0; i < fruits.length; i++) {
    // fruits[i] grabs the item at position i (0, then 1, then 2)
    console.log("Position " + i + " contains: " + fruits[i]);
}

const studentMarks = [85,97,44,37,76,60]
sum=0
for (let i = 0; i < studentMarks.length; i++) {
    sum += studentMarks[i];
}
const average = sum / studentMarks.length;
console.log("Average marks:", average);

const price = [250,645,300,900,50];
let idx=0;
for (let val of price) {
    console.log(`value at index ${idx} is ${val}`);
    let offer = val/10;
    price[idx] = val - offer;
    console.log(`Offer at index ${idx} is ${price[idx]}`);
    idx++;
}

const price = [250,645,300,900,50];
for (let i = 0; i<price.length;i++){
    let offer = price[i]/10;
    price[i] -= offer;

}
console.log(price);


const todoList = ["Buy milk", "Clean room"];

// Add an item
todoList.push("Run 5k"); 
console.log(todoList); // ["Buy milk", "Clean room", "Run 5k"]

// Remove the last item
todoList.pop(); 
console.log(todoList); // ["Buy milk", "Clean room"]

const shoppingList = ["Apples", "Bread", "Eggs"];

console.log(shoppingList.length); // 3

if (shoppingList.includes("Bread")) {
    console.log("Don't forget the bread!");
}