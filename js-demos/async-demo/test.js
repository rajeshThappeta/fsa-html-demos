console.log("3 customers reached ro restaurant");

//synchronous
// console.log("Cust-1 ordered biryani which takes 15 min to prepare");
// for (let a = 1; a < 9000000000; a++) {}
// console.log("cust-1 received biryani");

// console.log("Cust-2 ordered pizza which takes 30 min to prepare");
// for (let a = 1; a < 7000000000; a++) {}
// console.log("cust-2 received pizza");

// console.log("Cust-3 ordered water bottle which takes 1 min to prepare");
// for (let a = 1; a < 1000000000; a++) {}
// console.log("cust-3 received water bottle");

//asynchronous
console.log("Cust-1 ordered biryani which takes 15 min to prepare");
setTimeout(() => {
  console.log("cust-1 received biryani");
}, 5000);

console.log("Cust-2 ordered pizza which takes 30 min to prepare");
setTimeout(() => {
  console.log("cust-2 received pizza");
}, 8000);

console.log("Cust-3 ordered water bottle which takes 1 min to prepare");
setTimeout(() => {
  console.log("cust-3 received water bottle");
}, 1000);
