import React, { useState } from "react";
import Toolbar from "../components/Toolbar/Toolbar.js";
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
        <Toolbar drawerClickHandler={drawerToggleClickHandler} />
      </Headroom>
      <SideDrawer show={sideDrawerOpen} />
      {sideDrawerOpen && <Backdrop click={backdropClickHandler} />}

      <h1 class="section-header">CONTACT</h1>

      <div class="contact-wrapper">
        <div
          class="form-horizontal"
          role="form"
          method="post"
          action="contact.php"
        >
          <div class="form-group">
            <div class="col-sm-12">
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="NAME"
                name="name"
                value=""
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
                value=""
              ></input>
            </div>
          </div>

          <textarea
            class="form-control"
            rows="10"
            placeholder="MESSAGE"
            name="message"
          ></textarea>

          <button
            class="btn btn-primary send-button"
            id="submit"
            type="submit"
            value="SEND"
          >
            <div class="button">
              <i class="fa fa-paper-plane"></i>
              <span class="send-text">SEND</span>
            </div>
          </button>
        </div>

        <div class="direct-contact-container">
          <ul class="contact-list">
            <li class="list-item">
              <FaGithub font-size="32px" />
              <span class="contact-text place">SF | CA</span>
            </li>

            <li class="list-item">
              <FaGithub font-size="32px" />
              <span class="contact-text phone">
                <a href="tel:1-212-555-5555" title="Give me a call">
                  (212) 555-2368
                </a>
              </span>
            </li>

            <li class="list-item">
              <FaGithub font-size="32px" />
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
              <a href="#" target="_blank" class="contact-icon">
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" class="contact-icon">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" class="contact-icon">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" class="contact-icon">
                <i class="fa fa-codepen" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
          <hr></hr>

          <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
        </div>
      </div>
    </section>
  );
}
