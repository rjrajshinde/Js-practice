class User {
    constructor(name,email,age,status){
        this.name = name;
        this.email = email;
        this.age = age;
        this.status = status;
        this.score = 0;
    }
    login(){
        console.log(this.email ,"just logged in!")
        return this; //because we return this that's why we can do method chaining
    }
    logout(){
        console.log(this.email ,"just logged out!")
        return this; //because we return this that's why we can do method chaining
    }
    updateScore(){
        this.score++;
        console.log(this.email ,'has score is', this.score);
        return this; //because we return this that's why we can do method chaining
    }
}

// the new keyword
//  -creats a new empty object {}
//  -set the value of 'this' to the new empty object
//  -calls the constructor method

var user1 = new User('raj','raj@joker.com',33,'true');
console.log(user1);
var user2 = new User('king','king@joker.com',22,'false');
console.log(user2);
var user3 = new User('yoyo','yoyo@joker.com',21,'false');
console.log(user3);

user1.login();
user2.logout();

console.log("\n")

//method chaining
user1.login().updateScore().updateScore().logout();

console.log("\n");

user1.login().updateScore().updateScore().logout();