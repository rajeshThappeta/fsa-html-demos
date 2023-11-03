import './App.css'

function App() {
  //state
  let a = 10;
  let wish = "Good morning";
  let emp = {
    eno: 100,
    name: "bhanu",
  };
  let skills = ["js", "css", "react"];

  return (
    <div>
      <h1>Welcome to React</h1>
      <h3>Value of a is {a}</h3>
      <h2>Hello,{wish}</h2>
      <h4>ENo:{emp.eno}</h4>
      <h4>Name:{emp.name}</h4>

      {skills.map((s) => (
        <h2>{s}</h2>
      ))}
    </div>
  );
}

export default App;
