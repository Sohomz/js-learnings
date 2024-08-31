class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) //Teacher.call(this,username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);

////////// Behind the scene ///////////////////

function User2(userName) {
        this.userName = userName
}

User2.prototype.logMe=function(){
        console.log(`USERNAME is ${this.userName}`); //use the variable same userName
    }

function Teacher2(username, email, password){
        User2.call(this,username) //check below writing
        /*In JavaScript, when you use User2.call(this, username) inside the Teacher2 constructor, it only sets up the properties but does not link the prototype chain. To fix this, you need to set the prototype of Teacher2 to be an instance of User2. */
        this.email = email
        this.password = password
    }

// Set up the prototype chain using Object.setPrototypeOf
Object.setPrototypeOf(Teacher2.prototype, User2.prototype);

//Teacher2.prototype.addCourse=()=>{
    Teacher2.prototype.addCourse=function(){
        console.log(`A new course was added by ${this.username}`);
    }
    // Arrow functions do not have their own this context; they inherit this from the surrounding lexical context. Since this in the arrow function does not refer to the instance of Teacher2, this.username will be undefined. Use a regular function instead:


const chai2 = new Teacher2("chai2", "chai2@teacher.com", "1232332")

chai2.logMe
const masalaChai2 = new User2("masalaChai2")

masalaChai2.logMe()

console.log(chai2 instanceof Teacher2); //true
console.log(chai2 instanceof User2);

/*The reason console.log(chai2 instanceof User2); returns false is because the prototype chain is not correctly set up for Teacher2 to inherit from User2.

