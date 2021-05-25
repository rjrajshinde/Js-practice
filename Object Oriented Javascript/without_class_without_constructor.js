//without class and without constructor
function User(name,email){
    this.name = name;
    this.email = email;
    this.online = false;
    this.login = function(){
        console.log(this.email, 'has logged In.');
    }
    this.logout = function(){
        console.log(this.email, 'has logged out.');
    }
}

var user1 = new User('raj','rj@king.com');
var user2 = new User('king','king@king.com');

console.log(user1);
user2.login();