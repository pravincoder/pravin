import React from 'react'
import './Footer.css'
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {SiHackerrank} from 'react-icons/si'
import {BsInstagram} from 'react-icons/bs'
export const Footer = () => {
  return (
    <footer>
      <a href="#Home" className='footer__logo'>Pravin</a>
    <ul className='permalink'>
      <li><a href="#Home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contacts</a></li>
    </ul>
    <div className="footer__socials">
      <a href='https://www.linkedin.com/in/pravincoder/' ><BsLinkedin/></a>
      <a href='https://www.instagram.com/pravin.maurya.11/'><BsInstagram/></a>
      <a href="https://github.com/pravincoder"><BsGithub/></a>
      <a href="https://www.hackerrank.com/pravincoder"><SiHackerrank/></a>
    </div>
    <div className='footer__copyright'>
      <small>&copy; Pravin Maurya. All Rights Reserved.</small>
    </div>

    </footer>
  )
}
export default Footer