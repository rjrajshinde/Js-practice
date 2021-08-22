function repeatStringNumTimes(str, num) {
  if(num > 0){
    var string ="";
    for(let i=0; i<num; i++){
      string+=str
    }
    return string;
  }else{
    return ""
  }
}

repeatStringNumTimes("abc", 3);