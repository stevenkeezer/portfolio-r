import React from "react";
import movie from "./movieApp.png";
import weather from "./weatherApp.png";
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
    <div style={{ maxWidth: "1280px" }} class="row project-container mx-auto">
      <div delay="3" class="portfolio_item col-md-6 col-sm-6">
        <div class="container container-monitor pl-3 pr-3">
          <div class="screen monitor img-fluid">
            <a href="https://serene-mayer-ab963a.netlify.com">
              <img alt="blah" width="100%" height="100%" src={weather}></img>
              <div class="overlay">
                <div class="text">
                  {" "}
                  <h1>
                    <a href="https://github.com/stevenkeezer/weatherAppReact">
                      <FaGithub className="circle-icon" />
                    </a>
                    <a href="https://serene-mayer-ab963a.netlify.com">
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
          <div class="screen monitor img-fluid">
            <a href="https://dreamy-galileo-9fd758.netlify.com">
              <img alt="blah" width="100%" height="100%" src={movie}></img>
              <div class="overlay">
                <div class="text">
                  {" "}
                  <h1>
                    <a href="https://github.com/stevenkeezer/imdbclone">
                      <FaGithub className="circle-icon" />
                    </a>
                    <a href="https://dreamy-galileo-9fd758.netlify.com">
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
