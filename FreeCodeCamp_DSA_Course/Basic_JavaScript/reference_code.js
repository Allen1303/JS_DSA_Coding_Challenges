"use strict";

/** Sept 4th 2024
* @param {Basic Data Structures}
Learn the nuances of arrays and objects in JavaScript. Discover when to use each and how to efficiently manipulate data with methods like splice() and Object.keys().

Write a function createHelloWorld. It should return a new function that always returns "Hello World".
*/
/**
 * @param {return Function}
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
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
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
trueOrFalse(true);
////////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Comparison with the Equality Operator}
  There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.
  
  The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.
  @param CHALLENGE
  Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.
  testEqual(10) should return the string Not Equal, testEqual(12) should return the string Equal, testEqual("12") should return the string Equal
  You should use the == operator
   */
function testEqual(val) {
  // SOLUTION
  if (val == 12 && val == "12") {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(12);
////////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Comparison with the Strict Equality Operator}
  Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.
  
  If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.
  @param CHALLENGE
  Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7.
   */
const testStrict = (val) => {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
};
testStrict(7);
////////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Comparison with the Inequality Operator}
  The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.
  @param CHALLENGE
  Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99.
   */
function testNotEqual(val) {
  if (val != 99) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
//////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param Comparison with the Strict Inequality Operator
  The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. The strict inequality operator will not convert data types.
  @param CHALLENGE
  Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17
   */
const strictInequality = (param) => {
  if (param !== 17) {
    return "Not Equal";
  }
  return "Equal";
};
strictInequality("17");
//////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param Comparison with the Greater Than Operator
   * The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.
  Like the equality operator, the greater than operator will convert data types of values while comparing.
  
  @param CHALLENGE
  Add the greater than operator to the indicated lines so that the return statements make sense.
   */
function testGreaterThan(val) {
  //SOLUTION
  if (val > 100) {
    return "Over 100";
  }
  //SOLUTION
  if (val > 10) {
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(15);
//////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Comparison with the Greater Than Or Equal To Operator}
   * The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.
  
  Like the equality operator, the greater than or equal to operator will convert data types while comparing.
  @param CHALLENGE
  Add the greater than or equal to operator to the indicated lines so that the return statements make sense.
   */
function testGreaterOrEqual(val) {
  //SOLUTION
  if (val >= 20) {
    return "20 or Over";
  }

  //SOLUTION
  if (val >= 10) {
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(15);
/////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Comparison with the Less Than Operator}
   * The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, the less than operator converts data types while comparing.
  @param CHALLENGE
  Add the less than operator to the if condtions so that the return statements make sense.
   */
function testLessThan(val) {
  // Solution
  if (val < 25) {
    return "Under 25";
  }
  // Solution
  if (val < 55) {
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
/////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Comparison with the Less Than Or Equal To Operator}
  The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false. Like the equality operator, the less than or equal to operator converts data types.
  @param CHSLLENGE
  Add the less than or equal to operator to the indicated lines so that the return statements make sense.
   */
function testLessOrEqual(val) {
  // Solution
  if (val <= 12) {
    return "Smaller Than or Equal to 12";
  }
  // Solution
  if (val <= 24) {
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

/**
   * @param {Logical and Operator (&&)}
   * Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.
  
  The same effect could be achieved by nesting an if statement inside another if.
  @param CHALLENGE 
  Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.
  
  function testLogicalAnd(val) {
    // Only change code below this line
    if (val) {
      if (val) {
        return "Yes";
      }
    }
    // Only change code above this line
    return "No";
  }
  testLogicalAnd(10);
   */
//SOLUTION
const testLogicalAnd = (val) => {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
};
testGreaterOrEqual(10);
/////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {omparisons with the Logical Or Operator}
  The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.
  
  The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.
  @param CHALLENGE
  Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.
  
  function testLogicalOr(val) {
    // Only change code below this line
  
    if (val) {
      return "Outside";
    }
  
    if (val) {
      return "Outside";
    }
  
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);
   */
//SOLUTION
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}
testLogicalOr(15);
/////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Introducing Else Statements}
  When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.
  @param CHALLENGE
  Combine the if statements into a single if/else statement.
  
  Pseudocode
  function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    }
  
    if (val <= 5) {
      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
  testElse(4);
   */
//SOLUTION
function testElse(val) {
  let result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}
testElse(4);
/////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Introducing Else If Statements}
  If you have multiple conditions that need to be addressed, we can chain if statements together with else if statements.
  @param CHALLENGE
  Convert the logic to use else if statements.
  PseudoCode
  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
    if (val < 5) {
      return "Smaller than 5";
    }
  
    return "Between 5 and 10";
  }
  
  testElseIf(7);
   */
//SOLUTION
const testElseIf = (val) => {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
};
testElseIf(7);
/////////////////////////////////////////////////////////////////////////////////////////

/**
   * @param {Logical Order in If Else Statements}
   * Order is important in if, else if statements.
  The function is executed from top to bottom so you will want to be careful of what statement comes first.
  @param CHALLENGE
  Change the order of logic in the function so that it will return the correct statements in all cases.
  function orderMyLogic(val) {
    if (val < 10) {
      return "Less than 10";
    } else if (val < 5) {
      return "Less than 5";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(7);
   */

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

/**
   * @param {Chaining If Else Statements}
   * if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained if / else if statements:
   * @param CHALLENGE
   * Write chained if/else if statements to fulfill the following conditions:
  num < 5 - return Tiny
  num < 10 - return Small
  num < 15 - return Medium
  num < 20 - return Large
  num >= 20 - return Huge
   */
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
  } else {
    return "Change me";
  }
}
testSize(7);
/////////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param { Golf Code}
  In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.
  @param CHALLENGE
  Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):
  
  Strokes	 Return
  1	        "Hole-in-one!"
  <= par - 2	"Eagle"
  par - 1	   "Birdie"
  par	       "Par"
  par + 1	   "Bogey"
  par + 2	  "Double Bogey"
  >= par + 3	"Go Home!"
  par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.
   */
const golfNames = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];
const golfScores = (par, strokes) => {
  if (strokes === 1) {
    return golfNames[0];
  } else if (strokes <= par - 2) {
    return golfNames[1];
  } else if (strokes === par - 1) {
    return golfNames[2];
  } else if (strokes === par) {
    return golfNames[3];
  } else if (strokes === par + 1) {
    return golfNames[4];
  } else if (strokes === par + 2) {
    return golfNames[5];
  } else if (strokes >= par + 3) {
    return golfNames[6];
  }
};
golfScores(5, 4);

///////////////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Selecting from Many Options with Switch Statements}
   * If you need to match one value against many options, you can use a switch statement. A switch statement compares the value to the case statements which define various possible values. Any valid JavaScript statements can be executed inside a case block and will run from the first matched case value until a break is encountered.
   * EXAMPLE SWITCH STATEMENT SYNTAX
   * switch (fruit) {
    case "apple":
      console.log("The fruit is an apple");
      break;
    case "orange":
      console.log("The fruit is an orange");
      break;
  }
   * @param CHALLENGE
   * Write a switch statement which tests val and sets answer for the following conditions:
   * 1 - alpha
  2 - beta
  3 - gamma
  4 - delta
   */
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";

      break;
    case 2:
      answer = "beta";

      break;
    case 3:
      answer = "gamma";

      break;
    case 4:
      answer = "delta";

      break;
  }

  return answer;

  // Only change code above this line
}

caseInSwitch(1);
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Adding a Default Option in Switch Statements}
  
   * In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.
  @param CHALLENGE
  Write a switch statement to set answer for the following conditions:
  a - apple
  b - bird
  c - cat
  default - stuff
   */
function switchOfStuff(val) {
  let answer = "";
  // SOLUTION
  switch (val) {
    case "a":
      answer = "apple";

      break;
    case "b":
      answer = "bird";

      break;
    case "c":
      answer = "cat";

      break;

    default:
      answer = "stuff";
  }
  return answer;
}

switchOfStuff(1);
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param Multiple Identical Options in Switch Statements
   * If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:
   * example syntax
   * let result = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      result = "1, 2, or 3";
      break;
    case 4:
      result = "4 alone";
  }
      @param CHALLENGE
      Write a switch statement to set answer for the following ranges:
  1-3 - Low
  4-6 - Mid
  7-9 - High
  
  Note: You will need to have a case statement for each number in the range.
   */
function sequentialSizes(val) {
  let answer = "";
  // SOLUTION
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
    default:
  }
  return answer;
}

