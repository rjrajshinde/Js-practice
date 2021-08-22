// Title Case a SentencePassed
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

//Method 1
function titleCase_method1(str) {
  var arrStr = str.split(" ");
  var resultArr = [];
  arrStr.forEach((ele) => {
    let first = ele.charAt(0).toUpperCase();
    let second = ele.slice(1).toLowerCase();
    let third = first + second;
    resultArr.push(third);
  });
  return resultArr.join(" ");
}

var str = "i am raj shinde aka kingjoker";
console.log(titleCase_method1(str));
var str2 = "I'm a little tea pot";
console.log(titleCase_method1(str2));

//Method2

function titleCase_method2(str) {
  let arrStr = str.toLowerCase().split(" ");
  let result = arrStr.map((val) => {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

var str3 = "i am raj shinde aka kingjoker";
console.log(titleCase_method2(str3));
var str2 = "I'm a little tea pot";
console.log(titleCase_method2(str2));
