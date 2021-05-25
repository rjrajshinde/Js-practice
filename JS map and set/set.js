//set is an unordered pool of unique elements 
// then if it is unordered then it can't have the index like array


let array = [1,2,3,4,5]
let mySet = new Set(array);

console.log(array)
console.log(mySet);

// array with duplicate values
array = [1,2,3,2,2,4,4,5];
mySet = new Set(array)

console.log(array)
console.log(mySet);//set only contains unique values
console.log([...mySet]);//converting set to array

//add any element to set 
//the elements can be strings, objects, arrays etc etc
array = [1,2,3,4,5];
mySet = new Set(array)
//add number
mySet.add(6);
console.log(mySet);
//add string
mySet.add('king');
console.log(mySet);
//add objects
mySet.add({'name':"raj",'role':'developer'});
console.log(mySet);
//add array
mySet.add([1,2,3,4]);
console.log(mySet);

//Delete elements from the sets
mySet.delete(3)
console.log(mySet);

//Delete all the elements from the sets
mySet.clear();
console.log(mySet);

//to check the element present in the set or not 
array = [1,2,3,4,5];
mySet = new Set(array)

console.log( mySet.has(1)); //it returns boolean value
console.log( mySet.has(6));


//to check the size of set or number of elements in the sets
console.log(mySet.size)