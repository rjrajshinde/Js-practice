// Given an integer n. No-Zero integer is a positive integer which doesn't contain
//any 0 in its decimal representation.

// Return a list of two integers [A, B] where:

// A and B are No-Zero integers.
// A + B = n
// It's guarateed that there is at least one valid solution.
//If there are many valid solutions you can return any of them.

// Example 1:
// Input: n = 2
// Output: [1,1]
// Explanation: A = 1, B = 1. A + B = n and both A and B don't contain any 0 in their decimal representation.

// Example 2:
// Input: n = 11
// Output: [2,9]

// Example 3:
// Input: n = 10000
// Output: [1,9999]

// Example 4:
// Input: n = 69
// Output: [1,68]

// Example 5:
// Input: n = 1010
// Output: [11,999]

//Method 1
var isZero = (number) => {
  let array = number.toString();
  // return array.indexOf('0') == -1 ;
  return array.includes("0") == false;
};

var getNoZeroIntegers_method1 = function (n) {
  for (let i = 0; i < n; i++) {
    if (isZero(i) && isZero(n - i)) {
      return [i, n - i];
    }
  }
};

let n1 = 2;
console.log(getNoZeroIntegers_method1(n1));
let n2 = 11;
console.log(getNoZeroIntegers_method1(n2));
let n3 = 10000;
console.log(getNoZeroIntegers_method1(n3));

//method 2
var getNoZeroIntegers_method2 = function (n) {
  for (let i = 0; i < n; i++) {
    if (!i.toString().includes("0") && !(n - i).toString().includes("0")) {
      return [i, n - i];
    }
  }
};

let n4 = 2;
console.log(getNoZeroIntegers_method2(n1));
let n5 = 11;
console.log(getNoZeroIntegers_method2(n2));
let n6 = 10000;
console.log(getNoZeroIntegers_method2(n3));