sequentialSizes(1);
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Replacing If Else Chains with Switch}
  If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. The following:
  @param CHALLENGE
  Change the chained if/else if statements into a switch statement.
  example syntax
  function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
  
    if (val === "bob") {
      answer = "Marley";
    } else if (val === 42) {
      answer = "The Answer";
    } else if (val === 1) {
      answer = "There is no #1";
    } else if (val === 99) {
      answer = "Missed me by this much!";
    } else if (val === 7) {
      answer = "Ate Nine";
    }
  
    // Only change code above this line
    return answer;
  }
  chainToSwitch(7);
   */
function chainToSwitch(val) {
  let answer = "";
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
  }
  return answer;
}
chainToSwitch(7);
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Returning Boolean Values from Functions}
  You may recall from Comparison with the Equality Operator that all comparison operators return a boolean true or false value.
  Sometimes people use an if/else statement to do a comparison, like this:
  @param CHALLENGE
  Fix the function isLess to remove the if/else statements. 
  Current Syntax
  function isLess(a, b) {
    // Only change code below this line
    if (a < b) {
      return true;
    } else {
      return false;
    }
    // Only change code above this line
  }
  isLess(10, 15);
   */
//SOLUTION
function isLess(a, b) {
  return a <= b;
}
isLess(10, 15);
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Return Early Pattern for Functions}
  When a return statement is reached, the execution of the current function stops and control returns to the calling location.
  @param CHALLENGE
  Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.
   */
