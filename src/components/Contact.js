import React from 'react';
import '../style.css';
import Typical from 'react-typical';


class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
    }
    

    handleSubmit = (event) => {
        alert('The button doesn\'t actually work yet, but thank you for your interest! Please reach out to me directly at rrgallop@gmail.com. I look forward to hearing from you.');
        event.preventDefault();
    }

    handleChange = (event) =>{
        this.setState({value: event.target.value})
    }

    render(){
        return(
            <div>
            <section className="body-section-1">
                <section className="tagline">
                    <h2>I am a<br/>
                        <Typical
                            loop={Infinity}
                            wrapper="b"
                            steps={[
                                'Software Engineer', 1000,
                                'Software Developer', 1000,
                                'Creative', 1000,
                                'Tech Enthusiast', 1000,
                                'Long-distance Hiker', 1000,
                                'Total Nerd', 1000,
                                'Musician', 1000,
                                
                            ]}/>
                    
                    </h2>
                </section>
                <section className="infoblurb">
                    <h3>I love to code. I love to learn.<br/>Working with tech is my passion.<br/>
                        If it's yours too, I would love to be a part<br/>
                        of your organization.
                    </h3>
                </section>
            </section>
                <section className="body-section-2">
                    <div className="container">
                        <h2 className="goodbye">Contact Me</h2>
                        <h2>If you like what you see and would like to get in contact,<br/>
                            just enter your email address below.<br/>
                            I will get back to you as soon as I can.
                        </h2>
                        <form onSubmit={this.handleSubmit}>
                            your name: <input type="text" className="contact-me-1" placeholder="your name" value={this.state.value} onChange={this.handleChange} /><br/>
                            email addr: <input type="email" className="contact-me-1" placeholder="you@email.com" value={this.state.value} onChange={this.handleChange} /><br/><br/>
                            tell me about yourself:<br/><textarea className="contact-me-2" placeholder="Send me a nice message!" value={this.state.value} onChange={this.handleChange} /><br/>
                            <button type="submit" className="button_1">Submit</button>
                        </form><br/><br/><br/>
                        <h2 className="goodbye">Thanks for stopping by!</h2>
                    </div>
                </section>
                <br/><br/><br/><br/>
            </div>
        );
    }
}

export default Home;