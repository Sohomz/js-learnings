function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

const addFive = makeAdder(5);
console.log(addFive(2)); // Output: 7
console.log(addFive(10)); // Output: 15

/*When makeAdder(5) is called, a local variable x is created with the value 5.
It then returns a new, anonymous inner function.
This inner function is the closure. It maintains a reference to its lexical environment, which includes the variable x.
Even after makeAdder has finished executing, the addFive closure still has access to x. When addFive(2) is called, it correctly uses the remembered value of x (which is 5) to return the sum (7). 



What is Lexical Scope?
Lexical scope defines the accessibility of variables and functions depending on their location in the source code. Variables and functions have different levels of scope:

Global Scope: Variables defined outside any function or block, accessible anywhere in the program.
Local Scope: Variables defined inside a function or block, accessible only within that specific function or block.
Nested Scope: Inner functions have access to variables in their parent functions.
Block Scope: Variables defined with let and const are limited to the block they are declared in, like loops or conditionals.


function outerFunction() {
  const outerVar = "I am from the outer scope!"; // Lexical scope of innerFunction

  function innerFunction() {
    console.log(outerVar); // innerFunction can access outerVar
  }

  innerFunction();
}

outerFunction(); // Output: "I am from the outer scope!"
// console.log(outerVar); // ReferenceError: outerVar is not defined (cannot access child scope from parent scope)
*/