import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="row">
      <div className="col-2 ">
        <div className="bg-dark">
          <h5 className="text-center">
            <span className="text-font-2">{"<"}&nbsp; </span>
            <span className="text-font-Blanco">{"RRcode"}</span>
            <span className="text-font-2">&nbsp;{"/>"}</span>
          </h5>
        </div>
      </div>
      <div className="col-5 text-end">
        <p className="link ">2022 All rights reserved</p>
      </div>
      <div className="col-5">
        <p className="link text-end">
          <i className=" mx-2  bi bi-facebook"></i>
          <i className=" mx-2  bi bi-github"></i>
          <i className=" mx-2  bi bi-linkedin"></i>
          <i className=" mx-2  bi bi-youtube"></i>
        </p>
      </div>
    </div>
  );
};

export default Footer;
