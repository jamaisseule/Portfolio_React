import React from 'react'
import './Interest.css'
import { FaPencil } from "react-icons/fa6"
import { FaPlane } from "react-icons/fa6"
import { FaGamepad } from "react-icons/fa6"
import { FaMusic } from "react-icons/fa"

const Hobby = () => {
  return (
    <div className='interest'>
          <div className="about-title">
        <h1>Hobbies & Interests</h1>
      </div>
      <div className="about-interests">
        <div className="about-interest">
            <FaPencil className="icon" />
            <p>DRAWING</p>
        </div>
        <hr/>
        <div className="about-interest">
            <FaGamepad className="icon"/>
            <p>GAMING</p>
        </div>
        <hr/>
        <div className="about-interest">
            <FaPlane className="icon"/>
            <p>TRAVELLING</p>
        </div>
        <hr/>
        <div className="about-interest">
            <FaMusic className='icon'/>
            <p>Music</p>
        </div>
    </div>
      
    </div>
  )
}

export default Hobby
