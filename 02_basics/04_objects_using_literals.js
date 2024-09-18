//In java objects can be declared in two ways
//One is Literals, another is using Constructor
//Using constructor --> Singleton design pattern can be made, only one object (use static, private to make it secure) --> Objects.create
//Using literal --> not a singleton design pattern (multiple objects created using New key word) --> const o1={}

/************************************************ */

const mySym=Symbol('key1'); //use this symbol into an object and print the value
const mySym2=Symbol('key2');

// Object declare via literals
const JsUser={
    name:'Sohom', //Key value pair, like in array key is 0th position, 1st positions etc and the values
    "full name":'Sohom Das',
    mySym:'myKey1', //wrong way to use as a symbol
    [mySym2]:'myKey2',//correct way to use as a symbol for this object
    age:25,
    location:'West Bengal',
    emailID:'shm345@gmail.com',
    isLoggedIn:false,
    lastLoggedInDays:["Mon","Sat"],
    greetingsTwo:function(){
        return(`Jhinku from greetingsTwo func using this keyword as this is accessing same object values : age is ${this.age}`)
    }
}

//Access object in two ways
console.log(JsUser.emailID);
console.log(JsUser["emailID"]); // this is needed if variable name has a space like "full name"
console.log(JsUser["full name"]);
console.log(JsUser["mySym"]);//myKey1 --> but this is not what we wanted, because this is a string type not the symbol
console.log(typeof(JsUser["mySym"]));//String

//You need to correct the syntax to use that mySym2 as a symbol
//[]
console.log(typeof(JsUser["mySym2"]));//undefined because it converted to symbol
console.log(typeof(JsUser[mySym2]));//undefined because it converted to symbol


//Reassign an object key
JsUser.emailID='xyz@gmail.com'

//To freeze an object to stop changes
//Object.freeze(JsUser); //commenting this line as I cant do further changes to the object like adding a function etc
JsUser.emailID='aBc@outlook.com' // this value is not gping to overwrite the object value because the object already freeze
console.log(JsUser); //anyway other way ours mySym2 now is a symbol//[Symbol(key2)]: 'myKey2'

//Adding a function explicitly
JsUser.greetings=function() {
    return("Something somthing");
    
}


console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());

// Symbols in JavaScript are a powerful feature that provide unique and immutable identifiers for object properties. Here are the key concepts for using symbols:

// 1. Uniqueness
// Each symbol is unique, even if two symbols have the same description.
// JavaScript

// const sym1 = Symbol('description');
// const sym2 = Symbol('description');
// console.log(sym1 === sym2); // false
// AI-generated code. Review and use carefully. More info on FAQ.
// 2. Immutability
// Symbols are immutable, meaning their value cannot be changed once created.
// 3. Symbol as Property Keys
// Symbols can be used as keys for object properties, ensuring that the property keys are unique and do not conflict with other keys.
// JavaScript

// const mySym = Symbol('myKey');
// const obj = {
//   [mySym]: 'value'
// };
// console.log(obj[mySym]); // 'value'
// AI-generated code. Review and use carefully. More info on FAQ.
// 4. Hidden Properties
// Properties keyed by symbols do not appear in standard property enumerations like for...in, Object.keys(), or JSON.stringify().
// JavaScript

// const mySym = Symbol('myKey');
// const obj = {
//   [mySym]: 'value',
//   normalKey: 'normalValue'
// };
// console.log(Object.keys(obj)); // ['normalKey']
// console.log(JSON.stringify(obj)); // {"normalKey":"normalValue"}
// AI-generated code. Review and use carefully. More info on FAQ.
// 5. Retrieving Symbol Properties
// You can retrieve symbol properties using Object.getOwnPropertySymbols() or Reflect.ownKeys().
// JavaScript

// const mySym = Symbol('myKey');
// const obj = {
//   [mySym]: 'value'
// };
// const symbols = Object.getOwnPropertySymbols(obj);
// console.log(symbols); // [ Symbol(myKey) ]
// console.log(obj[symbols[0]]); // 'value'
// AI-generated code. Review and use carefully. More info on FAQ.
// 6. Global Symbol Registry
// Symbols can be registered globally using Symbol.for() and retrieved using Symbol.keyFor(). This allows for shared symbols across different parts of an application.
// JavaScript

// const globalSym = Symbol.for('globalKey');
// const sameGlobalSym = Symbol.for('globalKey');
// console.log(globalSym === sameGlobalSym); // true
// console.log(Symbol.keyFor(globalSym)); // 'globalKey'
// AI-generated code. Review and use carefully. More info on FAQ.
// 7. Well-Known Symbols
// JavaScript has several built-in symbols known as well-known symbols. These symbols represent internal language behaviors and can be used to customize object behavior.
// JavaScript

// class MyClass {
//   Symbol.toStringTag {
//     return 'MyClass';
//   }
// }
// const instance = new MyClass();
// console.log(instance.toString()); // '[object MyClass]'
// AI-generated code. Review and use carefully. More info on FAQ.
// Symbols are particularly useful in scenarios where you need to ensure that object properties are unique and do not conflict with other properties, especially in large codebases or when integrating with third-party libraries.
