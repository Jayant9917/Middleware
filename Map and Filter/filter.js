const arr = [1,2,3,4,5];
const newArray = [];
for(let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0){
        newArray.push(arr[i]);
    }
}
console.log(newArray)

// Filter => 

const arr2 = [1,2,3,4,5];

const ans = arr.filter((n) => {
        if(n % 2 == 0){
            return true;
        } else {
            return false;
        }
    })
console.log(ans);


// .filter() also returns a new array

// Only items that pass the condition are kept

// It does not change the original array



const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6]


// ANOTHER EXAMPLE
const names = ["Jay", "Aman", "Priya", "Ravi"];
const shortNames = names.filter(name => name.length <= 4);
console.log(shortNames); // ["Jay", "Aman", "Ravi"]

// 1. Filter odd numbers:
const nums = [1, 2, 3, 4, 5];
const odd = nums.filter(n => n % 2 !== 0);
console.log(odd); // [1, 3, 5]

//  2. Filter numbers > 50:
const marks = [33, 55, 60, 22, 90];
const pass = marks.filter(mark => mark > 50);
console.log(pass); // [55, 60, 90]

// 3. Get active users from object list:
const users = [
    { name: "Jay", active: true },
    { name: "Aman", active: false },
    { name: "Priya", active: true }
];
const activeUsers = users.filter(user => user.active);
console.log(activeUsers); 
// [{ name: "Jay", active: true }, { name: "Priya", active: true }]



// ---------------------------------------------------------- 
// COMBINED MAP AND FILTER
const activeNames = users
    .filter(user => user.active)
    .map(user => user.name);

console.log(activeNames); // ["Jay", "Priya"]




