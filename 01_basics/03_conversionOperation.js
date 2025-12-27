let score="33"
//console.log(typeof score) //string

let score1=33
//console.log(typeof score1) //number

let score2="33abc"
let valueInNumber=Number(score2)
//console.log(valueInNumber) //NaN
//console.log(typeof valueInNumber) //number because NaN is number


let score3=null
let valueInNumber1=Number(score3)
//console.log(typeof valueInNuber1)//number
//console.log(Number(score3)) //0

let score4=undefined
let valueInNumber2=Number(score4)
//console.log(typeof valueInNuber2)//undefined
//console.log(Number(score4)) //NaN


let score5=true
let valueInNumber3=Number(score5)
//console.log(typeof valueInNuber3)//undefined
//console.log(Number(score5)) //1 ---false 0

//"33" => 33
//"33abc" =>NaN
//true => 1;false => 0

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn) //true

// 1=>true;0=>false
//"" =>false
//"sohom"=> true

let someNumber1=34
let someNumberString=String(someNumber1)
console.log(typeof someNumberString, someNumber1) //string 34


let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32 

/*
This 32 is beacuse js check what comes first, if 
number is coming at first,convert all of it as number. 
On other hand, if stringis coming first, then treat rest of the items as String)
*/

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter; //pre increament will increamnet the variable first and then it will return the value after increamenting, post increament will increamnet the variable first and then it will return the value before increamenting
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion