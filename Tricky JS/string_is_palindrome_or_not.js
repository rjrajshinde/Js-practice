// const palindromeString = (str) =>{
//     let temp = str.split("").reverse().join("")
//     if(temp === str){
//         return true;
//     }else{
//         return false;
//     }
// }

const palindromeString = (str) => {
    let trimmed = str.replace(/[^\w]/g, "");//for to skip the spaces between character
    return trimmed === trimmed.split('').reverse().join(''); // Steps 1-4
}

let str = "r a j"
console.log(palindromeString(str))