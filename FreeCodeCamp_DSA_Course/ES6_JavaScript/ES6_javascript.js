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
const magic = () => new Date();

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

/** July 12 2024
 * @param {Use Destructuring Assignment to Pass an Object as a Function's Parameters}
In some cases, you can destructure the object in a function argument itself.

Example  code below:

const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
This effectively destructures the object sent into the function. This can also be done in-place:

const profileUpdate = ({ name, age, nationality, location }) => {

}
When profileData is passed to the above function, the values are destructured from the function parameter for use within the function.
@param CHALLENGE
Use destructuring assignment within the argument to the function half to send only max and min inside the function.
 */

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

// Solution
const half = ({ max, min }) => (max + min) / 2.0;

/**
 *@param { Create Strings using Template Literals}
A new feature of ES6 is the template literal. This is a special type of string that makes creating complex strings easier.

Template literals allow you to create multi-line strings and to use string interpolation features to create strings.

Example code below:

const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);

@param CHALLENGE
Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.

Use an iterator method (any kind of loop) to get the desired output (shown below).
[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
 */
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for (let ii = 0; ii < arr.length; ii++) {
    const listItems = `<li class="text-warning">${arr[ii]}</li>`;
    failureItems.push(listItems);
  }

  return failureItems;
}

const failuresList = makeList(result.failure);

/**
 * @param {Write Concise Object Literal Declarations Using Object Property Shorthand}
ES6 adds some nice support for easily defining object literals.
getMousePosition is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply write x once, and it will be converted to x: x (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax:

without object Literal Syntax
 const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
Example with Object literals Syntax
const getMousePosition = (x, y) => ({ x, y });
@param CHALLENGE
Use object property shorthand with object literals to create and return an object with name, age and gender properties.
 */
const createPerson = (name, age, gender) => {
  // Only change code below this line
  // return {
  //   name: name,
  //   age: age,
  //   gender: gender
  // };
  //SOLUTION
  return { name, age, gender };
};

/**
 * @param {Write Concise Declarative Functions with ES6}
When defining functions within objects in ES5, we have to use the keyword function as follows:

const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
With ES6, you can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:
 */

