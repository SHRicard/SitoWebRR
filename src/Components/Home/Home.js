import React from "react";
import Menu from "../Menu/Menu";
import Contenido from "../Contenido/Contenido";
import Contacto from "../Contacto/Contacto";
import Footer from "../Footer/Footer";

import "./Home.css";
const Home = () => {
  return (
    <div className="container">
      <Menu />
      <Contenido />
      <Contacto />
      <Footer />
    </div>
  );
};

export default Home;
