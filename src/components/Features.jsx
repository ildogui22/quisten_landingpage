import React, { useState } from 'react';
import './Features.css';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 0,
      icon: '🧠',
      title: 'Cue Exposure Therapy',
      description: 'Evidence-based technique that safely exposes you to smoking triggers while building resistance through controlled, therapeutic environments.',
      benefits: [
        'Reduces craving intensity over time',
        'Builds long-term resistance to triggers',
        'Clinically proven effectiveness',
        'Safe, controlled environment'
      ],
      color: 'var(--wellness-blue)'
    },
    {
      id: 1,
      icon: '🧘',
      title: 'Mindfulness Techniques',
      description: 'Guided mindfulness practices including body scans, breathing exercises, and urge surfing to help you navigate cravings with awareness.',
      benefits: [
        'Body scan meditations',
        'Future self visualization',
        'Breathing exercises',
        'Present moment awareness'
      ],
      color: 'var(--wellness-accent)'
    },
    {
      id: 2,
      icon: '🎧',
      title: '24/7 Audio Support',
      description: 'High-quality therapeutic audio sessions available whenever you need support, designed for maximum effectiveness and accessibility.',
      benefits: [
        'Professional voice guidance',
        'Spatial audio experience',
        'Available offline',
        'Personalized sessions'
      ],
      color: 'var(--wellness-brown)'
    },
    {
      id: 3,
      icon: '📊',
      title: 'Progress Tracking',
      description: 'Comprehensive analytics track your journey, measuring urge reduction, session effectiveness, and long-term progress patterns.',
      benefits: [
        'Urge intensity tracking',
        'Session completion rates',
        'Streak counters',
        'Effectiveness analytics'
      ],
      color: 'var(--info)'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="features-header">
          <h2 className="features-title">
            Evidence-Based Tools for
            <span className="text-gradient"> Lasting Change</span>
          </h2>
          <p className="features-subtitle">
            Quisten combines cutting-edge therapeutic techniques with modern technology
            to provide personalized support for your smoke-free journey.
          </p>
        </div>

        <div className="features-showcase">
          <div className="features-nav">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                className={`feature-nav-item ${activeFeature === index ? 'active' : ''}`}
                onClick={() => setActiveFeature(index)}
                style={{ '--feature-color': feature.color }}
              >
                <span className="feature-nav-icon">{feature.icon}</span>
                <span className="feature-nav-title">{feature.title}</span>
              </button>
            ))}
          </div>

          <div className="feature-content">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`feature-panel ${activeFeature === index ? 'active' : ''}`}
              >
                <div className="feature-info">
                  <div className="feature-header">
                    <span
                      className="feature-icon"
                      style={{ '--feature-color': feature.color }}
                    >
                      {feature.icon}
                    </span>
                    <h3 className="feature-title">{feature.title}</h3>
                  </div>
                  <p className="feature-description">{feature.description}</p>
                  <ul className="feature-benefits">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="benefit-item">
                        <span className="benefit-check" style={{ '--feature-color': feature.color }}>✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="feature-visual">
                  <div className="feature-mockup">
                    {/* Feature-specific mockup content */}
                    {feature.id === 0 && (
                      <div className="cue-exposure-visual">
                        <div className="audio-wave">
                          <div className="wave-bar" style={{ height: '20%' }}></div>
                          <div className="wave-bar" style={{ height: '60%' }}></div>
                          <div className="wave-bar" style={{ height: '40%' }}></div>
                          <div className="wave-bar" style={{ height: '80%' }}></div>
                          <div className="wave-bar" style={{ height: '30%' }}></div>
                          <div className="wave-bar" style={{ height: '70%' }}></div>
                        </div>
                        <p className="visual-label">Controlled Exposure Session</p>
                      </div>
                    )}

                    {feature.id === 1 && (
                      <div className="mindfulness-visual">
                        <div className="breath-circle">
                          <div className="inner-circle"></div>
                        </div>
                        <p className="visual-label">Guided Breathing</p>
                      </div>
                    )}

                    {feature.id === 2 && (
                      <div className="audio-visual">
                        <div className="headphone-icon">🎧</div>
                        <div className="sound-rings">
                          <div className="ring ring-1"></div>
                          <div className="ring ring-2"></div>
                          <div className="ring ring-3"></div>
                        </div>
                        <p className="visual-label">Therapeutic Audio</p>
                      </div>
                    )}

                    {feature.id === 3 && (
                      <div className="progress-visual">
                        <div className="chart-container">
                          <div className="chart-bar" style={{ height: '40%' }}></div>
                          <div className="chart-bar" style={{ height: '60%' }}></div>
                          <div className="chart-bar" style={{ height: '45%' }}></div>
                          <div className="chart-bar" style={{ height: '80%' }}></div>
                          <div className="chart-bar" style={{ height: '70%' }}></div>
                        </div>
                        <p className="visual-label">Progress Analytics</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="features-grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="feature-card">
              <div className="feature-card-icon">🔬</div>
              <h4>Clinically Validated</h4>
              <p>Our methods are based on peer-reviewed research and clinical best practices in addiction therapy.</p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon">🎯</div>
              <h4>Personalized Approach</h4>
              <p>Adapts to your unique triggers, preferences, and progress patterns for maximum effectiveness.</p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon">🔒</div>
              <h4>Privacy First</h4>
              <p>All your therapeutic data stays on your device. GDPR and HIPAA compliant by design.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;