import React, { Fragment } from "react";

import "./Service.css";

export default function Service() {
  return (
    <Fragment>
      <div
        style={{
          backgroundColor: "black",
          height: "280vh",
          width: "50vw"
        }}
        className=""
      >
        <div className="row h-100">
          <div className="col-lg-12 my-auto ">
            <div className="service-images mx-auto ">
              <img className=" p-5 " src="https://picsum.photos/362/500"></img>
              <img className=" p-5 " src="https://picsum.photos/361/500"></img>
              <img className=" p-5 " src="https://picsum.photos/363/500"></img>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
