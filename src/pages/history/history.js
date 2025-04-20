
// history.js

import React from 'react';
import './history.css';

function History() {
    return (
        <>
  <title>History - Liberty Rocketry</title>
  
  <section className="content-section">
    <h1>Our History</h1>
    <p>
      The Liberty University Rocketry Club has grown significantly since its
      founding. Explore our key milestones below:
    </p>
    <div className="timeline">
      <div className="timeline-item">
        <img src="media/history/timeline1.jpg" alt="Founding of the club" />
        <div className="timeline-content">
          <h2>2021 - Founding</h2>
          <p>
            The club was established to provide students with opportunities to
            explore aerospace engineering and hands-on rocketry projects.
          </p>
        </div>
      </div>
      <div className="timeline-item">
        <img src="media/history/genesis_timeline.jpg" alt="First Rocket Launch" />
        <div className="timeline-content">
          <h2>2022 - Genesis</h2>
          <p>
            Our first successful launch marked the beginning of our journey in
            competitive rocketry.
          </p>
        </div>
      </div>
      <div className="timeline-item">
        <img src="media/history/timeline3.jpg" alt="NASA Student Launch" />
        <div className="timeline-content">
          <h2>2023 - Trinity</h2>
          <p>
            The team competed in NASA's prestigious Student Launch Initiative
            for the first time, achieving remarkable results.
          </p>
        </div>
      </div>
      <div className="timeline-item">
        <img src="media/history/waymaker_timeline.jpg" alt="Spaceport America Cup" />
        <div className="timeline-content">
          <h2>2024 - Waymaker</h2>
          <p>
            Participated in the Spaceport America Cup, showcasing innovative
            designs in the international competition.
          </p>
        </div>
      </div>
    </div>
  </section>
</>

    );
}

export default History;