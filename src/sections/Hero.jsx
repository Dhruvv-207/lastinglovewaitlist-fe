import React, { useRef } from 'react';
import { Star } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import WaitlistForm from '../components/WaitlistForm';
import jamiePic from '../assets/jamie.jpg';

const Hero = ({ count, waitlistStatus, waitlistMessage, onWaitlistSubmit }) => {
    const cardRef = useRef(null);

    // Mouse Tracking for 3D Parallax
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth Spring Physics
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    // Transform mouse position to rotation
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);

        // Update CSS variables for gloss effect
        cardRef.current.style.setProperty("--mouse-x", `${(mouseX / width) * 100}%`);
        cardRef.current.style.setProperty("--mouse-y", `${(mouseY / height) * 100}%`);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section className="hero-section">
            <div className="container">
                <div className="hero-grid">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
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
                            <WaitlistForm
                                status={waitlistStatus}
                                message={waitlistMessage}
                                onStatusChange={onWaitlistSubmit}
                            />
                        </div>
                    </motion.div>

                    <div className="hero-visual">
                        <div className="memory-card-container">
                            {/* Ethereal Floating Orbs */}
                            <motion.div
                                className="spirit-orb orb-1"
                                animate={{
                                    y: [0, -30, 0],
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.6, 0.3]
                                }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.div
                                className="spirit-orb orb-2"
                                animate={{
                                    y: [0, 40, 0],
                                    scale: [1, 1.1, 1],
                                    opacity: [0.2, 0.5, 0.2]
                                }}
                                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            />

                            {/* 3D Parallax Card */}
                            <motion.div
                                ref={cardRef}
                                className="memory-card"
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                style={{
                                    rotateX,
                                    rotateY,
                                    transformStyle: "preserve-3d"
                                }}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <div className="gloss-overlay" />

                                <div className="memory-inner">
                                    <motion.img
                                        src={jamiePic}
                                        alt="Jamie - Our Legacy"
                                        className="memory-img"
                                        initial={{ scale: 1.1 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 1.5 }}
                                    />
                                </div>

                                <div className="memory-caption">
                                    <p className="handwritten text-gold">
                                        {"Keep their spirit alive.".split("").map((char, index) => (
                                            <motion.span
                                                key={index}
                                                initial={{ opacity: 0, filter: "blur(10px)" }}
                                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                                transition={{
                                                    delay: 1.2 + (index * 0.04),
                                                    duration: 0.6
                                                }}
                                                whileHover={{
                                                    y: -10,
                                                    scale: 1.2,
                                                    color: "#fff",
                                                    transition: { duration: 0.2 }
                                                }}
                                            >
                                                {char === " " ? "\u00A0" : char}
                                            </motion.span>
                                        ))}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
