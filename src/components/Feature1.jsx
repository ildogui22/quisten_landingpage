import React from 'react';
import './FeatureSections.css';

const Feature1 = () => {
  return (
    <section id="how-it-works" className="feature-section feature-1 feature-reverse">
      <div className="container">
        <div className="feature-content">
          <div className="feature-text">
            <h2 className="feature-title">Learn Cue Exposure Mindfulness</h2>
            <p className="feature-description">
              Master evidence-based techniques that help you handle cravings when they arise.
              Our innovative approach combines <strong>cue exposure therapy</strong> with <strong>mindfulness</strong> -
              two scientifically proven techniques. Our goal isn't to fight against the desire to smoke,
              but to remove it entirely through understanding and reconditioning.
            </p>
            <ul className="feature-list">
              <li>
                <span className="feature-icon">✓</span>
                <strong>Spatial Audio:</strong> Immersive cue exposure therapy sessions
              </li>
              <li>
                <span className="feature-icon">✓</span>
                <strong>Breathing:</strong> Guided exercises during craving moments
              </li>
              <li>
                <span className="feature-icon">✓</span>
                <strong>Body Scan:</strong> Identify and release tension techniques
              </li>
              <li>
                <span className="feature-icon">✓</span>
                <strong>Urge Surfing:</strong> Ride out cravings naturally
              </li>
            </ul>
            <div className="feature-research">
              <p className="research-intro">Learn more about the science behind our approach:</p>
              <div className="research-links">
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4830224/" target="_blank" rel="noopener noreferrer" className="research-link">
                  📄 Research on Cue Exposure Therapy
                </a>
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3619004/" target="_blank" rel="noopener noreferrer" className="research-link">
                  📄 Research on Mindfulness for Smoking Cessation
                </a>
              </div>
            </div>
          </div>
          <div className="feature-image">
            <img
              src="/images/Screen_4.png"
              alt="Cue Exposure Therapy - Quisten App Screenshot"
              className="phone-screenshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;
