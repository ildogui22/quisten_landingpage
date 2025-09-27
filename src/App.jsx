import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <HowItWorks />
      <Download />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;