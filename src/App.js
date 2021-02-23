import './App.css';
import {Component} from 'react';
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects'

class App extends Component{
  render(){
    return(
      <div className="App">
        <Landing/>
        <Projects/>
      </div>
    )
  }
}

export default App;
