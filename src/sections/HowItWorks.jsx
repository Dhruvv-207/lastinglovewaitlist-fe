import React from 'react';

const steps = [
    {
        num: "1",
        title: "Setup Your Vault",
        desc: "Create a private space for yourself or a loved one."
    },
    {
        num: "2",
        title: "Record & Clone",
        desc: "Upload voice samples and answer life-journey prompts."
    },
    {
        num: "3",
        title: "Schedule Deliveries",
        desc: "Pick future dates for messages to be unlocked."
    },
    {
        num: "4",
        title: "Live Forever",
        desc: "Your presence remains a guiding light for your family."
    }
];

const HowItWorks = () => {
    return (
        <section className="how-it-works">
            <div className="container">
                <h2 className="section-title text-center">The Path to <span className="text-gold italic">Eternity</span></h2>
                <div className="steps-grid">
                    {steps.map((step, index) => (
                        <div key={index} className="step-card">
                            <div className="step-number">{step.num}</div>
                            <h4>{step.title}</h4>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
