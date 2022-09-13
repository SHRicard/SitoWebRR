import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  let toggleClassCheck = isOpen ? "open" : "";

  return (
    <div className=" containerNavigation d-flex align-items-start bg-dark flex-column bd-highlight mb-3">
      <div>
        <div className={`navigation ${toggleClassCheck}`}>
          <div onClick={handleClick} className="menu-toggle"></div>
          <ul className="pt-5">
            <li className="list ">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : null)}
                to="/Home"
              >
                <span className="icon " style={{ "--clr": "#f44336" }}>
                  <i className="icon bi bi-house-fill" />
                </span>
                <span className="text" style={{ "--clr": "#f44336" }}>
                  Home
                </span>
              </NavLink>
            </li>
            <li className="list">
              <NavLink to="/About">
                <span className="icon " style={{ "--clr": "#ffa117" }}>
                  <i className="bi bi-person-circle"></i>
                </span>
                <span className="text" style={{ "--clr": "#ffa117" }}>
                  About
                </span>
              </NavLink>
            </li>
            <li className="list">
              <NavLink to="/Proyecto">
                <span className="icon" style={{ "--clr": "#0fc70f" }}>
                  <i className="bi bi-folder-symlink-fill"></i>
                </span>
                <span className="text" style={{ "--clr": "#0fc70f" }}>
                  Proyectos
                </span>
              </NavLink>
            </li>
            <li className="list">
              <NavLink to="/Estudios">
                <span className="icon" style={{ "--clr": "#2196f3" }}>
                  <i className="bi bi-mortarboard-fill"></i>
                </span>
                <span className="text" style={{ "--clr": "#2196f3" }}>
                  Estudios
                </span>
              </NavLink>
            </li>
            <li className="list">
              <NavLink to="/Contacto">
                <span className="icon " style={{ "--clr": "#b145e9" }}>
                  <i className="bi bi-envelope-fill"></i>
                </span>
                <span className="text" style={{ "--clr": "#b145e9" }}>
                  Contacto
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
