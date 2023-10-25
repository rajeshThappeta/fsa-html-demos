//A function can be stored in a variable
let findSum = function (a, b) {
  return a + b;
};

//A function can return another function
let a=10;
function test() {
    let b=20;
  return function(){
    return a+b;
  }
}


let result=test()
console.log("result is ",result())



//A function can send as arg
function test1(callback){
   console.log("Callback is ",callback())
}


//calling
test1(function(){
    return 100;
})