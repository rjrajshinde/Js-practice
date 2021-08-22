// Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns1([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns1([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

//Method 1
function getIndexToIns1(arr, num) {
  arr.sort((a, b) => {
    return a - b;
  });
  var length = arr.length;
  for (let i = 0; i < length; i++) {
    if (num <= arr[i]) {
      return i;
    }
  }
  return length;
}

console.log(getIndexToIns1([40, 60], 50));
console.log(getIndexToIns1([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns1([20, 3, 5], 19));
console.log(getIndexToIns1([3, 10, 5], 3));
console.log(getIndexToIns1([2, 5, 10], 15));
console.log(getIndexToIns1([], 1));

//Method 2
function getIndexToIns2(arr, num) {
  return arr.filter((val) => num > val).length;
}

console.log(getIndexToIns2([40, 60], 50));
console.log(getIndexToIns2([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns2([20, 3, 5], 19));
console.log(getIndexToIns2([3, 10, 5], 3));
console.log(getIndexToIns2([2, 5, 10], 15));
console.log(getIndexToIns2([], 1));
