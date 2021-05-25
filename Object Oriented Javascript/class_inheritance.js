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
        return this; 
    }
    logout(){
        console.log(this.email ,"just logged out!")
        return this; 
    }
    updateScore(){
        this.score++;
        console.log(this.email ,'has score is', this.score);
        return this; 
    }
}
// class inheritance
class Admin extends User{
    // admin can delete the users from array
    deleteUser(user){
        users = users.filter(item => {
            return item.email != user.email;
        })
    }
}

var user1 = new User('raj','raj@joker.com',33,'true');
console.log(user1);
var user2 = new User('king','king@joker.com',22,'false');
console.log(user2);
var admin = new Admin('admin','adming@admin.com',30,"true");
console.log(admin);

user1.logout();

//array of users
var users = [user1, user2];
console.log('\n before deleting the user by admin');
console.log(users);

//delete method is called by admin
admin.deleteUser(user1);
console.log('\nafter deleting the user by admin');
console.log(users);