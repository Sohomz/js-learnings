//why Math.PI is not changable

const d=Object.getOwnPropertyDescriptor(Math,'PI') //'PI' property name
console.log(d); //writable is false thats why we cant change it

// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }

//Now can we make our own object as not iterable/writable/enumerable? Yes we can by using defineProperty

const chai = {
    name: 'ginger chai',
    price: 20,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

//enumerable false menas?
//lets loop through object

for (const [key,value] of Object.entries(chai)) {//cant put direct "of chai" because chai is object and its not iterable, so changing it

    //to avoid function printing
    if(typeof(value)!='function'){
        console.log(`${key} ; ${value}`); 
    }


    //now if we make enumerable as false then "name" we cant take inside loop

    //Before
    /*
    name ; ginger chai
price ; 20
isAvailable ; true
    */


// after enumerable false
/*
price ; 20
isAvailable ; true
*/
}
/*
name ; ginger chai
price ; 20
isAvailable ; true
orderChai ; function(){
        console.log("chai nhi bni");
    }
        //Now we dont want function to be printed
        */
