"use strict";
/** Sept 4th 2024
 * @param {Basic Data Structures}
Learn the nuances of arrays and objects in JavaScript. Discover when to use each and how to efficiently manipulate data with methods like splice() and Object.keys().
 */
/**
 * @param {Arrays: Storing Collections of Data}

An array is a fundamental data structure in JavaScript used to store a collection of values. These values can be of any data type, including numbers, strings, booleans, objects, and even other arrays.
Simple Arrays:

let simpleArray = ['one', 2, 'three', true, false, undefined, null];

Multi-Dimensional Arrays:

JavaScript
let complexArray = [
  [{ one: 1, two: 2 }, { three: 3, four: 4 }],
  [{ a: "a", b: "b" }, { c: "c", d: "d" }]
];
@param CHALLENGE
We have defined a variable called yourArray. Complete the statement by assigning an array of at least 5 elements in length to the yourArray variable. Your array should contain at least one string, one number, and one boolean.
 */
//Solution
let yourArray = ["this is an array", 30, false, { name: "John" }, "apple"];

/**
 * @param {Arrays: Storing and Accessing Data}

Arrays are data structures that store ordered collections of values. In JavaScript, arrays are zero-indexed, meaning the first element has an index of 0.

Accessing Array Elements:

To access an element in an array, use bracket notation with the element's index.

 @param Example:

 @param JavaScript
const fruits = ["apple", "banana", "orange"];

 Access the first element (index 0):
const firstFruit = fruits[0]; // "apple"

 Access the second element (index 1):
const secondFruit = fruits[1]; // "banana"

 Modify an element:
fruits[2] = "grape"; // Now fruits is ["apple", "banana", "grape"]
Use code with caution.

Key Points:
Arrays start with index 0.
Use bracket notation ([]) to access or modify elements.
Indexes can be used to retrieve or change values within the array.
@param Task
In order to complete this challenge, set the 2nd position (index 1) of myArray to anything you want, besides the letter b.
 */
//Solution
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "Banana";
console.log(myArray);

/**
 * @param {Add Items to an Array with push() and unshift()}
 
  We have defined a function, mixedNumbers, which we are passing an array as an argument. Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.
 
  We have defined a function, mixedNumbers, which we are passing an array as an argument. Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.
 */
function mixedNumbers(arr) {
  // Solution
  arr.unshift("I", 2, "three");
  arr.push(7, "VIII", 9);
  return arr;
}
console.log(mixedNumbers(["IV", 5, "six"]));
/**
   * @param {Removing Items from an Array: pop() and shift()}

pop() and shift() are methods used to remove elements from an array.

pop(): Removes the last element from an array and returns it.
shift(): Removes the first element from an array and returns it.   
Example:

JavaScript
let greetings = ['whats up?', 'hello', 'see ya!'];

// Remove the last element using pop()
greetings.pop(); // greetings becomes ['whats up?', 'hello']

// Remove the first element using shift()
greetings.shift(); // greetings becomes ['hello']

// Get the removed element and store it in a variable
let removedElement = greetings.pop();
Use code with caution.

@param Task:
Create a function named popShift that takes an array as an argument. The function should remove both the first and last elements from the array and return a new array containing these removed elements.
*/
function popShift(arr) {
  let popped = arr.pop(); // Solution
  let shifted = arr.shift(); // Solution
  return [shifted, popped];
}
console.log(popShift(["challenge", "is", "not", "complete"]));

/**
   * @param {Removing Items with splice()}

splice() removes elements from an array, starting at a specified index. It takes two main parameters:

Start index: The position where removal begins (0-based).
Number of elements to remove: How many elements to delete.
Example:

JavaScript
let array = [1, 2, 3, 4, 5];
array.splice(2, 2); // Removes 3 and 4
Use code with caution.

splice() also returns a new array containing the removed elements.

@param Task:
Use splice() on arr to keep only elements that sum to 10.
   */
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Solution
arr.splice(1, 4);
console.log(arr);