function abTest(a, b) {
  //Solution
  if (a < 0 || b < 0) {
    return undefined;
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Counting Cards}
   * 
   * @param CHALLENGE
  You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.
  Count  Change	Cards
  +1	  2, 3, 4, 5, 6
  0	   7, 8, 9
  -1	10, 'J', 'Q', 'K', 'A'
  
  Example Outputs: -3 Hold or 5 Bet
   */
let count = 0;
const cardCounter = (card) => {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  let playerChoice = count > 0 ? "Bet" : "Hold";
  return count + " " + playerChoice;
};
cardCounter(2);
cardCounter(3);
cardCounter(7);
cardCounter("K");
cardCounter("A");
////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @param Alternative Solution
 */
let counter = 0;
function cardCounter2(card) {
  const positveCards = [2, 3, 4, 5, 6];
  const neutralCards = [7, 8, 9];
  const negativeCards = [10, "J", "Q", "K", "A"];
  if (positveCards.includes(card)) {
    count++;
  } else if (negativeCards.includes(card)) {
    counter--;
  }
  let cardChoice = counter > 0 ? "Bet" : "Hold";
  return counter + " " + cardChoice;
}
cardCounter2(2);
cardCounter2(3);
cardCounter2(7);
cardCounter2("K");
cardCounter2("A");
////////////////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Build JavaScript Objects}
  You may have heard the term object before.
  Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.
  Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.
  *@param {Make an object}
   that represents a dog called myDog which contains the properties name (a string), legs, tails and friends.You can set these object properties to whatever values you want, as long as name is a string, legs and tails are numbers, and friends is an array.
   */
const myDog = {
  name: "Rover",
  legs: 4,
  tails: 1,
  friends: ["Dixie", "Sparky", "Spots"],
};
////////////////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Accessing Object Properties with Dot Notation}
  There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.
  Dot notation is what you use when you know the name of the property you're trying to access ahead of time.
  Example Syntax
  const myObj = {
    prop1: "val1",
    prop2: "val2"
  };
  const prop1val = myObj.prop1;
  const prop2val = myObj.prop2;
  
  @param CHALLENGE
  Read in the property values of testObj using dot notation. Set the variable hatValue equal to the object's property hat and set the variable shirtValue equal to the object's property shirt.
   */
const testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};

