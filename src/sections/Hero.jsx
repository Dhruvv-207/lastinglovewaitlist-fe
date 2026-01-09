import React from 'react';
import { Star } from 'lucide-react';
import WaitlistForm from '../components/WaitlistForm';
import jamiePic from '../assets/jamie.jpg';

const Hero = ({ count }) => {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="hero-grid">
                    <div className="hero-content">
                        <div className="founder-badge">
                            <Star size={16} className="text-gold" />
                            <span>Join {count}+ Early Access Members</span>
                        </div>

                        <h1 className="hero-title">
                            Your Voice, Your Legacy, <br />
                            <span className="text-gold italic">Forever</span> Preserved
                        </h1>
                        <p className="hero-desc">
                            Lasting Loves uses ethical AI to bridge the gap between generations.
                            Don't let your stories, wisdom, or voice become a memory of the past.
                            Start building your digital bridge today.
                        </p>

                        <div className="waitlist-card glass-card">
                            <WaitlistForm />
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="memory-card glass-card">
                            <img src={jamiePic} alt="Jamie - Our Legacy" className="memory-img" />
                            <div className="memory-caption">
                                <p className="handwritten text-gold">Keep their spirit alive.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
