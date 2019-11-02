import React from "react";
import { Card } from "react-bootstrap";
import orangeBg from "./denise-bossarte-8rEJiVQk1Vw-unsplash.jpg";
import redBg from "./joanna-kosinska-PbgY3ptgA4A-unsplash.jpg";
import blueBg from "./luke-chesser-pJadQetzTkI-unsplash.jpg";
import bluBg from "./mae-mu-Rz5o0osnN6Q-unsplash.jpg";
import green from "./screen-8.jpg";
import purple from "./purple.jpeg";

import "./CardColumn.css";

export default function CardColumn() {
  return (
    <div class="card-container">
      <div class="row mx-auto ">
        <div class="col-md-6">
          <div class="card w-100">
            <div class="card-block">
              <img class="img-fluid" width="600px" src={purple}></img>
              <h4 class="card-title text-left pl-4">Mobile Applications</h4>
              <p class="card-text text-left pl-4">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
          <div class="card w-100">
            <div class="card-block mx-auto mb-4">
              <h1
                style={{ maxWidth: "600px", fontSize: "33px" }}
                class="card-text-only text-left pl-4 "
              >
                Improving the design and functionality of your product can
                dramatically improve customer satisfaction and product value.
              </h1>
            </div>
          </div>
          <div class="card w-100">
            <div class="card-block">
              <img class="img-fluid" width="600px" src={redBg}></img>
              <h4 class="card-title text-left pl-4">UX/UI Design</h4>
              <p class="card-text text-left pl-4">
                Eye catching design for your front end.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 ">
          <div class="card  w-100">
            <div class="card-block p">
              <img class="img-fluid" src={green}></img>
              <h4 class="card-title text-left pl-4">
                Front End & Backend Fluidity
              </h4>
              <p class="card-text text-left pl-4">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
          <div class="card  w-100">
            <div class="card-block">
              <img class="img-fluid" src={bluBg}></img>
              <h4 class="card-title text-left pl-4">React Development</h4>
              <p class="card-text text-left pl-4">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
          <div class="card  w-100">
            <div class="card-block">
              <img class="img-fluid" src={blueBg}></img>
              <h4 class="card-title text-left pl-4">Database Management</h4>
              <p class="card-text text-left pl-4">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
