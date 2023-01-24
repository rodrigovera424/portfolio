import React from 'react';
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Rodrigo Vera</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href='https://www.linkedin.com/in/rodrigo-vera/' target="blank" >  <BsLinkedin/> </a>
<a href='https://github.com/rodrigovera424' target="blank"  > <BsGithub/> </a>
<a href='https://www.instagram.com/ceromprint/' target="blank" > <BsInstagram/> </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ET 2022. All rights reserved.
the images were created by AI</small>
      </div>
    </footer>
  )
}

export default Footer