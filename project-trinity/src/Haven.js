import React from 'react';
import "./styles.css"
import "./Haven.scss"
// import {motion} from "framer-motion";
import moon from './assets/planets/moon.svg';
import earth from './assets/planets/earth.svg';
import sol from './assets/planets/sol.svg';
import mars from './assets/planets/mars.svg';
import venus from './assets/planets/venus.svg';
import jupiter from './assets/planets/jupiter.svg';
import saturn from './assets/planets/saturn.svg';
import neptune from './assets/planets/neptune.svg';
import uranus from './assets/planets/uranus.svg';
import pluto from './assets/planets/pluto.svg';
import mercury from './assets/planets/mercury.svg';


function Haven() {

  
    return (
		<div class="Heaven-container">
			<div>
				<h2>
					The Soular System
				</h2>
			</div>
			<div class="Haven-container">
				{/* <!-- orbits --> */}
				<div class="orbit orbit-1">
					<img src={moon} alt='Moon'/>
				</div>
				<div class="orbit orbit-2">
				<img src={mercury} alt='Mercury' />
				</div>
				<div class="orbit orbit-3">
				<img src={venus} alt='Venus'/>
				</div>
				<div class="orbit orbit-4">
				<img src={sol} alt='Sun'/>
				</div>
				<div class="orbit orbit-5">
				<img src={mars} alt='Mars'/>
				</div>
				<div class="orbit orbit-6">
				<img src={jupiter} alt='Jupiter'/>
				</div>
				<div class="orbit orbit-7">
				<img src={saturn} alt='Saturn'/>
				</div>
				<div class="orbit orbit-8">
				<img src={uranus} alt='Uranus'/>
				</div>
				<div class="orbit orbit-9">
				<img src={neptune} alt='Neptune'/>
				</div> 
				<div class="orbit orbit-10">
				<img src={pluto} alt='Pluto' />
				</div> 
				<div id="terra" class="orbit orbit-11">
				<img src={earth} alt='Earth'/>
				</div> 
			</div>
			<div className='quote'>
			<p>
				"Whether these cycle recurrences will bring about positive and constructive, 
				or negative and destructive, reactions, depends entirely on one's chemical 
				condition"
			</p>
			<p>
				- Dr. George W. Carey, The Cell Salts of Salvation
			</p>
		</div>
		</div>
		
		

    );
}

export default Haven;
