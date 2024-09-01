class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase() //use _email, if u use email only, then constructor is calling email, alongside getter, setter also calling email, these will be race and call stack maximum limit reach err will come. If you are writing getter method, write set method too. mandatory
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}12shm@@345`
    }

    set password(value){
        this._password = value
    }
}

const shm = new User("sohom@gmail.com", "abc")
console.log(shm.email);