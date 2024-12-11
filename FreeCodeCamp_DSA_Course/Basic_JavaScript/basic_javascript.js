"use strict";
/** @param {Escaping Literal Quotes in Strings }

* Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:
*/
const msyStr = 'I am a "double quoted" string inside"double quotes".';
/**
* Change the provided string to a string with single quotes at the beginning and end and no escape characters.
Right now, the <a> tag in the string uses double quotes everywhere. You will need to change the outer quotes to single quotes so you can remove the escape characters.
*/

//solution
const myStr1 = '<a href="http://www.example.com" target="_blank">Link</a>';

/**
* @param Assign the following three lines of text into the single variable myStr using escape sequences.

FirstLine
   \SecondLine
ThirdLine
You will need to use escape sequences to insert special characters correctly. You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words.
@param Note: The indentation for SecondLine is achieved with the tab escape character, not spaces.
*/
//Solution
const escapeStr = "FirstLine\n\t\\SecondLine \n ThirdLine";
/** Nov 30 2044
 * @param {Concatenating Strings with Plus Operator}
 * Build myStr from the strings This is the start. and This is the end. using the + operator. Be sure to include a space between the two strings.
 */
let myString = "This is the start." + "This is the end.";
console.log(myString);

/**
 * Build myStr over several lines by concatenating these two strings: This is the first sentence. and This is the second sentence. using the += operator. Use the += operator
 */
//SOLUTION
let myStr2 = "This is the first sentence. ";
myStr2 += "This is the second sentence.";
console.log(myStr2);
/**
 * @param {Constructing Strings with Variables}
 *  Set myName to a string equal to your name and build myStr with myName between the strings My name is  and  and I am well!
 */
//SOLUTION
const myName = "Allen";
const myStr3 = "my name is " + myName + ", and I am well";
console.log(myStr3);
/**
 * @param {Appending Variables to Strings}
 * Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator.
 */
//SOLUTION
const someAdjective = "challenging but fun";
let myStr4 = "Learning to code is ";
myStr4 += someAdjective;

/**
 * @param {Find the Length of a String}
You can find the length of a String value by writing .length after the string variable or string literal.

Use the .length property to set lastNameLength to the number of characters in lastName.
 */
//SOLUTION
let lastNameLength = 0;
const lastName = "Lovelace";
// Only change code below this line
lastNameLength = lastName.length;

/**
 * @param Use Bracket Notation to Find the First Character in a String
 * Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.
 */
//SOLUTION
let firstLetterOfLastName = "";
const lastName2 = "Lovelace";
// Only change code below this line
firstLetterOfLastName = lastName2[0];
/**
 * @param {Understand String Immutability}
In JavaScript, String values are immutable, which means that they cannot be altered once created.
For example, the following code will produce an error because the letter B in the string Bob cannot be changed to the letter J:
let myStr = "Bob";
myStr[0] = "J";

Correct the assignment to myStr so it contains the string value of Hello World using the approach shown in the example above.
let myStr = "Jello World";
myStr[0] = "H"; // Change this line
 */
//SOLUTION
let myStr5 = "jello World;";
myStr5 = "Hello World";
console.log(myStr5);

/**Dec 1st 2024
 * @param {Use Bracket Notation to Find the Nth Character in a String}
You can also use bracket notation to get the character at other positions within a string.
@param CHALLENGE 
Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.
 */
const lastName3 = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName3[2];
console.log(thirdLetterOfLastName);
/**
 * @param {Use Bracket Notation to Find the Last Character in a String}
In order to get the last letter of a string, you can subtract one from the string's length.

For example, if const firstName = "Ada", you can get the value of the last letter of the string by using firstName[firstName.length - 1].
@param CHALLENGE
Use bracket notation to find the last character in the lastName variable.

 */
//SOLUTION
const lastName4 = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName4[lastName4.length - 1];
console.log(lastLetterOfLastName);

/**
 * @param {Use Bracket Notation to Find the Nth-to-Last Character in a String}
You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.

For example, you can get the value of the third-to-last letter of the const firstName = "Augusta" string by using firstName[firstName.length - 3]
@param CHALLENGE
Use bracket notation to find the second-to-last character in the lastName string.
 */
