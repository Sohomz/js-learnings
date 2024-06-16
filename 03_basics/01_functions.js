function sayMyName(myName){
    let i=0;
    for (i=0;i<myName.length;i++){
        console.log(myName[i]);
    }
        
}

const nameString='Sohom Das';
sayMyName //reference of a function, its just telling there is a function, but will do nothing
sayMyName(nameString); //execution

//reference for a function --> sayMyName
//execution --> sayMyName()



/* Sum of two numbers */
 function sumTwoNumbers(n1,n2){
    let s=0;
    s=n1+n2;
    console.log(s);
    return s;

 }

 const result=sumTwoNumbers(2,3); //return in function, if not given then result will br undefined
 console.log("result = ",result);


//REST ... operator
//REST operator will take all the arguments and return as array
 function calculateCartPrice(...cartPrice1){
    let total=0
    for (let j=0;j<cartPrice1.length;j++){
        total+=cartPrice1[j];
    }
        return total;
 }

 console.log(calculateCartPrice(200,400,600));



 function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){//anyobject you can pass its a keyword
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
