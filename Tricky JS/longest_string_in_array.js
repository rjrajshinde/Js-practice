//ES 6 Syntax
function findLongestString(arr) {
    var longest = ""
    arr.forEach(element => {
        if(element.length > longest.length)
            longest = element;
    });
    return longest
}

OR 

//ES 5 Syntax
// function findLongestString(arr) {
//     var longest = ""
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i].length > longest.length)
//             longest = arr[i]
//     }
//     return longest
// }



let arr = ["there","is","king","kingjoker"]
console.log(findLongestString(arr))

