// given an array, give me back a new array in which every value is multiple of 2

// [1,2,3,4,5];
// [2,4,6,8,10]

const newArray = [];

function multipleOfTwo(array) {
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 2);
    }
    return newArray;
}

console.log(multipleOfTwo([1,2,3,4,5]));
console.log(multipleOfTwo([1,2,3,4,5,6,7,8,9,10]));

