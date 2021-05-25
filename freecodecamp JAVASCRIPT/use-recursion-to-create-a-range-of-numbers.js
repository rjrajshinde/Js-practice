function rangeOfNumbers(startNum, endNum) {
  if(endNum - startNum === 0 ){
      return [startNum];  
  }else{
      var num = rangeOfNumbers(startNum, endNum-1);
      num.push(endNum);
      return num;
  }
};

console.log(rangeOfNumbers(1,4))