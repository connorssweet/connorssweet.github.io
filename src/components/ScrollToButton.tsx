import React from 'react';
import { ScrollToSection } from '../util/ScrollToSection';
import '../styles/ScrollToButton.css';

const ScrollToButton: React.FC<{
  direction: 'up' | 'down';
  targetSection: string;
}> = ({ direction, targetSection }) => {
  return (
    <button
      className={`scroll-to-button`}
      onClick={() => ScrollToSection(targetSection)}
    >
      <i className={`fas fa-chevron-${direction}`}></i>
    </button>
  );
};

export default ScrollToButton;
