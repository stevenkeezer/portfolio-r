import React from "react";
import "./Introduction.css";

export default function Introduction() {
  return (
    <div className="grimIam">
      <p className="i" style={{ marginRight: ".8%", marginBottom: "0px" }}>
        I{" "}
      </p>
      <b>
        <div className="innerIam">
          Build
          <br />
          <span
            className="break1"
            style={{ paddingRight: "1.5%", fontSize: "37px!" }}
          >
            Break
          </span>
          <br />
          Make
          <br />
          Build
          <br />
          <span
            className="break1"
            style={{ paddingRight: "1.5%", fontSize: "37px" }}
          >
            Break
          </span>
          <br />
        </div>
      </b>
      <p className="pl-2 m-0"> Stuff </p>
      <br></br>
      <h1
        style={{
          color: "white",
          marginTop: "-70px",
          fontSize: "43px",
          maxWidth: "790px",
          color: "#fff"
        }}
      >
        <br></br>
        <br></br>Full stack developer focused on collaboration, development and
        design.
      </h1>
    </div>
  );
}
