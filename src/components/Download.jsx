import React from 'react';
import './Download.css';

const Download = () => {

  return (
    <section id="download" className="download">
      <div className="container">
        {/* Centered Header Section */}
        <div className="download-header">
          <h2 className="download-title">
            Your <span className="brand-name-text">Journey</span> to
            <span className="text-gradient"> Freedom</span> Starts Now
          </h2>
          <p className="download-subtitle">
            Complete your 8-day journey to break free from smoking and discover mindfulness techniques to manage cravings forever.
            Download Quisten today and begin your transformation.
          </p>
        </div>

        {/* Free vs Premium Comparison */}
        <div className="pricing-comparison">
          {/* Free Plan Card */}
          <div className="plan-card free-plan">
            <div className="plan-header">
              <h3 className="plan-title"><span className="brand-name-text">Quisten</span> Free</h3>
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
              <h3 className="plan-title"><span className="brand-name-text">Quisten</span> Premium</h3>
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
              <span className="price-original">$19.99</span>
              <span className="price-main">$9.99</span>
              <span className="price-period">/month</span>
            </div>
            <div className="early-adopter-badge">
              Limited Time: 50% OFF!
            </div>

            {/* Value Proposition */}
            <div className="value-proposition">
              <p className="value-text">
                One month is enough. For less than the cost of a pack of cigarettes, you'll never touch one again.
              </p>
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