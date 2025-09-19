import React, { useState } from 'react';
import './Download.css';
import { supabase } from '../config/supabase';

const Download = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Validate email format
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    try {
      // Insert email into Supabase waitlist table
      const { error: supabaseError } = await supabase
        .from('waitlist')
        .insert([
          {
            email: email.toLowerCase().trim()
          }
        ])
        .select();

      if (supabaseError) {
        // Handle different types of errors
        if (supabaseError.code === '23505' ||
            supabaseError.message?.includes('duplicate key') ||
            supabaseError.message?.includes('already exists')) {
          setError('This email is already on our waitlist! We\'ll notify you when Quisten launches.');
        } else if (supabaseError.code === 'PGRST116') {
          setError('Connection error. Please check your internet and try again.');
        } else if (supabaseError.message?.includes('Invalid input')) {
          setError('Please enter a valid email address.');
        } else {
          setError('Unable to join waitlist. Please try again in a moment.');
        }
      } else {
        setIsSubmitted(true);
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="download" className="download">
      <div className="container">
        {/* Centered Header Section */}
        <div className="download-header">
          <h2 className="download-title">
            Be the First to Experience
            <span className="text-gradient"> Freedom from Smoking</span>
          </h2>
          <p className="download-subtitle">
            Quisten is coming soon to the App Store. Join our waitlist to get early access
            and be notified the moment we launch.
          </p>
        </div>


        {/* Waitlist Form */}
        <div className="waitlist-container">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="waitlist-form">
              <div className="form-content">
                <div className="email-input-container">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="email-input"
                    required
                  />
                  <button
                    type="submit"
                    className="waitlist-button"
                    disabled={isLoading || !email}
                  >
                    {isLoading ? 'Joining...' : 'Join Waitlist'}
                  </button>
                </div>
                {error && (
                  <div className="error-message">
                    {error}
                  </div>
                )}
                <p className="form-disclaimer">
                  We'll only email you when Quisten launches. No spam, ever.
                </p>
              </div>
            </form>
          ) : (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>You're on the list!</h3>
              <p>We'll notify you as soon as Quisten is available on the App Store.</p>
            </div>
          )}
        </div>

        {/* Coming Soon Badge */}
        <div className="coming-soon-badge">
          <div className="badge-content">
            <span className="badge-text">Coming Soon to</span>
            <div className="store-badges">
              <div className="store-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span>App Store</span>
              </div>
              <div className="store-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <span>Google Play</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Download;