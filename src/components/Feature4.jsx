import React from 'react';
import './FeatureSections.css';

const Feature4 = () => {
  return (
    <section className="feature-section feature-4">
      <div className="container">
        <div className="feature-content">
          <div className="feature-text">
            <h2 className="feature-title">Break Free Forever</h2>
            <p className="feature-description">
              Achieve permanent freedom through complete psychological reconditioning.
              Our understanding-based approach eliminates the desire to smoke, not just
              the behavior.
            </p>
            <ul className="feature-list">
              <li>
                <span className="feature-icon">✓</span>
                <strong>Understanding:</strong> Approach eliminates desire to smoke
              </li>
              <li>
                <span className="feature-icon">✓</span>
                <strong>Immunity:</strong> Built-in resistance to common triggers
              </li>
              <li>
                <span className="feature-icon">✓</span>
                <strong>Emergency:</strong> Session access for unexpected cravings
              </li>
              <li>
                <span className="feature-icon">✓</span>
                <strong>Maintenance:</strong> Ongoing reinforcement sessions
              </li>
            </ul>
          </div>
          <div className="feature-image">
            <img
              src="/images/Screen_6.png"
              alt="Break Free Forever - Quisten App Screenshot"
              className="phone-screenshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature4;
