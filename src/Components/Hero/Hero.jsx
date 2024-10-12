import React from 'react'
import './Hero.css';
import profile_img from '../../assets/profile_img.png'

const Hero = () => {
  return (
    <div id = 'home' className='hero'>
        <img src={profile_img} alt=''></img>
        <h1><span>I am Utkarsh Aditya,</span> an aspiring full stack developer.</h1>
        <p>I am an aspiring full stack web developer who is eager to learn and contribute to solving real world problems. </p>
        <div className="hero-action">
        <div className="my-resume">My Resume</div>
        <div className="contact-me">Contact me</div>
        </div>
    </div>
  )
}

export default Hero