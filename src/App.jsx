import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import BackgroundBlobs from './BackgroundBlobs';
import ContactModal from './components/ContactModal.jsx';

function App() {
  const [isContactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  return (
    <>
      <BackgroundBlobs />
      <div className="App">
        <Header onContactClick={openContact} />
        <div id="home"><Hero onContactClick={openContact} /></div>
        <div id="services"><Services onContactClick={openContact} /></div>
        <div id="portfolio"><Portfolio /></div>
        <div id="about"><Contact onContactClick={openContact} /></div>
        <Footer onContactClick={openContact} />
      </div>
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </>
  );
}

export default App;
