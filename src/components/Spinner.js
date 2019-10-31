import React, { useEffect, useState } from "react";
import Introduction from "../components/Introduction/Introduction.js";
import ScrollAnimation from "react-animate-on-scroll";
import * as Scroll from "react-scroll";
import anime from "animejs/lib/anime.es.js";

export default function Spinner() {
  const [hideElement, setHideElement] = useState(false);

  const hide = {
    display: "none"
  };
  const show = {
    display: "block"
  };

  const hideSvg = () => {
    setHideElement(true);

    // scroll.scrollTo(1);
  };

  useEffect(() => {
    let tl = anime.timeline({
      duration: 4000,
      easing: "easeInOutQuart"
    });

    tl.add({
      targets: ".spinner",
      keyframes: [
        { scale: 0.3, rotate: "0deg" },
        { scale: 0.5, rotate: "360deg" }
      ],
      duration: 3000
    });

    tl.add(
      {
        targets: ["#logo", "feTurbulence", "feDisplacementMap"],

        baseFrequency: 0,
        numOctaves: 2,
        rotate: "300deg",
        scale: 1,
        fill: "#fff",
        fillOpacity: "1",
        strokeWidth: 3,
        stroke: "#fff",
        strokeDasharray: "20,10,5,4,30,10"
      },
      "-=4000"
    );

    tl.add({
      targets: ".spinner",
      scale: 0,
      duration: 500,
      complete: () => {
        hideSvg();
      }
    });
  }, []);

  return (
    <div>
      <div style={hideElement ? hide : show} className="svg-container">
        <svg className="spinner" viewBox="0 0 248 248.667">
          <filter id="displacementFilter">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.05"
              numOctaves="3"
              result="turbulence"
            />
            <feDisplacementMap
              in2="turbulence"
              in="SourceGraphic"
              scale="50"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <path
            id="logo"
            style={{
              filter: "url(#displacementFilter)",
              transformOrigin: "center"
            }}
            fill="#ff470f"
            d="M124,86.421c21.006,0,38.095,17.089,38.095,38.095S145.006,162.612,124,162.612
        s-38.095-17.089-38.095-38.095S102.994,86.421,124,86.421 M124,57.85c-36.819,0-66.667,29.848-66.667,66.667
        S87.181,191.183,124,191.183s66.667-29.848,66.667-66.667S160.819,57.85,124,57.85L124,57.85z"
          />
        </svg>
      </div>
      {hideElement && (
        <ScrollAnimation animateIn="fadeIn" animateOnce="false">
          <section>
            <Introduction />
          </section>
        </ScrollAnimation>
      )}
    </div>
  );
}
