function setUsername(username)
{

this.username=username

}

function createUser(username,email,password){

setUsername.call(this,username)
this.email=email
this.password=password

}


let user1=new createUser("Mohit","mohit@gmail.com","abcd@21")

console.log(user1)


function sayHello(greeting){

console.log(`${greeting} ${this.name} and your city is ${this.city}`)

}

const person={
    name:"John David",
    city:"kota"
}

sayHello.call(person,"Hello!")

// In the above example:

// sayHello is a function that expects a greeting parameter.
// person is an object with a name property.
// sayHello.call(person, 'Hello') invokes the sayHello function with
// this set to the person object and passes 'Hello' as the greeting parameter.

