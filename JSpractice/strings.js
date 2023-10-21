const score="45t"
const scorenum=Number(score)
const name="Mohit"
// console.log(typeof score)
// console.log("213">45)
 //console.log(scorenum)

// console.log(null>0)
// console.log(null==0)
// console.log(null>=0)

/* 
The reason is that an equality check == and comparisons  
> < >= <= work differently. 
Comparisons convert null to a number, treating it as 0.
*/

const arr=["Terminal","Leetcode"]

console.log(typeof arr)

// Stack(Primitive) and Heap(Non-Primitive)

const user1={
    name:"Mohit",
    email:"mohit@g.com"
}

const user2=user1

user2.email="terminal@g.com"
const str=new String("95a6rta")

const s2=str.toLocaleUpperCase();
console.log(s2)
console.log(str.indexOf('a'))

const anotherstring=s2.slice(-6,5)

console.log(anotherstring)
const url="https//music%976al-space%98id-987.com";

console.log(url.replaceAll('%',' '))

console.log(`Hello my name is ${name} and my email id is ${user1.email}`)

