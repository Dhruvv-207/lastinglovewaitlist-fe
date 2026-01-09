import React from 'react';
import { Heart, Clock, Shield } from 'lucide-react';

const featureData = [
    {
        icon: <Heart size={24} />,
        title: "Emotional Intelligence",
        desc: "AI that understands tone and sentiment, ensuring every message carries the right feeling."
    },
    {
        icon: <Clock size={24} />,
        title: "Multi-Year Scheduling",
        desc: "Deliver guidance to your grandchildren into the future with reliability."
    },
    {
        icon: <Shield size={24} />,
        title: "Bulletproof Privacy",
        desc: "State-of-the-art encryption ensures that only the intended recipients can ever unlock your vault."
    }
];

const Features = () => {
    return (
        <section className="features-section">
            <div className="container">
                <div className="features-grid">
                    {featureData.map((f, i) => (
                        <div key={i} className="feature-card glass-card">
                            <div className="feature-icon">{f.icon}</div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
