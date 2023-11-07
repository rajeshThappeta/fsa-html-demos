import "./Test1.css";
import { useState } from "react";

//create Test1 component
function Test1() {
  //state
  let [counter, setCounter] = useState(0);
  let [emp, setEmp] = useState({ empid: 100, name: "kiran", age: 21 });

  //change emp
  function changeEmp() {
    setEmp({ ...emp, empid: 200, name: "Mahesh" }); //{empid:100,name:'kiran',age:21,empid:200}
  }

  function addNewProperty() {
    setEmp({ ...emp, city: "Hyd" });
  }

  function deleteEmpid(){
    let copyEmp={...emp}
    delete copyEmp.empid;
    setEmp(copyEmp)
  }


  //event handler to change counter
  function incrementCounter() {
    //change state
    setCounter(counter + 1);
  }
  function decrementCounter() {
    //change state
    setCounter(counter - 1);
  }

  return (
    <div>
      <h1 className="display-2 text-info">{counter}</h1>
      <button className="btn btn-success" onClick={incrementCounter}>
        Increment Counter
      </button>
      <button className="btn btn-danger" onClick={decrementCounter}>
        Decrement Counter
      </button>

      <div>
        <h2>Details of Employee</h2>
        <p className="lead">{emp.empid}</p>
        <p className="lead">{emp.name}</p>
        <p className="lead">{emp.age}</p>
        <p className="lead">{emp.city}</p>
        <button className="btn btn-info" onClick={changeEmp}>
          Chnage Emp details
        </button>
        <button className="btn btn-primary" onClick={addNewProperty}>
          Add new property to Emp
        </button>
        <button className="btn btn-danger" onClick={deleteEmpid}>
          Delete Emp ID
        </button>
      </div>
    </div>
  );
}

export default Test1;
