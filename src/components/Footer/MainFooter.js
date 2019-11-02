import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebookSquare,
  FaStackOverflow,
  FaTwitterSquare
} from "react-icons/fa";

import "./MainFooter.css";

export default function MainFooter() {
  return (
    <footer class="mainfooter" role="contentinfo">
      <div class="footer-middle">
        <div class="container">
          <div class="row">
            <div class="col-md-12 p-4">
              <h4>Contact</h4>
              <p style={{ fontSize: "11px", marginBottom: "0px" }}>
                stevengkeezer@gmail.com
              </p>
              <ul class="social-network social-circle">
                <li>
                  <a href="#">
                    <h1>
                      <FaGithub />
                    </h1>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h1>
                      <FaLinkedin />
                    </h1>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h1>
                      <FaFacebookSquare />
                    </h1>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h1>
                      <FaStackOverflow />
                    </h1>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h1>
                      <FaTwitterSquare />
                    </h1>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row ">
            <div class="col-md-12 copy">
              <p class="text-center">
                &copy; Copyright 2019 - Steven Keezer. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
