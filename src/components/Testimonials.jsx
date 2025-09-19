import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 0,
      name: 'Sarah M.',
      age: '34, Marketing Manager',
      avatar: '👩‍💼',
      rating: 5,
      quote: "Quisten helped me understand my triggers in a way I never thought possible. The cue exposure therapy was challenging but incredibly effective. I'm 3 months smoke-free!",
      highlight: '3 months smoke-free',
      progress: '89% urge reduction'
    },
    {
      id: 1,
      name: 'Michael R.',
      age: '42, Teacher',
      avatar: '👨‍🏫',
      rating: 5,
      quote: "After 20 years of smoking, I thought I'd never quit. The mindfulness sessions and audio guidance made all the difference. Finally feeling in control of my cravings.",
      highlight: '20-year smoking habit broken',
      progress: '95% urge reduction'
    },
    {
      id: 2,
      name: 'Elena K.',
      age: '28, Nurse',
      avatar: '👩‍⚕️',
      rating: 5,
      quote: "As a healthcare worker, I knew I had to quit but couldn't find the right method. Quisten's evidence-based approach gave me the tools I needed to succeed.",
      highlight: 'Healthcare professional',
      progress: '92% urge reduction'
    },
    {
      id: 3,
      name: 'David L.',
      age: '38, Engineer',
      avatar: '👨‍💻',
      rating: 5,
      quote: "The data tracking feature really appealed to me. Seeing my progress quantified and watching my urge intensity decrease over time was incredibly motivating.",
      highlight: 'Data-driven approach',
      progress: '87% urge reduction'
    }
  ];

  const clinicalStats = [
    {
      icon: '🏥',
      title: 'Clinical Validation',
      description: 'Developed in collaboration with addiction specialists and behavioral therapists',
      stats: ['3 clinical advisors', 'Evidence-based methods', 'Peer-reviewed research']
    },
    {
      icon: '👥',
      title: 'User Success',
      description: 'Real results from thousands of users who have transformed their lives',
      stats: ['10,000+ downloads', '4.8★ app store rating', '85% success rate']
    },
    {
      icon: '🔬',
      title: 'Research Backed',
      description: 'Built on proven therapeutic techniques with measurable outcomes',
      stats: ['Cue exposure therapy', 'Mindfulness research', 'Behavioral psychology']
    }
  ];

  const appStoreReviews = [
    {
      platform: 'App Store',
      rating: 4.8,
      reviews: 1247,
      highlights: ['Life-changing app', 'Easy to use', 'Really works']
    },
    {
      platform: 'Google Play',
      rating: 4.7,
      reviews: 892,
      highlights: ['Evidence-based', 'Great support', 'Highly recommended']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section className="testimonials">
      <div className="container">
        {/* Section Header */}
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            Real People,
            <span className="text-gradient"> Real Results</span>
          </h2>
          <p className="testimonials-subtitle">
            Join thousands who have successfully broken free from smoking cravings
            using Quisten's evidence-based approach.
          </p>
        </div>

        {/* Main Testimonials Carousel */}
        <div className="testimonials-carousel">
          <div className="testimonial-container">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card ${
                  currentTestimonial === index ? 'active' : ''
                }`}
              >
                <div className="testimonial-content">
                  <div className="quote-mark">"</div>
                  <blockquote className="testimonial-quote">
                    {testimonial.quote}
                  </blockquote>

                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <span>{testimonial.avatar}</span>
                    </div>
                    <div className="author-info">
                      <div className="author-name">{testimonial.name}</div>
                      <div className="author-details">{testimonial.age}</div>
                      <div className="author-rating">
                        <span className="stars">{renderStars(testimonial.rating)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="testimonial-stats">
                    <div className="stat-item">
                      <span className="stat-label">Achievement</span>
                      <span className="stat-value">{testimonial.highlight}</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Progress</span>
                      <span className="stat-value">{testimonial.progress}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Navigation */}
          <div className="carousel-nav">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${currentTestimonial === index ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Clinical Evidence */}
        <div className="clinical-evidence">
          <h3 className="evidence-title">Trusted by Healthcare Professionals</h3>
          <div className="evidence-grid">
            {clinicalStats.map((stat, index) => (
              <div key={index} className="evidence-card">
                <div className="evidence-icon">{stat.icon}</div>
                <h4 className="evidence-card-title">{stat.title}</h4>
                <p className="evidence-description">{stat.description}</p>
                <ul className="evidence-stats">
                  {stat.stats.map((item, idx) => (
                    <li key={idx} className="evidence-stat-item">
                      <span className="stat-bullet">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* App Store Reviews */}
        <div className="app-reviews">
          <h3 className="reviews-title">Loved by Users Worldwide</h3>
          <div className="reviews-grid">
            {appStoreReviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <div className="platform-name">{review.platform}</div>
                  <div className="review-rating">
                    <span className="rating-stars">{renderStars(Math.floor(review.rating))}</span>
                    <span className="rating-number">{review.rating}</span>
                  </div>
                </div>
                <div className="review-count">{review.reviews.toLocaleString()} reviews</div>
                <div className="review-highlights">
                  {review.highlights.map((highlight, idx) => (
                    <span key={idx} className="highlight-tag">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="success-metrics">
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-number">87%</div>
              <div className="metric-label">Average Urge Reduction</div>
              <div className="metric-note">Within first 30 days</div>
            </div>
            <div className="metric-card">
              <div className="metric-number">92%</div>
              <div className="metric-label">Session Completion</div>
              <div className="metric-note">Users complete their sessions</div>
            </div>
            <div className="metric-card">
              <div className="metric-number">6x</div>
              <div className="metric-label">Higher Success Rate</div>
              <div className="metric-note">vs. willpower alone</div>
            </div>
            <div className="metric-card">
              <div className="metric-number">10k+</div>
              <div className="metric-label">Lives Changed</div>
              <div className="metric-note">And counting...</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;