//SOLUTION
const lastName5 = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName5[lastName5.length - 2]; // Change this line
console.log(secondToLastLetterOfLastName);
/**
 * @param Word Blanks
You are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs. You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense.
@param CHALLENGE
 Use the string concatenation operator + to build a new string, using the provided variables: myNoun, myAdjective, myVerb, and myAdverb. You will then assign the formed string to the wordBlanks variable. You should not change the words assigned to the variables.
 */
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// SOLUTION
const wordBlanks =
  "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";
console.log(wordBlanks);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**DEC 2nd 2024
 *@param {Store Multiple Values in one Variable using JavaScript Arrays}
With JavaScript array variables, we can store several pieces of data in one place.

You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this:

const sandwich = ["peanut butter", "jelly", "bread"];
@param CHALLENGE
Modify the new array myArray so that it contains both a string and a number (in that order).
 */
//SOLUTION
const myArray = ["Allen", 30];

/**
 * @param {Nest one Array within Another Array}
You can also nest arrays within other arrays, like below:
const teams = [["Bulls", 23], ["White Sox", 45]];
This is also called a multi-dimensional array.
@param CHALLENGE
Create a nested array called myArray.
 */
//SOLUTION
const myArray2 = [["Air Jordan", 11], ["Bulls, 23"]];
console.log(myArray2);
/**
 * @param Access Array Data with Indexes
We can access the data inside arrays using indexes.

Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use zero-based indexing, so the first element in an array has an index of 0.
@param Example
const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
@param CHALLENGE
Create a variable called myData and set it to equal the first value of myArray using bracket notation.
 */
//SOLUTION
const myArray3 = [50, 60, 70];
const myData = myArray3[0];
console.log(myData);

/**
 * @param {Modify Array Data With Indexes}
Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.

@param Example
const ourArray = [50, 40, 30];
ourArray[0] = 15;
@param CHALLENGE
Modify the data stored at index 0 of myArray to a value of 45.
 */
//SOLUTION
const myArray4 = [18, 64, 99];
myArray4[0] = 45;
console.log(myArray4);

/**
 * @param {Access Multi-Dimensional Arrays With Indexes}
 *  One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array, the first set of brackets refers to the entries in the outermost (the first level) array, and each additional pair of brackets refers to the next level of entries inside.
 * const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];
const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];
 @param CHALLENGE
Using bracket notation select an element from myArray such that myData is equal to 8.
 */

const myArray5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
//SOLUTION
const myData2 = myArray5[2][1];
console.log(myData2);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**DEC 3 2024
 *@param {Manipulate Arrays With push Method}
An easy way to append data to the end of an array is via the push() method.

The push() method takes one or more arguments and appends them to the end of the array, in the order in which they appear. It returns the new length of the array.

Examples:
const arr1 = [1, 2, 3];
arr1.push(4, 5);

const arr2 = ["Simpson", "J", "cat"];
arr2.push(["happy", "joy"]);

 @param CHALLENGE
 Push ["dog", 3] onto the end of the myArray variable.
 */
const myArray6 = [
  ["John", 23],
  ["cat", 2],
];
//SOLUTION
myArray6.push(["dog", 3]);
console.log(myArray6);

/**
  * @param {Manipulate Arrays With pop Method}
Another way to change the data in an array is with the .pop() function.

.pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

Any type of entry can be popped off of an array - numbers, strings, even nested arrays.

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
 @param CHALLENGE
Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.
  */
//SOLUTION
const myArray7 = [
  ["John", 23],
  ["cat", 2],
];
const removedFromMyArray = myArray7.pop();
console.log(removedFromMyArray);

/**
 * @param {Manipulate Arrays With shift Method}
pop() always removes the last element of an array. What if you want to remove the first?

That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.

@param Example:
const ourArray = ["Simpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
 @param CHALLENGE
Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.
 */
//SOLUTION
const myArray8 = [
  ["John", 23],
  ["dog", 3],
];
const removedFromMyArray2 = myArray8.shift();
console.log(removedFromMyArray2);

/**
 * @param Manipulate Arrays With unshift Method
Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array.
.unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

@param Example:
const ourArray = ["Simpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
 @param CHALLENGE
Add ["Paul", 35] to the beginning of the myArray variable using unshift().
 */
