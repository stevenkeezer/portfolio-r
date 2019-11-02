import React, { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import FadeProps from "fade-props";

import "./Service.css";

export default function ServiceImages() {
  const [serviceSection, setServiceSection] = useState(false);
  const [uiSection, setUiSection] = useState(false);
  const [reactSection, setReactSection] = useState(false);

  const fixedDescription = {
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    top: "0",
    left: "61.1%",
    width: "100%",
    transition: "-webkit-transform .5s linear"
  };
  const desc = {};

  const posAbs = {
    position: "absolute"
  };

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < -3283 && currPos.y > -4663) {
      setServiceSection(true);
    } else {
      setServiceSection(false);
    }
  });

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < -3800) {
      setUiSection(true);
    } else if (currPos.y >= -4200) {
      setUiSection(false);
    }
  });

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < -4400) {
      setReactSection(true);
    } else {
      setReactSection(false);
    }
  });

  return (
    <div
      style={{
        height: "200vh",
        width: "100%"
      }}
      className="float-right"
    >
      <div className="row h-100">
        <div className="col-lg-12 pt-5 desc-container">
          <div
            style={serviceSection ? fixedDescription : desc}
            className="mx-auto align-middle description"
          >
            {/* <h1 style={{ color: "white" }}>Services</h1> */}

            {!uiSection && (
              <div style={serviceSection ? posAbs : desc}>
                <h3 style={{ color: "white" }}>UI Design</h3>

                <p style={{ color: "white" }}>
                  I work with owners to display your product in the best light
                  possible. This means having a Design that's both functional
                  and captures the eyes of your audience.
                </p>
              </div>
            )}

            {uiSection && !reactSection && (
              <div style={!serviceSection ? posAbs : desc}>
                <h3 style={{ color: "white" }}>React & Applications</h3>

                <p style={{ color: "white" }}>
                  I work with owners to dispsadfasdfsadfasdf. This means having
                  a Design that's both functional and captures the eyes of your
                  audience.
                </p>
              </div>
            )}

            {reactSection && (
              <div>
                <h3 style={{ color: "white" }}>Backend Database API</h3>

                <p style={{ color: "white" }}>
                  I work with owners to display your product in the best light
                  possible. This means having a Design that's both functional
                  and captures the eyes of your audience.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
