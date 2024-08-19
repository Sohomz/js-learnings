function bmiCalculator(){
    let hght=0;
    hght=parseFloat(document.getElementById("height").value);
    console.log(typeof(hght),hght);
    if(isNaN(hght)){
        console.log("Height is Not a number");
        window.alert("Height is Not a number");
    }
    else{
        let wght=0;
        wght=parseFloat(document.getElementById("weight").value);
        console.log(typeof(wght),wght);
        if(isNaN(wght)){
            console.log("Weight is Not a number");
            window.alert("Weight is Not a number");
            return;
        }
        const bmi= Math.round((wght/Math.pow(hght/100,2)) * 100) / 100;
        document.getElementById("result").innerHTML=bmi;

    }



}
