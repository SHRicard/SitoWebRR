import React from "react";
import "./Contenido.css";
const Contenido = () => {
  return (
    <div className="container-fluid bg-success">
      <div className="row">
        <div className="col bg-primary">
          <h1>Hola, Soy Ricardo Ramirez</h1>
          <h2>Developer Full-Stack </h2>
          <p>
            Desde Argentina, activamente enfocado al diseño y <br />
            maquetación front-end. Busco aprender cosas nuevas <br />
            constantemente, valoro la simplicidad y la eficiencia.
          </p>

          <button type="button" class="btn btn-outline-warning btn-sm">
            Small button
          </button>
        </div>
        <div className="col bg-danger"> img </div>
      </div>
    </div>
  );
};

export default Contenido;
