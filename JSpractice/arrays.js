const arr = [1, 2, 3, 4, 5, 6]

const arr1 = arr.slice(1, 4)

console.log("A ", arr)
console.log("arr1 is ", arr1)

const arr2 = arr.splice(1, 4)
console.log("B ", arr)
console.log("arr2 is ", arr2)

/*
const arr3=arr.splice(0,0)
console.log("C ",arr)
*/

const marvel_heros = ["Ironman", "Blackwidow", "Captain America"]
const dc_heros = ["Batman", "Wonderwoman"]

const all_heros = [...marvel_heros, ...dc_heros]

console.log(all_heros)

console.log(Array.of(...marvel_heros, ...dc_heros))

// Remove duplicates from an array
//There are many ways to remove duplicate elements in an array in JavaScript. Here are a few examples:


// 1st Approach
//Using the Set() method:

const arrdup = [1, 2, 3, 1, 1, 4, 2, 3, 5]
const uniquearray = [... new Set(arrdup)]

console.log(uniquearray)


// 2nd Approach
// Using the for loop:
// You can also remove duplicates from an array using a simple for loop. 
// The basic idea is to iterate over the array and check each element to see 
// if it is already in the array. If it is, then you skip it. 
// If it isn't, then you add it to the new array.


const array = [1, 2, 3, 1, 2, 4, 7, 9, 7, 4, 5];

const uniqueArray = [];

for (let i = 0; i < array.length; i++) {

    if (uniqueArray.indexOf(array[i]) === -1) {
        uniqueArray.push(array[i])
    }

}

console.log(uniqueArray); // [1, 2, 3, 4, 7, 9, 5]

// 3rd Approach
// Using filter method

const array2 = ["apple", "orange", "banana", "apple", "guava", "orange"]

const array2withoutDuplicate=array2.filter((val, ind) => {

    return array2.indexOf(val) === ind

})

console.log(array2withoutDuplicate)