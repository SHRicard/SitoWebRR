import React from "react";
import ImgPortada from "../Img/ImgHome.png";
import "./Contenido.css";
const Contenido = () => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-lg-4 text-center pt-5">
          <h1 className="fs-1 text-font-2 ">
            <span className="text-fff">Hola</span> , Soy Ricardo
            <span className="text-fff"> {"ツ"} </span>
          </h1>
          <h2 className="text-font pt-3 pb-4 pt-4 fs-1">
            Developer Full-Stack{" "}
          </h2>
          <p className="text-font-2  pb-5 ">
            Desde Argentina, activamente enfocado al diseño y maquetación
            front-end. Busco aprender cosas nuevas constantemente, valoro la
            simplicidad y la eficiencia.
          </p>

          <button type="button" className="btn btn-outline-primary btn-sm ">
            <small className="text-font fs-4 ">
              &nbsp;&nbsp;&nbsp;Empecemos!&nbsp;&nbsp;
            </small>
          </button>
          <p className="link pt-3">
            <i className="  mx-2  bi bi-facebook"></i>
            <i className=" mx-2  bi bi-github"></i>
            <i className=" mx-2  bi bi-linkedin"></i>
            <i className=" mx-2  bi bi-youtube"></i>
          </p>
        </div>
        <div className="col text-end">
          <img
            src={ImgPortada}
            alt="portada"
            className="ImgPortada img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Contenido;
