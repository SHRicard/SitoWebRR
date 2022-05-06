import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="row">
      <div className="col-2 ">
        <div className="bg-dark">
          <h5 className="text-center">
            <span className="logo-2">{"<"}&nbsp; </span>
            <span className="logo">{"RRcode"}</span>
            <span className="logo-2">&nbsp;{"/>"}</span>
          </h5>
        </div>
      </div>
      <div className="col-5">
        <p className="link text-center">2022 All rights reserved</p>
      </div>
      <div className="col-5">
        <p className="link text-center">Iconos</p>
      </div>
    </div>
  );
};

export default Footer;
