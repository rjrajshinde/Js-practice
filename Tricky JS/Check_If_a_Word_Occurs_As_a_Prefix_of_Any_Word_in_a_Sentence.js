// Given a sentence that consists of some words separated by a single space, and a searchWord.
// You have to check if searchWord is a prefix of any word in sentence.
// Return the index of the word in sentence where searchWord is a prefix of this word (1-indexed).
// If searchWord is a prefix of more than one word, return the index of the first word (minimum index).
// If there is no such word return -1.
// A prefix of a string S is any leading contiguous substring of S.

// Example 1:
// Input: sentence = "i love eating burger", searchWord = "burg"
// Output: 4
// Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.

// Example 2:
// Input: sentence = "this problem is an easy problem", searchWord = "pro"
// Output: 2
// Explanation: "pro" is prefix of "problem" which is the 2nd and the 6th word in the sentence, but we return 2 as it's the minimal index.

// Example 3:
// Input: sentence = "i am tired", searchWord = "you"
// Output: -1
// Explanation: "you" is not a prefix of any word in the sentence.

// Example 4:
// Input: sentence = "i use triple pillow", searchWord = "pill"
// Output: 4

// Example 5:
// Input: sentence = "hello from the other side", searchWord = "they"
// Output: -1

// Constraints:

// 1 <= sentence.length <= 100
// 1 <= searchWord.length <= 10
// sentence consists of lowercase English letters and spaces.
// searchWord consists of lowercase English letters.

//Method 1
console.log("method 1");
var isPrefixOfWord_method1 = function (sentence, searchWord) {
  let array = sentence.split(" ");
  for (let i = 0; i < array.length; i++) {
    if (array[i].startsWith(searchWord)) {
      return i+1;
    }
  }
  return -1;
};

var sentence1 = "this problem is an easy problem";
var searchWord1 = "prob";
console.log(isPrefixOfWord_method1(sentence1, searchWord1));

sentence1 = "i am tired";
searchWord1 = "you";
console.log(isPrefixOfWord_method1(sentence1, searchWord1));

sentence1 = "i use triple pillow";
searchWord1 = "pill";
console.log(isPrefixOfWord_method1(sentence1, searchWord1));

console.log("method 2");
//Method 2
var isPrefixOfWord_method2 = function (sentence, searchWord) {
  let array = sentence.split(" ");
  let regex = "^" + searchWord + "[A-Za-z0-9]*";
  for (let i = 0; i < array.length; i++) {
    if (array[i].match(regex) !== null) {
      return i + 1;
    }
  }
  return -1;
};

var sentence2 = "this problem is an easy problem";
var searchWord2 = "prob";
console.log(isPrefixOfWord_method2(sentence2, searchWord2));

sentence2 = "i am tired";
searchWord2 = "you";
console.log(isPrefixOfWord_method2(sentence2, searchWord2));

sentence2 = "i use triple pillow";
searchWord2 = "pill";
console.log(isPrefixOfWord_method2(sentence2, searchWord2));

//method 3
console.log('method 3')
var isPrefixOfWord_method3 = function (sentence, searchWord) {
  let result = -1;
  var res = sentence.split(" ");
  for (let i = 0; i < res.length; i++) {
    if (res[i].indexOf(searchWord) == 0) {
      result = i + 1;
      return result;
    }
  }
  return result;
};

var sentence3 = "this problem is an easy problem";
var searchWord3 = "prob";
console.log(isPrefixOfWord_method2(sentence3, searchWord3));

sentence3 = "i am tired";
searchWord3 = "you";
console.log(isPrefixOfWord_method2(sentence3, searchWord3));

sentence3 = "i use triple pillow";
searchWord3 = "pill";
console.log(isPrefixOfWord_method3(sentence3, searchWord3));