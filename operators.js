//1- Arithmetic Operators (Math)
//These are for numbers.
let a = 10;
let b = 5;
console.log(a + b); // 15 (addition)
console.log(a - b); // 5  (subtraction)
console.log(a * b); // 50 (multiplication)
console.log(a / b); // 2  (division)
console.log(a % b); // 0  (remainder)

// % means remainder.

//Example:

console.log(7 % 2); // 1
//Because 7 divided by 2 leaves remainder 1.

//2-Assignment Operators
//Used to update values.
let score = 10;
score += 5;  // same as score = score + 5
console.log(score); // 15
score -= 3;  // score = score - 3
console.log(score); // 12
//This is very common in real projects.

//3 -Comparison Operators (VERY IMPORTANT)
//Used to compare values.
let age = 20;

console.log(age > 18);  // true
console.log(age < 18);  // false
console.log(age == 20); // true
console.log(age === 20); // true

//Important difference:
//== checks value only
//=== checks value AND type

//Example:
console.log(5 == "5");  // true
console.log(5 === "5"); // false
//In real programming, ALWAYS prefer ===.

//4- Logical Operators
//Used in conditions.
let age1 = 23;
let hasID = true;
console.log(age1 > 18 && hasID); // true
//&& means AND
//Both must be true.
console.log(age > 18 || false); // true
//|| means OR
//Only one needs to be true.
console.log(!true); // false
//! means NOT (reverse)