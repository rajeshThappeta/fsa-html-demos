import "./Test1.css";

//create Test1 component
 function Test1(p) {
  //{ x : {}}
  console.log(p);
  //state

  return (
    <div>
      <h1 className="header-test1">Test1 component</h1>
      <h2>PID: {p.x.pid}</h2>
      <h2>PID: {p.x.name}</h2>
      <h2>PID: {p.x.age}</h2>
      <img src={p.x.imgUrl} alt="" />
    </div>
  );
}

export default Test1;
