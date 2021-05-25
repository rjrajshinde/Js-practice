// reverse the string 
// for example i/p '1234' , o/p '4321'



var str = '1234';

result = str.split('')//use to split the string
result2 = result.reverse() //reverse the splited string
finalresult = result2.join("") //join the reverse splited string 

console.log(finalresult)

