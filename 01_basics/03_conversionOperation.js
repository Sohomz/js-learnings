let score="33"
//console.log(typeof score) //string

let score1=33
//console.log(typeof score1) //number

let score2="33abc"
let valueInNumber=Number(score2)
//console.log(valueInNumber) //NaN
//console.log(typeof valueInNumber) //number


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

let someNumber=34
let someNumberString=String(someNumber)
console.log(typeof someNumberString, someNumber) //string 34


