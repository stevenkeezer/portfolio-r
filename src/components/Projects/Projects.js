import React from "react";
import movie from "./movieApp.png";
import react from "./react.png";
import yeeeum from "./yeeeum.png";
import { FaGithub } from "react-icons/fa";
import { MdOpenInBrowser } from "react-icons/md";

import "./Projects.css";

export default function Projects() {
  var snippet = [].slice.call(document.querySelectorAll(".hover"));
  if (snippet.length) {
    snippet.forEach(function(snippet) {
      snippet.addEventListener("mouseout", function(event) {
        if (event.target.parentNode.tagName === "figure") {
          event.target.parentNode.classList.remove("hover");
        } else {
          event.target.parentNode.classList.remove("hover");
        }
      });
    });
  }
  return (
    <div style={{ padding: 37 }} class="row project-container  mx-auto">
      <div delay="3" class="portfolio_item col-md-6 col-sm-6 col-lg-6   ">
        <div class="container container-monitor pl-3 pr-3 ">
          <div class="screen monitor shadow-lg img-fluid">
            <a href="https://github.com/stevenkeezer/yeeeum-rn">
              <img alt="blah" width="100%" src={react}></img>
              <div class="overlay">
                <div class="text">
                  {" "}
                  <h1>
                    <a href="https://github.com/stevenkeezer/yeeeum-rn">
                      <FaGithub className="circle-icon" />
                    </a>
                    <a href="https://github.com/stevenkeezer/yeeeum-rn">
                      <MdOpenInBrowser className="circle-icon" />
                    </a>
                  </h1>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="portfolio_item col-md-6 col-sm-6 ">
        <div class="container container-monitor pl-3 pr-3">
          <div class="screen monitor shadow-lg img-fluid">
            <a href="https://yeeeum.com">
              <img
                alt="blah"
                style={{ maxHeight: "100", maxWidth: "100%" }}
                src={yeeeum}
              ></img>
              <div class="overlay">
                <div class="text">
                  {" "}
                  <h1>
                    <a href="https://github.com/stevenkeezer/imdbclone">
                      <FaGithub className="circle-icon" />
                    </a>
                    <a href="https://yeeeum.com">
                      <MdOpenInBrowser className="circle-icon" />
                    </a>
                  </h1>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
