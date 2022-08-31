import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="row">
      <div className="col-5 ">
        <div className="bg-dark">
          <h5 className="text-center">
            <span className="text-Acme-Azul fs-4">{"<"}&nbsp; </span>
            <span className="text-white">{"RRcode"}</span>
            <span className="text-Acme-Azul fs-4">&nbsp;{"/>"}</span>
          </h5>
        </div>
      </div>
      <div className="col-2 text-end">
        <p className="link ">2022 All rights reserved</p>
      </div>
      <div className="col-5">
        <div
          className="redes
        "
        >
          <i class="bi bi-github" />
          &nbsp; &nbsp; &nbsp;
          <i class="bi bi-youtube" />
          &nbsp; &nbsp; &nbsp;
          <i class="bi bi-linkedin" />
          &nbsp; &nbsp; &nbsp;
          <i class="bi bi-whatsapp" />
          &nbsp; &nbsp; &nbsp;
          <i class="bi bi-facebook" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
