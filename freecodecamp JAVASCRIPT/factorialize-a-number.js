// Factorialize a Number
// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

//method 1
function factorialize(num) {
  var result = 1
  for(let i = 1; i < num; i++){
    result += result*i
  }
  return result;
}

console.log(factorialize(5))

//method 2
function factorialize2(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize2(num - 1);
}

console.log(factorialize2(5));

//method 3
function factorialize3(num, factorial = 1) {
  return num < 0 ? 1 : (
    new Array(num)
      .fill(undefined)
      .reduce((product, val, index) => product * (index + 1), 1)
  );
}
console.log(factorialize3(5))