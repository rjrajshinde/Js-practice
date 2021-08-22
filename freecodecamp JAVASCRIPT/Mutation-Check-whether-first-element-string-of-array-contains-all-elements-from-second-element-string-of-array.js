// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

//method 1
function mutation1(arr) {
  var firstEle = arr[0].toLowerCase();
  var secondEle = arr[1].toLowerCase();
  var count = [];
  for (let i = 0; i < secondEle.length; i++) {
    if (firstEle.indexOf(secondEle[i]) < 0) {
      count.push(-1);
    } else {
      count.push(1);
    }
  }
  if (count.includes(-1)) {
    return false;
  } else {
    return true;
  }
}

console.log("Method1");
console.log(mutation2(["hello", "hey"]));
console.log(mutation2(["Alien", "line"]));
console.log(mutation2(["floor", "for"]));
console.log(mutation2(["Mary", "Aarmy"]));

// method2
function mutation2(arr) {
  var firstEle = arr[0].toLowerCase();
  var secondEle = arr[1].toLowerCase();
  for (let i = 0; i < secondEle.length; i++) {
    if (firstEle.indexOf(secondEle[i]) < 0) {
      return false;
    }
  }
  return true;
}

console.log("\nMethod2");
console.log(mutation2(["hello", "hey"]));
console.log(mutation2(["Alien", "line"]));
console.log(mutation2(["floor", "for"]));
console.log(mutation2(["Mary", "Aarmy"]));

//method3
function mutation3(arr) {
  var firstEle = arr[0].toLowerCase();
  var secondEle = arr[1].toLowerCase().split("");
  return secondEle.every((ele) => {
    return firstEle.indexOf(ele) > -1;
  });
}

console.log("\nMethod3");
console.log(mutation3(["hello", "hey"]));
console.log(mutation3(["Alien", "line"]));
console.log(mutation3(["floor", "for"]));
console.log(mutation3(["Mary", "Aarmy"]));
