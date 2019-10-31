import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";

import "./Rocket.css";

export default function SpaceShip() {
  // const [fixed, setFixed] = useState(false);

  // const fixedToMiddle = {
  //   position: "fixed",
  //   top: "50%",
  //   left: "50%",
  //   marginTop: "-100px",
  //   marginLeft: "-250px"
  // };

  // const notFixed = {
  //   position: "relative"
  // };

  return (
    <ScrollAnimation animateIn="slideInUp" animateOnce="false">
      <div id="js-rocket">
        <svg
          width="437px"
          height="509px"
          viewBox="0 0 477 549"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <title>Rocket Illustration</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <linearGradient
              x1="0%"
              y1="50%"
              x2="100%"
              y2="50%"
              id="linearGradient-1"
            >
              <stop stop-color="#0CB2E2" offset="0%"></stop>
              <stop stop-color="#4FC0B0" offset="100%"></stop>
            </linearGradient>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="99.6929191%"
              id="linearGradient-2"
            >
              <stop stop-color="#11B3DE" offset="0%"></stop>
              <stop stop-color="#D8D8D8" stop-opacity="0" offset="100%"></stop>
            </linearGradient>
            <linearGradient
              x1="100%"
              y1="100%"
              x2="100%"
              y2="0%"
              id="linearGradient-3"
            >
              <stop stop-color="#0CB2E2" offset="0%"></stop>
              <stop stop-color="#4FC0B0" offset="100%"></stop>
            </linearGradient>
          </defs>
          <g
            id="Landing-Page"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="Landing" transform="translate(-1022.000000, -1486.000000)">
              <g
                id="Rocket-Illustration"
                transform="translate(1022.000000, 1486.000000)"
              >
                <g id="rocket-01" transform="translate(171.000000, 0.000000)">
                  <path
                    d="M79.7266842,0 C21.0677259,70.8293925 7.03751832,168.40158 48.352602,259.447674 L108.633142,259.447674 C147.480601,163.648882 135.706507,59.8343441 79.7266842,0 Z"
                    id="Path"
                    stroke="#E2E2E2"
                    fill="#F3F3F3"
                  ></path>
                  <ellipse
                    id="Oval"
                    fill="url(#linearGradient-1)"
                    cx="77.1789474"
                    cy="92.248062"
                    rx="24.6315789"
                    ry="24.7093023"
                  ></ellipse>
                  <path
                    d="M127.785996,191.908915 C124.395386,211.396638 119.874571,230.102007 113.305263,247.776091 C131.282564,255.919683 141.419077,273.913822 153.674722,314.631783 C159.290421,247.74053 156.21768,218.082207 127.785996,191.908915 Z"
                    id="Path"
                    fill="url(#linearGradient-1)"
                  ></path>
                  <path
                    d="M27.3587209,191.908915 C30.3837149,211.224427 35.6950415,229.899646 42.6947368,247.756713 C24.7909935,255.902665 14.6959555,273.902019 2.49045665,314.631783 C-3.1374391,247.685569 -0.956629496,218.054221 27.3587209,191.908915 Z"
                    id="Path"
                    fill="url(#linearGradient-1)"
                  ></path>
                  <path
                    d="M51.7263158,259.447674 L104.273684,259.447674 L101.04374,267.871788 C85.8664765,271.908343 71.0365186,272.118946 56.5885971,267.871788 L51.7263158,259.447674 Z"
                    id="Path"
                    fill="#444444"
                  ></path>
                  <path
                    d="M74.6128466,191.933831 C69.9017068,234.60055 70.9643699,275.594761 78.7218105,314.631783 C84.2476586,271.609212 85.8062311,230.40149 82.0514882,191.684735 C80.7054483,182.041131 76.8444391,182.076716 74.6128466,191.933831 Z"
                    id="Path"
                    fill="url(#linearGradient-1)"
                  ></path>
                  <path
                    d="M59.194048,272.827586 C73.8345836,275.255963 87.4861812,275.371971 100,272.827586 L95,439.039005 L64.194048,439.039005 L59.194048,272.827586 Z"
                    id="flame"
                    fill="url(#linearGradient-2)"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </ScrollAnimation>
  );
}
