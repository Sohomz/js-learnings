//there are mainky two promises things, 1. Creation 2. Consumption
//To create a promise we can use "new Promise"

const promiseOne=new Promise(function (resolve,reject) { //Promise always call resolve if no err, reject if err, we can handle that, its always a call back function
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete')
    },1000)
    resolve() //calling this to print promiseOne.then console log
})

//Now to handel if it resolved or got err we use then/async-Await, then -> resolved, catch -> err, finally / async-await try catch finally

promiseOne.then(function(){
    console.log("Then is called, and it has direct connection to 'resolve'"); // now this will not print, we have to call resolve in above function to print this line
})


/******************************************************************************************************************** */


//without creating a constant we can create Promise with new keyword directly
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async 2 task is complete')
    },2000)
    resolve() //now qs is where to write this resolve functionality, ans is, as we are not creating a separate const varibale to store the Promise, we can directly put .thn here
}).then(function(){
    console.log("promise Two called")
});


/******************************************************************************************************************** */

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Sohomz", email: "shm@example.com"}) //we can pass param in resolve
    }, 3000)
})

promiseThree.then(function(user){ //here user variable is holding the resolve param
    console.log(user.username); //Sohomz
    console.log(user); //{ username: 'Sohomz', email: 'shm@example.com' }
})

/******************************************************************************************************************** */

// Now how to handel if any err occurs with .then .catch

const promiseFour=new Promise(function(resolve,reject){
    let err=false // we are handling this using this variable err, true means err will happen
    setTimeout(function(){
        console.log('Calling from Promise four, handling err if any');
    },4000)
    if(!err){
        resolve({username: "PromiseFour", pwd: "1234"})
    }
    else{
        reject("ERROR happened, err variable is set true")
    }
}).then((user1)=>{
    console.log("user1 will print if the variable err is false i.e. called by .then",user1);
    //user1 will print if the variable err is false i.e. called by .then { username: 'PromiseFour', pwd: '1234' }
})
.then(()=>{
    console.log(user1.pwd); //chaining
    
})
.catch(function(e){
    console.log("err occured, user1 will not print, err variable is set to true, inside catch block");
    
})

/******************************************************************************************************************** */

//Now Promise with async Await try catch

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        //let error = true //ERROR: JS went wrong
        let error = false //{ username: 'javascript', password: '123' }
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 5000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

//need to call separately this function
consumePromiseFive()

/******************************************************************************************************************** */

//async with url Fetch()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data[0]);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

/******************************************************************************************************************** */

//Using the above code, rewrtining using .then .catch and .fetch

const promiseSix=new Promise(function(resolve,reject){
    const response = fetch('https://jsonplaceholder.typicode.com/users') // no need to write setTimeout because fetch itself is a async, we were using setTimeout for e.g. got make a sync functionality
     resolve(response)
}).then(function(r){
    return r.json()
})
.then((u)=>{
    console.log(u[0].id);
    console.log(u[2]);
    
})
.catch((er)=>{
    console.log("E: ", er);
    }
)


/**********************************************************************************************************/
//Check promise.all

// The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]