const myArray9 = [
  ["John", 23],
  ["dog", 3],
];
myArray9.shift();
//SOLUTION
myArray9.unshift(["Paul", 35]);
console.log(myArray9);

/**
 * @param {Multi-Dimensional Shopping List Array}
Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.
The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.

@param Example: ["Chocolate Bar", 15]

 @param CHALLENGE
There should be at least 5 sub-arrays in the list.
 */
//SOLUTION
const myList = [
  ["Books", 2],
  ["Knee brace", 1],
  ["Gym shorts", 3],
  ["Protein Powder", 1],
  ["T-Shirts", 3],
];
console.log(myList);
/**
 * @param {Write Reusable JavaScript with Functions}
In JavaScript, we can divide up our code into reusable parts called functions.

Here's an example of a function:

function functionName() {
  console.log("Hello World");
}
 */
//SOLUTION
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();

/**
 * @param {Passing Values to Functions with Arguments}
Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.

Here is a function with two parameters, param1 and param2:

function testFun(param1, param2) {
  console.log(param1, param2);
  @param CHALLENGE
  Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
Call the function with two numbers as arguments.
}
 */
//SOLUTION
function functionWithArgs(sum1, sum2) {
  console.log(sum1 + sum2);
}
functionWithArgs(2, 3);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/** DEC 5 2024
 * @param {Return a Value from a Function with Return}
We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.

E@param Example
function plusThree(num) {
  return num + 3;
}
const answer = plusThree(5);
@param CHALLENGE
Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.
 */

//SOLUTION
function timesFive(multiply) {
  return multiply * 5;
}
console.log(timesFive(5));
/**
 * @param {Global Scope and Functions}
In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are declared without the let or const keywords are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with let or const.

@param CHALLENGE
Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.
Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.
 */

//SOLUTION
let myGlobal = 10;
function fun1() {
  // SOLUTION
  oopsGlobal = 5;
}

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

/**
 *@param {Local Scope and Functions}
Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.
Here is a function myTest with a local variable called loc.
function myTest() {
  const loc = "foo";
  console.log(loc);
}
myTest();
console.log(loc);
The myTest() function call will display the string foo in the console. The console.log(loc) line (outside of the myTest function) will throw an error, as loc is not defined outside of the function.
 */
function myLocalScope() {
  //Solution
  let myVar;
  console.log("inside myLocalScope", myVar); //output inside myLocalScope undefined
}
myLocalScope();
// console.log("outside myLocalScope", myVar); // ReferenceError: myVar is not defined

/**
 *@param  {Global vs. Local Scope in Functions}
It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

@param example:
const someVar = "Hat";
function myFun() {
  const someVar = "Head";
  return someVar;
}
  @param CHALLENGE
  Add a local variable to myOutfit function to override the value of outerWear with the string sweater.
 */
const outerWear = "T-Shirt";
function myOutfit() {
  const outerWear = "sweater";
  return outerWear;
}
myOutfit();
/**
 * @param {Understanding Undefined Value returned from a Function}
A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.

@param Example
let sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3);
@param CHALLENGE
Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.
 */
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  //SOLUTION
  sum += 5;
}
addThree();
console.log(addFive());
/**
 * @param {Assignment with a Returned Value}
If you'll recall from our discussion about Storing Values with the Assignment Operator, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.

Assume we have defined a function sum which adds two numbers together.
ourSum = sum(5, 12);
@param CHALLENGE
 Call the processArg function with an argument of 7 and assign its return value to the variable processed.
 */
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
//SOLUTION
processed = processArg(7);

/**DEC 9TH 2024
 * @param {Stand in Line}
In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.
@param CHALLENGE
Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
Add the number to the end of the array, then remove the first element of the array.
The nextInLine function should then return the element that was removed.
 */
function nextInLine(arr, item) {
  //SOLUTION
  arr.push(item);
  const removeItem = arr.shift();
  return removeItem;
}
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
/**
 * @param {Understanding Boolean Values}
Another data type is the Boolean. Booleans may only be one of two values: true or false. They are basically little on-off switches, where true is on and false is off. These two states are mutually exclusive.

Note: Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.
@param CHALLENGE
Modify the welcomeToBooleans function so that it returns true instead of false.
 */
