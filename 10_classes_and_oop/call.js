//why call is needed
//suppose one function is calling another function, now we know abt stack, one after another it will store the functions i.e. if f1() is calling f2(), 
//function f1(){
    //   f2()
    // }
//then as per stack after global context, it will store f1, then f2

//now in f2, if someone want to use the f2 context, then "this" keyword will be used, but f2 will not find "this" ref because f1() not executed stil and f2 doesnt have ref to f1. In this case "this" keyword will refer to the "global context". Now in browser global context is "window", but in node.js its {}. So here is the issue

function f1(userName){
    this.userName=userName
    console.log('f1 called');
    
}

function f2(name, email, pwd){
    f1(name) //now here I can use this.name=name, but instaed of that I am calling a separate function to do it i.e. f1
    this.email=email
    this.pwd=pwd
}

const callingFunction=new f2('Sohom','shm@eg.com','1234')
console.log(callingFunction);

// f1 called
// f2 { email: 'shm@eg.com', pwd: '1234' }

//now see above this is the issue, the "name" is not printing, f1 is called for sure "f1 called" printed, but as the context is not present, it cant refer f2. To solve this we need to add call(this,f1) , now "this" will be passed as ref to f1. check call2.js code

