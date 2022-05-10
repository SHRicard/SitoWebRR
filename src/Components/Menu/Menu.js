import React from "react";
import "./Menu.css";
const Menu = () => {
  return (
    <div className="row">
      <nav className="navbar navbar-expand-lg pt-4 pb-5 mb-5 ">
        <div className="container-fluid">
          <h5>
            <span className="text-font-2">{"<"}&nbsp; </span>
            <span className="text-font-Blanco">{"RRcode"}</span>
            <span className="text-font-2">&nbsp;{"/>"}</span>
          </h5>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse link text-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="{}">
                  Servicios
                </a>
              </li>
              <li className=" nav-item  ">
                <a className="nav-link" href="{}">
                  Cursos
                </a>
              </li>
              <li className=" nav-item  ">
                <a className="nav-link" href="{}">
                  Tecnologias
                </a>
              </li>
              <li className=" nav-item  ">
                <a className="nav-link" href="{}">
                  Contacto
                </a>
              </li>
              <li className=" nav-item  ">
                <a className="nav-link" href="{}">
                  Curriculum
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="{}"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Proyectos
                </a>
                <ul
                  className="dropdown-menu text-center "
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="{}">
                      Pokemon Api
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="{}">
                      Country Api
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
