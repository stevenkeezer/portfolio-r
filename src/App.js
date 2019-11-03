import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Introduction from "./components/Introduction/Introduction";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import CardColumn from "./components/CardColumns/CardColumn";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import MainFooter from "./components/Footer/MainFooter";
import { StickyContainer, Sticky } from "react-sticky";
import Backdrop from "./components/Backdrop/Backdrop";
import ScrollAnimation from "react-animate-on-scroll";
import Projects from "./components/Projects/Projects";
import Service from "./components/MService/Service";
import Toolbar from "./components/Toolbar/Toolbar";
import Contact from "./components/Contact/Contact";
import { Route, Switch } from "react-router-dom";
import ContactPage from "./Pages/ContactPage";
import { Container } from "react-bootstrap";
import AboutPage from "./Pages/AboutPage";
import Headroom from "react-headroom";
import "./App.css";

function App() {
  const [sideDrawerOpen, isSideDrawerOpen] = useState(false);
  const [NavColor, setNavColor] = useState(false);
  const [fadeOutText, setFadeOutText] = useState(false);

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

  useScrollPosition(({ prevPos, currPos }) => {
    console.log(currPos.y);
    if (currPos.y < -3694) {
      setFadeOutText(true);
    } else {
      setFadeOutText(false);
    }
  });

  return (
    <Container
      fluid
      style={NavColor ? whiteNav : blackNav}
      className="App main-container"
    >
      <Switch>
        <Route path="/about" component={AboutPage} />
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
              <StickyContainer>
                <Sticky>
                  {({ style }) => (
                    <div style={style} className="stickyEl">
                      {!fadeOutText && (
                        <div>
                          <h1 style={{ fontSize: "40px" }}>Services</h1>
                          <br></br>
                          <h3>UI Design</h3>

                          <p style={{}}>
                            I work with owners to display your product in the
                            best
                            <br></br>
                            light possible. This means having a Design that's
                            both
                            <br></br>
                            functional and captures the eyes of your audience.
                          </p>
                        </div>
                      )}

                      {fadeOutText && (
                        <div>
                          <h3>React & Applications</h3>

                          <p>
                            React products provide a flexible inuitive User
                            Interface
                            <br></br>
                            designed to stand out to your users. React is the
                            ideal
                            <br></br>
                            solution for the modern web application.
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </Sticky>
              </StickyContainer>
            </div>
          </section>
          <section>
            <ScrollAnimation animateIn="fadeIn">
              <Contact />
            </ScrollAnimation>{" "}
            <MainFooter />
          </section>
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
