import React from "react";
import Heading from "./Heading";
import Profile from "./Profile";
import Skills from "./SkillsSection/Skills";
import Employment from "./Employment";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";


function Resume(){

    return <div>
     
       
       <Heading />
       <div className="middle-container">
       <Profile />
       <hr/>
       
           <Skills />
          <Contact />
       </div>
       <Footer />
       </div>;
}

export default Resume;