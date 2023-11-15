class User{

    constructor(username,emmail)
    {
        this.username=username
        this.cat=username+emmail
    }

}


class Teacher extends User{

constructor(username,email,password)
{
    super(username,email)
    this.email=email
    this.password=password
    //this.newcat=username+email
}


addcourse(){

console.log(`This course has been added by ${this.username}`)
}

}


const teacher1=new Teacher("Chaiaurcode","chai@gmail.com","abc@34")

teacher1.addcourse()
console.log(teacher1.cat)


function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
  };
  
  function Dog(name) {
    Animal.call(this, name);
  }

  const dog1=new Dog("tommy")
  console.log(dog1.name)

  