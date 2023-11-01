let firstRank=true;

let bikePromiseObj=new Promise((fullfill,reject)=>{
    setTimeout(() => {
        if(firstRank===true){
            fullfill("second rank ")
        }else{
            reject("failed")
        }
    }, 6000);
})


bikePromiseObj
.then(message=>{
    if(message==='first rank'){
        return 'new bike'
    }else{
        return 'no bike'
    }
})
.then((message)=>{
    if(message==='new bike'){
        console.log("congrats for new bike")
    }else{
        console.log("sorry buddy")
    }
})

.catch(err=>console.log(err))