import React from 'react'
import "./Experience.css";

const Experience = () => {
  return (
    <div>
       <div className="experience">
      <div className="experience-title">
        <h1>My Experience</h1>
      </div>
      <div className="experience-content">
        <div className="experience-details">
          <h3>E-commerce Website</h3>
          <h2><h2>Information Technology</h2></h2>
          <p>December 2023 - May 2024</p>
          <p>A simple ecommerce website with three roles: admin, seller and customer. This is a website where users can both sell and buy.
          Technology: ASP. NET MVC, C#, HTML</p>
        </div>
        <div className="experience-details">
          <h3>COMP1640</h3>
          <h2>Coursework Project</h2>
          <p>March 2024 - April 2024</p>
          <p>The project involves developing a web-based secure role-based system for collecting student contributions for an annual university magazine.
          Technology: Express/NodeJs</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Experience
