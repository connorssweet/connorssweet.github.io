import React, { useState, useEffect, useRef } from 'react';
import '../styles/ExperienceSections.css';
import Section from './Section';
import { FadeInSectionItems } from '../util/FadeInFunctions';
import educationData from '../data/education.json';

const EducationSection: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(
    () => FadeInSectionItems(educationData, sectionRef, setVisibleItems),
    [educationData]
  );

  return (
    <Section
      id="education"
      className="experience-section"
      title="Education"
      ref={sectionRef}
    >
      <div className="experience-grid">
        {educationData.map((education, index) => (
          <div
            key={index}
            className={`experience-item ${
              visibleItems.includes(index) ? 'visible' : ''
            }`}
          >
            <div className="experience-item-container">
              <h3>{education.school}</h3>
              <h4>{education.degree}</h4>
              <h4>{education.option}</h4>
              <div className="experience-years education-years">
                <i className="fas fa-calendar-alt"></i> {education.years}
              </div>
              <ul className="experience-description">
                {education.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default EducationSection;
