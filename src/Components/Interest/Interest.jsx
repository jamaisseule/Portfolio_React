import React from "react";
import "./Interest.css";
import { FaPencil } from "react-icons/fa6";
import { FaPlane } from "react-icons/fa6";
import { FaGamepad } from "react-icons/fa6";
import { FaMusic } from "react-icons/fa";

const Hobby = () => {
  return (
    <div className="interest">
      <div className="interest-title">
        <h1>My Interests</h1>
      </div>
      <div className="interest-about">
        <div className="interest-item">
          <FaPencil className="icon" />
          <p>DRAWING</p>
        </div>
        <hr />
        <div className="interest-item">
          <FaGamepad className="icon" />
          <p>GAMING</p>
        </div>
        <hr />
        <div className="interest-item">
          <FaPlane className="icon" />
          <p>TRAVELLING</p>
        </div>
        <hr />
        <div className="interest-item">
          <FaMusic className="icon" />
          <p>Music</p>
        </div>
      </div>
    </div>
  );
};

export default Hobby;