/**
 * @param Adding items with splice()

Remember that splice() can take up to three arguments:

startIndex: The index where you want to start modifying the array.
deleteCount: The number of elements to remove.
itemsToAdd: One or more elements to insert at the specified index.
To add items to an array using splice(), simply set deleteCount to 0 and provide the items you want to add as the third argument.

@param Example JavaScript:
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;
 @param numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);

const numbers = [10, 11, 12, 12, 15];
numbers.splice(2, 0, 13, 14); // Adds 13 and 14 at index 2
console.log(numbers); // Output: [10, 11, 13, 14, 12, 15]
Use code with caution.

@param Exercise:
Modify the htmlColorNames function to remove the first two elements and insert 'DarkSalmon' and 'BlanchedAlmond' in their place.
 */
function htmlColorNames(arr) {
  // Solution
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  return arr;
}
console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);

/**
* @param {slice() creates a new array by extracting a portion of an existing array.}

@param Example JavaScript
const weather = ['rain', 'snow', 'sleet', 'hail', 'clear'];
const today = weather.slice(1, 3); // Creates a new array ['snow', 'sleet']
Use code with caution.

@param Task:
Write a forecast function that uses slice() to extract "warm" and "sunny" from a given weather array, returning a new array or an empty array if not found.
   */
function forecast(arr) {
  // Solution
  return arr.slice(2, 4);
}
console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/** Sept 5th 2024
 * @param {Copy an Array with the Spread Operator}
The spread operator (...) makes copying all elements of an array simple and readable. Unlike slice(), which can copy specific parts of an array, the spread operator copies everything in order.

@param Here’s how it works:
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray]; 
// thatArray is now a copy of thisArray
In this example, thisArray stays the same, and thatArray gets a copy of all its elements.

 @param Task Instructions
We’ve created a function, copyMachine, that takes an array (arr) and a number (num). Modify the function using the spread operator so that it returns a new array made up of num copies of arr.
 */
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]); // Solution
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2));

/**
 * @param {Combine Arrays with the Spread Operator}
The spread operator (...) makes it easy to combine arrays or insert all elements of one array into another. Traditional methods like concat() only let you join arrays at the beginning or end. With the spread operator, you can insert one array's elements anywhere in another array.

@param Example:
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// thatArray is now ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']
This method is simpler and shorter than older methods.

 @param Task
Modify the spreadOut function to return the array ['learning', 'to', 'code', 'is', 'fun'] using the spread operator.
 */
function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"]; // Solution
  return sentence;
}
console.log(spreadOut());

/**
 * @param {Check for an Element with indexOf()}
Arrays can change over time, so you might not always know where a specific element is or if it’s still there. To help with this, JavaScript provides the indexOf() method, which checks if an element exists in an array. It takes an element as a parameter and returns the index (position) of that element. If the element isn’t found, it returns -1.

@param Example:
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');    // Returns -1 (not found)
fruits.indexOf('oranges');  // Returns 2 (found at index 2)
fruits.indexOf('pears');    // Returns 1 (first occurrence)
@param Task
Modify the quickCheck function to use indexOf() and return true if the element is found in the array, or false if it’s not.
 */
