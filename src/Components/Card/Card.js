import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <div className="cards">
      <div className="content">
        <h2>01</h2>
        <h3>regular</h3>
        <div className="price">$250</div>
        <ul>
          <li>30 websites</li>
          <li>30gb SSD</li>
          <li>domain name</li>
        </ul>
        <a href="#" className="">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Card;
