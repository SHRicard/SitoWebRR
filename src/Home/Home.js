import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation.js";
const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 pt-3">
          <Navigation />
        </div>
        <div className="col">
          <Outlet />
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Home;
