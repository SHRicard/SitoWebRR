import React from "react";
import Home from "../Icon/Home.png";
import Estudios from "../Icon/Estudios.png";
import Mail from "../Icon/Mail.png";
import Proyectos from "../Icon/Proyectos.png";
import SobreMi from "../Icon/SobreMi.png";

import "./Menu.css";

const Menu = () => {
  return (
    <div
      className="d-flex align-items-end flex-column bd-highlight mb-3"
      style={{ height: 500 }}
    >
      <div className="iconsMenu bg-warning rounded-3">
        <ul className="">
          <li className=" bd-highlight ">
            <img src={Home} alt="noImg" />
          </li>
          <li className=" bd-highlight">
            <img src={Estudios} alt="noImg" />
          </li>
          <li className=" bd-highlight">
            <img src={Mail} alt="noImg" />
          </li>
          <li className=" bd-highlight">
            <img src={Proyectos} alt="noImg" />
          </li>
          <li className=" bd-highlight">
            <img src={SobreMi} alt="noImg" />
          </li>
        </ul>
      </div>
      <div className="mt-auto  bd-highlight  bg-warning  rounded-3">
        <ul>
          <li className="p-2 bd-highlight">{"<"}</li>

          <li className="p-2 bd-highlight">{">"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
