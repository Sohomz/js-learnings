// Dates

/*
// toString() : Sun May 07 2023 14:16:39
// toDateString() : Sun May 07 2023
// toTimeString() :14:19:03 GMT+0500 (Pakistan Standard Time)
// toLocaleString() : 5/7/2023, 2:20:24 PM
// toISOString() : 2023-05-07T09:21:22.167Z
// toUTCString() : Sun, 07 May 2023 09:24:48 GMT

*/

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023") //predefined date
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

 console.log(myTimeStamp);//milisecs used to compare between dates
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); //Month starts from 0, as this is an array,not followed though in DD-MM-YYYY format,but followed in single digits MM
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `


//to get the format as we want
newDate.toLocaleString('default', {
    weekday: "long",
    
})

console.log(newDate);