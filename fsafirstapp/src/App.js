import { useState } from "react";
import "./App.css";
import Test6 from "./components/test6/Test6";

function App() {
  //state
  let a = 10;
  let b = 20;
  let address = {
    city: "hyd",
  };

  let [data, setData] = useState("");

  function getDataFromChild(x) {
    setData(x);
  }

  return (
    <div className="bg-primary p-5  ">
      <h1>Parent</h1>
      <h2>Data from child :{data}</h2>
      <Test6 getDataFromChild={getDataFromChild} />
    </div>
  );
}

export default App;
