class User{

    constructor(first_name, last_name, email, password){
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
    }

    setFirstName(first_name){
        this.first_name = first_name;
    }

    setLastName(last_name){
        this.last_name = last_name;
    }

    setEmail(email){
        this.email = email;
    }

    setPassword(password){
        this.password = password;
    }

    getFirstName(){
        return this.first_name;
    }

    getLastName(){
        return this.last_name;
    }

    getEmail(){
        return this.email;
    }

    getPassword(){
        return this.password;
    }

}