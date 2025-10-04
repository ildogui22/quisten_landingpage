import React from 'react';
import './FeatureSections.css';

const Feature3 = () => {
  return (
    <section className="feature-section feature-3 feature-reverse">
      <div className="container">
        <div className="feature-content">
          <div className="feature-text">
            <h2 className="feature-title">Track Your Progress</h2>
            <p className="feature-description">
              Monitor your transformation through detailed tracking and progress analytics.
              See real-time data on your journey to freedom and celebrate every milestone
              along the way.
            </p>
            <ul className="feature-list">
              <li>
                <span className="feature-icon">✓</span>
                <strong>Measurements:</strong> Before and after urge intensity tracking
              </li>
              <li>
                <span className="feature-icon">✓</span>
                <strong>Streaks:</strong> Session completion and consistency tracking
              </li>
              <li>
                <span className="feature-icon">✓</span>
                <strong>Reports:</strong> Weekly progress showing improvement trends
              </li>
              <li>
                <span className="feature-icon">✓</span>
                <strong>Dashboard:</strong> Personal insights with success milestones
              </li>
            </ul>
            <p className="feature-description" style={{ marginTop: '24px' }}>
              We don't track cigarettes smoked or health benefits - those are
              straightforward and annoying for every smoker. We focus on what truly matters:
              your psychological transformation.
            </p>
          </div>
          <div className="feature-image">
            <img
              src="/images/Screen_5.png"
              alt="Progress Tracking - Quisten App Screenshot"
              className="phone-screenshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature3;
