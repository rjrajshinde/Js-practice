// write the function that converts user entered date formatted 
// as M/D/YYYY to a format required by an API(YYYYMMDD). the Parameter
// "userDate" and the return value are strings

// for example it should convert the user entered date "12/31/2014"
// to "20141231" suitable for the API


function swap(arr) {
    var temp
    temp = arr[1];
    arr[1] = arr[2];
    arr[2] = temp;
    return arr;
}

function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    res = userDate.split('/').reverse()
    var final = swap(res);
    return final.join("")
}

console.log(formatDate("12/31/2014"));