// Solution
const hatValue = testObj.hat;
const shirtValue = testObj.shirt;
////////////////////////////////////////////////////////////////////////////////////////////////////
/**
   *@param Accessing Object Properties with Bracket Notation
  The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.
  However, you can still use bracket notation on object properties without spaces.
  Here is a sample of using bracket notation to read an object's property:
  Example Syntax
  const myObj = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
  };
  myObj["Space Name"];
  myObj['More Space'];
  myObj["NoSpace"];
  *@param CHALLENGE
  Read the values of the properties an entree and the drink of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.
   */
const testObj2 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};

// SOLUTION
const entreeValue = testObj2["an entree"];
const drinkValue = testObj2["the drink"];
////////////////////////////////////////////////////////////////////////////////////////////////////
/** Date: June 15 2024
   *@param {Accessing Object Properties with Variables}
  Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.
  EXAMPLE 
  const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
  };
  const myDog = "Hunter";
  const myBreed = dogs[myDog];
  console.log(myBreed);
  
  @param CHALLENGE
  Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.
   */
// Setup
const testObj3 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};
// SOLUTION
const playerNumber = 16; // Change this line
const player = testObj3[playerNumber];
////////////////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Updating Object Properties}
  After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update.
  @param CHALLENGE
  Update the myDog object's name property. Let's change her name from Coder to Happy Coder. You can use either dot or bracket notation.
   */
// Setup
const myDog1 = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};
//Solution using dot notation
myDog1.name = "Happy coder";
// Solution using the bracket notation
myDog1["name"] = "Happy coder";

/**
   * @param {Add New Properties to a JavaScript Object}
  You can add new properties to existing JavaScript objects the same way you would modify them.
  @param CHALLENGE
  Add a bark property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation.
   */
//SOLUTION
// Setup
const myDog2 = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};
//dot notation
myDog2.bark = "Woof";
// bracket notation
myDog2["bark"] = "WOOF";
////////////////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param Delete Properties from a JavaScript Object
   * example code
   * const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
  };
  delete ourDog.bark;
  @param CHALLENGE
  Delete the tails property from myDog. You may use either dot or bracket notation.
   */
const myDog3 = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "woof",
};
// Dot notation method
delete myDog3.tails;
// Bracket notation method
delete myDog3["tails"];
console.log(myDog3);
////////////////////////////////////////////////////////////////////////////////////////////////////
/**
   *@param {Using Objects for Lookups}
  Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.
  Exmaple code
  const article = {
    "title": "How to create objects in JavaScript",
    "link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
    "author": "Kaashan Hussain",
    "language": "JavaScript",
    "tags": "TECHNOLOGY",
    "createdAt": "NOVEMBER 28, 2018"
  };
  const articleAuthor = article["author"];
  const articleLink = article["link"];
  const value = "title";
  const valueLookup = article[value];
  @param CHALLENGE
  Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.
  function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    switch(val) {
      case "alpha":
        result = "Adams";
        break;
      case "bravo":
        result = "Boston";
        break;
      case "charlie":
        result = "Chicago";
        break;
      case "delta":
        result = "Denver";
        break;
      case "echo":
        result = "Easy";
        break;
      case "foxtrot":
        result = "Frank";
    }
  
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");
   */
function phoneticLookup(val) {
  let result = "";
  //Solution
  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  result = lookup[val];
  return result;
}
phoneticLookup("charlie");
////////////////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Testing Objects for Properties}
  To check if a property on a given object exists or not, you can use the .hasOwnProperty() method. someObject.hasOwnProperty(someProperty) returns true or false depending on if the property is found on the object or not.
  Example Syntax
  function checkForProperty(object, property) {
    return object.hasOwnProperty(property);
  }
  checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
  checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false
  @param CHALLENGE
  Modify the function checkObj to test if the object passed to the function parameter obj contains the specific property passed to the function parameter checkProp. If the property passed to checkProp is found on obj, return that property's value. If not, return Not Found.
   */
