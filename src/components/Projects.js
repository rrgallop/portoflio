import React from 'react';
import '../style.css';
import html from "../img/logo_html.png";
import css from "../img/logo_css.png"
import yt from "../img/youtube.png"

class Projects extends React.Component {
    
    clickedRoids = () => {
        const { setDisplay } = this.props;
        setDisplay('asteroids');
    }

    clickedYouTube = () => {
        const { setDisplay } = this.props;
        setDisplay('youtube');
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
                        <br/><br/>
                        Here I would like to showcase a few different projects I have done.<br/>
                        The goal is to expose myself to many different techniques and technologies.<br/>
                        <br/>
                        Expand a project to learn more, view sourcecode,<br/>
                        and interact with the project.

                        Everything here can be considered a work in progress.<br/>
                        Even if I'm satisfied with the current state of a project,<br/>
                        I may come back to it later to expand features,<br/>
                        so check back if you want to see the current state of my work.
                        
                    </section>
                </section>
                <section className="body-section-2">
                    <section className="boxes">
                        <div className="box-container">
                            <div className="box">
                                <button onClick={this.clickedRoids}><img src={html} alt="html"/>
                                <h4>Asteroids</h4></button>
                                <p>A JavaScript diversion if you want to kill some time.</p>
                            </div>
                            <div className="box">
                                <img src={css} alt="css"/>
                                <h4>Some stuff</h4>
                                <p>Placeholder</p>
                            </div>
                            <div className="box">
                                <button onClick={this.clickedYouTube}><img src={yt} alt="youtube"/>
                                <h4>YouTube Video Player</h4></button>
                                <p>YouTube Video Player built using React & YouTube API</p>
                            </div>
                        </div>
                    </section>
                </section>
                
                
            </div>
        );
    }
}

export default Projects;