// Finders Keepers
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

//Method 1
function findElement_method1(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}

console.log(findElement_method1([1, 2, 3, 4], (num) => num % 2 === 0));
console.log(
  findElement_method1([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  })
);

//Method 2
function findElement_method2(arr, func) {
  return arr.find(func);
}

console.log(findElement_method2([1, 2, 3, 4], (num) => num % 2 === 0));
console.log(
  findElement_method2([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  })
);

//Method 3
function findElement_method3(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}

console.log(findElement_method3([1, 2, 3, 4], (num) => num % 2 === 0));
console.log(
  findElement_method3([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  })
);
