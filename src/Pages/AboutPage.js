import React, { useState } from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import ToolbarW from "../components/Toolbar/ToolbarW.js";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import Backdrop from "../components/Backdrop/Backdrop";
import Headroom from "react-headroom";
import {
  FaGithub,
  FaLinkedin,
  FaFacebookSquare,
  FaStackOverflow,
  FaTwitterSquare
} from "react-icons/fa";
import "../Pages/AboutPage.css";

export default function ContactPage() {
  const [sideDrawerOpen, isSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    isSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    isSideDrawerOpen(false);
  };

  return (
    <section id="contact">
      <Headroom>
        <ToolbarW drawerClickHandler={drawerToggleClickHandler} />
      </Headroom>
      <SideDrawer show={sideDrawerOpen} />
      {sideDrawerOpen && <Backdrop click={backdropClickHandler} />}
      <ScrollAnimation animateOnce={true} duration={1} animateIn="fadeIn">
        <div style={{ maxWidth: "900px" }} class="container portfolio">
          <div class="row">
            <div class="col-md-12">
              <div class="heading"></div>
            </div>
          </div>
          <div class="bio-info">
            <div class="row">
              <div class="col-md-6 mr-auto">
                <div class="row">
                  <div class="col-md-12">
                    <div class="bio-image">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7ktf--3JvhleA1cXobWoZpB7T0jSuFH-w0Zrif81S2zsilOy&s"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="bio-content">
                  <h3 style={{ color: "grey", fontSize: "16px" }}>About</h3>
                  <h1 style={{ fontSize: "38px" }}>I'm Steven</h1>
                  <h5 style={{ color: "grey" }}>
                    I am a web designer, athlete and artist. I create custom web
                    designs with my clients needs in mind. As a former
                    collegiate athlete and chef, I bring with me a work ethic
                    and attention for detail. Let's get to work.
                  </h5>

                  <a href="https://github.com/stevenkeezer">
                    <button className="workBtn">Github</button>
                  </a>
                  <Link to={"/contact"}>
                    <button className="hireBtn">Hire me</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>{" "}
    </section>
  );
}
