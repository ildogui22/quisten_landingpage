import React from 'react';
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
    </div>
  );
}

export default App;