import React from 'react';
import './style.css';
import Badge from './img/ryan-logo.png';
import Contact from './components/Contact.js'
import Projects from './components/Projects.js';
import Home from './components/Home.js'
import Roids from './components/Roids.js'
import YouTube from './components/youtube.js'

class App extends React.Component {
  state = {
    display: 'home'
  };

  clickContact = () => {
    if (this.state.display === 'contact'){ 
      return null
    } else {
      this.setState({
        display: 'contact'
      })
    }
  }

  clickHome = () => {
    if (this.state.display === 'home'){ 
      return null
    } else {
      this.setState({
        display: 'home'
      })
    }
  }

  clickProjects = () => {
    if (this.state.display === 'projects'){ 
      return null
    } else {
      this.setState({
        display: 'projects'
      })
    }
  }

  setDisplay = (prop) =>{
    this.setState({
      display: prop
    })
  }
  render(){
    return (
      <div>
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
                          
                          <li><a onClick={this.clickHome}>Home</a></li>
                          <li><a onClick={this.clickProjects}>Projects</a></li>
                          <li><a onClick={this.clickContact}>Contact</a></li>
                          
                      </ul>
                  </nav>

              </div>
        </header>
      
        <section className="showcase"></section>
        {this.state.display==='home' ? <Home/> : null}
        {this.state.display==='contact' ? <Contact /> : null}
        {this.state.display==='projects' ? <Projects setDisplay={this.setDisplay}/> : null}
        {this.state.display==='asteroids' ? <Roids /> : null}
        {this.state.display==='youtube' ? <YouTube/> : null}

      </div>
      
    );
  }
}




export default App;
