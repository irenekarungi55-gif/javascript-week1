//IF / ELSE (Decision Making)
//Operators become powerful when combined with if statements.
//This is where JavaScript starts to feel real.

//Example:
let age = 20;
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are underage");
}
//This means:
//IF condition is true → run this code
//ELSE → run something els

let money = 5000;
let price = 3000;
if (money >= price) {
    console.log("You can buy it");
} else {
    console.log("Not enough money");
}

//Change the price to 6000 and run again.

//Create this:
//A variable called score
//If score is 80 or above → print "Excellent"

//If score is 50–79 → print "Pass"
//Else → print "Fail"
//Use if, else if, else.
let money1 = 5000;
let price1 = 3000;
console.log(money1 > price1);  // true 
console.log(money1 - price1);  // 2000  true 
let age2 = 17;
console.log(age2 >= 18);  //false 
let isMother = true;
console.log(isMother && age2 > 18); //false
//true && false
//AND (&&) only returns true if BOTH sides are true.

