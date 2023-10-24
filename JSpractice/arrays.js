const arr=[1,2,3,4,5,6]

const arr1=arr.slice(1,4)

console.log("A ",arr)
console.log("arr1 is ",arr1)

const arr2=arr.splice(1,4)
console.log("B ",arr)
console.log("arr2 is ",arr2)

/*
const arr3=arr.splice(0,0)
console.log("C ",arr)
*/

const marvel_heros=["Ironman","Blackwidow","Captain America"]
const dc_heros=["Batman","Wonderwoman"]

const all_heros=[...marvel_heros,...dc_heros]

console.log(all_heros)

console.log(Array.of(...marvel_heros,...dc_heros))

