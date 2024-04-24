import React, { useState } from 'react';
import './NavBar.css';
import logo from './assets/trinity.svg';
import { motion } from "framer-motion";
  

function NavBar() {

    const [isOpen, setIsActive] = useState(false);
    
    const toggleMenu = () => {
        setIsActive(!isOpen);
        console.log("Navbar clicked");
    };
   
    return (
    <motion.nav 
        initial={{ opacity: 0 }} // Initial opacity and scale of the image
        animate={{ opacity: 1}} // Fade in and scale in animation
        transition={{ delay: 1.2, duration: 1 }} // Duration of the animation
        className="nav">
        <div>
            <div className='logo'>
                <img onClick={toggleMenu} src={logo} className="App-logo" alt="logo" />
            </div>
            <div onClick={toggleMenu} id="mainListDiv" className={`main_list ${isOpen ? 'show_list' : ''}`}>
                    <ul className="navlinks">
                        <li><a onClick={toggleMenu} href="#">Shop</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Bio</a></li>
                    </ul>
                </div>
                <span className="navTrigger">
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
        </div>
    </motion.nav>
    
        
    );
}

export default NavBar;
