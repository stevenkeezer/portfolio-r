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
      <Link to={"/"}>
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
      </Link>
      <ul>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <div className="subDesc">
          <p>UI Design</p>
          <p>Full Stack Development</p>
          <p>Style and Innovation</p>
        </div>

        <Link to={"/contact"}>
          <button>Get In Touch</button>
        </Link>
      </ul>
      <p className="email">E: stevengkeezer@gmail.com</p>
    </nav>
  );
}

export default SideDrawer;
