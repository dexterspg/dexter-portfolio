import React from "react";

function Skill(props){
    return (
    <div className="skill-row">
      <img className={props.skillStyle} src={props.imgUrl} alt="code-img"/>
      <h3>{props.skillTitle}</h3>
      <p>{props.skillContent}</p>
    </div>
    );
}


export default Skill;