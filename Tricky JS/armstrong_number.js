const isArmstrongNumber = (n) => {
    // let noStr = n.toString();
    let noStr = n + "";
    let noLen = noStr.length;
    let noArr = noStr.split("")
    var sum = 0
    for (let i = 0; i < noArr.length; i++) {
        sum += Math.pow(Number(noArr[i]),noLen)
    }
    return sum === n
}

let number = 370;
console.log(isArmstrongNumber(number));