const bicycle = {
  gear: 2,
  //SOLUTION
  setGear(newGear) {
    this.gear = newGear;
  },
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

/**
 * @param {Use class Syntax to Define a Constructor Function}
ES6 provides a new syntax to create objects, using the class keyword.

In ES5, an object can be created by defining a constructor function and using the new keyword to instantiate the object.

In ES6, a class declaration has a constructor method that is invoked with the new keyword. 
If the constructor method is not explicitly defined, then it is implicitly defined with no arguments.
@param CHALLENGE
Use the class keyword and write a constructor to create the Vegetable class.

The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor.
 */
class Vegetable {
  // SOLUTION
  constructor(name) {
    this.name = name;
  }
}
const carrot = new Vegetable("carrot");
console.log(carrot.name); // 'carrot'
//////////////////////////////////////////////////////////////////////////////////////////////////

/** July 18 2024
 * @param {Use getters and setters to Control Access to an Object}
You can obtain values from an object and set the value of a property within an object.

These are classically called getters and setters.

Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.

Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.

Example Syntax
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);

@param CHALLENGE
Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.

In the class, create a getter to obtain the temperature in Celsius and a setter that accepts a temperature in Celsius.

Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.

Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.
 */

// Solution
class Thermostat {
  constructor(fahrenheitTemp) {
    this.fahrenheitTemp = fahrenheitTemp;
  }
  /**
   * Gets the temperature in Celsius based on the Fahrenheit temperature.
   * @returns {number} The temperature in Celsius.
   */
  get temperature() {
    return (5 / 9) * (this._fahrenheitTemp - 32);
  }
  /**
   * Sets the temperature in Celsius and converts it to Fahrenheit.
   * @param {number} celsiusTemp - The temperature in Celsius.
   */
  set temperature(celsiusTemp) {
    this._fahrenheitTemp = (celsiusTemp * 9.0) / 5 + 32;
  }
}
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
///////////////////////////////////////////////////////////////////////////////////////////
/** July 31 2024
 * 
 * @param JavaScript evolved from a small role to a dominant web force. To manage this growth, ES6 introduced modules 
 * for code sharing. Export code from one file and import it where needed, using type="module" in your HTML script tag.
example Syntax
{<script type="module" src="filename.js"></script>}

 /* @param {Using the Export method in JavaScript}

Use export to Share a Code Block
Imagine a file called math_functions.js that contains several functions related to mathematical operations. 
One of them is stored in a variable, add, that takes in two numbers and returns their sum. You want to use this
 function in several different JavaScript files. In order to share it with these other files, you first need to export it.

Example Syntax
export const add = (x, y) => {x
  return x + y;
}
The above is a common way to export a single function, but you can achieve the same thing like this:

const add = (x, y) => {
  return x + y;
}
Example Syntax
export { add };
When you export a variable or function, you can import it in another file and use it without having to rewrite the code. 
We can export multiple things by repeating the first example for each thing you want to export, or by placing 
them all in the export statement of the second example, like this:

Example Syntax
export { add, subtract };

@param CHALLENGE
There are two string-related functions in the editor. Export both of them using the method of your choice.
 */
const uppercaseString = (string) => {
  return string.toUpperCase();
};

const lowercaseString = (string) => {
  return string.toLowerCase();
};
//Solution
export { uppercaseString, lowercaseString };

/**
 * @param {Reuse JavaScript Code Using import}
import allows you to choose which parts of a file or module to load. For example exported add from the math_functions.js file. Here's how you can import it to use in another file:


Example Syntax
import { add } from './math_functions.js';
Here, import will find add in math_functions.js, import just that function for you to use, and ignore the rest. The ./ tells the import to look for the math_functions.js file in the same folder as the current file. The relative file path (./) and file extension (.js) are required when using import in this way.

We can import more than one item from the file by adding them in the import statement like this:

Syntax example.
import { add, subtract } from './math_functions.js';

@param CHALLENGE
Add the appropriate import statement that will allow the current file to use the uppercaseString and lowercaseString functions you exported in the previous lesson. These functions are in a file called string_functions.js, which is in the same directory as the current file.
 */
//Solution Syntax
import { uppercaseString2, lowercaseString2 } from "./string_functions.js";
uppercaseString("hello");
lowercaseString("WORLD!");

/**
 *@param { Use * to Import Everything from a File }
Suppose you have a file and you wish to import all of its contents into the current file. This can be done with the import * as syntax. Here's an example where the contents of a file named math_functions.js are imported into a file in the same directory:

Syntax Example
import * as myMathModule from "./math_functions.js";
The above import statement will create an object called myMathModule. This is just a variable name, you can name it anything. The object will contain all of the exports from math_functions.js in it, so you can access the functions like you would any other object property. Here's how you can use the add and subtract functions that were imported:

myMathModule.add(2,3);
myMathModule.subtract(5,3);
@param CHALLENGE
The code in this file requires the contents of the file: string_functions.js, that is in the same directory as the current file. Use the import * as syntax to import everything from the file into an object called stringFunctions.
 */
//Solution
import * as stringFunctions from "./string_functions.js";
// Only change code above this line

stringFunctions.uppercaseString2("hello");
stringFunctions.lowercaseString2("WORLD!");

/** 
 *@param {Create an Export Fallback with export default}
In the export lesson,we learned about the syntax referred to as a named export. This allowed us to make multiple functions and variables available for use in other files.

There is another export syntax we need to know, known as export default. Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.

Syntax examples using export default:

export default function add(x, y) {
  return x + y;
}

export default function(x, y) {
  return x + y;
}
The first is a named function, and the second is an anonymous function.

Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with var, let, or const

@param TASK
The following function should be the fallback value for the module. Please add the necessary code to do so.

function subtract(x, y) {
  return x - y;
}
*/
//Solution
export default function subtract(x, y) {
  return x - y;
}
//////////////////////////////////////////////////////////////////////////////////////////////////
/** Aug 1, 2024
 * @param {Import a Default Export}
In the last challenge, you learned about export default and its uses. To import a default export, you need to use a different import syntax. In the following example, add is the default export of the math_functions.js file. Here is how to import it:

import add from "./math_functions.js";
The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({}). add here is simply a variable name for whatever the default export of the math_functions.js file is. You can use any name here when importing a default.

@param CHALLENGE
In the following code, import the default export from the math_functions.js file, found in the same directory as this file. Give the import the name subtract.
 */

//Solution and Syntax
import subtract1 from "./math_functions.js";
// Only change code above this line

subtract1(7, 4);

/**
 * @param {Create a JavaScript Promise}
A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise. The syntax looks like this:

const myPromise = new Promise((resolve, reject) => {

});
@param CHALLENGE
Create a new promise called makeServerRequest. Pass in a function with resolve and reject parameters to the constructor.
 */
//Solution and Syntax
const makeServerRequest = new Promise((resolve, reject) => {});

/**
 * @param {Complete a Promise with resolve and reject}
A promise has three states: pending, fulfilled, and rejected. The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise. The resolve and reject parameters given to the promise argument are used to do this. resolve is used when you want your promise to succeed, and reject is used when you want it to fail. These are methods that take an argument, as seen below.

Example Syntax
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
The example above uses strings for the argument of these functions, but it can really be anything. Often, it might be an object, that you would use data from, to put on your website or elsewhere.

Make the promise handle success and failure. If responseFromServer is true, call the resolve method to successfully complete the promise. Pass resolve a string with the value We got the data. If responseFromServer is false, use the reject method instead and pass it the string: Data not received.
 */
const ServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if (responseFromServer) {
    //Solution
    resolve("We got the data");
  } else {
    //Solution
    reject("Data not received");
  }
});
/**
 * @param { Handle a Fulfilled Promise with then}
Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the then method.

Promise.prototype.then(onFulfilled, onRejected)
The then method schedules callback functions for the eventual completion of a Promise - either fulfillment or rejection. One of the onFulfilled and onRejected handlers will be executed to handle the current promise's fulfillment or rejection. When the promise is fulfilled with resolve the onFulfilled handler is called.

myPromise.then(result => {
  
});
result comes from the argument given to the resolve method.

Add the then method to your promise. Use result as the parameter of its callback function and log result to the console.
 */
const makeServerRequest2 = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});
//Solution and Syntax.
makeServerRequest2.then((result) => {
  console.log(result);
});
///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param {Handle a Rejected Promise with catch}
catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. Here’s the syntax:

myPromise.catch(error => {
  
});
error is the argument passed in to the reject method.
@param CHALLENGE
Add the catch method to your promise. Use error as the parameter of its callback function and log error to the console.
 */
const makeServerRequest3 = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});
//Solution and Syntax.
makeServerRequest3.then((result) => {
  console.log(result);
});
//Solution
makeServerRequest.catch((error) => {
  console.log(error);
});
