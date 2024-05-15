"use strict"

const score=400
console.log(score); //This is a number

const balance=new Number(650);
console.log(balance); //this is object [Number: 650]this hasprototypes also like fixed, valueOf etc


console.log(balance.toString().length); //3
console.log(balance.toFixed(2));// 650.00 this is a prototypeof number and thisis used to commercial websites where after . how many decimal digits needed


const otherNumber1=23.858656
console.log(otherNumber1.toPrecision(2)) // 24 always check from left in 23.858656 --> two digits 2 and 3, so precised to 24 as a String

const otherNumber2=123.858656
console.log(otherNumber2.toPrecision(4)) // 123.9 always check from left in 123.858656 --> 4 digits 1,2,3 and 8, so precised to 123.9 as a String

const otherNumber3=124.858656
console.log(otherNumber3.toPrecision(2)) // 1.2e+2 always check from left in 124.858656 --> 2 digits 1,2...exponential took as precision as a String


const hundreds=1000000000
console.log(hundreds.toLocaleString()); //US standard with commas 1,000,000,000
console.log(hundreds.toLocaleString('en-IN')); //US standard with commas 1,00,00,00,000 in Indian number standard


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); //4
// console.log(Math.round(4.6)); //5....5 up means 5, .5 low means 4
// console.log(Math.ceil(4.2)); //5
// console.log(Math.floor(4.9)); //4
// console.log(Math.min(4, 3, 6, 8)); //3
// console.log(Math.max(4, 3, 6, 8)); //8

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

//How to take any random number between a range
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
