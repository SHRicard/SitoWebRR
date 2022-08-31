import React from "react";
// import Menu from "../Menu/Menu";
import Contenido from "../Contenido/Contenido.js";
import Navigation from "../Navigation/Navigation.js";
import Footer from "../Footer/Footer";

import "./Home.css";
const Home = () => {
  return (
    <div className="container">
      <Navigation />
      <Contenido />
      <Footer />
    </div>
  );
};

export default Home;
