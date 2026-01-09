import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Sections
import Hero from './sections/Hero';
import Mission from './sections/Mission';
import HowItWorks from './sections/HowItWorks';
import Features from './sections/Features';
import CTA from './sections/CTA';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/waitlist/count');
        setCount(res.data.count);
      } catch (err) {
        setCount(124); // Fallback static count
      }
    };
    fetchCount();
  }, []);

  return (
    <div className="landing-page">
      <Navbar />
      <main>
        <Hero count={count} />
        <Mission />
        <HowItWorks />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
