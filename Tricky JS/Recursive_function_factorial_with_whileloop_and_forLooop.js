// factorial using recursive function
function factorial(number) {
    if(number == 1){
        return number;
    }else{
        return number * factorial(number-1);
    }
}
console.log('using recursive function')
console.log(factorial(4));
console.log(factorial(3));

// factorial using while loop
function factorial_while(number) {
    let result = 1;
    let i = 1;
    while(i <= number){
        result *= i;
        i++;
    }
    return result;
}

console.log('using while loop');
console.log(factorial_while(4));
console.log(factorial_while(3));

// factorial using for loop
function factorial_for(number) {
    let result = 1;
    for(let i = 1; i <= number; i++){
        result *= i;
    }
    return result
}

console.log('using for loop');
console.log(factorial_for(4));
console.log(factorial_for(3));