import React from "react";
import { Link } from "react-router-dom";

import "./SideDrawer.css";

function SideDrawer(props) {
  let drawerClasses = "sideDrawer";
  if (props.show) {
    drawerClasses = "sideDrawer open";
  }
  return (
    <nav className={drawerClasses}>
      <h3
        style={{
          color: "white",
          padding: "10%",
          fontWeight: "bold",
          fontSize: "1.75rem",
          paddingLeft: "13%"
        }}
      >
        SGK
      </h3>
      <ul>
        <li>
          <Link to={"/contact"}>About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <div className="subDesc">
          <p>UI Design</p>
          <p>Full Stack Development</p>
          <p>Style and Innovation</p>
        </div>

        <button>Get In Touch</button>
      </ul>
      <p className="email">E: stevengkeezer@gmail.com</p>
    </nav>
  );
}

export default SideDrawer;
