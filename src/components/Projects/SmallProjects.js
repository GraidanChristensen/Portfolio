import react, {Component} from 'react';
import swerveSite from '../../media/swervesite.png'
import motoring from '../../media/motoring.png'

import './Projects.css'

export default class SmallProjects extends Component{
    render(){
        return(
            <div className="SmallProjects">
                <a rel="noreferrer" target="_blank" href="http://161.35.229.217:4000/#/"><img className="swervesite" alt="swerveSite" src={swerveSite}/></a>
                <a rel="noreferrer" target="_blank" href="https://wasatchmotoring.com/"><img className="swervesite" alt="motoSite" src={motoring}/></a>
            </div>
        )
    }
}