import React from 'react';
import { Link } from 'react-router-dom';
import './PageStyles.css';

const PrivacyPolicy = () => {
  return (
    <div className="page-container">
      <Link to="/" className="home-button">← Back to Home</Link>
      <div className="page-content">
        <h1 className="page-title">Privacy Policy</h1>
        <p className="last-updated">Last updated: September 02, 2025</p>

        <p className="paragraph">
          This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
        </p>

        <p className="paragraph">
          We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
        </p>

        <h2 className="section-title">Interpretation and Definitions</h2>
        <p className="paragraph">
          The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
        </p>

        <p className="paragraph">For the purposes of this Privacy Policy:</p>
        <ul className="bullet-list">
          <li>Account means a unique account created for You to access our Service</li>
          <li>Application refers to Quisten, the software program provided by the Company</li>
          <li>Company refers to Quisten</li>
          <li>Country refers to: Netherlands</li>
          <li>Device means any device that can access the Service</li>
          <li>Personal Data is any information that relates to an identified or identifiable individual</li>
          <li>Service refers to the Application</li>
          <li>Usage Data refers to data collected automatically</li>
        </ul>

        <h2 className="section-title">Collecting and Using Your Personal Data</h2>
        <p className="paragraph">
          While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. This may include:
        </p>
        <ul className="bullet-list">
          <li>Email address</li>
          <li>Usage Data (collected automatically)</li>
        </ul>

        <p className="paragraph">The Company may use Personal Data for the following purposes:</p>
        <ul className="bullet-list">
          <li>To provide and maintain our Service</li>
          <li>To manage Your Account</li>
          <li>To contact You regarding updates or communications</li>
          <li>To provide You with news and information</li>
          <li>To manage Your requests</li>
          <li>For business transfers</li>
          <li>For other purposes such as data analysis</li>
        </ul>

        <h2 className="section-title">Retention of Your Personal Data</h2>
        <p className="paragraph">
          The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to comply with our legal obligations, resolve disputes, and enforce our legal agreements.
        </p>

        <h2 className="section-title">Delete Your Personal Data</h2>
        <p className="paragraph">
          You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You. Our Service gives You the ability to delete certain information about You from within the Service.
        </p>

        <h2 className="section-title">Security of Your Personal Data</h2>
        <p className="paragraph">
          The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
        </p>

        <h2 className="section-title">Children's Privacy</h2>
        <p className="paragraph">
          Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13.
        </p>

        <h2 className="section-title">Disclosure of Your Personal Data</h2>
        <p className="paragraph">
          Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities.
        </p>

        <h2 className="section-title">Links to Other Websites</h2>
        <p className="paragraph">
          Our Service may contain links to other websites that are not operated by Us. We strongly advise You to review the Privacy Policy of every site You visit.
        </p>

        <h2 className="section-title">Changes to this Privacy Policy</h2>
        <p className="paragraph">
          We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
        </p>

        <h2 className="section-title">Contact Us</h2>
        <p className="paragraph">
          If you have any questions about this Privacy Policy, You can contact us:
        </p>
        <p className="contact-email">By email: quisten.app@gmail.com</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
