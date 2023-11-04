import "./App.css";

function App() {
  //state
  // let a = 10;
  // let wish = "Good morning";
  // let emp = {
  //   eno: 100,
  //   name: "bhanu",
  // };
  // let skills = ["js", "css", "react"];

  // //array of emps
  // let emps = [
  //   { eno: 100, name: "ravi", age: 21, city: "hyd" },
  //   { eno: 200, name: "suresh", age: 23, city: "chennai" },
  //   { eno: 300, name: "bhanu", age: 21, city: "hyd" },
  //   { eno: 400, name: "mahesh", age: 26, city: "bangalore" },
  //   { eno: 500, name: "kiran", age: 28, city: "hyd" },
  //   { eno: 600, name: "manasa", age: 31, city: "vizag" },
  // ];

  //event handler
  function test() {
    console.log("test is called");
  }

  function test2(a) {
    console.log("test2 cxalled and a is ", a);
  }

  return (
    <div>
      <button onClick={test}>Call test</button>
      <button onClick={() => test2(100)}>Call test2</button>

      {/* <h1>Welcome to React</h1>
      <h3>Value of a is {a}</h3>
      <h2>Hello,{wish}</h2>
      <h4>ENo:{emp.eno}</h4>
      <h4>Name:{emp.name}</h4>

      {skills.map((s, ind) => (
        <h2 key={ind}>{s}</h2>
      ))} */}

      {/* table of emps */}
      {/* <table>
        <thead>
          <tr>
            <th>Eno</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {
            emps.map(empObj=><tr key={empObj.eno}>
              <td>{empObj.eno}</td>
              <td>{empObj.name}</td>
              <td>{empObj.age}</td>
              <td>{empObj.city}</td>
            </tr>)
          }
        </tbody>
      </table> */}
    </div>
  );
}

export default App;
