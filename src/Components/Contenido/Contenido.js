import React from "react";
import PacMan from "./pacman.jpg";
import Animacion from "../Animacion/Animacion.js";
import "./Contenido.css";
const Contenido = () => {
  return (
    <div className="row pt-5">
      <div className="col-6">
        {/* //////Start title//////// */}
        <div className="title ">
          <h2 className="text-Acme-Azul fs-1 ">
            Hola!&nbsp;&nbsp;Soy{" "}
            <small className="text-white  fs-1">Ricardo</small>
            &nbsp;&nbsp;&nbsp;{"="}
            <small className="text-white ">&nbsp;{")"}</small>
          </h2>
        </div>
        {/* //////End title//////// */}

        {/* //////Start title animation//////// */}
        <Animacion />

        {/* //////End title animation//////// */}
        <div className="text-white text-Acme fs-5 ">
          Desde Argentina, activamente enfocado al diseño y maquetación <br />
          &nbsp;
          <small className=" text-Acme text-Acme-Azul fs-5 ">Front-End</small>
          .&nbsp; Busco aprender cosas nuevas constantemente , valoro la
          simplicidad y la eficiencia.
        </div>
        <div className="">
          <small className="text-white text-Acme fs-5 ">
            Te invito a jugar un ratito mi poke PacMan
          </small>
          <small></small>
        </div>
        <div className="pt-3 pb-3">
          <button type="button" className="col-6 btn btn-outline-primary">
            <small className=" text-Acme text-white fs-5 ">¡Comencemos!</small>
          </button>
        </div>
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
      <div className="col-6 text-center">
        <img src={PacMan} alt="noIMG" className="img-fluid" />
      </div>
    </div>
  );
};

export default Contenido;
