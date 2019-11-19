import React from 'react';
import '../style.css';


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
                    <h2>Professional Software Engineer</h2>
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
                        <h4>If you like what you see and would like to get in contact,<br/>
                            just enter your email address below.<br/>
                            I will get back to you as soon as I can.
                        </h4>
                        <form onSubmit={this.handleSubmit}>
                            <input type="email" placeholder="you@email.com" value={this.state.value} onChange={this.handleChange} />
                            <button type="submit" className="button_1">Submit</button>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;