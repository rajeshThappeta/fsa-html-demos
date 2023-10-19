console.log("first");

//Start
//condition check
//post expression

//for loop
for (let x = 1; x <= 5; x++) {
  console.log("second");
}

//while loops
let x = 1;
while (x <= 5) {
  console.log("while loop");
  x++;
}

//do while loop

console.log("third");

let choice = "d";

switch (choice) {
  case "a":
    console.log("case-1");
    break;
  case "b":
    console.log("case-2");
    break;
  case "c":
    console.log("case-3");
    break;
  default:
    console.log("invalid choice..it should be between 1 and 3");
}

let a = 10,
  b = 15;

let userChoice='product';

switch (userChoice) {
  case "addition":
    let sum = a + b;
    console.log("sum is ", sum);
    break;
  case "subtraction":
    let diff = a - b;
    console.log("difference is ", diff);
    break;
default: console.log("Invalid operation")
}




//conditional operator ?:
if(a>b){
    console.log("a is big")
}else{
    console.log('b is big')
}


a>b ? console.log('a is big') : console.log('b is big')
