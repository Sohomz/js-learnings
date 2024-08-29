let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// we all know that array, function, String etc all trated as Objects in JS, so it will all pass through Object. Now we are adiing this hitesh function in Object level, that means this hitesh function will be available for array, string, function etc. 
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
} // heyHitesh function we wrote in Array level, so it will be available in myHeros, but not in heroPower

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // this is to link TASupport and TeachingSupport. that means TASupport can access TeachingSupport props/proto
}

Teacher.__proto__ = User //Teacher is also an object, we are connecting Teacher props with User so that Teacher can also use props of User. Syntax is just diff. But we can do that

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) // this is the same working principal but modern syntax, behind the scene __proto__ is going on, but modern syntax. Here we are setting TeachingSupport can access Teacher props (setPrototypeOf(who is taking, from whom))


///Example where in all String level we can access trueLength function
let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength() // directly using string
"iceTea".trueLength() //directly using string