// given an array, give me back a new array in which every value is multiple of 2
// [1,2,3,4,5];
// [2,4,6,8,10]

// .map() always returns a new array
// It does not change the original array
// You use it when you want to transform items


const numbers = [1, 2, 3, 4];   // Original list
const doubled = numbers.map(num => num * 2);  
// .map() goes through each 'num' in the array
// It multiplies each 'num' by 2
// It creates a new array with those results
console.log(doubled);  // Output: [2, 4, 6, 8]




// 0. Adding Greet 
const names = ["Jay", "Aman", "Priya"];
const greetings = names.map(name => "Hello " + name);
console.log(greetings); // ["Hello Jay", "Hello Aman", "Hello Priya"]

// 1. Convert numbers to strings:
const nums = [1, 2, 3];
const strings = nums.map(num => num.toString());
console.log(strings); // ["1", "2", "3"]


// 2. Add 10 to each number:
const scores = [45, 60, 75];
const updatedScores = scores.map(score => score + 10);
console.log(updatedScores); // [55, 70, 85]


// 3. Extract one property from objects:
const users = [
    { name: "Jay", age: 21 },
    { name: "Aman", age: 23 }
];

const namesOnly = users.map(user => user.name);
console.log(namesOnly); // ["Jay", "Aman"]



