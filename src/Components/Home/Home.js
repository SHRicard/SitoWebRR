import React from "react";
import Menu from "../Menu/Menu";
import Contenido from "../Contenido/Contenido.js";
import Footer from "../Footer/Footer";

import "./Home.css";
const Home = () => {
  return (
    <div className="container">
      <Menu />
      <Contenido />
      <Footer />
    </div>
  );
};

export default Home;
