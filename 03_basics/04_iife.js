//Immediately invoked function Expression

// This is a concept to run thse code/function within () to stop the global variable declaration pollutions, like if I declare a variable in global, now inside a function also I'm taking a variable, that need not be overwritten, that why just take a in the function and immediately execute it

(function chai(){ //named iife , name is chai
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //no need to call function explicitly

//This function is just a replica of chai() .... so instead of chai, we put the whole function inside (), and already we told in 03_arrow function, inside () we can declare an object ot function ()(); --> () function, () execution


//below syntax for arrow function

(()=>{console.log('DB CONNECTED TWO');})(); //unnamed iife,arrow function
((myname)=>{console.log(`param pass ${myname}`);})('Sohom');

