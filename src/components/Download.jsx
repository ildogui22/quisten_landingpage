import React, { useState } from 'react';
import './Download.css';
import { supabase } from '../config/supabase';

const Download = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') {
          setMessage('You\'re already on our waitlist!');
        } else {
          setMessage('Something went wrong. Please try again.');
        }
      } else {
        setMessage('Thanks! We will send you a promo code to redeem the app for free via email soon.');
        setEmail('');
      }
    } catch (err) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              First 100 Users Get 100% OFF - Completely FREE!
            </div>

            {/* Value Proposition */}
            <div className="value-proposition">
              <p className="value-text">
                One month is enough. For less than the cost of a pack of cigarettes, you'll never touch one again.
              </p>
            </div>

          </div>
        </div>

        {/* Waitlist Form */}
        <div className="waitlist-section">
          <div className="waitlist-header">
            <h3 className="waitlist-title">Get the App 100% FREE</h3>
            <p className="waitlist-subtitle">
              The first 100 users get completely FREE access to Quisten - no payment required! Join now to secure your free spot.
            </p>
          </div>

          <form onSubmit={handleWaitlistSubmit} className="waitlist-form">
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="email-input"
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting || !email}
                className="waitlist-button"
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </button>
            </div>
            {message && (
              <div className={`message ${message.includes('Thanks') ? 'success' : 'error'}`}>
                {message}
              </div>
            )}
          </form>
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