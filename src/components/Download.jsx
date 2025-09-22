import React from 'react';
import './Download.css';

const Download = () => {
  return (
    <section id="download" className="download">
      <div className="container">
        {/* Centered Header Section */}
        <div className="download-header">
          <h2 className="download-title">
            Your Journey to
            <span className="text-gradient"> Freedom Starts Now</span>
          </h2>
          <p className="download-subtitle">
            Join thousands who have successfully broken free from smoking cravings.
            Download Quisten today and begin your mindful journey to freedom.
          </p>
        </div>

        {/* Free vs Premium Comparison */}
        <div className="pricing-comparison">
          {/* Free Plan Card */}
          <div className="plan-card free-plan">
            <div className="plan-header">
              <h3 className="plan-title">Quisten Free</h3>
              <p className="plan-subtitle">Start your journey with essential tools</p>
            </div>

            <div className="plan-features">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Unlimited urge-management sessions</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon disabled">⊘</span>
                <span className="feature-text disabled">Complete 8-days journey to break free from smoke</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon disabled">⊘</span>
                <span className="feature-text disabled">Progress tracking</span>
              </div>
            </div>
          </div>

          {/* Premium Plan Card */}
          <div className="plan-card premium-plan">
            <div className="plan-header">
              <h3 className="plan-title">Quisten Premium</h3>
              <p className="plan-subtitle">Unlock your full potential</p>
            </div>

            <div className="plan-features">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Unlimited urge-management sessions</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Complete 8-days journey to break free from smoke</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Progress tracking</span>
              </div>
            </div>

            <div className="plan-price">
              <span className="price-main">$9.99</span>
              <span className="price-period">/month</span>
            </div>

          </div>
        </div>

        {/* Centered App Store Button */}
        <div className="download-cta">
          <a
            href="https://apps.apple.com/app/quisten/id6752290468"
            className="app-store-badge"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
              alt="Download on the App Store"
              className="app-store-badge-image"
            />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Download;