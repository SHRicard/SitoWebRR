import React, { useState } from "react";

const Switch = () => {
  // const btnSwitch = document.querySelector("#switch");
  // btnSwitch.addEventListener("click", () => {
  //   Document.bady.claassList.toggle("dark");
  // });
  const [btnSwitch, setBtnSwitch] = useState(false);

  const handlebtnSwitch = () => {
    setBtnSwitch((btnSwitch) => !btnSwitch);
  };
  let toggleClassSwitch = btnSwitch ? "moon" : "sum";

  return (
    <div className="row ">
      <div className="col">
        <button
          className={`switch ${toggleClassSwitch}`}
          onClick={handlebtnSwitch}
          id="switch"
        >
          <span>
            <i className="bi bi-moon-stars-fill" />
          </span>
          <span>
            <i className="bi bi-sun-fill" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Switch;
