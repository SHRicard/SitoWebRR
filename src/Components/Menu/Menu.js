import React, { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  let toggleClassCheck = isOpen ? "active" : null;

  return (
    <div className="containerNavigation">
      <div className={`navigation ${toggleClassCheck}`}>
        <div onClick={handleClick} className="menu-toggle"></div>
        <ul>
          <li className="list " style={{ clr: "#f44336" }}>
            <a href="#">
              <span className="icon">
                <i class="bi bi-house-fill"></i>
              </span>
              <span className="text">Home</span>
            </a>
          </li>
          <li className="list " style={{ clr: "#369ef4" }}>
            <a href="#">
              <span className="icon">
                <i class="bi bi-person-circle"></i>
              </span>
              <span className="text">About Me</span>
            </a>
          </li>
          <li className="list" style={{ clr: "#369ef4" }}>
            <a href="#">
              <span className="icon">
                <i class="bi bi-folder-symlink-fill"></i>
              </span>
              <span className="text">Proyectos</span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon">
                <i class="bi bi-mortarboard-fill"></i>
              </span>
              <span className="text">Estudios</span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon">
                <i class="bi bi-envelope-fill"></i>
              </span>
              <span className="text">Contacto</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
