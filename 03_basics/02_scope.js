var c =800;//global scope


let a=450;
if(true){
    let a = 10
    //console.log("a in block scope LET :",a);//10
    const b = 20
    var c = 30
}//block scope


//console.log("a in global scope LET :",a); //450
//console.log(b);//20
//console.log(c); //dont use var, bad practice //30



function one(){
    const userName='Sohom'

    function two(){
        const userAge='25'
        console.log(userName);//Sohom - no err because one is two's global scope. 
    }
    // console.log(userAge);//error because one can't access two's scope
    two()
}

one();


if (true) {
    const username = "sohomDas"
    if (username === "sohomDas") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);//error due to scope
}

// console.log(username);


// ++++++++++++++++++ interesting hoisiting ++++++++++++++++++


console.log(addone(5))//6 - no error

function addone(num){
    return num + 1
}



addTwo(5)//
// ReferenceError: Cannot access 'addTwo' before initialization because we are holding the value in addTwo variable
const addTwo = function(num){
    return num + 2
}