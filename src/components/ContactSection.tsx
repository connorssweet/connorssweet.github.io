import React from 'react';
import '../styles/ContactSection.css';
import SocialIcons from './SocialIcons';
import ScrollToButton from './ScrollToButton';

const ContactSection: React.FC = () => {
  return (
    <footer className="contact-section">
      <ScrollToButton direction="up" targetSection="home" />
      <SocialIcons />
      <p>© Connor Sweet 2025</p>
    </footer>
  );
};

export default ContactSection;
