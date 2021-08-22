// let doSomething = () => new Promise( function(resolve, reject){
//     if(false){
//         resolve('king')
//     }else{
//         reject('reject');
//     }
// })
let doSomething = new Promise(function (resolve, reject) {
    isClean = false;
    if (isClean) {
      resolve("clean");
    } else {
      reject("notclean")
    }
  });

doSomething()
.then(result => console.log(result))
.catch(err => console.log(err))