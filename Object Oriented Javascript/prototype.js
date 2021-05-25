//using function via prototype
function User(name,email){
    this.name = name;
    this.email = email;
    this.online = false;
}

User.prototype.login = function(){
    this.online = true;
    console.log(this.email,'is logged in');
}
User.prototype.logout = function(){
    this.online = false;
    console.log(this.email,'is logged out');
}

var user1 = new User('raj','rj@king.com');
var user2 = new User('king','king@king.com');

console.log(user1);
user1.login();
console.log(user1);
user1.logout();
console.log(user1);