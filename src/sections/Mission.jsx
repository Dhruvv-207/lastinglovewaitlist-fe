import React from 'react';
import { Mic } from 'lucide-react';

const Mission = () => {
    return (
        <section className="mission-section">
            <div className="container">
                <div className="mission-grid">
                    <div className="mission-text">
                        <span className="section-label">The Mission</span>
                        <h2 className="section-title">Silence is the <span className="italic">Loudest</span> Sound</h2>
                        <p className="mission-desc">
                            When we lose a loved one, the hardest thing is the loss of their voice—their laughter, their advice, their unique way of telling a story.
                            Lasting Loves was born from a personal journey to ensure that no one ever has to face that silence alone.
                        </p>
                        <div className="stat-grid">
                            <div className="stat-item">
                                <h3 className="text-gold">100%</h3>
                                <p>Ethical AI. Your data is yours forever.</p>
                            </div>
                            <div className="stat-item">
                                <h3 className="text-gold">End-to-End</h3>
                                <p>Encrypted memory vaults.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mission-visual">
                        <div className="feature-highlight glass-card">
                            <Mic className="text-gold" size={48} />
                            <h3>Voice Preservation</h3>
                            <p>Our technology doesn't just record audio; it captures the emotional nuances of a person's speech, creating a bridge for future generations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
