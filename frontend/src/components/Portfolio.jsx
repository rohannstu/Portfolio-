import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const skills = [
    { name: 'React', level: 'Advanced' },
    { name: 'Node.js', level: 'Advanced' },
    { name: 'MongoDB', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'Express.js', level: 'Advanced' },
    { name: 'REST APIs', level: 'Intermediate' }
  ];

  const projects = [
    {
      name: 'DevTrack',
      description: 'Full-stack MERN project - Portfolio + Task Manager',
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js']
    }
  ];

  return (
    <section className="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h1>Rohan</h1>
          <p className="subtitle">Full-Stack Developer | MERN Stack Enthusiast</p>
        </div>

        <div className="portfolio-bio">
          <h2>About Me</h2>
          <p>
            I'm a passionate full-stack developer with expertise in building modern web applications
            using the MERN stack. I love creating clean, scalable, and user-friendly solutions.
            Currently focused on mastering JavaScript, React, and Node.js.
          </p>
        </div>

        <div className="portfolio-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <h3>{skill.name}</h3>
                <p>{skill.level}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="portfolio-section">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="portfolio-links">
          <h2>Connect With Me</h2>
          <div className="links-container">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="link-btn">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="link-btn">
              LinkedIn
            </a>
            <a href="mailto:your.email@example.com" className="link-btn">
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
