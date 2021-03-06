import react, {Component} from 'react';
import motoring from '../../media/motoring.png'
import './Projects.css'

export default class Motoring extends Component{
    render(){
        return(
            <div className="Project">
                <div className="swerveContent">
                    <h1>Car Accessory Business Website</h1>
                    <h3>React, Javascript, HTML, CSS</h3>
                    <a rel="noreferrer" target="_blank" href="https://github.com/GraidanChristensen/Wasatch-Motoring"><img className="github" alt="githublogo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/></a>
                </div>
                <a rel="noreferrer" target="_blank" href="https://wasatchmotoring.com/"><img className="swervesite" alt="motoSite" src={motoring}/></a>
            </div>
        )
    }
}