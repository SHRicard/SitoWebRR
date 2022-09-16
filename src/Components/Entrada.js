import React from "react";
import Switch from "./Switch.js";

const Entrada = () => {
  return (
    <div className="container bg-danger">
      <div className="row pt-5">
        <div className="col-11 bg-primary">
          <h4 className=" text-Acme-Azul fs-5 pt-3">
            {"<Front-End/>"}
            <small className="text-white  fs-4"> RRcode</small>
            {"<Back-End/>"}
          </h4>
        </div>
        <div className="col-auto pt-2 bg-warning">
          <Switch />
        </div>
      </div>
    </div>
  );
};

export default Entrada;
