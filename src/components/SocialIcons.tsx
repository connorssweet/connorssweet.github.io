import React from 'react';
import '../styles/SocialIcons.css';

const SocialIcons: React.FC = () => {
  return (
    <div className={`social-icons `}>
      <a
        href="https://github.com/connorssweet"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon github"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href="https://linkedin.com/in/connorsweet"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon linkedin"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="mailto:connor.s.sweet@gmail.com" className="social-icon email">
        <i className="fas fa-envelope"></i>
      </a>
      <a
        href="https://open.spotify.com/artist/6guDpYcPZwOGb452Mg4HV4"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Spotify"
        className="social-icon spotify"
      >
        <i className="fab fa-spotify"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
