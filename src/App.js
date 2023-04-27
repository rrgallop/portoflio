import React from 'react';
import './style.css';
import Badge from './img/ryan-logo.png';
import Contact from './components/Contact.js'
import Projects from './components/Projects.js';
import Home from './components/Home.js'
import Roids from './components/Roids.js'
import YouTube from './components/youtube.js'
import Calculator from './components/Calculate.js'
import florida from './img/florida.jpg'
import { Link } from 'react-scroll'; 

class App extends React.Component {
  state = {
    home: true,
    contact: true,
    projects: true,
    display: ''
  };

  clickContact = () => {
    
  }

  clickHome = () => {
    
  }

  clickProjects = () => {
    console.log('success')
  }

  setDisplay = (prop) =>{
    this.setState({
      display: prop
    })
  }
  render(){
    return (
        <div className="background">
          <header>
                <div className="my-picture">
                    <img src={Badge} alt="my face"/>
                </div>
                <div className="container">
                    <div className="name-plate">
                        <h1>Ryan R. Gallop</h1>
                    </div>
                    <nav>
                        <ul>
                            <li>
                              <Link
                                onClick={this.clickHome}
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                                to="aboutme">
                                Home
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={this.clickProjects}
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                                to="myprojects">
                                Projects
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={this.clickHome}
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                                to="contactme">
                                Contact
                              </Link>
                            </li>
                        </ul>
                    </nav>

                </div>
          </header>
          <br/><br/><br/><br/><br/>
          <div id="aboutme">{this.state.home ? <Home  /> : null}</div>
          <div id="myprojects">{this.state.projects ? <Projects setDisplay={this.setDisplay}/> : null}</div>
          {this.state.display==="asteroids" ? <Roids /> : null}
          {this.state.display==="youtube" ? <YouTube/> : null}
          {this.state.display==="calculator" ? <Calculator/> : null}
          <div id="contactme">{this.state.contact ? <Contact /> : null}</div>
          
        </div>
      

      
    );
  }
}
// {this.state.display==='home' ? <Home/> : null}
// {this.state.display==='contact' ? <Contact /> : null}
// {this.state.display==='projects' ? <Projects setDisplay={this.setDisplay}/> : null}
// {this.state.display==='asteroids' ? <Roids /> : null}
// {this.state.display==='youtube' ? <YouTube/> : null}



export default App;
