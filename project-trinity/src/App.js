import './App.css';
import NavBar from './NavBar';
import React from 'react';
import './styles.css'; // Global Styling
import LoadingScreen from './LoadingScreen';
import Canvas from './Canvas';
import {motion} from "framer-motion";
import BeatingHeart from './BeatingHeart';
import eye from './assets/trinity-eye.svg';
import FlowerOfLife from './FlowerOfLife';
import Haven from './Haven';
import Zodiac from './Zodiac';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <LoadingScreen/>
      <header className="App-header">
         <motion.div 
         initial={{ opacity: 0 }} // Initial opacity and scale of the image
         animate={{ opacity: 1}} // Fade in and scale in animation
         transition={{ delay: 1.6, duration: 1 }} // Duration of the animation
          className="App-container">
            <motion.img 
         animate={{ y: [0, -33, 0] }} // Scale animation
         transition={{ duration: 6, repeat: Infinity }} // Repeat animation indefinitely
          className='eye' src={eye} />
            <motion.div
              initial ={{ opacity: 0 }}
              animate={{ opacity: 1, y: -33}}
              transition={{ delay: 2, duration: 3 }}>
            <h1>Evoking Divinity To Amplify Human Consciousness.</h1>
          </motion.div>
          <motion.div
              initial ={{ opacity: 0 }}
              animate={{ opacity: 1, y: -33}}
              transition={{ delay: 3, duration: 3 }}>
            <h3>Los Angeles, California.</h3>
          </motion.div>
          <motion.div
              initial ={{ opacity: 0 }}
              animate={{ opacity: 1, y: -33}}
              transition={{ delay: 3, duration: 3 }}>
            <BeatingHeart/>
          </motion.div>
          <FlowerOfLife/> 
          <Haven/>
          <Zodiac/>
        </motion.div>   
        <Canvas/>
      </header>     
    </div>
  );
}

export default App;
