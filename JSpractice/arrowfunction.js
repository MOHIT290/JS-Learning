const user={

username:"Mohit",
age:25,
designation:"Software Engineer",

// If used arrowfunction then it will throw error
welcome:function(){
console.log(`Hello ${this.username}`)
console.log(this)

}

}

user.welcome()
user.username="Github"
user.welcome()

//console.log(this)


const learn=()=>{
console.log(this)
}

learn()

/*
const add2numbers=(n1,n2)=>{n1+n2}
Output of above line will be "undefined" cz in same line PARENTHESIS should be used 
*/
const add2numbers=(n1,n2)=>(n1+n2)
console.log(add2numbers(4,98))

const returnobj=(price)=>{
    return {system:"Dell",price:price}
}

console.log(returnobj(45))