function quickCheck(arr, elem) {
  // Solution with Ternary Operator
  return arr.indexOf(elem) >= 0 ? true : false;
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

/**
 * @param {Iterate Through an Array's Items Using For Loops}
When working with arrays, you often need to loop through each item to find something specific or make changes. JavaScript provides several built-in methods to do this, like forEach() and map(), but using a for loop gives you the most control.

 @param Example:
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
// Returns: [12, 14, 80]
This function loops through each item in the array and checks if it's greater than 10. If it is, it adds that item to a new array, which is returned at the end.

 @param Task:
You need to modify the filteredArray function to use a for loop. The function should return a new array that excludes any nested array containing elem.
 */
function filteredArray(arr, elem) {
  let newArr = [];
  // check the length of arr and iterate through each nested array
  for (let ii = 0; ii < arr.length; ii++) {
    // check if elem does not exist in the current nested array
    if (arr[ii].indexOf(elem) === -1) {
      newArr.push(arr[ii]); // add the current nested array to newArr if elem is not found
    }
  }
  return newArr; // return the new filtered array
}
console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);
///////////////////////////////////////////////////////////////////////////////////////////////////
/** Sept 7th 2024
 * @param {Create complex multi-dimensional arrays}
 * Arrays can get more complex when they contain other arrays, creating multi-dimensional (or nested) arrays. These arrays can have infinite levels of depth, with arrays inside arrays, and so on. An example of this is shown below:

let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper']
  ],
  [
    [
      ['deepest'], ['deepest']
    ],
    [
      [
        ['deepest-est?']
      ]
    ]
  ]
];
Here, the levels of depth increase from 2 to 5. Even with such complexity, we can still access and modify data using bracket notation.

@param Task: Modify the myNestedArray variable to have exactly five levels of depth. Include the string "deep" on the third level, "deeper" on the fourth, and "deepest" on the fifth.
 */
let myNestedArray = [
  ["unshift", false, 1, 2, 3, "complex", "nested"],
  ["loop", "shift", 6, 7, 1000, "method"],
  //Solution
  ["concat", false, true, "spread", "array", ["deep"]],
  ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
  ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]],
];

/**
 * @param {Add Key-Value Pairs to JavaScript Objects}
 * Objects in JavaScript store data as key-value pairs. Keys are unique identifiers, and values are the data associated with them. Here's an example:

@param Example:
const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
To add a new key-value pair, you can use dot notation or bracket notation. Dot notation is simple:

@param Example:
tekkenCharacter.origin = 'South Korea';
Use bracket notation when the key has spaces or you want to use a variable:

@param Example:
tekkenCharacter['hair color'] = 'dyed orange';
const eyes = 'eye color';
tekkenCharacter[eyes] = 'brown';
Now, add three entries to the foods object: bananas with a value of 13, grapes with a value of 35, and strawberries with a value of 27.
 */
const foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};

//Solution
foods.bananas = 13;
foods["grapes"] = 35;
//Using the variable method to assign ley value pairs
const fruitType = "strawberries";
foods[fruitType] = 27;

console.log(foods);

/**
 * @param {Modify an Object Nested Within an Object}
 * In JavaScript, objects can have nested properties, allowing you to store complex data structures. You can access and modify these properties using dot notation. For example, if you have a nested object like this:

@apram Example
let nestedObject = {
  data: {
    onlineStatus: {
      busy: 8
    }
  }
};
To update the busy property, use dot notation like this:
nestedObject.data.onlineStatus.busy = 10;

@param Task: Modify the online property inside the userActivity object to have a value of 45.
 */

let userActivity = {
  id: 23894201352,
  date: "January 1, 2017",
  data: {
    totalUsers: 51,
    online: 42,
  },
};

// Solution
userActivity.data.online = 45;
console.log(userActivity);

/**
 * @param {Access Property Names with Bracket Notation}
 * To access property names dynamically in objects, you can use bracket notation. This allows you to retrieve the value of an object property using a variable. For example, if you have an object foods and a variable selectedFood, you can access the corresponding value in the object with foods[selectedFood]. This is useful when property names are not known until runtime.

@param Example: 
let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];

 @param Task:
We've defined a function, checkInventory, which takes scannedItem as an argument. Return the current value of the scannedItem key in the foods object. You can assume only valid keys will be provided.
 */
let foods2 = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};
function checkInventory(scannedItem) {
  // Solution
  return foods2[scannedItem];
}
console.log(checkInventory("apples"));

