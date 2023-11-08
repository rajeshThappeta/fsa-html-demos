import { useState } from "react";

function Test5() {
  let [students, setStudnets] = useState([
    { sno: 100, name: "kiran" },
    { sno: 200, name: "vikas" },
    { sno: 300, name: "bhanu" },
    { sno: 400, name: "madhu" },
    { sno: 500, name: "vasu" },
    { sno: 600, name: "manasa" },
  ]);

  let [index, setIndex] = useState(0);

  function incrementIndex() {
    if (index < 5) {
      setIndex(index + 1);
    }
  }
  function decrementIndex() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  console.log(index);
  return (
    <div>
      <div className="card w-25 mx-auto p-3 m-5 bg-light">
        <div className="card-body">
          <h2>{students[index].sno}</h2>
          <h2>{students[index].name}</h2>
        </div>
      </div>
      <button className="btn btn-info ms-3" onClick={decrementIndex}>
        Prev
      </button>
      <button className="btn btn-warning" onClick={incrementIndex}>
        Next
      </button>
    </div>
  );
}

export default Test5;
