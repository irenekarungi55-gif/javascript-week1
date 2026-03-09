//A data type tells JavaScript what kind of value you are storing.

//Number → math
//String → text
//Boolean → true/false
//Array → list
//Object → grouped information

// String (Text)
//Strings are words or sentences.
//They must be inside quotes:
let name = "Grace";
let city = 'Kampala';
//You can combine strings:
let firstName = "Grace";
let lastName = "Nanyonga";
console.log(firstName + " " + lastName);
//Output:
//Grace Nanyonga

//2 Number
//Numbers are for math.
let age = 23;
let price = 10000;
//You can calculate:
let a = 10;
let b = 5;
console.log(a + b); // 15
console.log(a * b); // 50
//Numbers do NOT use quotes.
//This is different:
let num1 = 5;      // number
let num2 = "5";    // string
//Those are NOT the same.

//3️⃣ Boolean (True or False)
//true
//false
let isStudent = true;
let isLoggedIn = false;
//Very useful in conditions:
let isAdult = true;
if (isAdult) {
    console.log("You can vote");
}

//4️⃣ Undefined
//When you create a variable but don’t give it a value:
let school;
console.log(school); // undefined
//It means: “There is nothing stored yet.”

//5️⃣ Null

//Null means: “I intentionally left this empty.”
let middleName = null;
//Difference:
undefined //no value assigned
null //intentionally empty

//6️⃣ Array (List)-An array stores multiple values inside square brackets [].

let fruits = ["Mango", "Orange", "Banana"];
//Access items using index (starts at 0):
console.log(fruits[0]); // Mango
console.log(fruits[1]); // Orange

//7️⃣ Object (Grouped Data)-Objects store related data together.
let person = {
    name: "Grace",
    age: 23,
    city: "Kampala"
};

//Access values like this:
console.log(person.name); // Grace
console.log(person.age);  // 23

// How To Check Data Type Very important:
//Use typeof
let name2 = "Grace";
console.log(typeof name2); // string

