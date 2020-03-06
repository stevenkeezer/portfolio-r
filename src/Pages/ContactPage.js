import React, { useState } from "react";
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
  FaTwitterSquare,
  FaPhone
} from "react-icons/fa";
import { MdLocationOn, MdEmail } from "react-icons/md";
import "../Pages/Contact.css";

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
        <div class="contact-wrapper">
          <div className="sub-contact-wrapper">
            <h2 style={{ color: "grey", fontSize: "20px" }}>Contact</h2>
            <h1 style={{ color: "black", fontSize: "35px" }}>Your Project</h1>
            <h1 style={{ color: "black", fontSize: "35px" }}>
              Let's get started
            </h1>
          </div>
          <div
            class="form-horizontal"
            role="form"
            method="post"
            action="contact.php"
            style={{ marginTop: "5%" }}
          >
            <div class="form-group ">
              <div class="col-sm-12">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="NAME"
                  name="name"
                ></input>
              </div>
            </div>

            <div class="form-group">
              <div class="col-sm-12">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="EMAIL"
                  name="email"
                ></input>
              </div>
            </div>

            <textarea
              class="form-control"
              rows="10"
              placeholder="MESSAGE"
              name="message"
            ></textarea>
            <div className="button-container">
              <button
                class="send-button"
                id="submit"
                type="submit"
                value="SEND"
              >
                <div class="">
                  <i class="fa fa-paper-plane"></i>
                  <span class="send-text">SEND</span>
                </div>
              </button>
            </div>
          </div>

          <div class="direct-contact-container">
            <ul class="contact-list">
              <li class="list-item">
                <MdLocationOn font-size="32px" />
                <span class="contact-text place">SF | CA</span>
              </li>

              <li class="list-item">
                <FaPhone font-size="32px" />
                <span class="contact-text phone">
                  <a href="tel:1-212-555-5555" title="Give me a call">
                    (212) 555-2368
                  </a>
                </span>
              </li>

              <li class="list-item">
                <MdEmail font-size="32px" />
                <span class="contact-text gmail">
                  <a href="mailto:#" title="Send me an email">
                    stevengkeezer@gmail.com
                  </a>
                </span>
              </li>
            </ul>

            <hr></hr>
            <ul class="social-media-list">
              <li>
                <a href="#" target="_blank">
                  <FaLinkedin class="contact-icon" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <FaFacebookSquare class="contact-icon" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <FaStackOverflow class="contact-icon" />{" "}
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <FaGithub className="contact-icon" />{" "}
                </a>
              </li>
            </ul>
            <hr></hr>
          </div>
        </div>
      </ScrollAnimation>{" "}
    </section>
  );
}
