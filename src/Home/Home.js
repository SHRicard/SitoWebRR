import React from "react";
import { Outlet } from "react-router-dom";

import Entrada from "./Entrada.js";
import Menu from "./Menu.js";
const Home = () => {
  return (
    <div className="container-fluid">
      <div className="col-12 bg-danger">
        <Entrada />
      </div>
      <div className="col-12 ">
        <Menu />
      </div>
      <select>
        <Outlet />
      </select>
    </div>
  );
};

export default Home;
