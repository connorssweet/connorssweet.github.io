import React, { useState, useEffect, useRef } from 'react';
import '../styles/ProjectsSection.css';
import Button from './Button';
import Section from './Section';
import { FadeInSectionItems } from '../util/FadeInFunctions';
import projectsData from '../data/projects.json';

const ProjectsSection: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(
    () => FadeInSectionItems(projectsData, sectionRef, setVisibleItems),
    [projectsData]
  );

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <Section
      id="projects"
      className="projects-section"
      title="Projects"
      ref={sectionRef}
    >
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`project-tile ${
              visibleItems.includes(index) ? 'visible' : ''
            }`}
            onClick={() => toggleProject(index)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div
              className={`project-overlay ${
                expandedProject === index ? 'hidden' : ''
              }`}
            >
              <h4 className="project-title">{project.title}</h4>
            </div>
            {expandedProject === index && (
              <div className="project-details">
                <ul className="project-description">
                  {project.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="project-actions">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon github"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  <Button label="Close" onClick={() => toggleProject(index)} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
