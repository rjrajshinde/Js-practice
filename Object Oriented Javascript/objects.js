var user1 = {
    email: "ryu@king.com",
    name: "ryu",
    login(){
        console.log(this.email, "has logged in.")
    },
    logout(){
        console.log(this.email, "has logged out.")
    }
}
console.log(user1.name);
user1.name = "king";
console.log(user1);

user1.age = 33;
console.log(user1);

console.log(user1['name']);

var prob = 'name';
console.log(user1[prob]);

