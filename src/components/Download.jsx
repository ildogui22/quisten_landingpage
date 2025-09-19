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
            href="https://apps.apple.com/app/quisten"
            className="app-store-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="button-content">
              <div className="store-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
              <div className="button-text">
                <div className="button-subtitle">Download on the</div>
                <div className="button-title">App Store</div>
              </div>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Download;