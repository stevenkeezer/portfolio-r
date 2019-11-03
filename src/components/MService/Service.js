import React, { Fragment } from "react";

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
            <div className="service-images pt-5 pb-5 mx-auto ">
              <img
                className="img-fluid p-5 "
                src="https://picsum.photos/362/500"
              ></img>
              <img
                className="img-fluid p-5 "
                src="https://picsum.photos/361/500"
              ></img>
              <img
                className="img-fluid p-5 "
                src="https://picsum.photos/363/500"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
