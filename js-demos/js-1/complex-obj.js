let student = {
  rollNo: 100,
  name: "bhanu",
  marks: [90, 98, 97],
  address: {
    city: "hyderabad",
    pincode: 77777,
  },
  //methods
  getSubjectCount:function(){
    return this.marks.length;
  },
  getAverage: function () {
    let sum = 0;
    for (let x of this.marks) {
      sum = sum + x;
    }
    let average = sum / 3;
    return average;
  },
};


//function
function test(){

}

//calling a function
test()
//calling a method


console.log(student.name)
console.log(student.getSubjectCount())
console.log(student.address.city)
console.log(student.getAverage())