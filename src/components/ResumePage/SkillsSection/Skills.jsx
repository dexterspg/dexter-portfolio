import React from "react";
import Skill from "./Skill";

function Skills(){
    return  (
    <div className="skills">
     <h2>My Skills.</h2>
     <Skill
        skillStyle="skill-row-img-1"
        imgUrl="images/code.png"
        skillTitle="Software Development"
        skillContent="I have experience in developing web application and mobile application using Java and Spring. In my previous work experience,
        I worked on creating a quiz game application that can help anyone test their knowledge in any field especially in software and technology."
      />

    <Skill
        skillStyle="skill-row-img-2"
        imgUrl="images/circuit.png"
        skillTitle="Circuit Design"
        skillContent="I am also skilled in designing circuit and constructing it. I have designed analog filter circuits as well as utilize a microcontroller. In my university, I had
          a project which can identify the appliance and measure its corresponding power consumption in real time"
      />
  </div>);
}


export default Skills;