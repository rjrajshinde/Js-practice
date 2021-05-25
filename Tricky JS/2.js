// var no = 1223
// var count =0
// while(no > 0)
// {
//     no /=10 ;
//     count++;
// }
// if(no >= 1 )
//     count++;
// do{
//     count++
//     no/=10;
// }while(no/10 >= 1)
// console.log(count)

//     function digits_count(n) {
//         var count =0
//         if(n >= 1 )
//             count++;
//         do{
//             count++
//             n/=10;
//         }while(n/10 >= 1)
//         return count;
//     } 
// console.log(digits_count(3212))

var findNumbers = function (nums) {
    const numberOfDigits = (n) => {
        let count = 0;
        while (n > 0) {
            n = Math.floor(n / 10);
            count++;
        }
        return count;
    }
    var ncount = 0
    for (let i = 0; i < nums.length; i++) {
        if (numberOfDigits(nums[i]) % 2 === 0)
            ncount++;
    }
    return ncount;
};

var nums = [11, 22, 343, 5432, 12];
console.log(findNumbers(nums));
