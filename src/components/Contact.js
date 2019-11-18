import React from 'react';
import '../style.css';


const Home = () => {
    return(
        <div>
        <section className="aboutme">
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
    <section className="contactme">
        <div className="container">
            <h4>If you like what you see and would like to get in contact,<br/>
                 just enter your email address below.<br/>
                 I will get back to you as soon as I can.
            </h4>
            <form>
                <input type="email" placeholder="you@email.com"/>
                <button type="submit" className="button_1">Submit</button>
            </form>
        </div>
    </section>
        </div>
    );
}

export default Home;