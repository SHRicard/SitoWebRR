import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Entrada from "./Components/Entrada.js";
import Menu from "./Components/Menu.js";
import Home from "./Home/Home.js";
import Contacto from "./Page/Contacto.js";
import Estudios from "./Page/Estudios.js";
import Proyecto from "./Page/Proyecto.js";
import About from "./Page/About.js";
import "./Scss/App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Entrada />
        {/* <Menu /> */}

        <Routes>
          <Route path="/" element={<Menu />}>
            {/* <Route path="/" element={}> */}
            <Route index element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="Proyecto" element={<Proyecto />} />
            <Route path="Estudios" element={<Estudios />} />
            <Route path="Contacto" element={<Contacto />} />
            <Route path="About" element={<About />} />
            {/* </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
