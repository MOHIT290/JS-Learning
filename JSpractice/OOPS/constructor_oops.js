function details(username, login, desig) {

    this.username = username
    this.login = login
    this.desig = desig

    //return this
}

const user1 = new details("Mohit", "mk@gmail.com", "ASE")
const user2 = new details("Dell", "Laptop@gmial.com", "Service")


details.prototype.greeting = function () {

    console.log(`My name is ${this.username}`)

}

user2.greeting()

// A new object is created: The new keyword initiates the 
// creation of a new JavaScript object.

// A prototype is linked: The newly created object gets linked 
// to the prototype property of the constructor function. This means that it has 
// access to properties and methods defined on the constructor's prototype. 


const Teacher = {
    isAvailable: 'Anytime',
    expertise:"Maths"
}

const TAsupport = {

    makeassignment: 'JS assignment',
    fulltime: true,
    __proto__: Teacher

}

console.log(TAsupport.isAvailable)


//Modern syntax for Prototypal inheritance

Object.setPrototypeOf(TAsupport,Teacher)

console.log(TAsupport.expertise)

let str="Diwali     "
let str2="Dhanteras   "

String.prototype.truelength=function(){

console.log(`Length of the string is ${this.trim().length}`)

}


str.truelength()
str2.truelength()