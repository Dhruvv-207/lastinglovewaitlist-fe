import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Shield } from 'lucide-react';
import axios from 'axios';

const WaitlistForm = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await axios.post('http://localhost:5000/api/waitlist/join', { email });
            setStatus('success');
        } catch (err) {
            setStatus('error');
            setMessage(err.response?.data?.message || "Something went wrong. Please try again.");
        }
    };

    return (
        <AnimatePresence mode="wait">
            {status === 'success' ? (
                <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <CheckCircle2 size={48} className="text-gold" style={{ marginBottom: '1rem' }} />
                    <h3 className="success-title">You're on the list!</h3>
                    <p className="success-desc">We've just taken the first step toward eternity. Check your email soon.</p>
                </motion.div>
            ) : (
                <form
                    onSubmit={handleSubmit}
                    className="waitlist-form"
                >
                    <div className="input-wrapper">
                        <input
                            type="email"
                            placeholder="Enter your email for early access..."
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={status === 'loading'}
                        />
                    </div>
                    <button className="btn-main" type="submit" disabled={status === 'loading'}>
                        {status === 'loading' ? 'Securing your spot...' : 'Secure Early Access'}
                    </button>
                    <p className="privacy-note">
                        <Shield size={12} /> Your legacy is private. No spam, ever.
                    </p>
                    {status === 'error' && <p className="error-message">{message}</p>}
                </form>
            )}
        </AnimatePresence>
    );
};

export default WaitlistForm;
