//Study Object literal

//Why we use new keyword, because using one object literal, with this "new" keyword, we can make more objects. No need to define user1, user2 etc. Just write the object called "user" and then const user2=new User(), const user3=new User(). This will take less memory too.

//"new" keyword is a constructor function

const user = {
    username: "sohom",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}// this keyword is used when we are telling about current context. Why this is needed because suppose we are using map function in arr1, arr2, arr3. Now how map function will know wheather to take arr1 context or arr2 context or arr3 context. Thats why we are using this keyword dso that it will know the current context which needed to be used.



console.log(user.username) //sohom
console.log(user.getUserDetails()); //this means current context that means whole object will print
// {
//     username: 'sohom',
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails: [Function: getUserDetails]
//   }
console.log(this);// this is global context, whatever we are defining globally that will be printed here, in node if we are explicitly not defining any global object or varibales, then it will print {}, but in browser if u run it, it will print the "window" object, because in browser windows is a global object


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this //this is not mandatory to return "this", impicitly js returns "this". You can comment this line, you will get same o/p
}

// const userOne = User("sohom", 12, true)
// const userTwo = User("ChaiAurCode", 11, false)// if we are not using new keyword then userTwo will overwrite userOne, similarly whatever comes last will overwrite the prev one.. Thats why use new keyaord
const userOne = new User("sohom", 12, true) //whenever using "new" keyword, a new object is creating every time --> then a contructor call happens, whatever arguments are there it will pass -> then "this" keyword will inject the passed arguments and you will get the values
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor); // this will print the constructor of the User i.e. [Function: User]
//console.log(userTwo);