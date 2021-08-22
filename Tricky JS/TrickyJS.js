let x = [1,2,3];

x[-1] = -1;

console.log(x[x.indexOf(100000)]); //output will be -1 because we declare it 


let arr = [1,2,15,30,5,47,7];

// console.log(arr.sort());//output will be [1, 15, 2, 30, 47,  5, 7]
//we can solve this by callback in sort fucntion
console.log(arr.sort((a,b)=>{
    return a-b;
}));
console.log(arr.sort((a,b)=>{
    return b-a;
}));



//what should be the value of the i then it gives the following output
// let i = ?
// console.log(i+1) output = 1 
// console.log(i-1) output = -1
// console.log(i*i) output = 0
// console.log(i/i) output = 1

//answer is 
let i = Number.MIN_VALUE; //it gives the closest number to O 
console.log(`The value of the Number.MIN_VALUE is = ${i}`)
console.log(i+1)  
console.log(i-1) 
console.log(i*i) 
console.log(i/i)

let j = Number.MAX_VALUE; //it gives the largest number  
console.log(`The value of the Number.MAX_VALUE is = ${j}`)
console.log(j+1)  
console.log(j-1) 
console.log(j*j) 
console.log(j/j)


//what is the ans of this following
let y = [1,2,3] + [1,2,3]
console.log(y) //output will be 1,2,31,2,3
//because of this '+' operator 
//it ususally work with either numbers or string or if it not then it try to convert them
//so here we can't convert this array into the numbers then it converts into string
//it concatenate them

//even if you want to add this use spread operator
let z = [...[1,2,3],...[1,2,3]];
console.log(z) 
console.log(String(z)) //convert to the string


//what is the answer of the following
console.log(555555555555555555); //output will be 555555555555555600
//because In javascript there is a maximum interger numbers like following
console.log(Number.MAX_SAFE_INTEGER) //this is the maximum interger number
// we can't go beyond that we can't use any interger number greater than that
// and if you do then it only place the 0 beyond that


(function () {
    let r = j = 100;
})(); //this function is called IIFE(Immediately Invoked First Expression)

console.log(j) // output will be 100
console.log(r) // output will be Error-r is not definied

//it's because we declare the r with let then it scope only for this function
// but j is not declared with let so it global varible 



console.log(NaN === NaN);//output will be False
//because NaN can't compared to anything so it is always false when we compare it 
//even it compare to itself