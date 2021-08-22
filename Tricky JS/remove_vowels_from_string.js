
const removeVowels = (arr) => {
  var str1 = ["a", "e", "i", "o", "u"];
  var res = "";
  let isCharPresent = (char, str) => {
    for (let i = 0; i < str.length; i++) {
      if (char == str[i]) return true;
    }
    return false;
  };
  for (let i = 0; i < arr.length; i++) {
    if (!isCharPresent(arr[i], str1)) {
      res += arr[i];
    }
  }
  return res;
};

var str = "kingjoker";
console.log(removeVowels(str))