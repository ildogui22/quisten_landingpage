import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
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
  );
};

export default Header;