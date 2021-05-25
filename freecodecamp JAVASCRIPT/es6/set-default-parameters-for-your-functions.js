// Set Default Parameters for Your FunctionsPassed
// In order to help us create more flexible functions, ES6 introduces default parameters for functions.

// Check out this code:

// const greeting = (name = "Anonymous") => "Hello " + name;

// console.log(greeting("John"));
// console.log(greeting());
// The console will display the strings Hello John and Hello Anonymous.

// The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above, the parameter name will receive its default value Anonymous when you do not provide a value for the parameter. You can add default values for as many parameters as you want.



// const increment = (number, value) => number + value;


//if value is not given then it default value is 1
const increment = (number, value=1) => number + value;

console.log(increment(2,0));

//here there is no value given then it takes the default value is 1 and add it
console.log(increment(2));
console.log(increment(2,3));
