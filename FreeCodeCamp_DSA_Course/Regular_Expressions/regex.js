"use strict";

/** Aug 9th 2024
 * @param {Using the Test Method}
Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.

If you want to find the word the in the string The dog chased the cat, you could use the following regular expression: /the/. Notice that quote marks are not required within the regular expression.

JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
The test method here returns true.
@param CHALLENGE
Apply the regex myRegex on the string myString using the .test() method.
 */

let myString = "Hello, World!";
let myRegex = /Hello/;
// Solution
let result = myRegex.test(myString);

/**
 * @param {Match Literal Strings}
In the last challenge, you searched for the word Hello using the regular expression /Hello/. That regex searched for a literal match of the string Hello. Here's another example searching for a literal match of the string Kevin:

let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
This test call will return true.

Any other forms of Kevin will not match. For example, the regex /Kevin/ will not match kevin or KEVIN.

let wrongRegex = /kevin/;
wrongRegex.test(testStr);
This test call will return false.

A future challenge will show how to match those other forms as well.
@param CHALLENGE
Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.
 */

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
// Solution
let waldoRegex = /Waldo/;
let result1 = waldoRegex.test(waldoIsHiding);

/**
 * @param {Match a Literal String with Different Possibilities}
Using regexes like /coding/, you can look for the pattern coding in another string.

This is powerful to search single strings, but it's limited to only one pattern. You can search for multiple patterns using the alternation or OR operator: |.

This operator matches patterns either before or after it. For example, if you wanted to match the strings yes or no, the regex you want is /yes|no/.

You can also search for more than just two patterns. You can do this by adding more patterns with more OR operators separating them, like /yes|no|maybe/.

@param CHALLENGE
Complete the regex petRegex to match the pets dog, cat, bird, or fish.
 */
let petString = `James has a pet dog`;
//Soluion
let petRegex = /dog|cat|bird|fish/;
let result2 = petRegex.test(petString);

/**
 * @param {Ignore Case While Matching}
Up until now, you've looked at regexes to do literal matches of strings. But sometimes, you might want to also match case differences.

Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Examples of uppercase are A, B, and C. Examples of lowercase are a, b, and c.

You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag. You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.

@param CHALLENGE
Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations or variations with spaces.
 */
let myString1 = "FreeCodeCamp2";
//Solution
let fccRegex = /freeCodeCamp2/i;
let result3 = fccRegex.test(myString1);

/**
 * @param {Extract Matches}
So far, we have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the .match() method.

To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

Here's an example:

"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
Here the first match would return ["Hello"] and the second would return ["expressions"].

Note that the .match syntax is the "opposite" of the .test method you have been using thus far:

'string'.match(/regex/);
/regex/.test('string');

@param CHALLENGE
Apply the .match() method to extract the string coding.
 */
let extractStr = `Extract the word coding from this string`;
let codingRegex = /coding/;
let result4 = extractStr.match(codingRegex);
///////////////////////////////////////////////////////////////////////////////////////////////
/** Aug 10 2024
 * @param {Find More Than the First Match}
So far, you have only been able to extract or search a pattern once.

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
Here match would return ["Repeat"].

To search or extract a pattern more than once, you can use the global search flag: g.

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
And here match returns the value ["Repeat", "Repeat", "Repeat"]

@param CHALLENGE
Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.
NOTE: You can have multiple flags on your regex like /search/gi
 */
//Solution
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // (g i) represents the global and ignore flags.
let result5 = twinkleStar.match(starRegex);

/**
 * @param {Match Anything with Wildcard Period}
Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: .

The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
Both of these test calls would return true.

@param CHALLENGE
Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. Your regex should use the wildcard character.
 */
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./;
let result6 = unRegex.test(exampleStr);

/**
 * @param {Match Single Character with Multiple Possibilities}
You learned how to match literal patterns (/literal/) and wildcard character (/./). Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.

You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u.

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);
In order, the four match calls would return the values ["big"], ["bag"], ["bug"], and null.

@param CHALLENGE
Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.
NOTE: Be sure to match both upper- and lowercase vowels.
 */
let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // The square brackets define a character class that matches any one of the vowels (a, e, i, o, u).

let result7 = quoteSample.match(vowelRegex);

/**
 * @param {Match Letters of the Alphabet}
You saw how you can use character sets to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.

Inside a character set, you can define a range of characters to match using a hyphen character: -.

For example, to match lowercase letters a through e you would use [a-e].

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);
In order, the three match calls would return the values ["cat"], ["bat"], and null.

Match all the letters in the string quoteSample. Note: Be sure to match both uppercase and lowercase letters.
 */
let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
//
// Solution
let alphabetRegex = /[a-z]/gi;
let result8 = quoteSample2.match(alphabetRegex);

