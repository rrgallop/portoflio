import React from 'react';
import '../style.css';
import App from '../App.js';
import AT from '../img/ryan-at.jpeg';
import AT2 from '../img/ryan-at-2.jpg';
import mus from '../img/music.jpg';
import katahdin from '../img/katahdin.jpg';
import bridge from '../img/bridge.jpg';
import shennies from '../img/shennies-cropped.jpg'
import washington from '../img/washington.jpg';

class About extends React.Component {
    lastTouch = 0;
    IMG_WIDTH = 344;
    state = {
        imgs: [AT, katahdin, bridge, shennies, mus, AT2, washington],
        currentIndex: 0,
        movement: 0
    }

    handleWheel = (event) => {
        clearTimeout(this.wheelTimeout);
        this.handleMovement(event.deltaX);
        this.wheelTimeout = setTimeout(() => this.handleMovementEnd(), 100);
    }

    handleMovement = (delta) => {

        clearTimeout(this.transitionTimeout);
        this.setState(state => {
            const maxLength = state.imgs.length - 1;
            let nextMovement = state.movement + delta;

            if (nextMovement < 0) {
                nextMovement = 0;
            }

            if (nextMovement > maxLength * this.IMG_WIDTH) {
                nextMovement = maxLength * this.IMG_WIDTH;
            }
            
            return {
                movement: nextMovement,
                transitionDuration: "0s"
            }
        })
    }

    handleTouchStart = (event) => {
        this.lastTouch = event.nativeEvent.touches[0].clientX;
    };

    handleTouchMove = (event) => {
        const delta = this.lastTouch - event.nativeEvent.touches[0].clientX;
        this.lastTouch = event.nativeEvent.touches[0].clientX;
        this.handleMovement(delta);
    }

    handleTouchEnd = () => {
        this.handleMovementEnd();
        this.lastTouch = 0;
    }

    handleMovementEnd = () => {
        const { movement, currentIndex } = this.state;

        const endPosition = movement / this.IMG_WIDTH;
        const endPartial = endPosition % 1;
        const endingIndex = endPosition - endPartial;
        const deltaInteger = endingIndex - currentIndex;

        let nextIndex = endingIndex;

        if (deltaInteger >= 0) {
            if (endPartial >= 0.2) {
                nextIndex += 1;
            }
        } else if (deltaInteger < 0){
            nextIndex = currentIndex - Math.abs(deltaInteger);
            if (endPartial > 0.8){
                nextIndex += 1;
            }
        }

        this.transitionTo(nextIndex, Math.min(0.5, 1-Math.abs(endPartial)));
    }

    transitionTo = (index, duration) => {
        this.setState({
            currentIndex: index,
            movement: index * this.IMG_WIDTH,
            transitionDuration: `${duration}s`
        });

        this.transitionTimeout = setTimeout(() => {
            this.setState({ transitionDuration: "0s" });
        })
    }

    componentWillUnmount = () => {
        clearTimeout(this.transitionTimeout);
    }

    render(){
        const { imgs, movement, transitionDuration, currentIndex } = this.state;
        const maxLength = imgs.length - 1;
        const maxMovement = maxLength * this.IMG_WIDTH;
        return(
            <div>
                <section class="aboutme">
                    <section class="tagline">
                        <h2>About Me</h2>
                        <div className="swiper-container"
                            style={{
                                width: this.IMG_WIDTH-1,
                                height: 510
                            }}
                            onWheel={this.handleWheel}
                            onTouchStart={this.handleTouchStart}
                            onTouchMove={this.handleTouchMove}
                            onTouchEnd={this.handleTouchEnd}
                            onWheel={this.handleWheel}>
                            
                            <div className="swiper"
                                style={{
                                    transform: `translateX(${movement * -1}px)`,
                                    transitionDuration: transitionDuration
                                }}>
                                
                                {
                                    imgs.map(src => {
                                        return <img key={src} src={src} height="500"/>;
                                    })
                                }
                            </div>
                        </div>
                        <div className="swipe-buttons">
                            <button
                                className="back move"
                                onClick={() => { movement !== 0 &&
                                  this.transitionTo(currentIndex - 1, 0.5);
                                }}>
                                ←
                            </button>
                            
                            <button
                                className="next move"
                                onClick={() => { movement !== maxMovement &&
                                  this.transitionTo(currentIndex + 1, 0.5);
                                }}>
                                →
                            </button>
                        </div>
                            <br/><br/>
                        
                    </section>
                    <section className="infoblurb">
                        <h3><b>Hi, my name is Ryan. Thanks for stopping by.</b><br/><br/>
                        Technology is my passion and has been since I was very young. 
                        I have experience with many programming languages and technologies. 
                        My top 3 favorite languages are probably Python, JavaScript and C. 
                        I earned my degree in Computer Science from the University of 
                        Southern Maine in 2019. I was born and raised in Maine. 
                        I've traveled all over the country, 
                        and lived in places like San Francisco CA and Atlanta GA.
                        <br/><br/>
                        I'm a total nerd, and spend most of my time in front of a computer 
                        learning new skills and playing with technologies.<br/><br/>
                        A non-exhaustive list of technologies I know are:<br/>
                        
                            Java<br/>
                            C/C++<br/>
                            Python<br/>
                            C#<br/>
                            JavaScript<br/>
                            TypeScript<br/>
                            HTML/CSS<br/>
                            React<br/>
                            Angular<br/>
                            NodeJS<br/>
                        
                        <br/><br/>
                        I love the outdoors and I love pushing my limits. I have hiked over 2,000 miles of the Appalachian Trail. 
                        I've been an endurance athlete for much of my life, and I've completed local 
                        marathon and half-marathon races for fun. I've also been a 
                        musician for many years. I play bass in a band with my friends. I also love 
                        to play guitar and sing for people. 
                        </h3>
                    </section>
                </section>
                <section className="contactme">
                    <div className="container">
                        
                    </div>
                </section>
            </div>
        );
    }
}

export default About;