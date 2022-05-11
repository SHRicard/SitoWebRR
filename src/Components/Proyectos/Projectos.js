import React from "react";
import Card from "../Card/Card";
import "./Projectos.css";
const Projectos = () => {
  return (
    <div className="row">
      <div className="col bg-danger text-center">
        <h2 className="titulo">Proyectos</h2>
        <Card />
      </div>
    </div>
  );
};

export default Projectos;
