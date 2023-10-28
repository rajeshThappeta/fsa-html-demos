let emps = [
  {
    rollNo: 100,
    name: "bhanu",
    marks: [90, 98, 97],
    address: {
      city: "hyderabad",
      pincode: 77777,
    },
  },
  {
    rollNo: 200,
    name: "mahesh",
    marks: [90, 98, 97],
    address: {
      city: "vizag",
      pincode: 77777,
    },
  },
  {
    rollNo: 300,
    name: "vikas",
    marks: [90, 98, 97],
    address: {
      city: "chennai",
      pincode: 77777,
    },
  },
  {
    rollNo: 500,
    name: "asgdasd",
    marks: [90, 98, 97],
    address: {
      city: "bangalore",
      pincode: 77777,
    },
  },
];

//iterate
for (let empObj of emps) {
  console.log(empObj.address.city);
  console.log(empObj.name);
  console.log(empObj.age);
}
