import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./SideDrawer.css";

function SideDrawer(props) {
  let drawerClasses = "sideDrawer";
  if (props.show) {
    drawerClasses = "sideDrawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
        <button>Get In Touch</button>
      </ul>
    </nav>
  );
}

export default SideDrawer;