function checkObj(obj, checkProp) {
  //SOLUTION
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Manipulating Complex Objects}
  Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.
  @param {Example Syntax}
  const ourMusic = [
    {
      "artist": "Daft Punk",
      "title": "Homework",
      "release_year": 1997,
      "formats": [ 
        "CD", 
        "Cassette", 
        "LP"
      ],
      "gold": true
    }
  ];
  @param CHALLENGE
  Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.
   */
const myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
  {
    artist: "Buna Boy",
    title: "last last",
    ["release year"]: 2023,
    formats: ["CD", "Digital", "LP"],
  },
];
////////////////////////////////////////////////////////////////////////////////////////////////////
/**
   * Date: June 17, 2024
   *@param { Accessing Nested Objects}
  The sub-properties of objects can be accessed by chaining together the dot or bracket notation.
   * example syntax
  const ourStorage = {
    "desk": {
      "drawer": "stapler"
    },
    "cabinet": {
      "top drawer": { 
        "folder1": "a file",
        "folder2": "secrets"
      },
      "bottom drawer": "soda"
    }
  };
  ourStorage.cabinet["top drawer"].folder2;
  ourStorage.desk.drawer;
  @param CHALLENGE
  Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.
   */
const myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};
//SOLUTION
const gloveBoxContents = myStorage.car.inside["glove box"];
////////////////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Accessing Nested Arrays}
  As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, array bracket notation can be chained to access nested arrays.
  
  Here is an example of how to access a nested array:
  
  const ourPets = [
    {
      animalType: "cat",
      names: [
        "Meowzer",
        "Fluffy",
        "Kit-Cat"
      ]
    },
    {
      animalType: "dog",
      names: [
        "Spot",
        "Bowser",
        "Frankie"
      ]
    }
  ];
  
  ourPets[0].names[1];
  ourPets[1].names[0];
  ourPets[0].names[1] would be the string Fluffy, and ourPets[1].names[0] would be the string Spot.
  @param CHALLENGE
  Using dot and bracket notation, set the variable secondTree to the second element in the list array from the second object in the myPlants array.
  
   */
const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];
//Solution
const secondTree = myPlants[1].list[1];
/////////////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Record Collection}
  You are creating a function that aids in the maintenance of a musical album collection. The collection is organized as an object that contains multiple albums which are also objects. Each album is represented in the collection with a unique id as the property name. Within each album object, there are various properties describing information about the album. Not all albums have complete information.
  
  The updateRecords function takes 4 arguments represented by the following function parameters:
  
  records - an object containing several individual albums
  id - a number representing a specific album in the records object
  prop - a string representing the name of the album’s property to update
  value - a string containing the information used to update the album’s property
  
  @param CHALLENGE
  Complete the function using the rules below to modify the object passed to the function.
  
  Your function must always return the entire records object.
  If value is an empty string, delete the given prop property from the album.
  If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
  If prop is tracks and value isn't an empty string, but the album doesn't have a tracks property, create an empty array and add value to it.
  If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
  Note: A copy of the recordCollection object is used for the tests. You should not directly modify the recordCollection object.
  
   */
// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  //If value is an empty string, delete the given prop property from the album.
  if (value === "") {
    delete records[id][prop];
    //If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
  } else if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
    //If prop is tracks and value isn't an empty string, but the album doesn't have a tracks create an empty array and add value to it.
  } else if (prop === "tracks" && value !== "") {
    if (!records[id].hasOwnProperty("tracks")) {
      records[id]["tracks"] = [];
    }
    //  If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
    records[id]["tracks"].push(value);
  }

  return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");
