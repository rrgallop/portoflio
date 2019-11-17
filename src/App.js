import React from 'react';
import './style.css';
import Badge from './img/ryan-logo.png';
import Home from './components/Home.js'
import Projects from './components/Projects.js';
import About from './components/About.js'
import Aster from './components/Aster.js'
import YouTube from './components/youtube.js'

class App extends React.Component {
  state = {
    display: 'home'
  };

  clickHome = () => {
    if (this.state.display === 'home'){ 
      return null
    } else {
      this.setState({
        display: 'home'
      })
    }
  }

  clickAbout = () => {
    if (this.state.display === 'about'){ 
      return null
    } else {
      this.setState({
        display: 'about'
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
                          <li><a onClick={this.clickAbout}>About</a></li>
                          <li><a onClick={this.clickProjects}>Projects</a></li>
                      </ul>
                  </nav>

              </div>
        </header>
      
        <section className="showcase"></section>
        {this.state.display==='home' ? <Home/> : null}
        {this.state.display==='about' ? <About /> : null}
        {this.state.display==='projects' ? <Projects setDisplay={this.setDisplay}/> : null}
        {this.state.display==='asteroids' ? <Aster /> : null}
        {this.state.display==='youtube' ? <YouTube/> : null}

      </div>
      
    );
  }
}




export default App;
