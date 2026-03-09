//FUNCTIONS
//Functions are how real programs are built.
//Instead of repeating code, we wrap logic inside a function and reuse it.
//Basic Function Example
function greet() {
    console.log("Hello!");
}
greet();  // calling the function
//Output: Hello!
//function greet() → defines the function
//greet(); → runs it
// More Powerful: Functions with Parameters
//Now we make it useful.

function checkScore(score) {

    if (score >= 80) {
        console.log("Excellent");
    } 
    else if (score >= 50) {
        console.log("Pass");
    } 
    else {
        console.log("Fail");
    }

}

checkScore(45);
checkScore(70);
checkScore(90);

//Output:
Fail
Pass
Excellent

//Now instead of writing if/else many times…
//We just call the function with different values.
// Returning Values
//Instead of printing inside the function, we can return:
function checkScore(score) {

    if (score >= 80) {
        return "Excellent";
    } 
    else if (score >= 50) {
        return "Pass";
    } 
    else {
        return "Fail";
    }

}

let result = checkScore(90);
console.log(result);

//Now the function gives back a value.

