let numberArray = [10, 200, -30, 50];
let emps = [
  { eno: 10, name: "bhanu", city: "hyd", age: 20 },
  { eno: 20, name: "ravi", city: "chennai", age: 32 },
  { eno: 30, name: "kiran", city: "bangalore", age: 40 },
  { eno: 40, name: "vasu", city: "hyd", age: 22 }
];




    //reduce
        //sum of elements of array
       let sumOfElements= numberArray.reduce((accumulator,element)=>accumulator+element)
                             //   180          50          180
        console.log(sumOfElements)
        //small element
        let small=numberArray.reduce((acc,element)=>acc<element?acc:element)
        console.log(small)
          //big element
          let big=numberArray.reduce((acc,element)=>acc>element?acc:element)
          console.log(big)















//find all elements betweeb 20 and 90
// let result=[];
// function getElements(){
//     for(let element of numberArray){
//         if(element>20 && element<90){
//             result.push(element)
//         }
//     }
// }

// getElements()
// console.log(result)

//filter method (selection)
    //get element between 20 and 90
    let result1 = numberArray.filter((element) => element > 20 && element < 90);
    console.log(result1);
    //get emps whose age between 30 and 40
    let result2=emps.filter(empObj=>empObj.age>20 && empObj.age<40)
    console.log(result2)


//map method (modification)
    // let result3=numberArray.map(element=>{
    //     if(element<20){
    //         return element+5
    //     }else{
    //         return element+2
    //     }
    // })
    // console.log(result3)

    //increase age of each emp by 5 yrs
    let result4=emps.map(empObj=>{
        empObj.age=empObj.age+5;
        return empObj;
    })

    console.log(result4)




    //Iterate forEach
    numberArray.forEach((element,index)=>console.log(element,index))
   
    //Search for 30
    let result5=numberArray.find(element=>element>50)
    console.log(result5)
    
    //find index of 300
    let indx=numberArray.findIndex(element=>element===30)
    console.log(indx)


        