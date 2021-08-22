// Falsy Bouncer
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

//Method 1
console.log("Method 1");
function bouncer(arr) {
  var resultArr = [];
  arr.forEach((ele) => {
    if (ele) {
      resultArr.push(ele);
    }
  });
  return resultArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));

//Method 2
console.log("\nMethod 2");
function bouncer(arr) {
  // var sampleArr = [false, null, 0, NaN, "", undefined];
  // for(let i = 0; i < arr.length; i++){
  //     for (let j = 0; j < sampleArr.length; j++) {
  //         if(arr[i] == sampleArr[j]){
  //             arr.splice(i, 1)
  //         }
  //     }
  // }
  // if(arr.includes(NaN)){
  //     var index = arr.indexOf(NaN)
  //     // arr.pop(index)
  //     return arr
  // }
  // return arr
  var filtered = arr.filter(Boolean);
  return filtered;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));

//Method 3
console.log("\nMethod 3");
function bouncer(arr) {
  var filtered = arr.filter((x) => !!x);
  return filtered;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));

//Method 4
console.log("\nMethod 4 ");
function bouncer(arr) {
  var filtered = arr.filter((x) => x);
  return filtered;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));
