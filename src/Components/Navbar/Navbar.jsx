import React from 'react'
import './Navbar.css'
//import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
    <h2>UTKARSH.</h2>
    
      <ul className="nav-menu">
        <li><p>Home</p></li>
        <li><p>About Me</p></li>
        <li><p>Services</p></li>
        <li><p>Portfolio</p></li>
        <li><p>Contact</p></li>
      </ul>
      <div className="nav-connect"><button id = "resume-button">DOWNLOAD RESUME</button></div>
    </div>
  )
}

export default Navbar