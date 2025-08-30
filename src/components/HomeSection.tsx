import React, { useEffect, useState } from 'react';
import Button from './Button';
import '../styles/HomeSection.css';
import { ScrollToSection } from '../util/ScrollToSection';
import { UseIsMobile } from '../util/UseIsMobile';
import ScrollToButton from './ScrollToButton';
import sectionsData from '../data/sections.json';
import HomeAnimation from './HomeAnimation';

const HomeSection: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const isMobile = UseIsMobile();

  const typingSpeed = 75;
  const deletingSpeed = 25;
  const pauseTime = 1000;

  useEffect(() => {
    const phrases = [
      'I build robots.',
      'I write software.',
      'I compose music.',
    ];
    const handleTyping = () => {
      const currentPhrase = phrases[loop % phrases.length];
      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));
        if (text === currentPhrase) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setLoop(loop + 1);
        }
      }
    };

    const typingDelay = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(handleTyping, typingDelay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loop]);

  return (
    <section className="home" id="home">
      <canvas id="home-canvas"></canvas>
      <HomeAnimation />
      <div className="home-content">
        {isMobile ? (
          <>
            <h1>Hi, I&apos;m</h1>
            <h1>Connor Sweet</h1>
          </>
        ) : (
          <h1>Hi, I&apos;m Connor Sweet</h1>
        )}

        <div className="typed-text-container">
          <p className="typed-text">{text}</p>
        </div>

        {isMobile ? (
          <>
            <ScrollToButton direction="down" targetSection="about-me" />
          </>
        ) : (
          <div className="home-links">
            {sectionsData.slice(1).map((section) => (
              <Button
                label={section.label}
                key={section.id}
                onClick={() => ScrollToSection(section.id)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeSection;
