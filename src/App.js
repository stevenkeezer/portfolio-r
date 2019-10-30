import React, { useState, useEffect } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import ScrollAnimation from "react-animate-on-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import night from "../src/img/night.png";
import SpaceShip from "./components/SpaceShip.js";
import Spinner from "./components/Spinner";
import { Container } from "react-bootstrap";
import twitter from "./img/twitter.png";
import github from "./img/github.png";
import fb from "./img/fb.png";

import "./App.css";

function App() {
  const [sideDrawerOpen, isSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    isSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    isSideDrawerOpen(false);
  };

  return (
    <Container
      fluid
      style={{
        height: "100vw",
        backgroundImage: `url(${night})`,
        minHeight: "500vw"
      }}
      className="main-container"
    >
      <Toolbar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} />
      {sideDrawerOpen && <Backdrop click={backdropClickHandler} />}

      <main style={{ marginTop: "64px" }}>
        <Spinner />
        <ScrollAnimation animateIn="slideInUp">
          <SpaceShip />
        </ScrollAnimation>{" "}
        <ScrollAnimation animateIn="fadeInLeft" animateOnce="false">
          <img
            alt="hey"
            style={{ width: "44px", marginLeft: "-11px" }}
            src={twitter}
          ></img>
        </ScrollAnimation>{" "}
        <ScrollAnimation animateIn="fadeInRight" animateOnce="false">
          <img
            style={{ width: "48px", marginLeft: "-12px" }}
            alt="hey"
            src={github}
          ></img>
        </ScrollAnimation>{" "}
        <ScrollAnimation animateIn="fadeInLeft" animateOnce="false">
          <img
            alt="hey"
            style={{ width: "34px", marginLeft: "-5px" }}
            src={fb}
          ></img>
        </ScrollAnimation>{" "}
      </main>
    </Container>
  );
}

export default App;
