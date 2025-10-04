import React from 'react';
import { Link } from 'react-router-dom';
import './PageStyles.css';

const Contact = () => {
  return (
    <div className="page-container">
      <Link to="/" className="home-button">← Back to Home</Link>
      <div className="page-content">
        <h1 className="page-title">Contact Us</h1>

        <p className="paragraph">
          Have questions, feedback, or just want to say hello? We'd love to hear from you!
        </p>

        <h2 className="section-title">Email</h2>
        <p className="paragraph">
          Send us an email at:
        </p>
        <p className="contact-email">
          <a href="mailto:quisten.app@gmail.com">quisten.app@gmail.com</a>
        </p>

        <h2 className="section-title">What to Include</h2>
        <p className="paragraph">
          To help us assist you more effectively, please include:
        </p>
        <ul className="bullet-list">
          <li>Your name and email address</li>
          <li>A clear description of your question or issue</li>
          <li>Any relevant screenshots (if applicable)</li>
          <li>Your device type and operating system version</li>
        </ul>

        <h2 className="section-title">Business Inquiries</h2>
        <p className="paragraph">
          For partnership opportunities, media inquiries, or business-related questions, please use the same email address and indicate the nature of your inquiry in the subject line.
        </p>

        <h2 className="section-title">Stay Connected</h2>
        <p className="paragraph">
          We're constantly working to improve Quisten and help more people break free from smoking. Your feedback is invaluable to us!
        </p>
      </div>
    </div>
  );
};

export default Contact;
