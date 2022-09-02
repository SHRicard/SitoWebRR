import React from "react";
import Entrada from "../Entrada/Entrada.js";
import Container from "../Container/Container.js";
import Menu from "../Menu/Menu.js";
import "./Home.css";
const Home = () => {
  return (
    <div className="container ">
      <Entrada />
      <Container />
    </div>
  );
};

export default Home;
