/*
In JavaScript, the call stack and global execution context are fundamental concepts 
related to how code is executed in the language. Let's break down each of these concepts:

1) Call Stack:

The call stack is a data structure in JavaScript that keeps track of the execution context 
of a running program. It's a stack-like structure (a last-in, first-out data structure) that
records which functions are currently being executed and in what order.
When a function is called, a new item is pushed onto the call stack, 
and when the function returns, the item is popped off the stack.


The call stack is crucial for maintaining the order and flow of function execution in JavaScript. 
It helps ensure that the most recently called function is the one that returns next.


2) Global Execution Context:

The global execution context is the initial execution context when a 
JavaScript program starts running. It represents the top-level scope in your 
code and includes the following elements:

The global object (e.g., window in a browser or global in Node.js).
The this keyword, which is initially set to the global object.
A reference to the outer (enclosing) environment, which is null in the global context.
Declarations of variables and functions in the global scope.
When the JavaScript engine begins executing your code, it starts with the 
global execution context. It defines global variables and functions and executes the 
statements within the global scope.


  */
