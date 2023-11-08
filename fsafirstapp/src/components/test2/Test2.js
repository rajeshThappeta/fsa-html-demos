import "./Test2.css";
import { useState } from "react";

function Test2() {
  //state
  let [skills, setSkills] = useState(["js", "css"]);

  //add new skill
  function addNewSkill() {
    setSkills(["react", ...skills]);
  }
  //delete existing skill
  function deleteSkill() {
    let copySkills = [...skills];
    copySkills.pop();
    setSkills(copySkills);
  }
  //modify skill
  function modifySkill() {
    let copySkills = [...skills];
    copySkills[1] = "bootstrap";
    setSkills(copySkills);
  }

  return (
    <div>
      <h1 className="display-1 text-primary">Change state of Array</h1>
      {skills.map((skill) => (
        <h1 key={skill}>{skill}</h1>
      ))}

      <button className="btn btn-success" onClick={addNewSkill}>
        Add new Skill
      </button>
      <button className="btn btn-danger" onClick={deleteSkill}>
        Delete Skill
      </button>
      <button className="btn btn-warning" onClick={modifySkill}>
        Modify Skill
      </button>
    </div>
  );
}

export default Test2;

