import { useState } from "react";

function Test3() {
  let [arr, setArr] = useState([10, 20]);

  function addElement() {
    setArr([...arr, Math.random()]);
  }

  function deleteElement(index){
    let copyArr=[...arr]
    copyArr.splice(index,1)
    setArr(copyArr)
  }

  return (
    <div className="text-center">
      <h1 className="text-info display-2 mt-4">Array Operation</h1>
      {/* render array */}
      {arr.map((element,index) => (
        <div>
          <h2 className="text-secondary mt-3" key={element}>
            {element}
            <button className="btn btn-danger ms-3" onClick={()=>deleteElement(index)}>x</button>
          </h2>
         
        </div>
      ))}
      <button className="btn btn-success" onClick={addElement}>
        Add Element
      </button>
    </div>
  );
}

export default Test3;
