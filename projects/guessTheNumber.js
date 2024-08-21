let randNumber=Math.floor((Math.random()*100)+1);
let arr=[]
let cnt=10
let playGame=true

function guessTheNumber(){
    if(playGame==true){
        let userInput=parseInt(document.getElementById("userInput").value);
        if(isNaN(userInput) || userInput<1 || userInput>100){
            window.alert("Please choose/write a number b/w 1 and 100")
        }
        else{
            
            arr.push(userInput);
            document.getElementById("prevGuess").innerHTML=arr;
            console.log(arr.values())
            cnt-=1
            document.getElementById("remGuess").innerHTML=cnt;
            if(cnt==0){
                playGame=false
                window.alert("GAME OVER!!!!")
                resetGame();
            }
        }
    }
}

function resetGame() {
    randNumber = Math.floor((Math.random() * 100) + 1);
    arr = [];
    cnt = 10;
    document.getElementById("prevGuess").innerHTML = '';
    document.getElementById("remGuess").innerHTML = cnt;
    document.getElementById("userInput").value = '';
    guessTheNumber();
}