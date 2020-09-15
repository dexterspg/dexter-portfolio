import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer(){
   return <div className="bottom-container">
            <LinkedInIcon />
          <a className="footer-link" href="https://www.linkedin.com/in/dexterpagkaliwangan">
            LinkedIn</a>
            <GitHubIcon />
          <a className="footer-link" href="https://github.com/dexterspg">GitHub</a>
         <p className="copyright">© Created By Dexter Pagkaliwangan on Sept 15, 2020</p>

   </div>
}


export default Footer;