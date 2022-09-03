import React from "react";
import Entrada from "../Entrada/Entrada.js";
import Container from "../Container/Container.js";
import Menu from "../Menu/Menu.js";
import "./Home.css";
const Home = () => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-12 pt-2">
          <Entrada />
        </div>
        <div className="col-11 pt-1">
          <Container />
        </div>
        <div className="col-1">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Home;
