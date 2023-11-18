//In JavaScript, the value of this is determined 
//by how a function is called. Here are some common scenarios:


// 1.) Global Context:

// If a function is invoked in the global scope (outside of any function or object)
// , this refers to the global object, which is usually
// window in a browser environment.

function globalFunction() {
    console.log(this); // Points to the global object (e.g., window in a browser)
}

globalFunction()


// 2.) Function Context:

// When a function is a method of an object, this refers to 
// the object the method was called on.

const obj = {
    method: function() {
        console.log(this); // Points to the object 'obj'
    }
};
obj.method();


// 3. Constructor Context:

// When a function is used as a constructor with the 
// new keyword, this refers to the newly created instance.

function ConstructorFunction() {
    console.log(this); // Points to the newly created instance
}
const instance = new ConstructorFunction();


// 4. Event Handler Context:

// In event handler functions, like those used with addEventListener, 
// this often refers to the DOM element to which the event is attached.

/*
document.getElementById('myButton').addEventListener('click', function() {
    console.log(this); // Points to the DOM element with id 'myButton'
});

*/



// 5. Arrow Function Context:

// Arrow functions do not have their own this binding. 
// They inherit the this value from the enclosing (surrounding) scope.

const arrowFunction = () => {
    console.log(this); // Inherits 'this' from the enclosing scope
};
arrowFunction(); // The value of 'this' depends on where arrowFunction is defined


/*NOTE:

It's important to note that the value of 'this' is not 
determined by where a function is written, but by how it is called.

*/

