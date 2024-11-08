import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about'>
      <div className="about-title" id='about'>
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmdvbWhyOHU0eTI0eGwyY24wbG9ydWFiZmFycW1lNXJ1bjdtcWxrYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/W6o3MfP1ldc0K8sb38/giphy.webp" alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Hello, My name is Ngan Truong.</p>
                <p>I am a senior student studying in Da Nang. I am eager to learn, responsible, sociable and adaptable.</p>
                <p>I would like to try my hand at a software engineer to gain practical experience and contribute to 
                    innovative projects while continuing to improve my skills and knowledge to become a professional 
                    software engineer.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"30%"}}/></div>
                <div className="about-skill"><p>React</p><hr style={{width:"10%"}}/></div>
                <div className="about-skill"><p>React</p><hr style={{width:"10%"}}/></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
