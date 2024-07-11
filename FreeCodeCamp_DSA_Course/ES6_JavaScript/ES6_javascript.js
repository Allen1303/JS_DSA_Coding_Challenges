"use strict";

/**
 * @param {Compare Scopes of the var and let Keywords}
 * var keyword, it is declared globally, or locally if declared inside a function.

The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.
Example
 * let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
Here the console will display the value 2, and an error that i is not defined.

i is not defined because it was not declared in the global scope. It is only declared within the for loop statement. printNumTwo() returned the correct value because three different i variables with unique values (0, 1, and 2) were created by the let keyword within the loop statement.

@param CHALLENGE
Fix the code below so that i declared in the if statement is a separate variable than i declared in the first line of the function. Be certain not to use the var keyword anywhere in your code.
 */
function checkScope() {
  if (true) {
    // solution
    let i = "block scope"; //add the let keyword
    console.log("Block scope i is: ", i);
  }
  //sloution
  let i = "function scope"; // use the let keyword
  console.log("Function scope i is: ", i);
  return i;
}
/////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Mutate an Array Declared with const}
   * 
   * The const declaration has many use cases in modern JavaScript.

Some d  evelopers prefer to assign all their variables using const by default, unless they know they will need to reassign the value. Only in that case, they use let.

However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.
@param CHALLENGE
The array below is declared as const numArray = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments.
   */
const numArray = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  numArray[0] = 2;
  numArray[1] = 5;
  numArray[2] = 7;
  // Only change code above this line
}
editInPlace();
////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @param {Prevent Object Mutation}
 * const declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent data mutation.

Any attempt at changing the object will be rejected, with an error thrown if the script is running in strict mode.
Syntax Example
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 
The obj.review and obj.newProp assignments will result in errors, because our editor runs in strict mode by default, and the console will display the value { name: "FreeCodeCamp", review: "Awesome" }.

@param CHALLENGE
In this challenge you are going to use Object.freeze to prevent mathematical constants from changing. You need to freeze the MATH_CONSTANTS object so that no one is able to alter the value of PI, add, or delete properties.
 */
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

////////////////////////////////////////////////////////////////////////////////////////////
/** 
  * @param  {Use Arrow Functions to Write Concise Anonymous Functions}
  * In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.
To achieve this, ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:

Example Syntax
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
  @param CHALLENGE
  Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function syntax. Also, make sure nothing is defined using the keyword var.

 */
//Solution
const magic = () => {
  return new Date();
};

////////////////////////////////////////////////////////////////////////////////////////////
/** July 10th 2024
 * @param {Write Arrow Functions with Parameters}
Just like a regular function, you can pass arguments into an arrow function.
Example Syntax
const doubler = (item) => item * 2;
doubler(4);
@param CHALLENGE
Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.
 */
// Solution
const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

/**
 * @param {Set Default Parameters for Your Functions}
In order to help us create more flexible functions, ES6 introduces default parameters for functions.

@param CHALLENGE
 Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.
 */
// Solution
const increment = (number, value = 1) => number + value;
console.log(increment());
console.log(increment(5, 2));
console.log(increment(5));

/**
 * @param {Use the Rest Parameter with Function Parameters}
In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.

@param CHALLENGE
Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.
 */
const sum = (...args) => {
  // const args = [x, y, z];
  //Solution
  let total = 0;
  for (let index = 0; index < args.length; index++) {
    total += args[index];
  }
  return total;
};
console.log(5, 10, 15);

/**
 * @param {Use the Spread Operator to Evaluate Arrays In-Place}
ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

The ES5 code below uses apply() to compute the maximum value in an array:
Example Syntax
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);

@param CHALLENGE
Copy all contents of arr1 into another array arr2 using the spread operator.
 */
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
//Solution
arr2 = [...arr1]; // Updated this line with the spread operator

console.log(arr2);
