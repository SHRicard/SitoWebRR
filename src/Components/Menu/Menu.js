import React from "react";
import "./Menu.css";
const Menu = () => {
  return (
    <div className="container  p-0 m-0">
      <div className="row">
        <div className="col-12 text-center">
          <h4 className=" text-Acme-Azul fs-5 pt-3">
            {"<Front-End/>"}
            <small className="text-white  fs-4"> RRcode </small>
            {"<Back-End/>"}
          </h4>
        </div>
        {/* ///////////////////Star Menu ///////////////////// */}
        <nav className="navbar navbar-expand-lg navbar fs-6 text-Acme-Azul bg-black">
          <a className="navbar-brand" href="#">
            <h5 className="text-center bg-dark">
              <span className="text-Acme-Azul fs-4">{"<"}&nbsp; </span>
              <span className="text-white">{"RRcode"}</span>
              <span className="text-Acme-Azul fs-4">&nbsp;{"/>"}</span>
            </h5>
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto  mb-2 mb-lg-0 fs-5">
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
