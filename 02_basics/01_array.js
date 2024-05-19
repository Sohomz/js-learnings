const arr1=[1,2,3,4,5,6]
console.log(`Main array is: ${arr1}`);

//Push one element in the array in the end
arr1.push('99');
console.log(`After push '99': ${arr1}`);

//pop one element in the array from the end
arr1.pop()
console.log(`After pop: ${arr1}`);//'99' popped


//UnShift the array towards left and insert 101
arr1.unshift(101)
console.log(`After unshift and put 101 at start: ${arr1}`); 

//Shift the array towards left
arr1.shift()
console.log(`After shift 101 gone: ${arr1}`); 
arr1.shift()
console.log(`Another shift 1 gone: ${arr1}`); 

console.log(`Indexof used to check if the value exists return the index of it ${arr1.indexOf('99')}`); //-1 as '99' not present in arr1

console.log(`Indexof used to check if the value exists return the index of it ${arr1.indexOf(4)}`); //2, as 4 is present in arr1

console.log(`Includes used to check if the value exists return boolean : ${arr1.includes(4)}`); //true, as 4 is present in arr1

console.log(`Includes used to check if the value exists return boolean : ${arr1.includes('ljbvkjjkj')}`); //false


//How to convert an Array to a String
const myArr=new Array(4,3,2,4,57,99);
const myArrString=myArr.join();

console.log(`main array before changing the dataType of the array is :`)
console.log(myArr)
console.log(`using Join() we can convert an array to a String`);
console.log(myArrString);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)//1 and 3 are positions
console.log(myn1);//using slice will not change the original array, it will return the values from position 1 to 2 i.e. 3,2

console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2); //using Splice will change the original array, it will change the original array as we gave position 1 to 3, and the other values will be removed from the array 4,57,99