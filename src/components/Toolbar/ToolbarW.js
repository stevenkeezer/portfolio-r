import React, { Component, useState } from "react";
import DrawerToggleButtonW from "../SideDrawer/DrawerToggleButtonW.js";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

// import "./Toolbar.css";

function Toolbar(props) {
  const [NavColor, setNavColor] = useState(false);

  const blackNav = {
    backgroundColor: "#202226",
    border: "none",
    transition: "background-color .3s linear",
    paddingTop: "55px"
  };
  const whiteNav = {
    color: "black",
    backgroundColor: "white",
    transition: "background-color .3s linear"
  };

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < -95) {
      setNavColor(true);
    } else if (currPos.y > -55) {
      setNavColor(false);
    }
  });

  const blackText = {
    color: "black"
  };

  const whiteText = {
    color: "white"
  };

  return (
    <header style={NavColor ? blackNav : whiteNav} className="toolbar">
      <nav className="toolbarNav">
        <div className="toolbarLogo">
          <a style={NavColor ? whiteText : blackText} href="/">
            SGK
          </a>
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

        <div className="toolbarToggleButton">
          <DrawerToggleButtonW click={props.drawerClickHandler} />
        </div>
      </nav>
    </header>
  );
}

export default Toolbar;
