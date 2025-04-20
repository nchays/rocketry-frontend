import React from 'react';
import './contact.css';

const ContactComponent = () => {
  return (
    <>
      
      <title>Contact - Liberty Rocketry</title>

      <section className="contact-section">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Whether you have a question, want to sponsor us, or just want to know more about our club, feel free to reach out.</p>

      <div className="contact-container">
        <div className="contact-form">
          <form action="submit-contact-form" method="POST">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />

            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />

            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" placeholder="Enter your message" rows="5" required></textarea>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Contact Details</h2>
          <p><strong>Email:</strong> contact@libertyrocketry.com</p>
          <p><strong>Phone:</strong> (555) 123-4567</p>
          <p><strong>Address:</strong> Liberty University Rocketry Club<br /> 1971 University Blvd<br /> Lynchburg, VA 24515</p>
          <div className="map-placeholder">
            <p>Map Placeholder</p>
          </div>
        </div>
      </div>
    </section></>
  );
};

export default ContactComponent;
