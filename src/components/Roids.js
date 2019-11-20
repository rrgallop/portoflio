import React from 'react';
import '../style.css';
import Projects from './Projects.js';

class Roids extends React.Component {
    render(){
        return(
            <div className="body-section-1">
                <div className="container">
                    <iframe align="middle" className="asteroids" src="https://rrgallop.github.io/asteroids.html" height="520" width="720"/>
                </div>
            </div>
        )
    }
}

export default Roids;