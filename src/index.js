import React from "react";
import ReactDOM from "react-dom/client";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Switch from "../src/Components/Switch.js";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container-fluid bg-warning container-50">
    <div className="container bg-dark pt-5 pb-5">
      <div className="col-12 pt-3">
        <div className="row">
          <div className="col-2 pb-3">
            <select
              class="form-select form-select-sm "
              aria-label=".form-select-sm example"
            >
              <option selected>Selector de idioma</option>
              <option value="1">Es</option>
              <option value="2">En</option>
              <option value="3">Br</option>
            </select>
          </div>
          <div className="col-3 ">
            <Switch />
          </div>
        </div>
      </div>
      <App />
    </div>
  </div>
);
