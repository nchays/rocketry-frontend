import React from 'react';
import './Project.css';

const Projects = () => {
  return (
    <div>
      <title>Projects - Liberty Rocketry</title>
      <main>
        <section className="project-overview">
          <h1 className="center-text">Our Projects</h1>
          <p className="center-text">
            Welcome to the Projects page of our rocketry club! We are proud to showcase our ambitious endeavors:
          </p>
          <ul>
            <li><strong>Trinity:</strong> Focused on high-altitude experimental rocketry.</li>
            <li><strong>Waymaker:</strong> Dedicated to innovative propulsion systems.</li>
            <li><strong>Genesis:</strong> Our foundational project on model rocketry and aerodynamics.</li>
          </ul>
          <p className="center-text">
            Explore each project to learn more about our missions, challenges, and achievements.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Projects;
