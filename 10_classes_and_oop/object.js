// In JavaScript, a prototype is a mechanism by which objects inherit properties and methods from one another. Every JavaScript object has a prototype, which is another object from which it inherits properties and methods.

// Here’s a brief overview:

// Prototype Property: Every function in JavaScript has a prototype property, which is an object. This property is used to add properties and methods to a constructor function.
// JavaScript

function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
}

Person.prototype.fullName = function() { //here in this code we are adding a property called fullname using prototype. We made it outside the above object called Person i.e. explicitly
    return this.firstName + " " + this.lastName;
};

let person1 = new Person("John", "Doe");
console.log(person1.fullName()); // Outputs: John Doe //new keyword is v.v. imp here, if you are not giving i.e. let person1 = Person("John", "Doe"); it will throw err because it will not found  fullname() property because its defined explicitly using prototype. If not using new keyword, then it will be undefined, js not gonna find that. JS for the first go, gonna find that inside Person i.e. firstName and lastName, but not fullname. if fullName is defiend inside that Person object/function, then it was fine.


// Prototype Chain: When you try to access a property of an object, JavaScript will first look at the object itself. If the property is not found, it will look at the object’s prototype, and then the prototype’s prototype, and so on, until it finds the property or reaches the end of the chain (which is null).
// Inheritance: Prototypes allow for inheritance in JavaScript. For example, if you create a new object from a constructor function, the new object will inherit properties and methods from the constructor’s prototype.
// JavaScript

let person2 = new Person("Jane", "Smith");
console.log(person2.fullName()); // Outputs: Jane Smith //no need to write protype.fullName() because JS is handling that implicitly, avaScript will first look at the object itself. If the property is not found, it will look at the object’s prototype, and then the prototype’s prototype, and so on, until it finds the property or reaches the end of the chain (which is null).


// Modifying Prototypes: You can add new properties or methods to an existing prototype, which will be available to all instances of the object.
// JavaScript

Person.prototype.greet = function() {
    return "Hello, " + this.firstName;
};

console.log(person1.greet()); // Outputs: Hello, John
console.log(person2.greet()); // Outputs: Hello, Jane



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/