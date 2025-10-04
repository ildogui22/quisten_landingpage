import React from 'react';
import './FeatureSections.css';

const Feature2 = () => {
  return (
    <section className="feature-section feature-2">
      <div className="container">
        <div className="feature-content">
          <div className="feature-text">
            <h2 className="feature-title">Complete the 8-Day Journey</h2>
            <p className="feature-description">
              Along with mindfulness, an 8-day journey awaits you. Experience a unique psychological
              approach to smoking cessation that requires no willpower. Our structured program
              systematically dismantles smoking myths and rebuilds your relationship with cigarettes.
            </p>
            <ul className="feature-list">
              <li>
                <span className="feature-icon">✓</span>
                <strong>Day 0:</strong> Preparation and mindset foundation
              </li>
              <li>
                <span className="feature-icon">✓</span>
                <strong>Days 1-4:</strong> Systematic dismantling of smoking myths
              </li>
              <li>
                <span className="feature-icon">✓</span>
                <strong>Days 5-6:</strong> Cost calculation and liberation preparation
              </li>
              <li>
                <span className="feature-icon">✓</span>
                <strong>Day 7:</strong> Final cigarette and freedom celebration
              </li>
            </ul>
          </div>
          <div className="feature-image">
            <img
              src="/images/Screen_3.png"
              alt="8-Day Journey - Quisten App Screenshot"
              className="phone-screenshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature2;
