import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div
      className="container-menu d-flex align-items-center  bg-danger flex-column bd-highlight"
      style={{ height: 500 }}
    >
      <div className="iconsMenu bg-warning rounded-3">
        <ul className="">
          <li className=" bd-highlight ">
            <a href="#" />
            <span className="icons-menu">
              <i class="bi bi-house-fill"></i>
            </span>
            {/* <i class="bi bi-house"></i> */}
          </li>
          <li className=" bd-highlight">
            <a href="#" />
            <span className="icons-menu">
              <i class="bi bi-mortarboard-fill"></i>
            </span>
            {/* <i class="bi bi-mortarboard"></i> */}
          </li>
          <li className=" bd-highlight">
            <a href="#" />
            <span className="icons-menu">
              <i class="bi bi-envelope-fill"></i>
            </span>
            {/* <i class="bi bi-envelope"></i> */}
          </li>
          <li className=" bd-highlight">
            <a href="#" />
            <span className="icons-menu">
              <i class="bi bi-folder-symlink-fill"></i>
            </span>
            {/* <i class="bi bi-folder-symlink"></i> */}
          </li>
          <li className=" bd-highlight">
            <a href="#" />
            <span className="icons-menu">
              <i class="bi bi-person-circle"></i>
            </span>
          </li>
        </ul>
      </div>
      <div className="mt-auto  bd-highlight  bg-warning  rounded-3">
        <ul>
          <i class="bi bi-chevron-double-left"></i>
          <i class="bi bi-chevron-double-right"></i>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
