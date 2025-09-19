import React, { useState, useEffect, useRef } from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [imageTransitioning, setImageTransitioning] = useState(false);
  const sectionRef = useRef(null);

  // Screen mapping for dynamic phone mockup images
  const screenImages = [
    '/images/Screen_3.png', // Step 1: Complete the 8-Day Journey
    '/images/Screen_4.png', // Step 2: Learn Cue Exposure Mindfulness
    '/images/Screen_5.png', // Step 3: Track Your Progress
    '/images/Screen_6.png'  // Step 4: Break Free Forever
  ];

  const steps = [
    {
      id: 0,
      number: '1',
      title: 'Complete the 8-Day Journey',
      description: 'Experience a unique psychological approach to smoking cessation that requires no willpower.',
      details: [
        'Day 0: Preparation and mindset foundation',
        'Days 1-4: Systematic dismantling of smoking myths',
        'Days 5-6: Cost calculation and liberation preparation',
        'Day 7: Final cigarette and freedom celebration'
      ],
      visual: 'assessment'
    },
    {
      id: 1,
      number: '2',
      title: 'Learn Cue Exposure Mindfulness',
      description: 'Master evidence-based techniques that help you handle cravings when they arise.',
      details: [
        'Spatial audio cue exposure therapy sessions',
        'Guided breathing exercises during craving moments',
        'Body scan techniques to identify and release tension',
        'Urge surfing methods to ride out cravings naturally'
      ],
      visual: 'therapy'
    },
    {
      id: 2,
      number: '3',
      title: 'Track Your Progress',
      description: 'Monitor your transformation through detailed tracking and progress analytics.',
      details: [
        'Before and after urge intensity measurements',
        'Session completion streaks and consistency tracking',
        'Weekly progress reports showing improvement trends',
        'Personal insights dashboard with success milestones'
      ],
      visual: 'tracking'
    },
    {
      id: 3,
      number: '4',
      title: 'Break Free Forever',
      description: 'Achieve permanent freedom through complete psychological reconditioning.',
      details: [
        'Understanding-based approach eliminates desire to smoke',
        'Built-in immunity to common smoking triggers',
        'Emergency session access for unexpected cravings',
        'Ongoing reinforcement through maintenance sessions'
      ],
      visual: 'freedom'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);


  const handleStepClick = (stepId) => {
    if (stepId !== activeStep) {
      setImageTransitioning(true);
      // Small delay to allow fade out, then change step and fade in
      setTimeout(() => {
        setActiveStep(stepId);
        setImageTransitioning(false);
      }, 250); // Half of the transition duration
    }
  };

  const renderStepVisual = (visual) => {
    switch (visual) {
      case 'assessment':
        return (
          <div className="step-visual assessment-visual">
            <div className="checklist">
              <div className="checklist-item">
                <span className="check">✓</span>
                <span>Smoking patterns</span>
              </div>
              <div className="checklist-item">
                <span className="check">✓</span>
                <span>Trigger analysis</span>
              </div>
              <div className="checklist-item">
                <span className="check">✓</span>
                <span>Personal goals</span>
              </div>
            </div>
          </div>
        );
      case 'therapy':
        return (
          <div className="step-visual therapy-visual">
            <div className="meditation-circle">
              <div className="pulse-ring"></div>
              <div className="pulse-ring delay-1"></div>
              <div className="pulse-ring delay-2"></div>
              <span className="meditation-icon">🧘</span>
            </div>
          </div>
        );
      case 'tracking':
        return (
          <div className="step-visual tracking-visual">
            <div className="progress-chart">
              <div className="chart-line">
                <div className="data-point" data-value="20%"></div>
                <div className="data-point" data-value="40%"></div>
                <div className="data-point" data-value="35%"></div>
                <div className="data-point active" data-value="70%"></div>
                <div className="data-point" data-value="85%"></div>
              </div>
            </div>
          </div>
        );
      case 'freedom':
        return (
          <div className="step-visual freedom-visual">
            <div className="celebration">
              <span className="star">⭐</span>
              <span className="star">⭐</span>
              <span className="star">⭐</span>
              <div className="trophy">🏆</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="how-it-works" className="how-it-works" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Your Journey to
            <span className="text-gradient"> Freedom</span>
          </h2>
        </div>

        <div className="timeline-container">
          <div className="timeline-steps">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`timeline-step ${activeStep === index ? 'active' : ''} ${
                  index < activeStep ? 'completed' : ''
                }`}
                onClick={() => handleStepClick(index)}
              >
                <div className="step-number">
                  <span>{step.number}</span>
                </div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>

                  <div className={`step-details ${activeStep === index ? 'expanded' : ''}`}>
                    <div>
                      <ul className="step-list">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="step-list-item">
                            <span className="list-icon">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="step-connector">
                  <div className="connector-line"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="timeline-visual">
            <div className="phone-mockup-container">
              <img
                src={screenImages[activeStep]}
                alt={`Quisten App - ${steps[activeStep].title}`}
                className={`phone-mockup-image ${imageTransitioning ? 'transitioning' : ''}`}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;