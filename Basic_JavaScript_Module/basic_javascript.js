"use strict";
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
/**
 *
 * @return {Function}
 */
//SOLUTION
function createHelloWorld() {
  return function (arg) {
    return "Hello World";
  };
}
const func = createHelloWorld();
func();
/////////////////////////////////////////////////////////////////////////////////////////
/*Assign the following three lines of text into the single variable myStr using escape sequences.
FirstLine  
\SecondLin
ThirdLine
You will need to use escape sequences to insert special characters correctly. You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words.

Note: The indentation for SecondLine is achieved with the tab escape character, not spaces.*/
/**
 * @param {SOLUTION}
 */

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
//////////////////////////////////////////////////////////////////////
/**
 convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased: "How Can Mirrors Be Real If Our Eyes Aren't Real"
 */
const jadenQoute = "How can mirrors be real if our eyes aren't real";
String.prototype.toJadenCase = function () {
  // Splits this string into words using split(" ") and assigns them to words array.
  const words = this.split(" ");
  // Splits string into words, maps through them, capitalizes first letter using charAt(0).toUpperCase() and joins the rest with slice(1), creates Jaden Case.
  return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
};
console.log(jadenQoute.toJadenCase()); // log the result
////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @param { WORKING STRINGS CHALLENGE}
 * created a variable const firstName = "Ada", we could find out how long the string Ada is by using the firstName.length property.
Use the .length property to set lastNameLength to the number of characters in lastName.
 */
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";
// SOLUTION
lastNameLength = lastName.length;
//////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.
 */
let firstLetterOfLastName = "";
const lastName2 = "Lovelace";
//SOLUTION
firstLetterOfLastName = lastName2[0];
////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @param {Use Bracket Notation to Find the Nth-to-Last Character in a String}
 * You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.
 * Use bracket notation to find the second-to-last character in the lastName string.
 */
const lastName3 = "Lovelace";
//SOLUTION
const secondToLastLetterOfLastName = lastName3[lastName3.length - 2];
////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @param {DATA STRUCTURES Working With Arrays}
 * Store Multiple Values in one Variable using JavaScript Arrays
 */
/*Create a multi-dimensional array.
SOLUTION
*/
const myArray = [
  ["cars", { speed: "140 mph", color: "blue", doors: 4 }, "drivers", 3],
  ["person", { name: "John", email: "kewijvap@mohmok.gg", dob: 2 / 7 / 2093 }],
];
////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Create a variable called myData and set it to equal the first value of myArray using bracket notation.
 */
const myArray2 = [50, 60, 70];
// SOLUTION
let myData = myArray2[0];
////////////////////////////////////////////////////////////////////////////////////////////
/*Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.
Modify the data stored at index 0 of myArray to a value of 45.
*/
const myArray3 = [18, 64, 99];
//SOLUTION
myArray3[0] = 45;
////////////////////////////////////////////////////////////////////////////////////////////
/*Using bracket notation select an element from myArray such that myData is equal to 8.
 */
const myArray4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
//SOLUTION
const myData1 = myArray4[2][1];
////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @param {Manipulate Arrays With push Method }
Push ["dog", 3] onto the end of the myArray variable.
*/

const myArray5 = [
  ["John", 23],
  ["cat", 2],
];
//Solution
myArray5.push(["dog", 3]);
console.log(myArray5);
////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @param {Manipulate Arrays With pop Method}
Another way to change the data in an array is with the .pop() function. .pop() is used to pop a value off of the end of an array. Use the .pop() function to remove the last item from myArray and assign the popped off value to a new  variable, removedFromMyArray.
*/
const myArray6 = [
  ["John", 23],
  ["cat", 2],
];
//SOLUTION
const removeFromArray = myArray6.pop();
////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @param {Manipulate Arrays With shift Method}
shift() works just like .pop(), except it removes the first element instead of the last.
Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.
*/
const myArray7 = [
  ["John", 23],
  ["dog", 3],
];
//SOLUTION
const removeFromArray2 = myArray7.shift();
////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @param {Manipulate Arrays With unshift Method}
.unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.
Add ["Paul", 35] to the beginning of the myArray variable using unshift().
*/

