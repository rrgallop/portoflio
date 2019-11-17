import React from 'react';
import Roids from './Roids.js'

class Aster extends React.Component {
    render(){
        return(
            <div>
                <canvas id="gameCanvas" width="700" height="500"></canvas>
                <Roids thisCanvas={<canvas id="gameCanvas" width="700" height="500"></canvas>}/>
            </div>
        );
    }
}

export default Aster;