/////////////////////////////////////////////////////////////////////////////////////////////////
/** June 20 2024 Challenges
   * @param {Iterate with JavaScript While Loops}
  You can run the same code multiple times by using a loop.
  
  The first type of loop we will learn is called a while loop because it runs while a specified condition is true and stops once that condition is no longer true.
  Example Syntax
  const ourArray = [];
  let i = 0;
  
  while (i < 5) {
    ourArray.push(i);
    i++;
  }
  In the code example above, the while loop will execute 5 times and append the numbers 0 through 4 to ourArray.
  @param CHALLENGE
   Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.
   */
const myArray1 = [];
// Solution
let i = 5;

while (i >= 0) {
  myArray1.push(i);
  i--;
}
console.log(myArray1);
/////////////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Iterate with JavaScript For Loops}
  
  Use a for loop to run a block of code multiple times.
  It has 3 parts (separated by semicolons):
  Setup (runs once): Initialize a loop counter variable (e.g., i = 0).
  Condition (checks each time): Loop continues as long as this condition is true (e.g., i < 5).
  Update (runs after each loop): Do something after each loop (e.g., i++ to increment the counter).
  Example Syntax
  const ourArray = [];
  
  for (let i = 0; i < 5; i++) {
    ourArray.push(i);
  }
    @param CHALLENGE
    Use a for loop to push the values 1 through 5 onto myArray.
   */

const myArr = [];
//SOLUTION
for (let i = 1; i < 6; i++) {
  myArr.push(i);
}
console.log(myArr);
/////////////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Iterate Odd Numbers With a For Loop}
  For loops don't have to iterate one at a time. By changing our final-expression, we can count by even numbers.
  Example Syntax
  const ourArray = [];
  
  for (let i = 0; i < 10; i += 2) {
    ourArray.push(i);
  }
    @param CHALLENGE
    Push the odd numbers from 1 through 9 to myArray using a for loop.
   */
const myArray9 = [];

for (let i = 1; i < 10; i += 2) {
  myArray9.push(i);
}
console.log(myArray9);
/////////////////////////////////////////////////////////////////////////////////////////////////
/**
     * Count Backwards With a For Loop
  A for loop can also count backwards, so long as we can define the right conditions.
  
  In order to decrement by two each iteration, we'll need to change our initialization, condition, and final expression.
  
  We'll start at i = 10 and loop while i > 0. We'll decrement i by 2 each loop with i -= 2.
  Example Syntax
  const ourArray = [];
  
  for (let i = 10; i > 0; i -= 2) {
    ourArray.push(i);
  }
  @param CHALLENGE
  Push the odd numbers from 9 through 1 to myArray using a for loop.
     */
const myArray10 = [];
//SOLUTION
for (let i = 9; i > 0; i -= 2) {
  myArray10.push(i);
}
console.log(myArray10);
/////////////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Iterate Through an Array with a For Loop}
  A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop. This code will output each element of the array arr to the console:
  
  Example Syntax
  const arr = [10, 9, 8, 7, 6];
  for (let i = 0; i < arr.length; i++) {
     console.log(arr[i]);
  }
     @param CHALLENGE
     Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.
   */
const myArr1 = [2, 3, 4, 5, 6];
//SOLUTION
let total = 0;
for (let i = 0; i < myArr1.length; i++) {
  total += myArr1[i];
}
/////////////////////////////////////////////////////////////////////////////////////////////////
/** June 21 2024 DSA Challenges
   * @param {Nesting For Loops}
   * 
  If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:
  const arr = [
    [1, 2], [3, 4], [5, 6]
  ];
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }
    This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array.
    @param CHALLENGE
    Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.
   */
