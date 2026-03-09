//For Loop (Most Common)
//Structure:
for (let i = 0; i < 5; i++) {
    console.log("Hello World", i);
}
//Breakdown:
//let i = 0 → start at 0
//i < 5 → repeat while i is less than 5
//i++ → increase i by 1 each time
//console.log(...) → code inside the loop runs 5 times

//Output:
// Hello World 0
// Hello World 1
// Hello World 2
// Hello World 3
// Hello World 4

// 2- While Loop
//Structure:
let i = 0;
while (i < 5) {
    console.log("Hello Again", i);
    i++;
}
//Works like a for loop, but more flexible
//Must remember to increase i or it loops forever

//3-Loop Through Arrays
//Instead of repeating manually:
let fruits = ["Mango", "Banana", "Apple"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//Output:
//Mango
//Banana
//Apple

