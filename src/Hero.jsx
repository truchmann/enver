import React from 'react';
import './Hero.scss';
import heroImg from '../assets/hero.png';
import heroBg from '../assets/hero-background-1.png';
import addIcon from '../assets/add-1.png';
import circlesIcon from '../assets/circles-1.png';
import linesIcon from '../assets/lines-1.png';
import trianglesIcon from '../assets/triangles-1.png';
import triangles2Icon from '../assets/triangles-2.png';

const Hero = ({ onContactClick }) => (
  <section className="hero">
    <div className="hero__content">
      <h1>
        <img src={triangles2Icon} alt="Triangles decoration" className="hero__title-decor" />
        Build Your<br/>Awesome<br/>Platform
      </h1>
      <p>Enver studio is a digital studio that offers several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.</p>
      <button className="hero__button" onClick={onContactClick}>Contact us</button>
    </div>
    <div className="hero__image-background">
      <img src={heroBg} alt="Hero background" className="hero__bg-img" />
      <img src={heroImg} alt="Hero" className="hero__main-img" />
      <div className="hero__decorations">
        <img src={addIcon} alt="Add decoration" className="hero__decor hero__decor--add" />
        <img src={circlesIcon} alt="Circles decoration" className="hero__decor hero__decor--circles" />
        <img src={linesIcon} alt="Lines decoration" className="hero__decor hero__decor--lines" />
        <img src={trianglesIcon} alt="Triangles decoration" className="hero__decor hero__decor--triangles" />
      </div>
    </div>
  </section>
);

export default Hero; 