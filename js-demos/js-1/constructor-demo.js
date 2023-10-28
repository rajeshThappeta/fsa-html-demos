// 15 x 200 = 3000

// 15 + 200 = 215

//object literal
let emp={
    eid:100,
    age:20,
    name:'xxxxx',
    getData:function(){}
}



//Constructor function (create Type)
    function PersonType(pid,name,age){
        //object initialization logic
        this.pid=pid;
        this.name=name;
        this.age=age;

    }

    //create objects of PersonType
    let p1=new PersonType(100,'john',21)
    console.log(p1)

    let p2=new PersonType(200,'Vikas',32)
    console.log(p2)
  



    //salary=basic+hra(15%)+da(10%)
    //Create Employee type
    function Emp(eid,name,basic){
        this.eid=eid;
        this.name=name;
        this.basic=basic;
        
    }

    //add methgods to prototype of Emp
    Emp.prototype.getSalary=function(){
        //calculate salary on basic
        let hra=0.15*this.basic;
        let da=0.1*this.basic;
        let salary=this.basic+hra+da;
        return salary;
    }

    Emp.prototype.test=function(){
        
    }



    //create objects of Emp type
    let emp1=new Emp(10,'Bhanu',10000)
    let emp2=new Emp(20,'Mahesh',15000)

    console.log(emp1.abcd())
    console.log(emp2)