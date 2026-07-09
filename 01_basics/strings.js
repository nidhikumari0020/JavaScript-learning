//strings//

let city = 'New York';
let movie = "Interstellar";

//Template Literals//

let name = "Alex";
// Plugs the 'name' variable directly into the text:
let greeting = `Hello, my name is ${name}. 
Welcome to my website!`; 

console.log(greeting);

//find size//

let alphabet = "ABC";
console.log(alphabet.length); // Outputs: 3

//.toUpperCase() and .toLowerCase()//

let text = "Hello World";

console.log(text.toUpperCase()); // Outputs: "HELLO WORLD"

// search inside text //

let sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.includes("fox"));  // Outputs: true
console.log(sentence.includes("cat"));  // Outputs: false

//String Concatenation//

let firstName = "John";
let lastName = "Doe";

// The old way (Concatenation)
let fullName = firstName + " " + lastName; 

// The modern way (Template Literal)
let modernFullName = `${firstName} ${lastName}`;