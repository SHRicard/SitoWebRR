import React from "react";
import Perfil from "../Img/Perfil.jpg";
import PerfilCirular from "../Img/githup.jpg";

import "./CardContacto.css";
const CardContacto = () => {
  return (
    <div className="row">
      <div className="col bg-danger"></div>
      <div className="col">
        <div className="card">
          <input type="checkbox" name="" />
          <div className="toggle">
            <p className="fs-1">+</p>
          </div>
          <div className="imgBox">
            <img src={Perfil} alt="perfil" className="img" />
          </div>
          <div className="detalle">
            <img
              src={PerfilCirular}
              alt="PerfilCirular"
              className="img-cirular"
            />
            <span className="fs-2 text-font tx"> Ricardo Ramirez</span>
            <p className="fs-4 text-font">Desarrollador Web</p>
            <span className="link">
              <i className=" mx-2  bi bi-facebook fs-4"></i>
              <i className=" mx-2  bi bi-github fs-4 "></i>
              <i className=" mx-2  bi bi-linkedin fs-4"></i>
              <i className=" mx-2  bi bi-youtube fs-4"></i>
            </span>
            <h4 className=" text-font-2 fs-6 tx pt-2">
              {"<Front-End/>"}
              <small className="text-font fs-4"> RRcode </small>
              {"<Back-End/>"}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContacto;
