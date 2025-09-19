import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-container">
        <nav className="hero-nav">
          <div className="nav-brand">
            <h3 className="brand-name">Quisten</h3>
          </div>
          <div className="nav-actions">
            <a href="#how-it-works" className="btn btn-primary nav-btn">
              How It Works
            </a>
            <a href="#download" className="btn btn-primary nav-btn">
              Download App
            </a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title animate-fade-in-up">
              Break Free
              <span className="text-gradient"> From Smoking</span>
            </h1>
            <p className="hero-subtitle animate-fade-in-up">
              Start an amazing journey and become a non smoker in 8 days, breaking the mental patterns that keep you smoking. Learn to manage cravings through cue exposure therapy backed by mindfulness techniques.
            </p>
          </div>

          <div className="hero-visual">
            <div className="dual-phone-mockup">
              <div className="phone-container phone-left">
                <img
                  src="/images/Screen_2.png"
                  alt="Quisten App - Screen 2"
                  className="screenshot-image"
                />
              </div>
              <div className="phone-container phone-right">
                <img
                  src="/images/Screen_1.png"
                  alt="Quisten App - Screen 1"
                  className="screenshot-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;