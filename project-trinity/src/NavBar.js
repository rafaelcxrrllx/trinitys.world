import React, { useState } from 'react';
import './NavBar.css';
import logo from './assets/trinity.svg';
import { motion } from "framer-motion";
  

function NavBar() {

    const [isOpen, setIsActive] = useState(false);
    
    const toggleMenu = () => {
        setIsActive(!isOpen);
    };

    const boxStyle = {
        width: "100%",
        height: "100%",
        background: !isOpen ? "none" : "black",
        transition: "background 0.5s"
      };

   
    return (
    <motion.nav 
        initial = {{ opacity: 0 }} // Initial opacity and scale of the image
        animate = {{ opacity: 1}} // Fade in and scale in animation
        transition = {{ delay: 1.2, duration: 1 }} // Duration of the animation
        className = "nav"
        style = {boxStyle}>
        <div>
            <div className='logo'>
                <img  src={logo}  alt="logo" />
            </div>
            {/* <div  id="mainListDiv" className={`main_list ${isOpen ? 'show_list' : ''}`}>
                <ul className="navlinks">
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
            <div onClick={toggleMenu}>
            <span className="navTrigger">
                <motion.i
                    initial={false} // Prevent initial animation
                    animate={{
                    rotate: isOpen ? -60 : 0,
                    x: isOpen ? -13: 0,
                    y: isOpen ? 0: 0
                    // scale: isOpen ? 1 : 0.5 // Conditionally apply scale animation
                        }}
                    transition={{ duration: .3 }}>
                </motion.i>
                <motion.i
                    initial={false} // Prevent initial animation
                    animate={{
                    rotate: isOpen ? 60 : 0,
                    x: isOpen ? 13: 0,
                    y: isOpen ? -10: 0
                    // scale: isOpen ? 1 : 0.5 // Conditionally apply scale animation
                        }}
                    transition={{ duration: .3 }}>
                </motion.i>
                <motion.i
                    initial={false} // Prevent initial animation
                    animate={{
                    rotate: isOpen ? -0 : 0,
                    x: isOpen ? 0: 0,
                        }}
                    transition={{ duration: .3 }}>
                </motion.i>
            </span>
            </div>
            {isOpen && (
            <div className="menu">
            <motion.ul
                initial={{ opacity: 0 }} // Initial opacity and scale of the image
                animate={{y: 10,  opacity: 1}}
                transition={{duration: 1 }}>
                <li>Shop</li>
                <li>Work</li>
                <li>About</li>
            </motion.ul>
            </div>
            )} */}
        </div>
    </motion.nav>
    );
}

export default NavBar;
