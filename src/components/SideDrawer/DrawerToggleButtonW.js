import React, { useState } from "react";
import "./DrawerToggleButton.css";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

function DrawerToggleButton(props) {
  const [toggleColor, setToggleColor] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < -95) {
      setToggleColor(true);
    } else if (currPos.y > -55) {
      setToggleColor(false);
    }
  });

  const black = {
    background: "black"
  };

  const white = {
    background: "white"
  };
  return (
    <button className="toggleButton" onClick={props.click}>
      <div
        style={toggleColor ? white : black}
        className="toggleButtonLine"
      ></div>
      <div
        style={toggleColor ? white : black}
        className="toggleButtonLine"
      ></div>
      <div
        style={toggleColor ? white : black}
        className="toggleButtonLine"
      ></div>
    </button>
  );
}
export default DrawerToggleButton;