function multiplyAll(arr) {
  let product = 1;
  //SOLUTION
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
/////////////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Iterate with JavaScript Do...While Loops}
  The next type of loop you will learn is called a do...while loop. It is called a do...while loop because it will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true.
  Example Syntax
  const ourArray = [];
  let i = 0;
  
  do {
    ourArray.push(i);
    i++;
  } while (i < 5);
  The example above behaves similar to other types of loops, and the resulting array will look like [0, 1, 2, 3, 4]. However, what makes the do...while different from other loops is how it behaves when the condition fails on the first check. Let's see this in action. Here is a regular while loop that will run the code in the loop as long as i < 5:
  @param CHALLENGE
  Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, and i will be equal to 11 when your code has finished running.
   */
const myArray11 = [];
let dw = 10;

// Only change code below this line
do {
  myArray11.push(dw);
  dw++;
} while (dw < 5);
/////////////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Replace Loops using Recursion}
  Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this:
  
  Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.
  Example Syntax
    function multiply(arr, n) {
      if (n <= 0) {
        return 1;
      } else {
        return multiply(arr, n - 1) * arr[n - 1];
      }
    }
  Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.
   */
function sum1(arr, n) {
  if (n == 0) {
    return 0;
  } else {
    return sum1(arr, n - 1) + arr[n - 1];
  }
}
/* Base Case: When n is 0, the function returns 0. This is because the sum of the first 0 elements is 0.
  Recursive Case: When n is not 0, the function calls itself with n - 1 and adds the (n-1)th element of the array to the result of the recursive call. This effectively sums the first n-1 elements and then adds the nth element.*/

///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * /**
 * @param {Profile Lookup}
 * June 25, 2024
 *
 * CHALLENGE:
 * We have an array of objects representing different people in our contacts list.
 * A lookUpProfile function that takes a name and a property (prop) as arguments has been pre-written for you.
 * The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
 * If both are true, then return the "value" of that property.
 * If name does not correspond to any contacts then return the string "No such contact."
 * If prop does not correspond to any valid properties of a contact found to match name then return the string "No such property."
 */

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

// Solution
function lookUpProfile(name, prop) {
  // Iterate through the contacts array
  for (let i = 0; i < contacts.length; i++) {
    // Check if the current contact's firstName matches the provided name
    if (contacts[i].firstName === name) {
      // If the property (prop) exists in the contact, return its value
      // Otherwise, return "No such property"
      return contacts[i][prop] || "No such property";
      // Tennary alternative solution
      // return contacts[i][prop] ? contacts[i][prop] : "No such property";
    }
  }
  // If no contact matches the provided name, return "No such contact"
  return "No such contact";
}

// Testing the function
lookUpProfile("Akira", "likes"); // Should return ["Pizza", "Coding", "Brownie Points"]
///////////////////////////////////////////////////////////////////////////////////////////////////
/** June 26 2024
   * @param {Generate Random Fractions with JavaScript}
  Random numbers are useful for creating random behavior.
  
  JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and 1 (exclusive). Thus Math.random() can return a 0 but never return a 1.
  @param CHALLENGE
  Change randomFraction to return a random number instead of returning 0.
   */
const randomNumber = () => {
  //solution
  return Math.random();
};
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Generate Random Whole Numbers with JavaScript}
  You can generate random decimal numbers with Math.random(), but sometimes you need to generate random whole numbers. The following process will give you a random whole number less than 20:
  
  Use Math.random() to generate a random decimal number.
  Multiply that random decimal number by 20.
  Use Math.floor() to round this number down to its nearest whole number.
  Remember that Math.random() can never quite return a 1, so it's impossible to actually get 20 since you are rounding down with Math.floor(). This process will give you a random whole number in the range from 0 to 19.
  
  Putting everything together, this is what your code looks like:
  
  @param { Math.floor(Math.random() * 20) }
  We  are calling Math.random(), multiplying the result by 20, then passing the value to Math.floor() to round the value down to the nearest whole number.
  
  @param CHALLENGE
  Use this technique to generate and return a random whole number in the range from 0 to 9.
   */
