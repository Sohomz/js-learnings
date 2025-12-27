// A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.

/* Heap : Example 1 */
let user1={
    email:"user1@gmail.com",
    upi:'user1@okbank'
}

let user2=user1; //same ref as user1, not in "copy"
user2.email='user23@gmail.com'; //changing value in user2, that will reflect in user1 also

console.log(user2); //{ email: 'user23@gmail.com', upi: 'user1@okbank' }

//user1 will have reference in heap, now when I am defining user2=user1, then user2 also taking reference from heap where the user1 has its reference. So, here we are not accessing the "copy" data as we did in stack. So, now when we are chaning the values in user2, then user1 will also reflect.


// A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too. 

/* Stack : Example 1 */

let myName="SohomDas";
let anotherName=myName;
anotherName="ulala"; // changed the anotherName
console.log(anotherName);
// Now qs can come I gave ref of myName into the anotherName, then whats the value of myName?
//Ans is simple, myName will not be altered, because we are using Stack memory, whatever we are chaging is on top of a copy reference but not at the original memory location ref. So, even if anotherNAme variable value updated to "ulala", but myNAme variable value will remain same as "SohomDas".