//learning link: https://www.w3schools.com/js/js_string_methods.asp

const myName="sohom";
const repoCount=6;

//old way
console.log('Hello my name is '+myName+' and repocount is '+repoCount);

//new way
console.log(`Hello my name is ${myName} and repocount is ${repoCount}`); //String Interpolation

/* Another good method to declare a String cause in this way we can get more prebuild function like CharAt, length etc and along with it its a key value pair like String "ulala" 0:'u', 1:'l' ,2:'a', 3:'l', 4:'a'*/
const gameName=new String('Lies of P');
console.log(gameName[0]);
console.log(gameName.__proto__); // to use prototype func like toUpperCase, toLowerCase, but without proto also this can be accessible gameName.__proto__.toUpperCase() or gameName.toUpperCase() same
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(8)); // if I give wrong valuewithout number like gameName.charAt('gg') it will return the First character i.e. L as output. And If I am exceeding the limit charAt 9 or 10, it will return blank
console.log(gameName.indexOf(8)); //-1 ast not found
console.log(gameName.indexOf('L'));//0 first occurance
console.log(gameName.substring(0,4)); //Lies //0,1,2,3
console.log(gameName.slice(0,4)); //Lies
console.log(gameName.slice(-8,4));// ies\b

const newString2="    m         jjj   ";
console.log(newString2.trim());//m         jjj
console.log(newString2.replace('m','P'));//    P         jjj 
console.log(newString2.includes('jjj')); //true // else if not found false

//convert String to arrayusng Split
const stringToArrayUsingSplit=gameName.split(' ');
console.log(stringToArrayUsingSplit);