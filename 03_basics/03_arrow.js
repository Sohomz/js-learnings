//This keyword is used to use the variable in the same context {}

const user1={
    userName:'U1 Mukherjee',
    price:405,

    callWelcomeMSG: function() {
        console.log(`${this.userName}, welcome here`) //userName is defined here in this context,so to use this, we need this keyword like this.userName
        console.log(this);
    }
}

user1.callWelcomeMSG();
user1.userName="Sam";
user1.callWelcomeMSG();

console.log(this); // it'll return blank {} in node env,but in browser window will come


const callingOne=function one(){
    console.log(this);//this will give a largeresult that we can use
    let one_s='gg'
    console.log(this.one_s) //undefined because this will not work inside function, this keyword we can only use in object
}

callingOne()

const callingTwo=()=>{
    
    let two_s='ggii'
    console.log(this.two_s) //undefined because this will not work inside function, even if its arrow function , this keyword we can only use in object
}

callingTwo()


// const addTwo = (num1, num2) => {
//     return num1 + num2 // explicit return because {} return keyword we need to specify
// }

// const addTwo = (num1, num2) =>  num1 + num2 // no need to specift return, implicit return, but dont use {}

// const addTwo = (num1, num2) => ( num1 + num2 ) // no need to specift return, implicit return, but dont use {}

const addTwo = (num1, num2) => ({username: "Sohom user 2"}) // here we are returning an object, if I use only {} braces like object, it will return undefined. So, return withing () if its object


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()