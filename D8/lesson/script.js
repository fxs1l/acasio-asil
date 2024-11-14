// Arrow function

// Transforming a function to an arrow function
function square(num) {
    return num * num;
}

console.log(square(3)); // Output: 9

// Transformed to an arrow function
const squareArrow = (num) => num * num;

console.log(squareArrow(3)); // Output: 9

const multiply = (a, b) => a * b;
console.log(multiply(5, 7)); // Output: 35

// Template literals
const name = "Alice";
const age = 25;
console.log(`My name is ${name} and I am ${age} years old.`); // Output: My name is Alice and I am 25 years old.

/*
Destructuring - Extract Values from Arrays and Objects

Destructuring allows you to quickly unpack values from arrays or objets into separate variables,making it easier to work with complex data structures.
*/

const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2
// console.log(rest); // Output: [3, 4, 5]

const person = { name: "Bob", age: 30, country: "USA" };
const { name: personName, age: age2, country } = person;
console.log(personName); // Output: Bob
console.log(age2); // Output: 30
console.log(country); // Output: USA

/*
Spread and Rest Operators - Gather and Spread Values
The spread and rest operators (...) look the same but serve different purposes based on where they are used.
*/

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Default Parameters - Set Default Values for Function Arguments
const calculatedArea = (length = 1, width = 1) => {
    return length * width;
};

console.log(calculatedArea()); // Output: 1
console.log(calculatedArea(3, 4)); // Output: 12
console.log(calculatedArea(3)); // Output: 3
console.log(calculatedArea(undefined, 4)); // Output: 4
