import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/hola.png';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small> Completed Projects</small>
            </article>
          </div>
          <p>I am a Full Stack Developer graduated from the Coderhouse Institute. In addition, I have knowledge in the area of ​​computing, 3D printing, design and electronics.

He worked as a web developer in his own business, programming is something I'm passionate about, that's why I seek to grow professionally. I would like to be part of a company where I can provide my knowledge to achieve projects and objectives, which in turn allows me to acquire new skills and job growth.

If you think I can help a project you are developing, contact me!</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro