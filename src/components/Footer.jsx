import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p className="copyright">
                    &copy; {new Date().getFullYear()} Lasting Loves. All rights reserved. <br />
                    <span className="italic">Preserving the human heart in the digital age.</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
