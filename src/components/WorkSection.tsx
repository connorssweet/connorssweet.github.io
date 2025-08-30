import React, { useState, useEffect, useRef } from 'react';
import '../styles/ExperienceSections.css';
import Section from './Section';
import { FadeInSectionItems } from '../util/FadeInFunctions';
import workData from '../data/work.json';

const WorkSection: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(
    () => FadeInSectionItems(workData, sectionRef, setVisibleItems),
    [workData]
  );

  return (
    <Section
      id="work"
      className="experience-section"
      title="Work"
      ref={sectionRef}
    >
      <div className="experience-grid">
        {workData.map((work, index) => (
          <div
            key={index}
            className={`experience-item ${
              visibleItems.includes(index) ? 'visible' : ''
            }`}
          >
            <div className="experience-item-container">
              <h3>{work.company}</h3>
              <h4>{work.role}</h4>
              <div className="experience-years work-years">
                <div>
                  <i className="fas fa-calendar-alt"></i> {work.years[0]}
                </div>
                {work.years.slice(1).map((year, i) => (
                  <div key={i}>{year}</div>
                ))}
              </div>
              <ul className="experience-description">
                {work.description.map((item, i) => (
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

export default WorkSection;
