import './App.css';
import {Component} from 'react';
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Contact from './components/Contact/Contact';
import SmallProjects from './components/Projects/SmallProjects';

class App extends Component{
  render(){
    return(
      <div className="App">
          <Menu/>
          <Landing className="scrollChild"/>
          <About className="scrollChild"/>
          <Projects className="scrollChild"/>
          <SmallProjects/>
          <Contact className="scrollChild"/>
      </div>
    )
  }
}

export default App;

