import React, { Component } from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton.js";
import "./Toolbar.css";

function Toolbar(props) {
  return (
    <header className="toolbar">
      <nav className="toolbarNav">
        <div className="toolbarToggleButton">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>

        <div className="toolbarLogo">
          <a href="/"> </a>
        </div>
        <div className="spacer"></div>

        <div className="toolbarItems">
          <ul>
            <li>
              <a href="/"></a>
            </li>
            <li>
              <a href="/"></a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Toolbar;
