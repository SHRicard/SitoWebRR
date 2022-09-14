import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Outlet>
          <div className="col">asd</div>
          <div className="col">asd</div>
        </Outlet>
      </div>
    </div>
  );
};

export default Home;
