import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  let toggleClassCheck = isOpen ? "open" : null;

  return (
    <div className="containerNavigation">
      <div className={`navigation ${toggleClassCheck}`}>
        <div onClick={handleClick} className="menu-toggle"></div>
        <ul>
          <li className="list" style={{ "--clr": "#f44336" }}>
            <NavLink activeClassName="Isactive" to="/Home">
              <span className="icon">
                <i class="bi bi-house-fill"></i>
              </span>
              <span className="text">Home</span>
            </NavLink>
          </li>
          <li className="list" style={{ "--clr": "#ffa117" }}>
            <NavLink activeClassName="active" to="/About">
              <span className="icon">
                <i class="bi bi-person-circle"></i>
              </span>
              <span className="text">About Me</span>
            </NavLink>
          </li>
          <li className="list" style={{ "--clr": "#0fc70f" }}>
            <NavLink activeClassName="active" to="/Proyectos">
              <span className="icon">
                <i class="bi bi-folder-symlink-fill"></i>
              </span>
              <span className="text">Proyectos</span>
            </NavLink>
          </li>
          <li className="list" style={{ "--clr": "#2196f3" }}>
            <NavLink activeClassName="active" to="/Estudios">
              <span className="icon">
                <i class="bi bi-mortarboard-fill"></i>
              </span>
              <span className="text">Estudios</span>
            </NavLink>
          </li>
          <li className="list" style={{ "--clr": "#b145e9" }}>
            <NavLink activeClassName="active" to="/Contacto">
              <span className="icon">
                <i class="bi bi-envelope-fill"></i>
              </span>
              <span className="text">Contacto</span>
            </NavLink>
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

// <main>
//   <nav>
//     <NavLink activeClassName="active" to="/Home">
//       Home
//     </NavLink>
//     <NavLink activeClassName="active" to="/About">
//       About
//     </NavLink>
//     <NavLink activeClassName="active" to="/Contacto">
//       Contacto
//     </NavLink>
//     <NavLink activeClassName="active" to="/Estudios">
//       Estudios
//     </NavLink>
//     <NavLink activeClassName="active" to="/Proyecto">
//       Proyectos
//     </NavLink>
//   </nav>
//   <section>
//     <Outlet />
//   </section>
// </main>
