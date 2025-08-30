import React, { useState, useEffect, useRef } from 'react';
import '../styles/SkillsSection.css';
import Section from './Section';
import { FadeInItems } from '../util/FadeInFunctions';
import skillsData from '../data/skills.json';

const SkillsSection: React.FC = () => {
  const [visibleCategories, setVisibleCategories] = useState<string[]>([]);
  const [visibleSkills, setVisibleSkills] = useState<string[]>([]);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsSectionVisible(true), 100);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isSectionVisible) {
      let categoryDelay = 0;

      Object.entries(skillsData).forEach(([category, skills]) => {
        setTimeout(() => {
          setVisibleCategories((prev) => [...prev, category]);
          FadeInItems(skills, setVisibleSkills, 150);
        }, categoryDelay);

        categoryDelay += 500;
      });
    }
  }, [isSectionVisible]);

  return (
    <Section
      id="skills"
      className="skills-section"
      title="Skills"
      ref={sectionRef}
    >
      <div className="skills-container">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div
            key={category}
            className={`skills-category ${
              visibleCategories.includes(category) ? 'visible' : ''
            }`}
          >
            <h3>{category}</h3>
            <div className="skills-list">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className={`skill-box ${
                    visibleSkills.includes(skill) ? 'visible' : ''
                  }`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
