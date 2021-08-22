// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, 
// return true if sentence is a pangram, or false otherwise.


// Example 1:
// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.

// Example 2:
// Input: sentence = "leetcode"
// Output: false
 
// Constraints:

// 1 <= sentence.length <= 1000
// sentence consists of lowercase English letters.

//Method 1
console.log("Method 1");
var checkIfPangram_method1 = function(sentence) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let alphabetArr = alphabet.split("");
    let sentenceArr = sentence.split('');
    for (let i = 0; i < alphabetArr.length; i++) {
        if(sentenceArr.includes(alphabetArr[i]) == false){
            return false;
        }
    }
    return true;
};

var sentence = "thequickbrownfoxjumpsoverthelazydog"
console.log(checkIfPangram_method1(sentence));
sentence = "kingisjoker"
console.log(checkIfPangram_method1(sentence));


//Method 2
console.log('Method 2');
var checkIfPangram_method2 = (sentence) =>{
    var newSet = new Set(sentence);
    if(newSet.size !== 26)
        return false;
    return true;
}

var sentence = "thequickbrownfoxjumpsoverthelazydog"
console.log(checkIfPangram_method2(sentence));
sentence = "kingisjoker"
console.log(checkIfPangram_method2(sentence));