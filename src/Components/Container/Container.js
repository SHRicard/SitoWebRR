import React from "react";
import "./Container.css";
import Perfil from "../Perfil/Perfil.js";
import Contenido from "../Contenido/Contenido.js";
import Menu from "../Menu/Menu.js";
const Container = () => {
  return (
    <div className="row d-flex  justify-content-evenly align-items-center">
      <div className="col-3 bg-danger">
        <Perfil />
      </div>
      <div className="col-7  bg-primary">
        <Contenido />
      </div>
      <div className="col-1 bg-warning">
        <Menu />
      </div>
    </div>
  );
};

export default Container;
