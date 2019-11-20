import React from 'react';
import '../style.css';

class Roids extends React.Component {
    render(){
        return(
            <div className="body-section-1">
                <div className="infoblurb">
                    <iframe align="middle" className="asteroids" src="https://rrgallop.github.io/asteroids.html" height="520" width="720"/>
                </div>
            </div>
        )
    }
}

export default Roids;