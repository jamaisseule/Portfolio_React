import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="education">
      <div className="education-title">
        <h1>My Education</h1>
      </div>
      <div className="education-content">
        <div className="education-details">
          <h3>University</h3>
          <h2>Information Technology</h2>
          <p>University of Greenwich</p>
          <p>Year: 2020 - 2024</p>
        </div>
        <div className="education-details">
          <h3>Internship</h3>
          <h2>Software Engineer</h2>
          <p>DevPlus</p>
          <p>Year: 2024 - Now</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