const myArray8 = [
  ["John", 23],
  ["dog", 3],
];
myArray8.shift();
myArray8.unshift(["Paul", 35]);
console.log(myArray8);
////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @param {Shopping List}
Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays. There should be at least 5 sub-arrays in the list.
*/

const myList = [
  ["galon milk", 2],
  ["bread", 1],
  ["box of cereal", 2],
  ["case of Bottle water ", 1],
  ["bag of apples", 1],
];

////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @param {Write Reusable JavaScript with Functions}
Create a function called reusableFunction which prints the string Hi World to the dev console.
Call the function.

SOLUTION
*/

function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();
////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @param {Passing Values to Functions with Arguments}

Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.

Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console. Call the function with two numbers as arguments.*/

const functionWithArgs = (num1, num2) => {
  console.log(num1 + num2);
};
functionWithArgs(1, 3);
functionWithArgs(7, 9);
////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @param {Return a Value from a Function with Return}
reate a function timesFive that accepts one argument, multiplies it by 5, and returns the new value
 */
const timesFive = (num) => {
  //SOLUTION
  return num * 5;
};
const answer = timesFive(15);
////////////////////////////////////////////////////////////////////////////////////////////
/**
 *@param {Global Scope and Functions}
 * global scope is a any varibale declare  outside of a function and can be accessed throughout the your code, local scope refers to a variable that is declared in side it's function and can only be access within that function. LET and CONST Keywords create block scope, meaning variables declared with let or const are only accessible within the block they are defined in, such as an if statement or a loop. 
 * Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.
Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.}
 */
function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal = 5;
}
const myGlobal = 10;
// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
/////////////////////////////////////////////////////////////////////////////////////////
/**
 * @param {Local Scope and Functions}
 */
function myLocalVar(str) {
  const myVar = "local scope";
  if (myVar == "local scope") {
    return myVar;
  } else {
    return "Not loacally scoped";
  }
}
console.log(myLocalVar());
/////////////////////////////////////////////////////////////////////////////////////////
/**
 * @param {Global vs. Local Scope in Functions}
@param CHALLENGE
Add a local variable to myOutfit function to override the value of outerWear with the string sweater.
 */
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  //SOLUTION
  let outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();
/////////////////////////////////////////////////////////////////////////////////////////
/**
 * @param {Understanding Undefined Value returned from a Function}
 * A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.
 * @param CHALLENGE
 * Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.
 */
let sum = 0;
function addThree() {
  sum = sum + 3;
}
function addFive() {
  sum += 5;
}
addThree(3);
addFive(5);
/////////////////////////////////////////////////////////////////////////////////////////
/**
 * @param {Assignment with a Returned Value}
* @param CHALLENGE
Call the processArg function with an argument of 7 and assign its return value to the variable processed.
*/
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
//SOLUTION
processed = processArg(7);
/////////////////////////////////////////////////////////////////////////////////////////
/**
 *@param {Stand in line}
 In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.
 @param CHALLENGE
 1. Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
2. Add the number to the end of the array, then remove the first element of the array.
3. The nextInLine function should then return the element that was removed.
 */
function nextInLine(arr, item) {
  // SOLUTION
  arr.push(item);
  const remove = arr.shift();
  return remove;
}
let testArr = [1, 2, 3, 4, 5];
// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
/////////////////////////////////////////////////////////////////////////////////////////
/**
 * @param {Understanding Boolean Values}
 * Another data type is the Boolean. Booleans may only be one of two values: true or false. They are basically little on-off switches, where true is on and false is off. These two states are mutually exclusive.
 * @param CHALLENGE
 * Modify the welcomeToBooleans function so that it returns true instead of false.
 */
function welcomeToBooleans() {
  // SOLUTION
  if (5 * 5 === 25) {
    return true; // Change this line
  } else {
    return false;
  }

  // Only change code above this line
}
welcomeToBooleans();

/////////////////////////////////////////////////////////////////////////////////////////
/**
 * @param {Use Conditional Logic with If Statements}
 * if statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.
 * @param CHALLENGE
 * Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise.
 */
const trueOrFalse = (wasThatTrue) => {
  //SOLUTION
  if (wasThatTrue) {
    return "Yes that was true";
  } else {
    return false;
  }
};
trueOrFalse(true)
////////////////////////////////////////////////////////////////////////////////////////////
