import React from 'react';
import '../style.css';
import Projects from './Projects.js';

class Roids extends React.Component {
    render(){
        return(
            <div>
                <a href="https://rrgallop.github.io/asteroids.html" target="_blank">Launch Asteroids</a>
                <iframe src="https://rrgallop.github.io/asteroids.html" height="520" width="720"/>
            </div>
        )
    }
}

export default Roids;