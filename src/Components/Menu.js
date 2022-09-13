import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="col">
      <div className="nav bg-dark  flex-column align-items-center">
        <div className="list m-3 bg-light">
          <NavLink
            to="/Home"
            className={({ isActive }) => (isActive ? "active" : null)}
            aria-current="page"
          >
            <span className="icon " style={{ "--clr": "#f44336" }}>
              <i className="bi bi-house-fill" />
            </span>
          </NavLink>
        </div>
        <div className=" list m-3 bg-light">
          <NavLink
            to="/About"
            className={({ isActive }) => (isActive ? "active" : null)}
          >
            <span className="icon " style={{ "--clr": "#ffa117" }}>
              <i className="bi bi-person-circle" />
            </span>
          </NavLink>
        </div>
        <div className=" list m-3 bg-light">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : null)}
            to="/Proyecto"
          >
            <span className="icon" style={{ "--clr": "#0fc70f" }}>
              <i className="bi bi-folder-symlink-fill"></i>
            </span>
          </NavLink>
        </div>
        <div className=" list m-3 bg-light">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : null)}
            to="/Estudios"
          >
            <span className="icon">
              <i
                className="bi bi-mortarboard-fill"
                style={{ "--clr": "#2196f3" }}
              />
            </span>
          </NavLink>
        </div>
        <div className=" bg-light">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : null)}
            to="/Contacto"
          >
            <span className="icon " style={{ "--clr": "#b145e9" }}>
              <i className="bi bi-envelope-fill"></i>
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Menu;
