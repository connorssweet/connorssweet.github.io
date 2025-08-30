import React, { useEffect } from 'react';
import HomeSection from './HomeSection';
import AboutMeSection from './AboutMeSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ContactSection from './ContactSection';
import EducationSection from './EducationSection';
import '../styles/App.css';
import WorkSection from './WorkSection';
import Navbar from './Navbar';

export const App: React.FC = () => {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);
  return (
    <div className="App">
      <Navbar />
      <HomeSection />
      <AboutMeSection />
      <SkillsSection />
      <WorkSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default App;
