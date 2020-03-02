import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import orangeBg from "./denise-bossarte-8rEJiVQk1Vw-unsplash.jpg";
import redCpu from "./redCpu.png";
import demo from "./demo.gif";
import blueYeeum from "./blueYeeum.png";
import blueBg from "./blueBg.png";
import greenBg from "./greenBg.jpg";
import purpleBg from "./purple.png";
import tealBg from "./tealBg.png";
import greenTwitter from "./greenTwitter.png";
import reactLogo from "./reactLogo.png";
import purple from "./purple.jpeg";
import pinkPhone from "./pinkPhone.png";
import weatherApp from "./weather.png";
import cpu from "./goran-ivos-ly-RWaR0GXI-unsplash.jpg";

import "./CardColumn.css";

export default function CardColumn() {
  return (
    <div class="card-container">
      <div class="row mx-auto">
        <div class="col-md-6">
          <div class="card w-100">
            <div class="card-block left-cards">
              <a href="https://github.com/stevenkeezer/yeeeum-rn">
                <div
                  style={{
                    backgroundImage: `url(${blueBg})`,
                    padding: 100,
                    paddingTop: 140,
                    paddingBottom: 140
                  }}
                >
                  <img
                    src={demo}
                    style={{ width: "50%", borderRadius: "8%" }}
                  ></img>
                </div>
              </a>
              <h4 class="card-title text-left">Mobile Applications</h4>
              <p class="card-text text-left">
                Mobile first built applications with react.
              </p>
            </div>
          </div>
          <div class="card w-100">
            <div class="card-block mx-auto mb-4 left-cards">
              <h1
                style={{ maxWidth: "", fontSize: "33px" }}
                class="card-text-only text-left "
              >
                Improving the design and functionality of your product can
                dramatically improve customer satisfaction and product value.
              </h1>
            </div>
          </div>
          <div class="card w-100">
            <div class="card-block left-cards">
              <img class="img-fluid" src={redCpu}></img>
              <h4 class="card-title text-left">UX/UI Design</h4>
              <p class="card-text text-left">
                User interface design for mobile apps.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 ">
          <div class="card  w-100">
            <div class="card-block">
              <a href="https://serene-mayer-ab963a.netlify.com/">
                <div
                  style={{ backgroundImage: `url(${greenBg})`, padding: 120 }}
                >
                  <img class="img-fluid" src={weatherApp}></img>
                </div>
              </a>
              <h4 class="card-title text-left">Backend Development</h4>
              <p class="card-text text-left">
                Scaling backend development using Python Flask.
              </p>
            </div>
          </div>
          <div class="card  w-100">
            <div class="card-block">
              <img class="img-fluid" src={cpu}></img>
              <h4 class="card-title text-left">React Development</h4>
              <p class="card-text text-left">
                Modern react components using hooks.
              </p>
            </div>
          </div>
          <div class="card  w-100">
            <div class="card-block">
              <a href="https://dreamy-galileo-9fd758.netlify.com">
                <img class="img-fluid" src={blueYeeum}></img>
              </a>
              <h4 class="card-title text-left">Database Management</h4>
              <p class="card-text text-left">
                MySQL & PostgreSQL database management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
