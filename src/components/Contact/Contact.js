import React from "react";
import { Link } from "react-router-dom";

import "./Contact.css";

export default function Contact() {
  return (
    <div className="container-fluid contact-container">
      <h1 className="project">Got a Project?</h1>
      <h1 className="talk">Let's talk.</h1>

      <Link to={"/contact"}>
        <button className="projectButton">Start your project</button>
      </Link>
    </div>
  );
}
