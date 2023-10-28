//global scope
let a=10;


function test(){
    console.log(a)
    //function scope
    let b=120;
    if(b===20){
        console.log(b)
        //block scope
        let c=30;
        console.log(c)
    }else{
        let d=40
    }
    
}

test()

