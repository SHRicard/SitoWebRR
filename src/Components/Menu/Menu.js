import React from "react";
import "./Menu.css";
const Menu = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 bg-primary">
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img
                  src="/docs/5.1/assets/brand/bootstrap-logo.svg"
                  alt=""
                  class="d-inline-block align-text-top"
                />
                Bootstrap
              </a>
            </div>
          </nav>
        </div>
        <div className="col bg-dark">
          <nav>
            <ul className="nav justify-content-end align-items-center pt-2 mx-5">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Active
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Menu;
