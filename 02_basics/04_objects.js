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
