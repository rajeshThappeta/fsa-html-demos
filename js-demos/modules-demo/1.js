let a = 10;
let empName = "Ravi";
let student = {
  sno: 100,
  age: 21,
};

let test = function () {
  console.log("test called");
};

//named export
//export {a,empName,student,test}


//default export
export default {a,empName,student,test}