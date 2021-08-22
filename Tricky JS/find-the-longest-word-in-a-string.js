function findLongestWordLength(str) {
  let arrStr = str.split(" ")
  let arr = []
  arrStr.forEach((ele)=>{
    arr.push(ele.length)
  })
//1st method to get a highest no from array
  // let result = arr[0]
  // for(let i=0; i<arr.length; i++){
  //   if(result < arr[i]){
  //     result = arr[i]
  //   }
  // }
//2st method to get a highest no from array
  // return Math.max(...arr)
//3st method to get a highest no from array
  let result = arr.reduce((a,b)=>{
    return Math.max(a,b)
  })
  return result
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));