function welcomeToBooleans() {
  // return false;
  return true; //Solution
}
/**
 * @param {Use Conditional Logic with If Statements}
if statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.
When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

Pseudocode

if (condition is true) {
  statement is executed
}
  @param CHALLENGE
  Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise.
 */
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    //Solution
    return "Yes, that was true";
  }
  //Solution
  return "No, that was false";
}
/**
   * 
   * @param {Comparison with the Equality Operator}
There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.
The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.

function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
  @param CHALLENGE
  Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.
   */
// Setup
function testEqual(val) {
  if (val == 12) {
    //<--Solution
    return "Equal";
  }
  return "Not Equal";
}
testEqual(10);
//////////////////////////////////////////////////////////////////////////////////////////////////////////
/** DEC 11 2024
 * @param {Comparison with the Strict Equality Operator}
Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

@param Examples
3 ===  3  // true
3 === '3' // false
In the second example, 3 is a Number type and '3' is a String type.
 @param CHALLENGE
Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7.
 */
function testStrict2(val2) {
  if (val2 === 7) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}
console.log(testStrict2(10));
/**
 * @param {Practice comparing different values}
In the last two challenges, we learned about the equality operator (==) and the strict equality operator (===). Let's do a quick review and practice using these operators some more.

If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.

@param Examples
3 == '3' returns true because JavaScript performs type conversion from string to number. 3 === '3' returns false because the types are different and type conversion is not performed.

Note: In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:
typeof 3
typeof '3'
 */
function compareEquality(a, b) {
  //Solution
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(compareEquality(10, "10"));
/**
 * @param {Comparison with the Inequality Operator}
The inequality operator (!=) is the opposite of the equality operator. Inequality means not equal. The inequality operator returns false when the equality operator would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

@param Examples
1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false
@param CHALLENGE
Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99.
 */ function testNotEqual(val3) {
  //Solution
  if (val3 != 99) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(10));
/**
 *@param  {Comparison with the Strict Inequality Operator}
The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. The strict inequality operator will not convert data types.

@param Examples

3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
@param CHALLENGE
Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17
 */
function testStrictNotEqual(val4) {
  //Solution
  if (val4 !== 17) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testStrictNotEqual(10));
/**
 *@param {Comparison with the Greater Than Operator}
The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, the greater than operator will convert data types of values while comparing.

Examples

5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false
@param CHALLENGE
Add the greater than operator to the indicated lines so that the return statements make sense.
 */
function testGreaterThan(val5) {
  // Solution
  if (val5 > 100) {
    return "Over 100";
  }
  // Solution
  if (val5 > 10) {
    return "Over 10";
  }

  return "10 or Under";
}

console.log(testGreaterThan(10));
/**
 * @param {Comparison with the Greater Than Or Equal To Operator}
The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, the greater than or equal to operator will convert data types while comparing.

Examples

6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false

@param CHALLENGE
Add the greater than or equal to operator to the indicated lines so that the return statements make sense.
 */
function testGreaterOrEqual(val) {
  //Solution
  if (val >= 20) {
    return "20 or Over";
  }
  //Solution
  if (val >= 10) {
    return "10 or Over";
  }

  return "Less than 10";
}

console.log(testGreaterOrEqual(10));

/** 
 * @param {Comparison with the Less Than Operator}
The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, the less than operator converts data types while comparing.

@param Examples

2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false
@param CHALLENGE
Add the less than operator to the indicated lines so that the return statements make sense.
*/
function testLessThan(val6) {
  //solution
  if (val6 < 25) {
    return "Under 25";
  }
  //solution
  if (val6 < 55) {
    return "Under 55";
  }

  return "55 or Over";
}
testLessThan(10);
/**
 * @param {Comparison with the Less Than Or Equal To Operator}
The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false. Like the equality operator, the less than or equal to operator converts data types.
@param Examples
4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false
@param CHALLENGE
Add the less than or equal to operator to the indicated lines so that the return statements make sense
 */
function testLessOrEqual(val7) {
  // Solution
  if (val7 <= 12) {
    return "Smaller Than or Equal to 12";
  }
  // Solution
  if (val7 <= 24) {
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}
console.log(testLessOrEqual(10));
