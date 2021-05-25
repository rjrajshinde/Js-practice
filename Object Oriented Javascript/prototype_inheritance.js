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

function Admin(...args){
    User.apply(this, args);
    this.role = 'super admin';
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(U){
    users = users.filter(user => {
        return user.email != U.email;
    });
}

var user1 = new User('raj','rj@king.com');
var user2 = new User('king','king@king.com');
var admin = new Admin('admin','admin@admin.com');

console.log(admin);
console.log(user1);
user1.login();
admin.login();

var users = [user1, user2, admin];

console.log(users);

admin.deleteUser(user1);

console.log(users);