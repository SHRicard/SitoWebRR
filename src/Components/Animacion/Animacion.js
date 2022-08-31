import React from "react";
import "./Animacion.css";
const Animacion = () => {
  const text = document.querySelector(".sec-text");
  const textLoad = () => {
    setTimeout(() => {
      text.textContent = "Back-End.";
    }, 0);
    setTimeout(() => {
      text.textContent = "Front-End.";
    }, 4000);
    setTimeout(() => {
      text.textContent = "Freelancer.";
    }, 8000);
  };

  textLoad();
  setInterval(textLoad, 12000);
  return (
    <div className="container-text">
      <div className="containerText">
        <span className="text frist-text text-white text-Acme">
          Desarrollador&nbsp;&nbsp;&nbsp;
        </span>
        <span className="text sec-text text-Acme-Azul"></span>
      </div>
    </div>
  );
};

export default Animacion;
