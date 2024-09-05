"use strict";
/** Sept 4th 2024
 * @param {Basic Data Structures}
Learn the nuances of arrays and objects in JavaScript. Discover when to use each and how to efficiently manipulate data with methods like splice() and Object.keys().
 */
/**
 * @param {Arrays: Storing Collections of Data}

An array is a fundamental data structure in JavaScript used to store a collection of values. These values can be of any data type, including numbers, strings, booleans, objects, and even other arrays.
Simple Arrays:

let simpleArray = ['one', 2, 'three', true, false, undefined, null];

Multi-Dimensional Arrays:

JavaScript
let complexArray = [
  [{ one: 1, two: 2 }, { three: 3, four: 4 }],
  [{ a: "a", b: "b" }, { c: "c", d: "d" }]
];
@param CHALLENGE
We have defined a variable called yourArray. Complete the statement by assigning an array of at least 5 elements in length to the yourArray variable. Your array should contain at least one string, one number, and one boolean.
 */
//Solution
let yourArray = ["this is an array", 30, false, { name: "John" }, "apple"];

/**
 * @param {Arrays: Storing and Accessing Data}

Arrays are data structures that store ordered collections of values. In JavaScript, arrays are zero-indexed, meaning the first element has an index of 0.

Accessing Array Elements:

To access an element in an array, use bracket notation with the element's index.

 @param Example:

 @param JavaScript
const fruits = ["apple", "banana", "orange"];

 Access the first element (index 0):
const firstFruit = fruits[0]; // "apple"

 Access the second element (index 1):
const secondFruit = fruits[1]; // "banana"

 Modify an element:
fruits[2] = "grape"; // Now fruits is ["apple", "banana", "grape"]
Use code with caution.

Key Points:
Arrays start with index 0.
Use bracket notation ([]) to access or modify elements.
Indexes can be used to retrieve or change values within the array.
@param Task
In order to complete this challenge, set the 2nd position (index 1) of myArray to anything you want, besides the letter b.
 */
//Solution
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "Banana";
console.log(myArray);

/**
 * @param {Add Items to an Array with push() and unshift()}
 
  We have defined a function, mixedNumbers, which we are passing an array as an argument. Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.
 
  We have defined a function, mixedNumbers, which we are passing an array as an argument. Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.
 */
function mixedNumbers(arr) {
  // Solution
  arr.unshift("I", 2, "three");
  arr.push(7, "VIII", 9);
  return arr;
}
console.log(mixedNumbers(["IV", 5, "six"]));
/**
   * @param {Removing Items from an Array: pop() and shift()}

pop() and shift() are methods used to remove elements from an array.

pop(): Removes the last element from an array and returns it.
shift(): Removes the first element from an array and returns it.   
Example:

JavaScript
let greetings = ['whats up?', 'hello', 'see ya!'];

// Remove the last element using pop()
greetings.pop(); // greetings becomes ['whats up?', 'hello']

// Remove the first element using shift()
greetings.shift(); // greetings becomes ['hello']

// Get the removed element and store it in a variable
let removedElement = greetings.pop();
Use code with caution.

@param Task:
Create a function named popShift that takes an array as an argument. The function should remove both the first and last elements from the array and return a new array containing these removed elements.
*/
function popShift(arr) {
  let popped = arr.pop(); // Solution
  let shifted = arr.shift(); // Solution
  return [shifted, popped];
}
console.log(popShift(["challenge", "is", "not", "complete"]));

/**
   * @param {Removing Items with splice()}

splice() removes elements from an array, starting at a specified index. It takes two main parameters:

Start index: The position where removal begins (0-based).
Number of elements to remove: How many elements to delete.
Example:

JavaScript
let array = [1, 2, 3, 4, 5];
array.splice(2, 2); // Removes 3 and 4
Use code with caution.

splice() also returns a new array containing the removed elements.

@param Task:
Use splice() on arr to keep only elements that sum to 10.
   */
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Solution
arr.splice(1, 4);
console.log(arr);

/**
 * @param Adding items with splice()

Remember that splice() can take up to three arguments:

startIndex: The index where you want to start modifying the array.
deleteCount: The number of elements to remove.
itemsToAdd: One or more elements to insert at the specified index.
To add items to an array using splice(), simply set deleteCount to 0 and provide the items you want to add as the third argument.

@param Example JavaScript:
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;
 @param numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);

const numbers = [10, 11, 12, 12, 15];
numbers.splice(2, 0, 13, 14); // Adds 13 and 14 at index 2
console.log(numbers); // Output: [10, 11, 13, 14, 12, 15]
Use code with caution.

@param Exercise:
Modify the htmlColorNames function to remove the first two elements and insert 'DarkSalmon' and 'BlanchedAlmond' in their place.
 */
function htmlColorNames(arr) {
  // Solution
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  return arr;
}
console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);

/**
* @param {slice() creates a new array by extracting a portion of an existing array.}

@param Example JavaScript
const weather = ['rain', 'snow', 'sleet', 'hail', 'clear'];
const today = weather.slice(1, 3); // Creates a new array ['snow', 'sleet']
Use code with caution.

@param Task:
Write a forecast function that uses slice() to extract "warm" and "sunny" from a given weather array, returning a new array or an empty array if not found.
   */
function forecast(arr) {
  // Solution
  return arr.slice(2, 4);
}
console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);
