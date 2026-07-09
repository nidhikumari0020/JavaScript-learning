//loops//

//for loops//
console.log("numbers from 0 to 10:");
for (let i = 0; i <= 10; i++) {
    console.log(i);
    // i++;
}

console.log("even numbers from 0 to 10:");
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("odd numbers from 0 to 10:");
for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log("prime numbers from 10 to 0:");
for (let i = 10; i >= 0; i--) {
    let isPrime = true;
    if (i < 2) {
        isPrime = false;
    } else {
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        console.log(i);
    }
}

console.log("sum of numbers from 1 to N:");
let N = 10;
let sum = 0;
for (let i = 1; i <= N; i++) {
    sum += i;
}
console.log(sum);

//while loop//

console.log("numbers from 0 to 10:");
let count = 0;
while (count <= 10) {
    console.log(count);
    count++;

let i = 5;
while (i > 0) {
  console.log(i);
  // Oops! Forgot to decrease 'i', so it will always be greater than 0.
}

let count = 1;

while (count <= 3) {
  console.log("Count is: " + count);
  count++; // Increments count so the loop eventually ends
}

console.log("Loop finished!");

let x = 10;

// This will NOT run because x is not less than 5
while (x < 5) {
  console.log("This won't print");
}

//Do while loop//

// This WILL run exactly once, even though x < 5 is false
do {
  console.log("This prints exactly once!");
} while (x < 5);

//for-of loop//

let str = "this is a javascrpt"; 
console.log("characters in the string:");
for (let char of str) {
    console.log(char);
}

let str1 = "this is a string";
console.log("characters in the string:");
let size = 0;
let size1 = str1.length;
for (let char of str1) {
    console.log(char);
    size++;
}
console.log("Size of the string:", size);
console.log("Size of the string (using length property):", size1);
}