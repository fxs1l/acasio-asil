// Step 1: Create an array called 'students' with three objects representing student information.
const students = [
    { name: "Asil", age: 25, grade: 90 },
    { name: "Andrei", age: 23, grade: 85 },
    { name: "Acasio", age: 24, grade: 88 },
];
// Each student object should have properties: 'name', 'age', and 'grade'.
// Step 2: Access the name of the second student in the 'students' array and log it to the console.
console.log(students[1].name);
// Step 3: Add a new student object to the 'students' array.
// The new student should have properties: 'name', 'age', and 'grade'.
students.push({ name: "Alex", age: 22, grade: 95 });
// Step 4: Loop through the 'students' array and log each student's name and grade to the console.
students.forEach((student) => {
    console.log(student.name, student.grade);
});
// Step 5: Create an object called 'book' with properties 'title', 'author', and 'year'.
const book = {
    title: "Nineteen Eighty-Four",
    author: "George Orwell",
    year: 1949,
};
// Step 6: Access the title of the 'book' object and log it to the console.
console.log(book.title);
// Step 7: Update the 'year' property of the 'book' object to 1930.
book.year = 1930;
// Step 8: Create a method called 'getSummary' for the 'book' object.
// The method should return a string summarizing the book's title, author, and year.
book.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
};
// Step 9: Call the 'getSummary' method of the 'book' object and log the result to the console.
console.log(book.getSummary());
// Step 10: Create an array called 'library' and add the 'book' object to it.
const library = [book];
// Step 11: Log the 'library' array to the console to verify the book is stored in the array.
console.log(library);
// Step 12: Create an object called 'car' with properties 'brand', 'model', and 'year'.
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
};
// Step 13: Access the 'model' property of the 'car' object and log it to the console.
console.log(car.model);
// Step 14: Update the 'year' property of the 'car' object to 2023.
car.year = 2023;
// Step 15: Create a method called 'startEngine' for the 'car' object.
// The method should log a message to the console indicating that the car's engine is starting.
car.startEngine = function () {
    console.log("Engine starting...");
};
// Step 16: Call the 'startEngine' method of the 'car' object.
car.startEngine();
// Step 17: Create an array called 'garage' and add the 'car' object to it.
const garage = [car];
// Step 18: Log the 'garage' array to the console to verify the car is stored in the array.
console.log(garage);
// Step 19: Create an object called 'person' with properties 'name', 'age', and 'city'.
const person = {
    name: "Asil",
    age: 22,
    city: "Quezon City",
};
// Step 20: Access the 'age' property of the 'person' object and log it to the console.
console.log(person.age);
// Feel free to add more steps or customize the activity according to your needs.
