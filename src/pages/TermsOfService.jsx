import React from 'react';
import { Link } from 'react-router-dom';
import './PageStyles.css';

const TermsOfService = () => {
  return (
    <div className="page-container">
      <Link to="/" className="home-button">← Back to Home</Link>
      <div className="page-content">
        <h1 className="page-title">Terms of Service</h1>
        <p className="last-updated">Last updated: December 12, 2024</p>

        <p className="paragraph">
          These Terms of Service ("Terms") govern your use of the Quisten mobile application ("Service") operated by Quisten ("us", "we", or "our").
        </p>

        <p className="paragraph">
          Please read these Terms carefully before using our Service. By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these Terms, then you may not access the Service.
        </p>

        <h2 className="section-title">Acceptance of Terms</h2>
        <p className="paragraph">
          By downloading, installing, or using the Quisten application, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
        </p>

        <h2 className="section-title">Description of Service</h2>
        <p className="paragraph">
          Quisten is a smoking cessation mobile application designed to help users quit smoking through psychological methods, mindfulness techniques, and progress tracking. The Service includes:
        </p>
        <ul className="bullet-list">
          <li>An 8-day psychological journey to quit smoking</li>
          <li>Audio content and guided sessions</li>
          <li>Progress tracking and analytics</li>
          <li>Personal notes and reflection tools</li>
        </ul>

        <h2 className="section-title">User Accounts</h2>
        <p className="paragraph">
          When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
        </p>

        <h2 className="section-title">Medical Disclaimer</h2>
        <p className="paragraph">
          Quisten is not a medical device or medical service. The content provided is for informational and educational purposes only and is not intended as medical advice. Always consult with a healthcare professional before making decisions about your health.
        </p>
        <ul className="bullet-list">
          <li>This app does not replace professional medical advice</li>
          <li>Individual results may vary</li>
          <li>Consult your doctor if you have health concerns</li>
        </ul>

        <h2 className="section-title">User Conduct</h2>
        <p className="paragraph">You agree not to use the Service:</p>
        <ul className="bullet-list">
          <li>For any unlawful purpose or to solicit others to unlawful acts</li>
          <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
          <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
          <li>To submit false or misleading information</li>
        </ul>

        <h2 className="section-title">Subscription and Payment</h2>
        <p className="paragraph">
          Some features of the Service are available through paid subscriptions. The following subscription information applies to auto-renewable subscriptions:
        </p>

        <h2 className="section-title">Auto-Renewable Subscription Details</h2>
        <ul className="bullet-list">
          <li><strong>Service:</strong> Quisten Premium</li>
          <li><strong>Subscription Length:</strong> 1 month</li>
          <li><strong>Price:</strong> $9.99 per month</li>
          <li><strong>Content/Services Provided:</strong> Unlimited guided sessions, advanced progress analytics, calendar view of session history, detailed progress tracking charts, premium mindfulness content, and personalized recommendations</li>
        </ul>

        <p className="paragraph">Subscription Terms:</p>
        <ul className="bullet-list">
          <li>Payment will be charged to your Apple ID account at confirmation of purchase</li>
          <li>Subscription automatically renews unless auto-renew is turned off at least 24 hours before the end of the current period</li>
          <li>Your account will be charged for renewal within 24 hours prior to the end of the current period</li>
          <li>You can manage and cancel your subscriptions by going to your account settings on the App Store after purchase</li>
          <li>Any unused portion of a free trial period will be forfeited when purchasing a subscription</li>
          <li>Subscription fees are non-refundable except as required by law</li>
        </ul>

        <h2 className="section-title">Intellectual Property</h2>
        <p className="paragraph">
          The Service and its original content, features, and functionality are and will remain the exclusive property of Quisten and its licensors. The Service is protected by copyright, trademark, and other laws.
        </p>

        <h2 className="section-title">Privacy</h2>
        <p className="paragraph">
          Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
        </p>

        <h2 className="section-title">Limitation of Liability</h2>
        <p className="paragraph">
          In no event shall Quisten, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
        </p>

        <h2 className="section-title">Disclaimer</h2>
        <p className="paragraph">
          Your use of our Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied.
        </p>

        <h2 className="section-title">Termination</h2>
        <p className="paragraph">
          We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including but not limited to a breach of the Terms.
        </p>

        <h2 className="section-title">Changes to Terms</h2>
        <p className="paragraph">
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
        </p>

        <h2 className="section-title">Contact Us</h2>
        <p className="paragraph">
          If you have any questions about these Terms of Service, please contact us:
        </p>
        <p className="contact-email">By email: quisten.app@gmail.com</p>
      </div>
    </div>
  );
};

export default TermsOfService;