/**
 * @param {Use the delete Keyword to Remove Object Properties}
Now you know what objects are and their basic features and advantages. In short, they are key-value stores which provide a flexible, intuitive way to structure data, and, they provide very fast lookup time. Throughout the rest of these challenges, we will describe several common operations you can perform on objects so you can become comfortable applying these useful data structures in your programs.

In earlier challenges, we have both added to and modified an object's key-value pairs. Here we will see how we can remove a key-value pair from an object.

Let's revisit our foods object example one last time. If we wanted to remove the apples key, we can remove it by using the delete keyword like this:

@param Example delete foods.apples;
Use the delete keyword to remove the oranges, plums, and strawberries keys from the foods object.
 */
let foods3 = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};
// Solution
delete foods3.oranges;
delete foods3.plums;
delete foods3.strawberries;
console.log(foods3);

/**
 * @param {Check if an Object has a Property}
Now we can add, modify, and remove keys from objects. But what if we just wanted to know if an object has a specific property? JavaScript provides us with two different ways to do this. One uses the hasOwnProperty() method and the other uses the in keyword. If we have an object users with a property of Alan, we could check for its presence in either of the following ways:
@param Example:
users.hasOwnProperty('Alan');
'Alan' in users;
Both of these would return true.
@param Task:
Finish writing the function so that it returns true if the object passed to it contains all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise.
 */

let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};
function isEveryoneHere(userObj) {
  // Solution
  return ["Alan", "Jeff", "Sarah", "Ryan"].every((name) =>
    userObj.hasOwnProperty(name)
  );
}
console.log(isEveryoneHere(users));
///////////////////////////////////////////////////////////////////////////////////////////////////
/** Sept 8th 2024
 * @param {Iterate Through the Keys of an Object with a for...in Statement}
 * To loop through all the keys in an object, use a for...in loop. This loop iterates over each key in the object. For example:

@param Example:
const refrigerator = {
  'milk': 1,
  'eggs': 12,
};

for (const food in refrigerator) {
  console.log(food, refrigerator[food]);
}
This will log each key-value pair, like milk 1 and eggs 12.

@param Task: Define a function countOnline that accepts an allUsers object. Use a for...in loop inside this function to return the number of users with their online property set to true.
 */
const onlineUsers = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(allUsers) {
  //Solution
  let userOnlineCount = 0; // Initializes a counter to track the number of users who are online
  for (const onlineProp in allUsers) {
    // Loops through each property (user) in the allUsers object.
    if (allUsers[onlineProp].online) {
      // Checks if the current user has their online property set to true
      userOnlineCount++; // Increments the counter for each user that is online
    }
  }
  return userOnlineCount; //return the number of users online
}
console.log(countOnline(users)); // Logs the count of users who are online

/**
 * @param {Generate an Array of All Object Keys with Object.keys()}
 * The Object.keys() method generates an array containing all the keys (property names) of an object. You pass the object to Object.keys(), and it returns an array of strings that represent each property in the object. The order of the keys in the array is not guaranteed.
@param Example:
function getArrayOfUsers(obj) {
  return Object.keys(obj);
}
const users = {
  user1: 'Alice',
  user2: 'Bob',
  user3: 'Charlie'
};

console.log(getArrayOfUsers(users)); 
// Output: ['user1', 'user2', 'user3']

@param Task:
Complete the getArrayOfUsers function so that it returns an array containing all the properties in the object passed to it.
 */
let users3 = {
  Alan: {
    age: 27,
    online: false,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: false,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function getArrayOfUsers(obj) {
  // Solution
  return Object.keys(obj); // The Object.keys() method returns an array of the object's property  names.
}

console.log(getArrayOfUsers(users3));

/**
 * @param {Modify an Array Stored in an Object}
 You have learned how to add, modify, and remove key-value pairs in JavaScript objects, check if keys exist, and iterate over all keys. With this knowledge, you can solve more complex problems. Objects can store arrays, and JavaScript's flexibility lets you manipulate these arrays within objects.
@param Task:
The task is to complete the addFriend function so it takes a user object and adds a friend's name to the user.data.friends array, then returns the updated array.

 */
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Soultion
  userObj.data.friends.push(friend)
return userObj.data.friends
  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));