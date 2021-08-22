// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.


function findLongestWordLength(str) {
    var count = [];
    var arr = str.split(" ")
    for(let i of arr){
      let len = i.length
      count.push(len)
    }
    // return Math.max(...count)
    // Or
    return count.reduce((a,b)=>{return Math.max(a,b)})
    // OR
    // return Math.max.apply(null, count)
  }
  

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))