// map in javascirpt es6

const myMap = new Map([['name','king'],['surname','Doe']]);
console.log(myMap);

// javascript objects only supports only one key object 
// if we add the multiple key objects it only remember the last one only
// that's why we need to use the maps 

// first we check the javascript object problem
// and how we can solve this problem using the maps
var myObjects = {}

var a = {};
var b = {};
// now we are going to assign the objects a and b to myObjects as a key and value pair
myObjects[a] = 'a';
myObjects[b] = 'b';

console.log(myObjects); //if you see the output then you noticed it only take the last object 

//lets solve the above problem using map
const obj1 = {}
const obj2 = {}

// now we are going to assign the obj1 and obj2 to myMap2 as a key and value pair
var myMap2 = new Map([[a,'a'],[b,'b']]);
console.log(myMap2) //it gives the output of both objects



//we can assign the key-value pairs using the set method on map
var myMap3 = new Map([[{},'a'],[{},'b']]);

myMap3.set({},'c')
console.log(myMap3)
myMap3.set('king','joker');
console.log(myMap3)


//we can also delete the pair from map using delete method
var myMap4 = new Map([[1,1],[2,2]])

myMap4.delete(1); //you have to give key value

console.log(myMap4);


//we can also delete the all values from map
var myMap5 = new Map([["king",'1'],[1,1],[2,2]])

myMap5.clear();

console.log(myMap5);


//we can also make sure the item is present in the map
var myMap6 = new Map([[1,1],[2,2],[3,3]])

console.log(myMap6.has(1)); //it gives the boolean values
console.log(myMap6.has(4)); //it gives the boolean values