function randomWholeNum() {
  //Solution
  return Math.floor(Math.random() * 10);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/** June 28 2024
   * @param {Generate Random Whole Numbers within a Range}
  You can generate a random whole number in the range from zero to a given number. You can also pick a different lower number for this range.
  
  You'll call your minimum number min and your maximum number max.
  
  This formula gives a random whole number in the range from min to max. Take a moment to read it and try to understand what this code is doing:
  Example Syntax
  Math.floor(Math.random() * (max - min + 1)) + min
  @param CHALLENGE
  Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin and less than or equal to myMax.
   */

function randomRange(myMin, myMax) {
  /*Getting a random decimal between 0 and 1.
  Multiplying it by the range (difference between max and min) and adding 1 to include max.
  Rounding the result down to the nearest whole number.*/
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

randomRange(5, 15);
////////////////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Use the parseInt Function}
  The parseInt() function parses a string and returns an integer. Here's an example:
  Example Syntax:
  const a = parseInt("007");
  
  The above function converts the string 007 to the integer 7. If the first character in the string can't be converted into a number, then it returns NaN.
  @param CHALLENGE
  Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.
   */
const convertToInteger = (str) => {
  //Solution
  return parseInt(str);
};
convertToInteger("75");
///////////////////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Use the parseInt Function with a Radix}
  The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.
  The function call looks like:
  Example Syntax
  parseInt(string, radix);
  And here's an example:
  const a = parseInt("11", 2);
  The radix variable says that 11 is in the binary system, or base 2. This example converts the string 11 to an integer 3.
  @param CHALLENGE
  Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.
   */
const radixConverter = (str) => {
  return parseInt(str, 2);
};
// In binary representation, each digit's position to the left signifies a power of 2. The rightmost digit (1 in this case) represents 2^0 (1), the next position (0) represents 2^1 (2), and so on
radixConverter("10011");
/////////////////////////////////////////////////////////////////////////////////////////////////////////

/** July 5th 2024
   * @param {Use the Conditional (Ternary) Operator}
  The conditional operator, also called the ternary operator, can be used as a one line if-else expression.
  
  The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false.
  
  The following function uses an if/else statement to check a condition:
  Syntax
  function findGreater(a, b) {
    return a > b ? "a is greater" : "b is greater or equal";
  }
  @param CHALLENGE
  Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either the string Equal or the string Not Equal.
   */
//SOLUTION
const checkEquality = (a, b) => {
  return a === b ? "Equal" : "Not Equal";
};
checkEquality(1, 3);
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Use Multiple Conditional (Ternary) Operators}
  We can also chain the coditional opertors  together to check for multiple conditions.
  Example Syntax
  function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" 
      : (a > b) ? "a is greater" 
      : "b is greater";
  }
      @param CHALLENGE
      In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return positive, negative or zero.
   */
function checkSign(num) {
  //Solution
  return num === 10 ? "positive" : num === -12 ? "negative" : "zero";
}

checkSign(-10);
//////////////////////////////////////////////////////////////////////////////////////////
/**
   * @param {Use Recursion to Create a Countdown}
   * In Recursion there will be a base case. The base case tells the recursive function when it no longer needs to call itself. It is a simple case where the return value is already known. There will also be a recursive call which executes the original function with different arguments. If the function is written correctly, eventually the base case will be reached.
   * 
   * Example Syntax
   * function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(5));
  The value [1, 2, 3, 4, 5] will be displayed in the console.
  @param CHALLENGE
  We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers num through 1 based on the num parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind.
   */

function countdown(num) {
  if (num < 1) {
    return [];
  } else {
    const countArray = countdown(num - 1);
    countArray.unshift(num);
    return countArray;
  }
}
countdown(5);
//////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param {Use Recursion to Create a Range of Numbers}
 *
 * @param CHALLENGE
 * We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.
 */
function rangeOfNumbers(startNum, endNum) {
  // Base Case:
  // If the end number is less than the start number, we've reached the end of the range.
  // Since there are no more numbers to add, return an empty array.
  if (endNum < startNum) {
    return [];
  } else {
    // Recursive Case:
    // 1. Make a recursive call with the same start number but a decreased end number (endNum - 1).
    // This call builds the array starting from the start number and going up.
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    // 2. After the recursive call returns (with a partially built array), append the current endNum to the array.
    numbers.push(endNum);
    // 3. Return the updated array that now includes the current endNum.
    return numbers;
  }
}

rangeOfNumbers(5, 10); // Output: [5, 6, 7, 8, 9, 10]
