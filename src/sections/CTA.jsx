import React from 'react';
import WaitlistForm from '../components/WaitlistForm';

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-box glass-card">
                    <h2 className="cta-title">Be the <span className="text-gold italic">First</span> to Secure Your Legacy</h2>
                    <p className="cta-desc">
                        We are launching in limited waves. Join the waitlist today to lock in
                        "Early Founder" pricing and secondary seat priority.
                    </p>

                    <div className="cta-form-wrapper">
                        <WaitlistForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
