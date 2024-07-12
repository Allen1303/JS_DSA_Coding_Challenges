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
////////////////////////////////////////////////////////////////////////////////////////////
/** July 11 2024
 * @param {Use Destructuring Assignment to Extract Values from Objects}
Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

Consider the following ES5 code:

const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
name would have a value of the string John Doe, and age would have the number 34.

Here's an equivalent assignment statement using the ES6 destructuring syntax:
Destructing Syntax
const { name, age } = user;

@param CHALLENGE
Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.
 */
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};
// Only change code below this line

// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;

const { today, tomorrow } = HIGH_TEMPERATURES;

/**
 * @param {Use Destructuring Assignment to Assign Variables from Objects}
Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value of the property.

 Example Syntax:

const user = { name: 'John Doe', age: 34 };
Here's how you can give new variable names in the assignment:

const { name: userName, age: userAge } = user;
@param CHALLENGE
Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.
 */
const hiTemperatures = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// Only change code below this line

// const highToday = HiTemperatues.today;
// const highTomorrow = HiTemperatues.tomorrow;

const { today: Temp1, tomorrow: Temp2 } = hiTemperatures;

/**
 * @param {Use Destructuring Assignment to Assign Variables from Nested Objects}
You can use the same principles from the previous two lessons to destructure values from nested objects.

Using an object similar to previous examples:

const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
Here's how to extract the values of object properties and assign them to variables with the same name:

const { johnDoe: { age, email }} = user;
And here's how you can assign an object properties' values to variables with different names:

const { johnDoe: { age: userAge, email: userEmail }} = user;
@param CHALLENGE
Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.
 */
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;
//Solution
const {
  today: { low: lowToday, high: hightToday },
} = LOCAL_FORECAST;

/**
   * @param {Use Destructuring Assignment to Assign Variables from Arrays}
ES6 makes destructuring arrays as easy as destructuring objects.

One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.

Destructuring an array lets us do exactly that:

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
The console will display the values of a and b as 1, 2.

Example 2
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
The console will display the values of a, b, and c as 1, 2, 5.

@param CHALLENGE
Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.
   */
let a = 8,
  b = 6;
//Solution
[a, b] = [b, a];

/**
 * @param {Destructuring via rest elements}
In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

The result is similar to Array.prototype.slice(), as shown below:
Example Syntax

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
The console would display the values 1, 2 and [3, 4, 5, 7].
@param CHALLENGE
Use a destructuring assignment with the rest syntax to emulate the behavior of Array.prototype.slice(). removeFirstTwo() should return a sub-array of the original array list with the first two elements omitted.
 */
function removeFirstTwo(list) {
  //SOLUTION
  const [, , ...newList] = list;
  return newList;
}
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
//////////////////////////////////////////////////////////////////////////////////////////