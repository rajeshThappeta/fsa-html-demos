

//Create copy of promitives
let data=10;
let dataCopy=data;

data=200;

console.log("data :",data)
console.log("copyData :",dataCopy)


//Create copy of non-primitive
let obj={
    a:10,
    b:20
}

//let copyObj=obj; //x
//let copyObj=Object.assign({},obj)
let copyObj={...obj}

obj.a=200;

console.log("obj :",obj)
console.log("copy obj :",copyObj)