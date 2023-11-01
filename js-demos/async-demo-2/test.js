let futureCondition = true;

//console.log("Promise is created which will either fulfilled or rejected in 5 secs...")

// //Creator of promise
// let promiseObj = new Promise((fullfill, reject) => {
//   setTimeout(() => {
//     if (futureCondition === true) {
//       fullfill("promise is fullfilled");
//     } else {
//       reject("promise is rejected");
//     }
//   }, 5000);
// });




//Consumer of promise
// promiseObj
// .then((message)=>{ console.log(message)})
// .catch((errMessage)=>{console.log(errMessage)})












//A can meet B after 5  mins
let freeTimeOfA=true;

console.log("Person-A promise to Person-B that he can call him in 8 secs")

//Creator of promise(A)
let meetingFrndPromise=new Promise((fullfill,reject)=>{
    setTimeout(() => {
        if(freeTimeOfA===true){
            fullfill('hello frnd..how are you?')
        }else{
            reject('SOrry frnd..meet you later')
        }
    }, 8000);
})


//Consumer of promise(B)
meetingFrndPromise
.then((message)=>{ console.log(message)})
.catch((errMessage)=>{ console.log(errMessage)})



console.log("hello")