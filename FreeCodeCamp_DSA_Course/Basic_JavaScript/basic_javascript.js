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
const myData = myArray3[0]
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
 * @param CHALLENGE
 * const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];
const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];
 */

const myArray5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
//SOLUTION
const myData = myArray5[2][1];
console.log(myData);