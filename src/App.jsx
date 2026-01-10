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
  const [waitlistStatus, setWaitlistStatus] = useState('idle');
  const [waitlistMessage, setWaitlistMessage] = useState('');

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
        const res = await axios.get(`${baseUrl}/api/waitlist/count`);
        setCount(100 + res.data.count); // Start from 100 + DB count
      } catch (err) {
        setCount(124); // Fallback static count
      }
    };
    fetchCount();
  }, []);

  const handleWaitlistSubmit = (status, msg = '') => {
    setWaitlistStatus(status);
    setWaitlistMessage(msg);
    if (status === 'success') {
      setCount(prev => prev + 1);
    }
  };

  return (
    <div className="landing-page">
      <Navbar />
      <main>
        <Hero
          count={count}
          waitlistStatus={waitlistStatus}
          waitlistMessage={waitlistMessage}
          onWaitlistSubmit={handleWaitlistSubmit}
        />
        <Mission />
        <HowItWorks />
        <Features />
        <CTA
          waitlistStatus={waitlistStatus}
          waitlistMessage={waitlistMessage}
          onWaitlistSubmit={handleWaitlistSubmit}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
