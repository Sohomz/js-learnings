//why call is needed

function f1(userName){
    this.userName=userName //here "this" is using "this" of f2
    console.log('f1 called');
    
}

function f2(name, email, pwd){
    f1.call(this,name) //now here I can use this.name=name, but instaed of that I am calling a separate function to do it i.e. f1
    this.email=email
    this.pwd=pwd
}

const callingFunction=new f2('Sohom','shm@eg.com','1234')
console.log(callingFunction);

// f1 called
// f2 { userName: 'Sohom', email: 'shm@eg.com', pwd: '1234' }

//now see above the issue is resolved

