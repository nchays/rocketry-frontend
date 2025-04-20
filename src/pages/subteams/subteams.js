import React from 'react';
import './subteams.css';

const Subteams = () => {
  return (
    <div>
      <title>Subteams - Liberty Rocketry</title>
      <section className="content-section">
        <h1>Our Subteams</h1>
        <p>To ensure our projects are successful, Liberty University Rocketry Club is divided into specialized subteams:</p>
        <ul>
          <li><strong>Propulsion:</strong> Focused on designing and testing rocket engines.</li>
          <li><strong>Avionics:</strong> Developing electronic systems for navigation and communication.</li>
          <li><strong>Payload:</strong> Designing payload experiments and integration systems.</li>
          <li><strong>Structures:</strong> Responsible for building and testing the rocket's frame and aerodynamic components.</li>
          <li><strong>Outreach:</strong> Promoting STEM education and engaging with the community.</li>
        </ul>
      </section>
    </div>
  );
}
export default Subteams;
