// forEach
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
    console.log(number);
});

// Example 13: Date()
// The Date() constructor creates a new instance of the Date object representing the current date and time.
const currentDate = new Date();
console.log(currentDate);
// Output: the current date and time

// More examples with Math object, parseInt(), and parseFloat()

// Example 14: Math.floor()
// The Math.floor() function returns the largest integer less than or equal to a given number.
const roundedNumber = Math.floor(3.7);
console.log(roundedNumber);
// Output: 3

// Example 15: Math.ceil()
// The Math.ceil() function returns the smallest integer greater than or equal to a given number.
const roundedNumber2 = Math.ceil(3.2);
console.log(roundedNumber2);
// Output: 4

// Example 16: parseInt()
// The parseInt() function parses a string argument and returns an integer.
const stringNumber = "42";
const parsedNumber = parseInt(stringNumber);
console.log(parsedNumber);
// Output: 42

// Example 17: parseFloat()
// The parseFloat() function parses a string argument and returns a floating-point number.
const stringFloat = "3.14";
const parsedFloat = parseFloat(stringFloat);
console.log(parsedFloat);
// Output: 3.14

// Example 18: Math.random() with Math.floor()
// Generating a random integer between a minimum and maximum value (inclusive)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomInteger = getRandomInt(1, 10);
console.log(randomInteger);
// Output: a random integer between 1 and 10 (inclusive)

// Example 19: Math.pow()
// The Math.pow() function returns the base to the exponent power.
const powerResult = Math.pow(2, 3);
console.log(powerResult);
// Output: 8 (2 raised to the power of 3)

// Example 20: Math.abs()
// The Math.abs() function returns the absolute value of a number.
const absoluteValue = Math.abs(-5);
console.log(absoluteValue);
// Output: 5

// Example 21: Math.round()
// The Math.round() function returns the value of a number rounded to the nearest integer.
const roundedValue = Math.round(3.6);
console.log(roundedValue);
// Output: 4

// Example 22: Math.max() and Math.min()
// The Math.max() function returns the largest of the provided numbers, and Math.min() returns the smallest.
const maxNumber = Math.max(5, 10, 3);
const minNumber = Math.min(5, 10, 3);
console.log(maxNumber); // Output: 10
console.log(minNumber); // Output: 3
