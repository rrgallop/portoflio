import React from 'react';
import '../style.css';
import Projects from './Projects.js';

class Calculator extends React.Component {
    render(){
        return(
            <div className="body-section-1">
                <div className="infoblurb">
                    <h2>Leave your calculator at home? Phone went through the wash? I got you covered...<br/>
                    Simple calculator app built using Angular.</h2>
                    <br/><br/>
                    <iframe align="middle" className="calculator" src="https://rrgallop.github.io/AngularCalculator" height="700" width="500"/>
                </div>
            </div>
        )
    }
}

export default Calculator;