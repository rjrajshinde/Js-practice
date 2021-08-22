// CallStack

// It's like a "todo list" of function invocations
// last in First out 
// it's basically the stack of function calls
// it's a data structure which records basically where in the program we are


function one(){
    console.log("one");
    two();
}
function two(){
    console.log("two");
    three();
}
function three(){
    console.log("three");
    four();
}
function four(){
    console.log("four");
    throw new Error("code didn't work");
    five();
}
function five(){
    console.log("five");
}

one();





