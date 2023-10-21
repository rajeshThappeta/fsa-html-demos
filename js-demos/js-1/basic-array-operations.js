let numberArray=[10,20,30];


//access elements
   // console.log(numberArray[0])

    //find the sum of elements of array (10 + 20 + 30 =60)
   // console.log(numberArray[0]+numberArray[1]+numberArray[2])
   let sum=0;
   for(let element of numberArray){
        sum=sum+element;
   }
   console.log("sum of elements of array is ",sum)



   //Insert elements
        //at start
        let l1=numberArray.unshift(100,200)
        console.log(numberArray)
        console.log("length :",l1)

        //at end
        let l2=numberArray.push(11,12)
        console.log(numberArray)
        console.log("length :",l2)

        //in between (index based insertion)
        numberArray.splice(3,0,123,4000,600,2300)
        console.log(numberArray)

    //Delete elements
        //from start
        let del1=numberArray.shift()
        console.log(numberArray)
        console.log("deleted element is ",del1)

        //from end
        let del2=numberArray.pop()
        console.log(numberArray)
        console.log("deleted element is ",del2)

        //from in between(index based deletion)
        let del3=numberArray.splice(2,3)
        console.log(numberArray)
        console.log("deleted element is ",del3)

    //updating elements
        numberArray.splice(2,1,4300)
        console.log(numberArray)
