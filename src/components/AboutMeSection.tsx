import React from 'react';
import '../styles/AboutMeSection.css';
import SocialIcons from './SocialIcons';
import Button from './Button';
import Section from './Section';

const AboutMeSection: React.FC = () => {
  const handleResumeClick = () => {
    window.open('/sweet_resume.pdf', '_blank');
  };

  return (
    <Section id="about-me" className="about-me" title="About Me">
      <div className="about-me-content">
        <div className="profile-picture">
          <img src="/images/sweet_about.jpg" alt="Me" />
          <SocialIcons />
        </div>
        <div>
          <p>
            I&apos;m a Computer Engineering graduate from the University of
            Waterloo with a strong foundation in robotics, artificial
            intelligence, and full-stack development.
          </p>
          <p>
            In my free time, I enjoy channeling my creativity into building fun,
            innovative projects — whether it&apos;s a robot, a new application,
            or even composing music.
          </p>
          <Button label="Get My Resume" onClick={handleResumeClick} />
        </div>
      </div>
    </Section>
  );
};

export default AboutMeSection;
