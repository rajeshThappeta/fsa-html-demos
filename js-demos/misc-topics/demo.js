//default params
function test1(a = 0, b = 0) {
  console.log(a + b);
}

//test1();

//rest parameter
function findSum(b,...a){
  let sum= a.reduce((acc,el)=>acc+el)
  console.log(sum)
}

findSum(1,2,4,40,34,45,56,67)


//JSON & JS conversion
let jsObj={
    a:10,
    b:20
}

//convert to JSON
let json=JSON.stringify(jsObj)

console.log(json)

//convert JSON to js
let json2='{"a":10,"b":20}'
let jsObj2=JSON.parse(json2)
console.log(jsObj2)