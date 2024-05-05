//How many data-types in JS?
//There are two types Primitive, Non-primitive. Based on how one datatypes stored into the memory and how can we access from the memory.
// # Primitive (call by value) - 7 types: String, Number, Boolean, NULL, undefined, Symbol, BigInt

// # Non primitive (call by reference) - Array, Objects, functions (mainly called object function)


//JS is dynamic typed or statically?
//JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them. For e.g. if I give let n=100, here I am not telling js that n must be a number. Later if I give n="I am good" then js will automatically changes the datatype of variable "n" from number to string

const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id===anotherId) //false....value is same but as we used Symbol its coming as false


//array
const heros=["IronMan","Netaji","Vivekananda"];

//object
let myObj={
    name:"Sohom",
    age:25
}


//function
const myFunction= function (){
    console.log("hello world");
}

l

