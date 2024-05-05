import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/ZILOOPLOGO.png';
import './navbar.css'

//BEM - Block Element Modifier
const Menu = () => (
    <>  
        <p><a href="/home">HOME</a></p>
        <p><a href="/ziloop">WHO-WE-ARE?</a></p>
        <p><a href="/possibility">SUSTAINABILITY</a></p>
        <p><a href="/features">SHOWROOM</a></p>
        <p><a href="/blog">BLOG</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="ziloop_navbar">
            <div className="ziloop_navbar-links">
                <div className="ziloop_navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="ziloop_navbar-links_container">
                   <Menu />
                </div>
            </div>
            <div className="ziloop_navbar-sign">
                <p>SIGN UP</p>
                <button type='button'>Sign Up</button>
            </div>
            <div className="ziloop_navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="ziloop_navbar-menu_container scale-up-center">
                        <div className="ziloop_navbar-menu_container-links">
                            <Menu />
                        <div className="ziloop_navbar-menu_container-links-sign">
                            <p>SIGN UP</p>
                            <button type='button'>Sign Up</button>
                        </div>
                        </div>
                    </div>
                )}
            </div> 
        </div>
    );
};

export default Navbar;