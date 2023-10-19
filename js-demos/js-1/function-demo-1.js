//function declaration or function definition or function statement
function makeFurniture(wood, adv) {
  console.log("hello");
  //make product
  let product = wood + " chair";
  return product;
}

//call the function
let result1 = makeFurniture("teak", 20000);
let result2 = makeFurniture("sandal", 40000);
console.log(result1);
console.log(result2);

//to find sum, of two numbers
function sumOfTWoNumbers(firstNumber, secondNumber) {
  let sum = firstNumber + secondNumber;
  return sum;
}

//call sumOftWoNum bers function
let sum1 = sumOfTWoNumbers(10, 20);
console.log(sum1);

let sum2 = sumOfTWoNumbers(1123, 2345);
console.log(sum2);

let sum3 = sumOfTWoNumbers(9876, 3456);
console.log(sum3);



//comapre two numbers
function compareValues(a,b){
    if(a>b){
        
        return "a is big"
    }else if(a===b){
        return "both are equal"
    }else{
        return 'b is big'
    }
}


let rs1=compareValues(10,20)
console.log(rs1)
let rs2=compareValues(123,45)
compareValues(-123,-45)




//function expression
let x=123;


let sumOfNumbers=function (firstNumber, secondNumber) {
    let sum = firstNumber + secondNumber;
    return sum;
  }


let s=sumOfNumbers(20,30)
console.log(s)