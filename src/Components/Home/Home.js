import React from "react";
import Menu from "../Menu/Menu";
import Contenido from "../Contenido/Contenido";
import Tecnologia from "../Tecnologia/Tecnologia";
import About from "../About/About";
import Contacto from "../Contacto/Contacto";

import Projectos from "../Proyectos/Projectos";
import Footer from "../Footer/Footer";

import "./Home.css";
const Home = () => {
  return (
    <div className="container">
      <Menu />
      <Contenido />
      <About />
      <Projectos />
      <Tecnologia />
      <Contacto />
      <Footer />
    </div>
  );
};

export default Home;
