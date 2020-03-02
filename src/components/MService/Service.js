import React, { Fragment } from "react";
import jsLogo from "./jsLogo.png";
import reactLogo from "./reactLogo.png";
import pythonLogo from "./pythonLogo.png";

import "./Service.css";

export default function Service() {
  return (
    <Fragment>
      <div
        style={{
          backgroundColor: "black",
          height: "100vh",
          height: "100%",
          width: "50vw",
          display: "block",
          paddingTop: "10%",
          paddingBottom: "10%"
        }}
        className="service-container"
      >
        <div className="row h-100">
          <div className="col-lg-12 my-auto ">
            <div className="service-images pt-5 pb-5 mx-auto">
              <img
                className="img-fluid pb-5 pt-5"
                style={{ width: "30%", height: "30%" }}
                src={reactLogo}
              ></img>
              <img
                className="img-fluid pb-5"
                style={{ width: "30%", height: "30%", marginTop: 170 }}
                src={jsLogo}
              ></img>

              <img
                className="img-fluid pb-5 "
                style={{ width: "30%", height: "30%", marginTop: 170 }}
                src={pythonLogo}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
