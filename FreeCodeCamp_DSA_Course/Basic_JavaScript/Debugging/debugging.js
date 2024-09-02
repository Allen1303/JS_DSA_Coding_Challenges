"use strict";

/** Sept 1st 2024
 * @param {Use the JavaScript Console to Check the Value of a Variable}


The console.log() method, which "prints" the output of what's within its parentheses to the console, will likely be the most helpful debugging tool. Placing it at strategic points in your code can show you the intermediate values of variables. It's good practice to have an idea of what the output should be before looking at what it is. Having check points to see the status of your calculations throughout your code will help narrow down where the problem is.

Here's an example to print the string Hello world! to the console:

console.log('Hello world!');
@param CHALLENGE
Use the console.log() method to print the value of the variable a where noted in the code.
 */
let a = 5;
let b = 1;
a++;

let sumAB = a + b;
console.log(sumAB);
//Solution
console.log(a);

/**
 * @param {Understanding the Browser Console}
 *
 * After that, use console.log to log the output variable. View the two consoles to see the log. Finally, use console.clear after your log to clear the browser console. View the difference in the two consoles.
 */
let output =
  "Get this to show once in the freeCodeCamp console and not at all in the browser console";
// solution
console.log(output);
console.clear();

/**
 * @param {Use typeof to Check the Type of a Variable}
You can use typeof to check the data structure, or type, of a variable. This is useful in debugging when working with multiple data types. If you think you're adding two numbers, but one is actually a string, the results can be unexpected. Type errors can lurk in calculations or function calls. Be careful especially when you're accessing and working with external data in the form of a JavaScript Object Notation (JSON) object.

Here are some examples using typeof:

console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});
In order, the console will display the strings string, number, object, and object.

JavaScript recognizes seven primitive (immutable) data types: Boolean, Null, Undefined, Number, String, Symbol (new with ES6), and BigInt (new with ES2020), and one type for mutable items: Object. Note that in JavaScript, arrays are technically a type of object.
@param CHALLENGE
Add two console.log() statements to check the typeof each of the two variables seven and three in the code.
 */
let seven = 7;
let three = "3";
console.log(seven + three);
// Solution
console.log(typeof seven);
console.log(typeof three);

/**
 * @parma {Catch Misspelled Variable and Function Names}
The console.log() and typeof methods are the two primary ways to check intermediate values and types of program output. Now it's time to get into the common forms that bugs take. One syntax-level issue that fast typers can commiserate with is the humble spelling error.

Transposed, missing, or miscapitalized characters in a variable or function name will have the browser looking for an object that doesn't exist - and complain in the form of a reference error. JavaScript variable and function names are case-sensitive.
@param CHALLENGE
Fix the two spelling errors in the code so the netWorkingCapital calculation works.
 */

let receivables = 10;
let payables = 8;
// let netWorkingCapital = recievables - payable;
// Solution
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

/**
 * @param {Catch Unclosed Parentheses, Brackets, Braces and Quotes}
Another syntax error to be aware of is that all opening parentheses, brackets, curly braces, and quotes have a closing pair. Forgetting a piece tends to happen when you're editing existing code and inserting items with one of the pair types. Also, take care when nesting code blocks into others, such as adding a callback function as an argument to a method.

One way to avoid this mistake is as soon as the opening character is typed, immediately include the closing match, then move the cursor back between them and continue coding. Fortunately, most modern code editors generate the second half of the pair automatically.

@param CHALLENGE
Fix the two pair errors in the code.
 */
// let myArray = [1, 2, 3;
// Solution
let myArray = [1, 2, 3];

// let arraySum = myArray.reduce((previous, current =>  previous + current);

// Soluiton
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);
