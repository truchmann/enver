import React from 'react';
import './Services.scss';
import devIcon from '../assets/dev-icon.png';
import uiuxIcon from '../assets/ui-ux-icon.png';
import graphIcon from '../assets/graph-icon.png';
import motionIcon from '../assets/motion-icon.png';
import photoIcon from '../assets/photo-icon.png';
import videoIcon from '../assets/video-icon.png';
import trianglesIcon from '../assets/triangles-1.png';

const services = [
  { title: 'Development', desc: 'Create a platform with the best and coolest quality from us.', icon: devIcon },
  { title: 'UI/UX Designer', desc: 'We provide UI/UX Design services, and of course with the best quality', icon: uiuxIcon },
  { title: 'Graphik Designer', desc: 'We provide Graphic Design services, with the best designers', icon: graphIcon },
  { title: 'Motion Graphik', desc: 'Create a platform with the best and coolest quality from us.', icon: motionIcon },
  { title: 'Photography', desc: 'We provide Photography services, and of course with the best quality', icon: photoIcon },
  { title: 'Videography', desc: 'Create a platform with the best and coolest quality from us.', icon: videoIcon },
];

const Services = ({ onContactClick }) => (
  <section className="services">
    <div className="services__why">
      <div className="services__why-header">
        <h2>Why Enver Is The Best Choice?</h2>
        <p>Watch this one minute video so you understand why you should use our services!</p>
      </div>
      <div className="services__video-placeholder services__video-embed">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/80PUIQfyTM4" title="YouTube video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
    </div>
    <div className="services__list">
      <h3 id="service-list">
        <img src={trianglesIcon} alt="Triangles decoration" className="services__title-decor" />
        The Service We Provide For You
      </h3>
      <div className="services__items">
        {services.map((service, idx) => (
          <div className="services__item" key={idx}>
            <div className="services__icon-placeholder">
              <img src={service.icon} alt={service.title} style={{width: '48px', height: '48px'}} />
            </div>
            <div className="services__item-title">{service.title}</div>
            <div className="services__item-desc">{service.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services; 