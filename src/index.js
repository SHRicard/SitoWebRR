import React from "react";
import ReactDOM from "react-dom/client";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Switch from "./Components/Switch.js";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="bg-dark">
    <Switch />
    <App />
  </div>
);
