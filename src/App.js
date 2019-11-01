import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import ScrollAnimation from "react-animate-on-scroll";
import Service from "./components/MService/Service";
import ServiceImages from "./components/MService/ServiceImages";
import CardColumn from "./components/CardColumns/CardColumn";
import Projects from "./components/Projects/Projects";
import MainFooter from "./components/Footer/MainFooter";
import { Container } from "react-bootstrap";
import Headroom from "react-headroom";
import { AnimatedBg, Transition } from "scroll-background";
import Introduction from "./components/Introduction/Introduction";
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
    <Container fluid className="main-container">
      <Headroom>
        <Toolbar drawerClickHandler={drawerToggleClickHandler} />
      </Headroom>
      <SideDrawer show={sideDrawerOpen} />
      {sideDrawerOpen && <Backdrop click={backdropClickHandler} />}

      <AnimatedBg>
        <div style={{ height: "50px" }} />
        <ScrollAnimation animateOnce={true} duration={5} animateIn="fadeIn">
          <Introduction />
        </ScrollAnimation>{" "}
        <Transition height="110px" from="#202226" to="#fff" />
        <section>
          <ScrollAnimation animateOnce={true} animateIn="fadeInUp">
            <Projects />
          </ScrollAnimation>{" "}
        </section>
        <section>
          <CardColumn />
        </section>
        <section>
          <div className="d-flex w-100">
            <ScrollAnimation animateIn="fadeInLeft">
              <Service />
            </ScrollAnimation>{" "}
            <ServiceImages />
          </div>
        </section>
        <section>
          <h1>Got Projects? Let's talk</h1>
          <button>Contact Me</button>
          <MainFooter />
        </section>
      </AnimatedBg>
    </Container>
  );
}

export default App;
