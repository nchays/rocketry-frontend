import React from 'react';
import './donate.css';

const DonateComponent = () => {
  return (
    <>
    <title>Donate - Liberty Rocketry</title>
    <section className="donate-section">
      <h1>Support Liberty Rocketry</h1>
      <p>Your contribution helps us innovate, compete, and inspire the next generation of aerospace engineers and scientists.</p>

      <div className="webstore-section">
        <h2>Visit Our Webstore</h2>
        <p>Check out our exclusive merchandise and support Liberty Rocketry in style!</p>
        <a href="/donate" className="webstore-link">Go to Webstore</a>
      </div>

      <div className="donate-options">
        <div className="donate-info">
          <h2>Why Donate?</h2>
          <p>Your donations enable us to fund our projects, purchase materials, and participate in national competitions. Together, we can achieve groundbreaking success in rocketry.</p>
        </div>

        <div className="donation-form">
          <h2>Make a Donation</h2>
          <form action="submit-donation" method="POST">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />

            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />

            <label htmlFor="amount">Donation Amount ($):</label>
            <input type="number" id="amount" name="amount" placeholder="Enter amount" min="1" required />

            <label htmlFor="message">Message (Optional):</label>
            <textarea id="message" name="message" placeholder="Enter a message" rows="4"></textarea>

            <button type="submit" className="donate-button">Donate Now</button>
          </form>
        </div>
      </div>

      <div className="other-options">
        <h2>Other Ways to Contribute</h2>
        <ul>
          <li><strong>Mail a Check:</strong> Liberty University Rocketry Club, 1971 University Blvd, Lynchburg, VA 24515</li>
          <li><strong>Corporate Sponsorship:</strong> Visit our <a href="sponsors.html">Sponsors Page</a> to learn more.</li>
          <li><strong>In-Kind Donations:</strong> Contact us at <a href="mailto:contact@libertyrocketry.com">contact@libertyrocketry.com</a> for material donations.</li>
        </ul>
      </div>
    </section></>
  );
};

export default DonateComponent;
