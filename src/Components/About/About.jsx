import React from "react";
import "./About.css";
import bookCover from "../../assets/bookCover.png";

const About = () => {
  return (
    <div id ='about'className="about">
      <div className="about-header">
        <h1>ABOUT ME.</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={bookCover} alt=""></img>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>In everything that I do, I make sure to put in hard work and perseverance into all aspects of my life. While also at the same time using tools that come from a diverse cultural background through traveling and learning multiple languages to create something clients love.</p>
                <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
            </div>
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width : "40%"}} /></div>
            <div className="about-skill"><p>REACT JS</p><hr style={{width : "30%"} }/></div>
            <div className="about-skill"><p>JAVASCRIPT</p><hr style={{width : "20%"}} /></div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>MONTHS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>30+</h1>
            <p>PROJECT IDEAS</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>15+</h1>
            <p>MENTORS</p>
        </div>
      </div>
    </div>
    
  );
};

export default About;
