//there are many ways to declare an object
const objUser=new Object()  //--> this is singleton object
//const objUser={} --> this is not singleton

objUser.id="123abc"
objUser.name="User1"
objUser.isLoggedIn=false

const regularUser={
    email:"something@gmail.com",
    fullname:{
        firstName:"Some",
        lastName:"Thing"
    }
}

console.log(regularUser.fullname.firstName);


//combine one or more objects into a single object using assign
const obj1={1:'One', 2:'two'}
const obj2={3:'a', 4:'b'}
const obj3=Object.assign({},obj1,obj2) //{} is for all obj1 (source) and obj2 (source) will be added to this {} (Target). If we are not giving this that also fine, result will be same
const obj4={...obj1,...obj2} // same as we did in Array using Spread operator

console.log(obj3) //{ '1': 'One', '2': 'two', '3': 'a', '4': 'b' }
console.log(obj4)

const users=[
    {id:1,email:'user1@gmail.com'},
    {id:2,email:'user2@gmail.com'},
    {id:3,email:'user3@gmail.com'},
]
console.log(users[0].email)

//Very important to take the object Keys
console.log(Object.keys(objUser)); //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(objUser)); //[ '123abc', 'User1', false ]
console.log(Object.entries(objUser)); //[ [ 'id', '123abc' ], [ 'name', 'User1' ], [ 'isLoggedIn', false ] ]
console.log(objUser.hasOwnProperty('id')); //true if the key exist

/*********************************************************************** */

const course={
    courseName:"js in handi",
    price:"999",
    courseInstructor:"Hitesh"
}

//just a syntax value, if we dont want to 
const {courseInstructor: cI}=course //destructure, I can assign an alternative name also like cI
console.log(cI)

//Json file also returns objects as {} or in array format []. So, after taking response from an API, we can manipulate the data.