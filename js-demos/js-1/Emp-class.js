//Create Emp type (class)
class Emp{
    constructor(eid,name,basic){
       
        //object intialization logic
        this.eid=eid;
        this.name=name;
        this.basic=basic;
    }
    getSalary(){
        //calculate salary on basic
        let hra=0.15*this.basic;
        let da=0.1*this.basic;
        let salary=this.basic+hra+da;
        return salary;
    }
    test(){

    }
}

//creatre objects
let emp1=new Emp(10,'Bhanu',10000)
let emp2=new Emp(20,'Mahesh',15000)
console.log(emp1)

