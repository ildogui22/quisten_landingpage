import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <>
      {/* Fixed Header Stripe */}
      <header className="fixed-header">
        <div className="header-container">
          <nav className="header-nav">
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
        </div>
      </header>

      <section className="hero">
        <div className="hero-background"></div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title animate-fade-in-up">
              Break <span className="brand-styled">Free</span> <span className="no-break">From Smoking</span>
            </h1>
            <p className="hero-subtitle animate-fade-in-up">
              Through innovative cue exposure therapy, this app teaches you to rewire your smoking patterns and dismantles all the myths about smoking in 8 days.
            </p>
            <p className="hero-description animate-fade-in-up">
              Experience controlled exposure to realistic smoking triggers using spatial audio while learning mindfulness techniques. Our structured 8-day program systematically addresses the psychological patterns that maintain smoking, helping you build lasting resistance to cravings without relying on willpower.
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
    </>
  );
};

export default Hero;