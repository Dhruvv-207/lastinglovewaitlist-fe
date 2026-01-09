import React from 'react';
import logo from '../assets/logo.png';
import logoText from '../assets/logo-text.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <div className="navbar-logo-group">
                    <img src={logo} alt="Lasting Loves Logo" className="navbar-logo-img" />
                    <img src={logoText} alt="Lasting Loves" className="navbar-logo-text-img" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