/**
 * @param {Match Numbers and Letters of the Alphabet}
Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.

For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.

Also, it is possible to combine a range of letters and numbers in a single character set.

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);

@param CHALLENGE
Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.
 */
let quoteSample3 = "Blueberry 3.141592653s are delicious.";
//Solution
let quoteRegex = /[h-s2-6]/gi; // matches charaters between h to s and numbers  2 to 6
let result9 = quoteSample3.match(quoteRegex);

/**
 * @param {Match Single Characters Not Specified}
So far, you have created a set of characters that you want to match, but you could also create a set of characters that you do not want to match. These types of character sets are called negated character sets.

To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.

For example, /[^aeiou]/gi matches all characters that are not a vowel. Note that characters like ., !, [, @, / and white space are matched - the negated vowel character set only excludes the vowel characters.
@param CHALLENGE
Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex. */

let quoteSample4 = "3 blind mice.";
let quoteRegex2 = /[^aeiou0-3]/gi;
let result10 = quoteSample4.match(quoteRegex2);

//////////////////////////////////////////////////////////////////////////////////////
/** Aug 11 2024
 * @param {Match Characters that Occur One or More Times}
Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.

You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.

For example, /a+/g would find one match in abc and return ["a"]. Because of the +, it would also find a single match in aabc and return ["aa"].

If it were instead checking the string abab, it would find two matches and return ["a", "a"] because the a characters are not in a row - there is a b between them. Finally, since there is no a in the string bcd, it wouldn't find a match.
@param CHALLENGE
find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign.
 */

let difficultSpelling = "Mississippi";
let myRegex2 = /s+/g;
let result11 = difficultSpelling.match(myRegex2);

/**
 * @param {Match Characters that Occur Zero or More Times}
The last challenge used the plus + sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.

The character to do this is the asterisk or star: *.

/*let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*;/
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
In order, the three match calls would return the values ["goooooooo"], ["g"], and null.
@param CHALLENGE
For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes. Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a characters in chewieQuote. Your regex does not need flags or character classes, and it should not match any of the other quotes.
 */
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let result12 = chewieQuote.match(chewieRegex);

/**
 * @param {Find Characters with Lazy Matching}
In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.

You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t, ends with i, and has some letters in between.

Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest sub-string possible to fit the pattern.

However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].

Note: Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular expressions is completely fine.

@param CHALLENGE
Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.

 */
let text = "<h1>Winter is coming</h1>";
let textRegex = /<.h*?1>/;
// The regex <.h*?1> works as follows:
// - The dot (.) matches any single character (including the 'h').
// - The h*? matches 'h' zero or more times, but the (?) after (*) i.e. lazy match,  matches as few characters as possible.
let result13 = text.match(textRegex);

/**
 * @param {Find One or More Criminals in a Hunt}
Time to pause and test your new regex writing skills. A group of criminals escaped from jail and ran away, but you don't know how many. However, you do know that they stay close together when they are around other people. You are responsible for finding all of the criminals at once.

Here's an example to review how to do this:

The regex /z+/ matches the letter z when it appears one or more times in a row. It would find matches in all of the following strings:

"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
But it does not find matches in the following strings since there are no letter z characters:

""
"ABC"
"abcabc"
@param CHALLENGE
Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.
 */
//Solution
let regCriminals = / C+/;

/**
 * @param {Match Beginning String Patterns}
Prior challenges showed that regular expressions can be used to look for a number of matches. They are also used to search for patterns in specific positions in strings.

In an earlier challenge, you used the caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to search for patterns at the beginning of strings.

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
The first test call would return true, while the second would return false.
@param CHALLENGE
Use the caret character in a regex to find Cal only in the beginning of the string rickyAndCal.
 */
let rickyAndCal = "Cal and Ricky both like racing.";
//Solution
let calRegex = /^Cal/;
let result14 = calRegex.test(rickyAndCal);
//////////////////////////////////////////////////////////////////////////////////////////

/** Aug 16 and 17th 2024
 * @param {Match Ending String Patterns}
In the last challenge, you learned to use the caret character to search for patterns at the beginning of strings. There is also a way to search for patterns at the end of strings.

You can search the end of strings using the dollar sign character $ at the end of the regex.

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
The first test call would return true, while the second would return false.
@param CHALLENGE
Use the anchor character ($) to match the string caboose at the end of the string caboose.
 */

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result15 = lastRegex.test(caboose);

/**
 * @param {Match All Letters and Numbers}
Using character classes, you were able to search for all letters of the alphabet with [a-z]. This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well.

The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_).

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);
All four of these test calls would return true.

These shortcut character classes are also known as shorthand character classes.
@param CHALLENGE
Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.
 */
