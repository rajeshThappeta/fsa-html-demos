
//declare an array
let ar=[10,20,30,40] //array of numbers
let skills=['js','css','react'] //array of strings

console.log(typeof ar)
console.log(ar[0])
console.log(ar[1])
console.log(ar[2])
console.log(ar[3])
//console.log(ar[-1])

//iterate using for loop
for(let index=0;index<ar.length;index++){
    console.log(ar[index])
}

//for-of loop
for(let element of ar){
    console.log(element)
} 


//declare an object
let student={
    sno:100, //property( key : value)
    name:'John',
    age:21,
    city:'hyderabad'
}

console.log(typeof student)

console.log(student.sno)
console.log(student.age)
console.log(student.name)
console.log(student.city)
console.log(student.mobile)


//itearte an object(for-in loop)
for(let key in student){
    console.log(student[key])
}



console.log(ar)
console.log(student)






let a=10,b=10
console.log(a===b)


let ar1=[10,20]
let ar2=[10,20]
console.log(ar1===ar2)


let obj1={
    a:10
}

let obj2={
    a:10
}

console.log(obj1===obj2)