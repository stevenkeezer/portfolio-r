import React, { useState } from "react";
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
import Contact from "./components/Contact/Contact";
import ContactPage from "./Pages/ContactPage";
import { Container } from "react-bootstrap";
import Headroom from "react-headroom";
import Introduction from "./components/Introduction/Introduction";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  const [sideDrawerOpen, isSideDrawerOpen] = useState(false);
  const [NavColor, setNavColor] = useState(false);

  const drawerToggleClickHandler = () => {
    isSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    isSideDrawerOpen(false);
  };

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

  return (
    <Container
      fluid
      style={NavColor ? whiteNav : blackNav}
      className="App main-container"
    >
      <Switch>
        <Route path="/contact" component={ContactPage} />
        <Route path="/">
          <Headroom>
            <Toolbar drawerClickHandler={drawerToggleClickHandler} />
          </Headroom>
          <SideDrawer show={sideDrawerOpen} />
          {sideDrawerOpen && <Backdrop click={backdropClickHandler} />}
          <ScrollAnimation animateOnce={true} duration={5} animateIn="fadeIn">
            <Introduction />
          </ScrollAnimation>{" "}
          <section>
            <ScrollAnimation
              animateOnce={true}
              duration={2}
              animateIn="fadeInUp"
            >
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
            <Contact />
            <MainFooter />
          </section>
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
