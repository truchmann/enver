import React, { useState } from 'react';
import './ContactModal.scss';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="contact-modal__overlay" onClick={onClose}>
      <div className="contact-modal" onClick={e => e.stopPropagation()}>
        <button className="contact-modal__close" onClick={onClose}>×</button>
        <div className="contact-modal__content">
          <div className="contact-modal__form-block">
            <h3>Свяжитесь с нами</h3>
            <form className="contact-modal__form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Номер телефона"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <button type="submit">Отправить</button>
            </form>
          </div>
          <div className="contact-modal__info-block">
            <div className="contact-modal__contacts">
              <h4>Наши контакты:</h4>
              <p>Телефон: <a href="tel:+77771234567">+7 (777) 123-45-67</a></p>
              <p>Telegram: <a href="https://t.me/your_channel" target="_blank" rel="noopener noreferrer">@your_channel</a></p>
              <p>Адрес: г. Алматы, микрорайон Карасу, ул. Шоссейная 25/2</p>
            </div>
            <div className="contact-modal__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.8000000000002!2d76.9125!3d43.2225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836e7d16c5cb6d%3A0x4c507e3e1f0c0c0!2z0YPQuy4g0KjQvtGB0YHQuNC90LDRjywg0JDQu9C80LDRgNC60LAg0J_QvtC70YzRiNCw!5e0!3m2!1sru!2skz!4v1234567890"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта с расположением офиса"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal; 