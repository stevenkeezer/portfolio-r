import React, { useState, useEffect } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import ScrollAnimation from "react-animate-on-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectCard from "./components/ProjectCard";
import ProjectCardRight from "./components/ProjectCardRight";
import CardColumn from "./components/CardColumn";
import Spinner from "./components/Spinner";
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
        <div style={{ height: "120px" }} />
        <Introduction />
        <Transition height="100px" from="#202226" to="#fff" />
        <section>
          <Projects />
        </section>
        <section>
          <CardColumn />
        </section>
        <section>
          <ScrollAnimation animateIn="fadeInLeft">
            <ProjectCardRight />
          </ScrollAnimation>{" "}
        </section>

        <section>
          <h1>Looking to start a project? Let's talk</h1>

          <MainFooter />
        </section>
      </AnimatedBg>
    </Container>
  );
}

export default App;
