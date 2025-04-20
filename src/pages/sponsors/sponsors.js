import React from 'react';
import './sponsors.css';
import { Link } from 'react-router-dom';



const SponsorsComponent = () => {
  return (
    <>
    <title>Sponsors - Liberty Rocketry</title>
    <section className="content-section">
      <h1>Our Sponsors</h1>
      <p>We are deeply grateful for the support of our sponsors, who make our achievements in rocketry possible. If you would like to join as a sponsor, download our sponsorship packet or contact us directly.</p>

      <div className="sponsor-actions">
        <a href="media/sponsors/LibertyRocketrySponsorshipPacket2024-2025.pdf" className="action-button download-btn" download>Download Sponsorship Packet</a>
        <Link to="/contact" className="action-button contact-btn">Contact Us</Link>
      </div>

      <div className="sponsors-tiers">
        <div className="tier">
          <h2>Platinum Sponsors</h2>
          <ul>
            <li>
              <img src="media/sponsors/sponsor1.jpg" alt="Platinum Sponsor 1" />
              <p>Platinum Sponsor 1</p>
            </li>
            <li>
              <img src="media/sponsors/sponsor6.jpg" alt="Platinum Sponsor 2" />
              <p>Platinum Sponsor 2</p>
            </li>
          </ul>
        </div>
        <div className="tier">
          <h2>Gold Sponsors</h2>
          <ul>
            <li>
              <img src="media/sponsors/sponsor2.jpg" alt="Gold Sponsor 1" />
              <p>Gold Sponsor 1</p>
            </li>
          </ul>
        </div>
        <div className="tier">
          <h2>Silver Sponsors</h2>
          <ul>
            <li>
              <img src="media/sponsors/sponsor3.jpg" alt="Silver Sponsor 1" />
              <p>Silver Sponsor 1</p>
            </li>
          </ul>
        </div>
        <div className="tier">
          <h2>Bronze Sponsors</h2>
          <ul>
            <li>
              <img src="media/sponsors/sponsor4.jpg" alt="Bronze Sponsor 1" />
              <p>Bronze Sponsor 1</p>
            </li>
            <li>
              <img src="media/sponsors/sponsor5.jpg" alt="Bronze Sponsor 2" />
              <p>Bronze Sponsor 2</p>
            </li>
          </ul>
        </div>
      </div>
    </section></>
  );
};

export default SponsorsComponent;
