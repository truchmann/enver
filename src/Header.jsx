import React, { useEffect, useState, useRef } from 'react';
import './Header.scss';
import logo from '../assets/logo.png';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'service-list', label: 'Our Project' },
  { id: 'about', label: 'About us' },
];

const Header = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navRef = useRef(null);
  const [underline, setUnderline] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = 'home';
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) {
            current = section.id;
            break;
          }
        }
      }
      if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 2)) {
        current = 'about';
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Анимация полоски
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const active = nav.querySelector('a.active');
    if (active) {
      const { left, width } = active.getBoundingClientRect();
      const navLeft = nav.getBoundingClientRect().left;
      setUnderline({ left: left - navLeft, width });
    }
  }, [activeSection]);
  useEffect(() => {
    const handleResize = () => {
      const nav = navRef.current;
      if (!nav) return;
      const active = nav.querySelector('a.active');
      if (active) {
        const { left, width } = active.getBoundingClientRect();
        const navLeft = nav.getBoundingClientRect().left;
        setUnderline({ left: left - navLeft, width });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeSection]);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} alt="Enver Logo" className="header__logo-img" height={48} />
        </div>
        <nav className="header__nav" ref={navRef}>
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={activeSection === section.id ? 'active' : ''}
            >
              {section.label}
            </a>
          ))}
          <div
            className="header__nav-underline"
            style={{ left: underline.left, width: underline.width }}
          />
        </nav>
        <button className="header__contact" onClick={onContactClick}>Contact us</button>
      </div>
    </header>
  );
};

export default Header; 