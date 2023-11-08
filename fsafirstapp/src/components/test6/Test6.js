import React from "react";

function Test6(props) {
  //{x : 10,y:20}

  let data = 200;



  return (
    <div className="bg-warning p-5 w-50">
      <h1>Child</h1>
      <h2>
        Values from Parent :{props.a} {props.b}
      </h2>
      <h3>{props.address.city}</h3>
      <button
        className="btn btn-danger"
        onClick={() => props.getDataFromChild(data)}
      >
        Send
      </button>
    </div>
  );
}

export default Test6;
