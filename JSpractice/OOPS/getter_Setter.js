class User {

    constructor(x, y) {
        this.name = x
        this.password = y
    }

    get name() {

        console.log("get")
        return `${this._password}kaushik`
    }


    set name(val) {
        console.log("Set")
        this._password = val.toUpperCase()

    }

}


//const user1 = new User("Mohit", "abc")

const person = {
    _name: 'mohit', // Conventionally, properties that are intended to be private are prefixed with an underscore

    // Getter
    get name() {
        console.log('Getting name');
        return this._name.toUpperCase();
    },

    // Setter
    set name(newName) {
        console.log('Setting name');
        this._name = newName;

    }
};

const tea = Object.create(person)
console.log(tea); // Output: {}
console.log(tea.name); // Output: Getting name

// In the first console.log(tea), you see {} because the 
// tea object itself doesn't have any own enumerable properties. 
// The properties are inherited from the person 
// object through the prototype chain.

