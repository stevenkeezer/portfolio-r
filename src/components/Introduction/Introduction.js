import React from "react";
import "./Introduction.css";

export default function Introduction() {
  return (
    <div className="grimIam">
      <p style={{ marginRight: "1%" }}>I </p>
      <b>
        <div className="innerIam">
          Build
          <br />
          Break
          <br />
          Make
          <br />
          Build
          <br />
          Break
        </div>
      </b>
      <p>Stuff </p>
      <br></br>
      <h1
        style={{
          color: "white",
          marginTop: "-68px",
          fontSize: "38px",
          maxWidth: "700px",
          color: "#fff"
        }}
      >
        <br></br>
        <br></br>Full stack developer focused on design, collaboration and
        development.
      </h1>
    </div>
  );
}
