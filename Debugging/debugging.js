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
/////////////////////////////////////////////////////////////////////////////////////////

/** Sept 2 2024
 * @param {Catch Mixed Usage of Single and Double Quotes}
JavaScript allows the use of both single (') and double (") quotes to declare a string. Deciding which one to use generally comes down to personal preference, with some exceptions.

Having two choices is great when a string has contractions or another piece of text that's in quotes. Just be careful that you don't close the string too early, which causes a syntax error.

Here are some examples of mixing quotes:

const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
The first two are correct, but the third is incorrect.

Of course, it is okay to use only one style of quotes. You can escape the quotes inside the string by using the backslash (\) escape character:

const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
@param CHALLENGE
Fix the string so it either uses different quotes for the href value, or escape the existing ones. Keep the double quote marks around the entire string.
 */
// let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
// console.log(innerHtml);
//Solution
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);

/**
 * @param {Catch Use of Assignment Operator Instead of Equality Operator}
Branching programs, i.e. ones that do different things if certain conditions are met, rely on if, else if, and else statements in JavaScript. The condition sometimes takes the form of testing whether a result is equal to a value.

This logic is spoken (in English, at least) as "if x equals y, then ..." which can literally translate into code using the =, or assignment operator. This leads to unexpected control flow in your program.

As covered in previous challenges, the assignment operator (=) in JavaScript assigns a value to a variable name. And the == and === operators check for equality (the triple === tests for strict equality, meaning both value and type are the same).

The code below assigns x to be 2, which evaluates as true. Almost every value on its own in JavaScript evaluates to true, except what are known as the "falsy" values: false, 0, "" (an empty string), NaN, undefined, and null.

let x = 1;
let y = 2;
if (x = y) {

} else {

}
In this example, the code block within the if statement will run for any value of y, unless y is falsy. The else block, which we expect to run here, will not actually run.
@param CHALLENGE
Fix the condition so the program runs the right branch, and the appropriate value is assigned to result.
 */
let x = 7;
let y = 9;
let result = "to come";
//Solution
if(x == y) {  // double equal operator used
  result = "Equal!";
} else {
  result = "Not equal!";
}
console.log(result);

/**
 * @param {Catch Missing Open and Closing Parenthesis After a Function Call}
When a function or method doesn't take any arguments, you may forget to include the (empty) opening and closing parentheses when calling it. Often times the result of a function call is saved in a variable for other use in your code. This error can be detected by logging variable values (or their types) to the console and seeing that one is set to a function reference, instead of the expected value the function returns.

The variables in the following example are different:

function myFunction() {
  return "You rock!";
}
let varOne = myFunction;
let varTwo = myFunction();
Here varOne is the function myFunction, and varTwo is the string You rock!.
@param CHALLENGE
Fix the code so the variable result is set to the value returned from calling the function getNine.
 */

function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result32 = getNine(); // Add the perenthesis to correct the function
// Solution

console.log(result32);

/**
 * @param {Catch Arguments Passed in the Wrong Order When Calling a Function}
Continuing the discussion on calling functions, the next bug to watch out for is when a function's arguments are supplied in the incorrect order. If the arguments are different types, such as a function expecting an array and an integer, this will likely throw a runtime error. If the arguments are the same type (all integers, for example), then the logic of the code won't make sense. Make sure to supply all required arguments, in the proper order to avoid these issues.
@param CHALLENGE
The function raiseToPower raises a base to an exponent. Unfortunately, it's not called properly - fix the code so the value of power is the expected 8.
 */

function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
// let power = raiseToPower(exp, base);
let power = raiseToPower(base, exp); //Solution
console.log(power);

/**
 * @param {Catch Off By One Errors When Using Indexing}
Off by one errors (sometimes called OBOE) crop up when you're trying to target a specific index of a string or array (to slice or access a segment), or when looping over the indices of them. JavaScript indexing starts at zero, not one, which means the last index is always one less than the length of the item. If you try to access an index equal to the length, the program may throw an "index out of range" reference error or print undefined.

When you use string or array methods that take index ranges as arguments, it helps to read the documentation and understand if they are inclusive (the item at the given index is part of what's returned) or not. Here are some examples of off by one errors:

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
  console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
  console.log(alphabet[k]);
}
The first example here loops one too many times, and the second loops one too few times (missing the first index, 0). The third example is correct.
@param CHALLENGE
Fix the two indexing errors in the following function so all the numbers 1 through 5 are printed to the console.
 */
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 0; i < len; i++) { //start the count at 0 and used < symbol for the condition
  // Only change code above this line
    console.log(firstFive[i]);
  }
}
countToFive();