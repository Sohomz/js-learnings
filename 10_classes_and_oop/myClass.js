class Car{
    
    constructor(name,engine, wheel){
        this.name=name;
        this.engine=engine;
        this.wheel=wheel;
    }

    canDrive(){
        let boolCanDrive=true;
        return (`The driver can drive the car ${boolCanDrive}`)   
    }

    display(){
        console.log(this);
        console.log(this.canDrive());
        
    }
}

let Lamborghini=new Car('Lamborghini','L1',4);
Lamborghini.display();


///////////////////         Behind the scene         //////////////////////

function Car2(name,engine, wheel){
    this.name=name;
    this.engine=engine;
    this.wheel=wheel;
}

Car2.prototype.canDrive=function(){
    let boolCanDrive=true;
    return (`The driver can drive the car ${boolCanDrive}`)
}

Car2.prototype.display=function(){
    console.log(this);
    console.log(this.canDrive());
    
}

let Maruti=new Car2('Maruti','L3',4);
Maruti.display();

