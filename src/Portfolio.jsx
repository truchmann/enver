import React, { useState } from 'react';
import './Portfolio.scss';
import portfolio1 from '../assets/portfolio-1.png';
import portfolio2 from '../assets/portfolio-2.png';
import portfolio3 from '../assets/portfolio-3.png';
import circlesIcon from '../assets/circles-2.png';
import linesIcon from '../assets/lines-1.png';

const portfolioItems = [
  { id: 1, image: portfolio1 },
  { id: 2, image: portfolio2 },
  { id: 3, image: portfolio3 },
  { id: 4, image: portfolio1 },
  { id: 5, image: portfolio2 },
  { id: 6, image: portfolio3 },
  { id: 7, image: portfolio1 },
  { id: 8, image: portfolio2 },
  { id: 9, image: portfolio3 },
];

const itemsPerPage = 3;

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);

  const getCurrentItems = () => {
    const start = currentPage * itemsPerPage;
    return portfolioItems.slice(start, start + itemsPerPage);
  };

  return (
    <section className="portfolio">
      <h2>
        Our Awesome Portofolio
        <img src={circlesIcon} alt="Circles decoration" className="portfolio__title-decor" />
      </h2>
      <div className="portfolio__items">
        {getCurrentItems().map((item, idx) => (
          <div 
            key={item.id} 
            className="portfolio__item"
            style={{ 
              animationDelay: `${idx * 0.2}s`,
              animationDuration: `${0.8 + idx * 0.1}s`
            }}
          >
            <img 
              src={item.image} 
              alt={`Portfolio ${item.id}`} 
              style={{
                width: '100%', 
                height: '100%', 
                borderRadius: '14px', 
                objectFit: 'cover'
              }} 
            />
          </div>
        ))}
      </div>
      <div className="portfolio__pagination">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            className={`portfolio__page-btn ${currentPage === idx ? 'active' : ''}`}
            onClick={() => setCurrentPage(idx)}
            aria-label={`Page ${idx + 1}`}
          />
        ))}
        <img src={linesIcon} alt="Lines decoration" className="portfolio__pagination-decor" />
      </div>
    </section>
  );
};

export default Portfolio; 