const mySym=Symbol("key")

const obj={

name:"Mohit",
[mySym]:"key4",
aspiration:"paisakamana"

}

obj.greeting=function(){

console.log(`Hello User ${this.name}`)

}

// console.log(obj)
// console.log(obj.greeting())

const newobj={}

newobj.id=3
newobj.fullname="Mohit Kaushik"

const newobj2={}

newobj2.debug="DEBUG CONSOLE"
newobj2.match="IND VS NZ"
// console.log(newobj)

// The object.assign() static method copies from one or more objects source objects
// to a target object. It returns modified target object

const newobj3=Object.assign({},newobj,newobj2)
console.log(newobj3)
console.log(newobj)
console.log(Object.keys(newobj3))

const {fullname}=newobj

console.log(fullname)


