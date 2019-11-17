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
                <section class="aboutme">
                    <section className="tagline">
                        <h2>My Work</h2>
                    </section>
                    <section className="infoblurb">
                        <h3>Click below on any of the links to get 
                        more information about and/or interact with 
                        projects I have done.
                        </h3>
                    </section>
                </section>
                <section className="contactme">
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