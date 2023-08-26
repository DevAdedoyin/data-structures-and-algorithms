// QUESTION: Reverse the string, "Hi My name is Adedoyin"

// My First Approach: USING DEFAULT JS FUNCTIONS

// declare the string
let string = "Hi My name is Adedoyin";

// split the string to return and array of chars
let myArrayOfChar = string.split("");

// reverse the array of characters
let myReversedArrayOfChar = myArrayOfChar.reverse();

// Join the reverse array of characters and print it out
let reversedString = myReversedArrayOfChar.join("");
console.log(reversedString);

////////////////////////////////////////////////////////

// My second approach: MANUALLY, WITH FOR LOOP

// declare the string variable
let myString = "Hi My name is Adedoyin";

// split the string to return an array of characters
let splitMyString = myString.split("");

// create an empty array of characters
let arrayOfReversedChars = [];

// Loop through the splitMyString array in a reversed order
for (let position = splitMyString.length; position > 0; position--) {
  // add items to the arrayOfReversedChars array
  arrayOfReversedChars.push(splitMyString[position - 1]);
}

// convert to string with join method and print the result
console.log(arrayOfReversedChars.join(""));
