import React from "react";
import CardContacto from "../CardContacto/CardContacto";
import "./About.css";
const About = () => {
  return (
    <div className="row">
      <h2 className="text-center text-font-Blanco2 fs-1 lh-1">Sobre mi</h2>

      <h2 className="text-center text-font-Blanco2 tx mx-5 lh-1 fs-2">
        Ricardo Ramirez
      </h2>

      <div className="col-4 text-center">
        <CardContacto />
      </div>
      <div className="col-6 ">
        <p className="fs-5 text-font-Blanco2">
          Soy una persona que encontró su verdadera vocación, <br />
          comencé realizando el bootcamp de Soy Henry y luego para poder
          expandir mas mis conocimiento adquirir una membresía en la plataforma
          Platzi Me emociona aprender y estoy en constante capacitación. <br />
          Tengo 31 años, soy Desarrollador Web Front-End Junior autodidacta.
          <br /> Mi principal objetivo es encontrar un trabajo que me brinde la
          oportunidad de profundizar y mejorar mis habilidades,
          <br /> trabajo mucho en hacer un código limpio y semánticamente
          correcto, <br /> logrando que cada detalle quede resuelto.
        </p>
        <p className="fs-5 text-font-2 text-center">
          <span className="text-font-Blanco fs-3">" </span>Listo para trabajar
          de manera individual como en equipo y dar lo mejor de mí
          <span className="text-font-Blanco fs-3"> .."</span>
        </p>
      </div>
      <div className="row">
        <div className="col"></div>
      </div>
    </div>
  );
};

export default About;