let quoteSample1 = "The five boxing wizards jump quickly.";
// Solution
let alphabetRegexV2 = /\w/g;
let result16 = quoteSample1.match(alphabetRegexV2).length;
///////////////////////////////////////////////////////////////////////////////////////////
/** Aug 17th 2024
 * @param {Match Everything But Letters and Numbers}
You've learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_] using \w. A natural pattern you might want to search for is the opposite of alphanumerics.

You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].

let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);
The first match call would return the value ["%"] and the second would return ["!"].

@param CHALLENGE
Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.
 */
let quoteSample5 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // capital W character finds all non alphanumeric c characters
let result17 = quoteSample5.match(nonAlphabetRegex).length;

/**
 * @param {Match All Numbers}
You've learned shortcuts for common string patterns like alphanumerics. Another common pattern is looking for just digits or numbers.

The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.

@param CHALLENGE
Use the shorthand character class \d to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count.
 */
let movieName = "2001: A Space Odyssey";
//Solution
let numRegex = /\d/; // lowercase d is shouthand character that saerches for numeric characters
let result18 = movieName.match(numRegex).length;
////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** Aug 20, 2024
 * @param {Match All Non-Numbers}
The last challenge showed how to search for digits using the shortcut \d with a lowercase d. You can also search for non-digits using a similar shortcut that uses an uppercase D instead.

The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.
@param CHALLENGE
Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.
 */
let movieName1 = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result19 = movieName1.match(noNumRegex).length;

/**
 * @param {Restrict Possible Usernames}
Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

1. The only numbers in the username have to be at the end. 
2. Usernames can only use alphanumeric characters.
3. There can be zero or more of them at the end. 
4. Username cannot start with the number.
5. Username letters can be lowercase and uppercase.
6. Usernames have to be at least two characters long. 
7. A two-character username can only use alphabet letters as characters.

@param CHALLENGE
Change the regex userCheck to fit the constraints listed above.
 */
let username = "JackOfAllTrades";
//Solution
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result20 = userCheck.test(username);
/**
 * @param { ^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i}

First Part: ^[a-z][a-z]+\d*$
^: Matches the beginning of the string.
[a-z]: Matches a single lowercase letter.
[a-z]+: Matches one or more lowercase letters.
\d*: Matches zero or more digits.
$: Matches the end of the string.

Second Part: ^[a-z]\d\d+$
^: Matches the beginning of the string.
[a-z]: Matches a single lowercase letter.
\d\d: Matches exactly two digits.
$: Matches the end of the string.
 */

/**
 * @param {Match Whitespace}
The challenges so far have covered matching letters of the alphabet and numbers. You can also match the whitespace or spaces between letters.

You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class [ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
This match call would return [" ", " "].

@param CHALLENGE
Change the regex countWhiteSpace to look for multiple whitespace characters in a string.
 */
let sample = "Whitespace is important in separating words";
//Solution
let countWhiteSpace = /\s/g;
let result21 = sample.match(countWhiteSpace);
////////////////////////////////////////////////////////////////////////////////
/** Aug 21 2024
 * @param {Match Non-Whitespace Characters}
You learned about searching for whitespace using \s, with a lowercase s. You can also search for everything except whitespace.

Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class [^ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;
The value returned by the .length method would be 32.
@param CHALLENGE
Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.
 */
let sample1 = "Whitespace is important in separating words";
//Solution
let countNonWhiteSpace = /\S/g;
let result22 = sample1.match(countNonWhiteSpace);

/**
 * @param {Specify Upper and Lower Number of Matches}
Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters. These are convenient but sometimes you want to match a certain range of patterns.

You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.

For example, to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be /a{3,5}h/.

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);
The first test call would return true, while the second would return false.
@param CHALLENGE
Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.
 */

let ohStr = "Ohhh no";
//Solution
let ohRegex = /Oh{3,6}\sno/;
let result23 = ohRegex.test(ohStr);

/**
 * @param {Specify Only the Lower Number of Matches}
You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want to specify the lower number of patterns with no upper limit.

To only specify the lower number of patterns, keep the first number followed by a comma.

For example, to match only the string hah with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.

let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);
In order, the three test calls would return true, false, and true.
@param CHALLENGE
Change the regex haRegex to match the word Hazzah only when it has four or more letter z's.
 */
let haStr = "Hazzzzah";
//Solution
let haRegex = /Haz{4,}ah/;
let result24 = haRegex.test(haStr);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/** Aug 22 2024 
 * @param {Specify Exact Number of Matches}
You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want a specific number of matches.

To specify a certain number of patterns, just have that one number between the curly brackets.

For example, to match only the word hah with the letter a 3 times, your regex would be /ha{3}h/.

let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);
In order, the three test calls would return false, true, and false.

@param CHALLENGE
Change the regex timRegex to match the word Timber only when it has four letter m's.
 */
