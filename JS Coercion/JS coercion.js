console.log('5'-5);
console.log('5'+ 5);

const type = typeof 5;
const type2 = typeof "5";
const type3 = typeof {};
console.log(type);
console.log(type2);
console.log(type3);

const variable1 = true + 5; //it takes true as 1
console.log(variable1); //output = 6
const variable2 = false + 5; //it takes false as 0
console.log(variable2); //output = 5


const loginDetails = []

const loginID = loginDetails[0]

// if(loginID !== undefined){
if(loginID){
    console.log("Allow user to login");
}else{
    console.log("Login failed");
}

// In javascript the values that interpret as false
// 1. false
// 2. 0
// 3. ""
// 4. null
// 5. undefined