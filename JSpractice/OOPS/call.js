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


