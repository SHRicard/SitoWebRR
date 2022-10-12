import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Perfil from "./Perfil.js";

const Menu = () => {
  return (
    <div className="container">
      <div className="row pt-1 ">
        <div className="col-4 bg-primary">
          <Perfil />
        </div>
        <div className="col-7 ">
          <section className=" bg-warning">
            <Outlet />
          </section>
        </div>

        <div className="col-1 bg-danger d-flex pt-2 pb-2 justify-content-center  align-items-center ">
          <div className="bg-dark nav ">
            <ul className="list-ul">
              <li className="list-li ">
                <NavLink
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                  to="Home"
                >
                  <span className="icon" style={{ "--clr": "#f44336 " }}>
                    {/* home */}
                    <i className="bi bi-house-fill" />
                  </span>
                </NavLink>
              </li>
              <li className="list-li">
                <NavLink
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                  to="/About"
                >
                  {/* About */}
                  <span className="icon" style={{ "--clr": "#2196f3 " }}>
                    <i className=" bi bi-person-circle" />
                  </span>
                </NavLink>
              </li>
              <li className="list-li">
                <NavLink
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                  to="/Proyecto"
                >
                  <span className="icon" style={{ "--clr": "#e91e63 " }}>
                    {/* Proyecto */}
                    <i className="bi bi-folder-symlink-fill" />
                  </span>
                </NavLink>
              </li>
              <li className="list-li">
                <NavLink
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                  to="/Estudios"
                >
                  <span className="icon" style={{ "--clr": "#ffc107" }}>
                    {/* Estudios */}
                    <i className="bi bi-mortarboard-fill" />
                  </span>
                </NavLink>
              </li>
              <li className="list-li">
                <NavLink
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                  to="/Contacto"
                >
                  <span className="icon " style={{ "--clr": "#97dc47" }}>
                    {/* Contacto */}
                    <i className="bi bi-envelope-fill" />
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
