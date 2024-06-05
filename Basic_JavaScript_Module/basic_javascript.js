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
 * @param {DATA STRUCTURES}
 * Store Multiple Values in one Variable using JavaScript Arrays
 */

variableName.addEventListener(Type, () => {});

const arrayName = [];
const ObjectName = { key: value, key: value, key: value };
const functionName = (param) => {};
