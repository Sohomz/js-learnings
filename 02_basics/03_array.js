const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros);
console.log(`Here in this PUSH way merge or concat will not work, check the array now after push: `); 
console.log(marvel_heros);//here merge will not happen, instead dc_heros will be a single array element of marvel_heros
//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//To access the array inside array
console.log(`Accessing array of an array: ${marvel_heros[3][1]}\n`);

//Syntax for concat two arrays
const arr1=['s',33,87,true]
const arr2=[1,2,3,4,5,true,'False']
const concatArr = arr1.concat(arr2)
console.log(`Correct way to concat arrays : `);
console.log(concatArr);


//Using spread, merge two or more arrays in a single line code

const all_new_arr = [...arr1, ...arr2]
console.log('Using Spread all the arr1 and arr2 elements will be spreaded, that means elements within arr1 will be not bound, will treated as single single elements \n');
console.log(all_new_arr);


//Using  FLAT we can remove all the subarrays in make it a single array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)//Infinity is a deapth, till how much deapth you want to falt the array, you can put 0,1 or 2
console.log('After using flat infinity deapth:')
console.log(real_another_array);

const real_another_array_1=another_array.flat(1);
console.log('After using flat 1 depath:')
console.log(real_another_array_1);

//check if its an array
console.log(Array.isArray("Sohom"));

//Convert a String or anything to an array, not Number like 100, it'll return empty []
console.log('Using Array.from');
console.log(Array.from("100"));

console.log('\n');
//Convert a String only to an array
const stringName='Shm'
console.log('Using Split')
console.log(stringName.split(""));

console.log('\n');

//Here it will return nothing because within object it cant access
console.log('It cant access inside object');
console.log(Array.from({name: "Sohom"})) // interesting

console.log('\n');


//If you want to take all varibles and put it into an array
let score1 = 100
let score2 = 200
let score3 = 300
let obj1={name:'SohomDas',
    age:25
}

console.log(Array.of(score1, score2, score3, obj1));
console.log(Array.from(toString(score1)))

