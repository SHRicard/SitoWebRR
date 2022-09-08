import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Entrada from "./Components/Entrada.js";
import Navigation from "./Components/Navigation.js";
import Home from "./Page/Home.js";
import Contacto from "./Page/Contacto.js";
import About from "./Page/About.js";
import Estudios from "./Page/Estudios.js";
import Proyecto from "./Page/Proyecto.js";
import "./Scss/App.scss";
// import Menu from "./Components/Menu.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Entrada />
        <Navigation />

        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Contacto" element={<Contacto />}></Route>
          <Route path="/Estudios" element={<Estudios />}></Route>
          <Route path="/Proyecto" element={<Proyecto />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
