import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Footer Content */}
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="brand-name">Quisten</h3>
              <p className="brand-tagline">
                Evidence-based smoking cessation through cue exposure therapy and mindfulness.
              </p>
              <div className="brand-contact">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>support@quisten.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🌐</span>
                  <span>quisten.com</span>
                </div>
              </div>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <h4 className="link-group-title">Product</h4>
                <nav className="link-list">
                  <a href="#features" className="footer-link">Features</a>
                  <a href="#how-it-works" className="footer-link">How It Works</a>
                  <a href="#download" className="footer-link">Pricing</a>
                  <a href="/faq" className="footer-link">FAQ</a>
                </nav>
              </div>

              <div className="link-group">
                <h4 className="link-group-title">Company</h4>
                <nav className="link-list">
                  <a href="/about" className="footer-link">About Us</a>
                  <a href="/team" className="footer-link">Our Team</a>
                  <a href="/research" className="footer-link">Research</a>
                  <a href="/blog" className="footer-link">Blog</a>
                </nav>
              </div>

              <div className="link-group">
                <h4 className="link-group-title">Support</h4>
                <nav className="link-list">
                  <a href="/help" className="footer-link">Help Center</a>
                  <a href="/contact" className="footer-link">Contact Us</a>
                  <a href="/community" className="footer-link">Community</a>
                  <a href="/feedback" className="footer-link">Feedback</a>
                </nav>
              </div>

              <div className="link-group">
                <h4 className="link-group-title">Legal</h4>
                <nav className="link-list">
                  <a href="/privacy" className="footer-link">Privacy Policy</a>
                  <a href="/terms" className="footer-link">Terms of Service</a>
                  <a href="/security" className="footer-link">Security</a>
                  <a href="/compliance" className="footer-link">HIPAA Compliance</a>
                </nav>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="newsletter-section">
            <div className="newsletter-content">
              <h4 className="newsletter-title">Stay Updated</h4>
              <p className="newsletter-description">
                Get the latest research, tips, and updates on smoking cessation delivered to your inbox.
              </p>
              <form className="newsletter-form">
                <div className="form-group">
                  <input
                    type="email"
                    className="email-input"
                    placeholder="Enter your email"
                    required
                    aria-label="Email address"
                  />
                  <button type="submit" className="subscribe-button">
                    Subscribe
                  </button>
                </div>
                <p className="newsletter-note">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Social Media & Awards */}
        <div className="footer-extra">
          <div className="social-section">
            <h5 className="social-title">Follow Us</h5>
            <div className="social-links">
              <a href="https://twitter.com/quisten" className="social-link" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/quisten" className="social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://facebook.com/quisten" className="social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="https://instagram.com/quisten" className="social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="awards-section">
            <h5 className="awards-title">Recognition</h5>
            <div className="awards-list">
              <div className="award-item">
                <span className="award-icon">🏆</span>
                <span className="award-text">Best Health App 2024</span>
              </div>
              <div className="award-item">
                <span className="award-icon">⭐</span>
                <span className="award-text">4.8★ App Store</span>
              </div>
              <div className="award-item">
                <span className="award-icon">🔬</span>
                <span className="award-text">Clinically Validated</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2024 Quisten. All rights reserved.</p>
            </div>

            <div className="certifications">
              <div className="cert-item">
                <span className="cert-icon">🛡️</span>
                <span>HIPAA Compliant</span>
              </div>
              <div className="cert-item">
                <span className="cert-icon">🔒</span>
                <span>GDPR Compliant</span>
              </div>
              <div className="cert-item">
                <span className="cert-icon">✅</span>
                <span>FDA Guidelines</span>
              </div>
            </div>

            <div className="app-badges">
              <a href="https://apps.apple.com/app/quisten" className="app-badge">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40' viewBox='0 0 120 40'%3E%3Cpath fill='%23000' d='M8 0h104c4.4 0 8 3.6 8 8v24c0 4.4-3.6 8-8 8H8c-4.4 0-8-3.6-8-8V8c0-4.4 3.6-8 8-8z'/%3E%3Cpath fill='%23FFF' d='M24.8 20.3c0-3.6 2.9-5.4 3.1-5.5-1.7-2.5-4.3-2.8-5.2-2.8-2.2-.2-4.3 1.3-5.4 1.3-1.1 0-2.8-1.3-4.6-1.2-2.4.1-4.5 1.4-5.8 3.5-2.5 4.3-.6 10.6 1.8 14.1 1.2 1.7 2.6 3.6 4.4 3.5 1.8-.1 2.5-1.1 4.6-1.1 2.1 0 2.8 1.1 4.6 1.1 1.9 0 3.2-1.7 4.4-3.4 1.4-2 2-3.9 2-4zm-4.5-13.2c1-1.2 1.7-2.9 1.5-4.6-1.4.1-3.2 1-4.2 2.2-.9 1.1-1.7 2.8-1.5 4.4 1.6.1 3.2-.8 4.2-2z'/%3E%3C/svg%3E" alt="Download on App Store" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.quisten" className="app-badge">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='135' height='40' viewBox='0 0 135 40'%3E%3Cpath fill='%23000' d='M130 40H5c-2.8 0-5-2.2-5-5V5c0-2.8 2.2-5 5-5h125c2.8 0 5 2.2 5 5v30c0 2.8-2.2 5-5 5z'/%3E%3Cpath fill='%23FFF' d='M47.4 10.2c0 .8-.2 1.5-.7 2-.6.6-1.3.9-2.2.9s-1.6-.3-2.2-.9c-.6-.6-.9-1.3-.9-2.2s.3-1.6.9-2.2c.6-.6 1.3-.9 2.2-.9.4 0 .8.1 1.1.3.4.2.7.4.9.7l-.5.5c-.4-.5-.9-.7-1.5-.7-.6 0-1.2.2-1.6.7-.5.4-.7 1-.7 1.7s.2 1.3.7 1.7c.4.4 1 .7 1.6.7.7 0 1.2-.2 1.7-.7.3-.3.4-.7.5-1.2h-2.2v-.7h2.9c.1.2.1.4.1.6z'/%3E%3C/svg%3E" alt="Get it on Google Play" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;