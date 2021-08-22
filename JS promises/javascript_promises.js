
// promises in javascript


//example 1
let king = new Promise(function (resolve, reject) {
  isClean = false;
  if (isClean) {
    resolve("clean");
  } else {
    reject("notclean")
  }
});

king.then(function (fromking) {
  console.log("room " + fromking)
}).catch(function (fromking) {
  console.log('room ' + fromking);
})


//example 2
let one = () => {
  return "one";
}

let two = () => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve('two');
    }, 5000)
  })
}

let three = () => {
  return 'three';
}

let callme = async () => {
  let val1 = await one();
  console.log(val1);
  let val2 = await two();
  console.log(val2);
  let val3 = await three();
  console.log(val3);
}

callme();


//example 3
const recordVideoOne = new Promise((resolve, reject) => {
  resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 Recorded')
})
//it gives you array of the output of resolve promises
Promise.all([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then(messages => {
  console.log(messages)
})

Promise.race([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then(message => {
  console.log(message)
})