let quoteSample = "3 blind mice.";
let myRegex = /[^aeuiu0-9]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line
console.log(result)