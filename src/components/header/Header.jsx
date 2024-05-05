import React from 'react';
import './header.css'
import ai from '../../assets/airobot.png';

const Header = () => {
    return (
        <div className="ziloop_header section_padding" id="home">
            <div className="ziloop_header-content">
                <h1 className="gradient_text">
                    POWERING TOMORROW, SUSTAINABLY TODAY
                </h1>
                <div className="ziloop_header-content_input">
                    <input type="email" placeholder="Your email address" />
                    <button type="button">Get started</button>
                </div>
            </div>
            <div className="ziloop_header-image">
                <img src={ai} alt="ai" />
            </div>
        </div>
    );
};

export default Header;