let timStr = "Timmmmber";
// Solution
let timRegex = /Tim{4}ber/;
let result25 = timRegex.test(timStr);

/**
 * @param {Check for All or None}
Sometimes the patterns you want to search for may have parts of it that may or may not exist. However, it may be important to check for them nonetheless.

You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.

For example, there are slight differences in American and British English and you can use the question mark to match both spellings.

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);
Both uses of the test method would return true.

@param CHALLENGE
Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.
 */
let favWord = "favorite";
//Solution
let favRegex = /favou?rite/; // Change this line
let result26 = favRegex.test(favWord);

/**
 *@param {Positive and Negative Lookahead}
Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.

There are two kinds of lookaheads: positive lookahead and negative lookahead.

A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.

Lookaheads are a bit confusing but some examples will help.

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);
Both of these match calls would return ["q"].

A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);
@param CHALLENGE
Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.
 */
let sampleWord = "astronaut";
//Solution
let pwRegex = /(?=\w{6})(?=\D*\d\d)/;
let result27 = pwRegex.test(sampleWord);

/**
 * @param {Check For Mixed Grouping of Characters}
Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses ().

If you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression: /P(engu|umpk)in/g

Then check whether the desired string groups are in the test string by using the test() method.

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
The test method here would return true.

Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.
@param CHALLENGE
Then fix the code so that the regex that you have created is checked against myString and either true or false is returned depending on whether the regex matches.
 */
let myString2 = "Eleanor Roosevelt";
let myRegex3 =  ;
let result28 = myRegex3.test(myString2); // Change this line

/*(Franklin|Eleanor):
This part matches either the name "Franklin" or "Eleanor". The vertical bar | acts as an "OR" operator in regular expressions.

(([A-Z].?|[A-Z][a-z]+) )?:
This part is optional due to the ? at the end. It matches a possible middle name or initial:

[A-Z].?: Matches a single uppercase letter followed by an optional period (.). This would account for an initial like "F." or "E."
[A-Z][a-z]+: Matches a capitalized word, starting with an uppercase letter followed by one or more lowercase letters. This would account for a middle name like "Delano."
The space after the inner group ensures there is a space after the middle name or initial.
Roosevelt:*/
///////////////////////////////////////////////////////////////////////////////////////////////

/** AUG 23rd 2024
 * @param {Reuse Patterns Using Capture Groups}
Say you want to match a word that occurs multiple times like below.

Example Code
let repeatStr = "row row row your boat";
You could use /row row row/, but what if you don't know the specific word repeated? Capture groups can be used to find repeated substrings.

Capture groups are constructed by enclosing the regex pattern to be captured in parentheses. In this case, the goal is to capture a word consisting of alphanumeric characters so the capture group will be \w+ enclosed by parentheses: /(\w+)/.

The substring matched by the group is saved to a temporary "variable", which can be accessed within the same regex using a backslash and the number of the capture group (e.g. \1). Capture groups are automatically numbered by the position of their opening parentheses (left to right), starting at 1.

The example below matches a word that occurs thrice separated by spaces:

Example Code
let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
Using the .match() method on a string will return an array with the matched substring, along with its captured groups.

@param CHALLENGE
Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces.
 */
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // Solution
let result29 = reRegex.test(repeatNum);

/**
 * @param {Use Capture Groups to Search and Replace}
Searching is useful. However, you can make searching even more powerful when it also changes (or replaces) the text you match.

You can search and replace text in a string using .replace() on a string. The inputs for .replace() is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something.

Example Code
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
The replace call would return the string The sky is blue..

You can also access capture groups in the replacement string with dollar signs ($).

Example Code
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
The replace call would return the string Camp Code.

@param CHALLENGE
Write a regex fixRegex using three capture groups that will search for each word in the string one two three. Then update the replaceText variable to replace one two three with the string three two one and assign the result to the result variable. Make sure you are utilizing capture groups in the replacement string using the dollar sign ($) syntax.
 */
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; //Solution
let replaceText = "$3 $2 $1"; // Solution
let result30 = str.replace(fixRegex, replaceText);

/**
 * @param {Remove Whitespace from Start and End}
Sometimes whitespace characters around strings are not wanted but are there. Typical processing of strings is to remove the whitespace at the start and end of it.

@param CHALLENGE
Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

Note: The String.prototype.trim() method would work here, but you'll need to complete this challenge using regular expressions.
 */
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Solution
let result31 = hello.replace(wsRegex, ""); // Solution
///////////////////////////////////////////////////////////////////////////////////////////////////