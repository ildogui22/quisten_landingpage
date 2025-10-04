import React from 'react';
import './PageStyles.css';

const Support = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">Support</h1>

        <p className="paragraph">
          We're here to help! If you have any questions, concerns, or need assistance with Quisten, please don't hesitate to reach out.
        </p>

        <h2 className="section-title">Get in Touch</h2>
        <p className="paragraph">
          For support inquiries, feature requests, or technical issues, please contact us at:
        </p>
        <p className="contact-email">quisten.app@gmail.com</p>

        <h2 className="section-title">What We Can Help With</h2>
        <ul className="bullet-list">
          <li>Account and subscription issues</li>
          <li>Technical problems or bugs</li>
          <li>Feature requests and feedback</li>
          <li>Privacy and data concerns</li>
          <li>General questions about the app</li>
        </ul>

        <h2 className="section-title">Response Time</h2>
        <p className="paragraph">
          We typically respond to support requests within 24-48 hours during business days. Thank you for your patience!
        </p>

        <h2 className="section-title">Medical Emergencies</h2>
        <p className="paragraph">
          <strong>Important:</strong> Quisten is not a medical service. If you're experiencing a medical emergency, please contact your local emergency services or healthcare provider immediately.
        </p>
      </div>
    </div>
  );
};

export default Support;
