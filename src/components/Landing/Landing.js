import react, {Component} from 'react';
import {Fade} from 'react-reveal';
import './Landing.css'
import portrait from '../../media/profile pic.j bwjpg.jpg'

export default class Landing extends Component{
    render(){
        return(
            <div className="Landing">
                <Fade left>
                    <h1>Graidan<br></br>Christensen</h1>
                </Fade>
                <Fade right>
                    <img src={portrait} alt="portrait"/>
                </Fade>
            </div>
        )
    }
}