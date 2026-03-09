//A variable is like a container that stores data — numbers, text, true/false values, or anything you want to use in your program.
/*How to Declare Variables
There are three ways in JavaScript:
1-var – Old way, rarely used now */
var age = 20;
console.log(age); // 20

//2-let – Modern, can be changed later

let name = "Alice";
console.log(name); // Alice

name = "Mary";
console.log(name); // Mary

//3-const – Modern, cannot be changed once set

const pi = 3.1416;
console.log(pi); // 3.1416

// pi = 3; // ❌ This will give an error

//✅ Examples:

let firstName = "Jane";
let _score = 100;
let $amount = 50;

//❌ Invalid examples:

let name = "John"; // ❌
let my name2 = "John"; // ❌
//3️⃣ Variable Types
//String – Text
let city = "Kampala";

//Number – Numeric values
let age = 22;

//Boolean – True or False
let isStudent = true;

//Array – A list of items
let fruits = ["Mango", "Banana", "Apple"];

//Object – Key-value data
let person = { name: "Jane", age: 22 };


//Variables allow you to:
//Store data and reuse it
//Make your code dynamic
//Change values without rewriting the code

//Example:

let score = 0;
score = score + 10;
console.log(score); // 10