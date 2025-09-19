import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Download from './components/Download';
// import { Header } from 'react-native/Libraries/NewAppScreen';

function App() {
  return (
    <div className="App">
      <Hero />
      <HowItWorks />
      <Download />
    </div>
  );
}

export default App;