setInterval(() => {
    const digiClock=new Date().toLocaleTimeString();
    document.querySelector("#resultArea").innerHTML=digiClock; 
}, 1000);

