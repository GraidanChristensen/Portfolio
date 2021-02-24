import './App.css';
import {Component} from 'react';
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Menu from './components/Menu/Menu'
import Contact from './components/Contact/Contact'

class App extends Component{
  render(){
    return(
      <div className="App">
        <Menu/>
        <div className="scrollParent">
          <Landing className="scrollChild"/>
          <About className="scrollChild"/>
          <Projects className="scrollChild"/>
          <Contact className="scrollChild"/>
        </div>
      </div>
    )
  }
}

export default App;
