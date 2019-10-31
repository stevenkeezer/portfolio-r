import React from "react";
import movie from "./movieApp.png";
import twitter from "./twitterApp.png";
import weather from "./weatherApp.png";
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
    <div style={{ maxWidth: "1250px" }} class="row mx-auto">
      <div class="portfolio_item col-md-6">
        <div class="container container-monitor">
          <div class="screen monitor">
            <img alt="blah" width="100%" height="100%" src={weather}></img>
          </div>
        </div>
      </div>
      <div class="portfolio_item col-md-6">
        <div class="container container-monitor">
          <div class="screen monitor">
            <img alt="blah" width="100%" height="100%" src={movie}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
