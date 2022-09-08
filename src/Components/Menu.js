import * as React from "react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelect, setIsSelect] = useState(false);

  const handleSelect = () => {
    setIsSelect((isSelect) => !isSelect);
  };

  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  let toggleClassCheck = isOpen ? "active" : null;
  let selectClassCheck = isSelect ? "active" : false;

  return (
    <div className="containerNavigation">
      <div className={`navigation ${toggleClassCheck}`}>
        <div onClick={handleClick} className="menu-toggle"></div>
        <ul>
          <li
            className={`list ${selectClassCheck}`}
            style={{ "--clr": "#f44336" }}
          >
            <a href="#">
              <span className="icon">
                <i class="bi bi-house-fill"></i>
              </span>
              <span className="text">Home</span>
            </a>
          </li>
          <li
            onClick={handleSelect}
            className={`list ${selectClassCheck}`}
            style={{ "--clr": "#ffa117" }}
          >
            <a href="#">
              <span className="icon">
                <i class="bi bi-person-circle"></i>
              </span>
              <span className="text">About Me</span>
            </a>
          </li>
          <li
            onClick={handleSelect}
            className={`list ${selectClassCheck}`}
            style={{ "--clr": "#0fc70f" }}
          >
            <a href="#">
              <span className="icon">
                <i class="bi bi-folder-symlink-fill"></i>
              </span>
              <span className="text">Proyectos</span>
            </a>
          </li>
          <li
            onClick={handleSelect}
            className={`list ${selectClassCheck}`}
            style={{ "--clr": "#2196f3" }}
          >
            <a href="#">
              <span className="icon">
                <i class="bi bi-mortarboard-fill"></i>
              </span>
              <span className="text">Estudios</span>
            </a>
          </li>
          <li
            onClick={handleSelect}
            className={`list ${selectClassCheck}`}
            style={{ "--clr": "#b145e9" }}
          >
            <a href="#">
              <span className="icon">
                <i class="bi bi-envelope-fill"></i>
              </span>
              <span className="text">Contacto</span>
            </a>
          </li>
        </ul>
      </div>
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default Menu;
