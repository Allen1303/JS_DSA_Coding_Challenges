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
