import React from 'react';
import '../style.css';
import html from "../img/logo_html.png";
import css from "../img/logo_css.png";
import yt from "../img/youtube.png";
import calc from "../img/calc.png";
// import DelayLink from 'react-router-dom'; 
import DelayLink from './DelayLink.jsx'
import { Link } from 'react-scroll'


class Projects extends React.Component {
    
    clickedRoids = () => {
        const { setDisplay } = this.props;
        setDisplay('asteroids');
    }

    clickedYouTube = () => {
        const { setDisplay } = this.props;
        setDisplay('youtube');
    }

    clickedCalc = () => {
        const { setDisplay } = this.props;
        setDisplay('calculator');
    }
    
    render(){
        return(
            <div>
                <section class="body-section-1">
                    <section className="tagline">
                        <h2>My Work</h2>
                    </section>
                    <section className="infoblurb">
                        <h3>I believe that the best way to learn is to get your hands dirty.</h3>
                        <p>Here I would like to showcase a few different projects I have done.</p>
                        <p>The goal is to expose myself to many different techniques and technologies.</p>
                        
                        <p>Expand a project to learn more, view sourcecode, and interact with the project.</p>

                        Everything here can be considered a work in progress. Even if I'm satisfied with the current state of a project,
                        I may come back to it later to expand features, so check back if you want to see the current state of my work.
                    </section>
                </section>
                <section className="body-section-2">
                    
                    <div className="project-container">
                        <div className="project-box">
                            <button className="project-button" onClick={this.clickedRoids}><img src={html} alt="html"/>
                            <h4>Asteroids</h4></button>
                            <p>A JavaScript diversion if you want to kill some time.</p>
                        </div>
                        <div className="project-box">
                            <button className="project-button" onClick={this.clickedCalc}>
                                <img src={calc} alt="calculator"/>
                                <h4>Angular Calculator</h4>
                            </button>
                            <p>Calculator built using Angular</p>
                        </div>
                        <div className="project-box">
                            <button className="project-button" onClick={this.clickedYouTube}><img src={yt} alt="youtube"/>
                            <h4>YouTube Video Player</h4></button>
                            <p>YouTube Video Player built using React & YouTube API</p>
                        </div>
                    </div>
                </section>
                
                
            </div>
        );
    }
}

export default Projects;