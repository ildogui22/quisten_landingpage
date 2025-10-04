import React from 'react';
import { Link } from 'react-router-dom';
import './Download.css';

const Download = () => {

  return (
    <>
      {/* Download Section */}
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

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-links">
              <Link to="/privacy" className="footer-link">Privacy Policy</Link>
              <Link to="/terms" className="footer-link">Terms of Service</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>

            <div className="footer-bottom">
              <p className="copyright">
                © 2025 <span className="brand-name-text">Quisten</span>. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Download;
