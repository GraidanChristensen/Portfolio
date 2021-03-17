import react, {Component} from 'react';
import swerveSite from '../../media/swervesite.png'
import motoring from '../../media/motoring.png'

import './SmallProjects.css'

export default class SmallProjects extends Component{
    render(){
        return(
            <div className="SmallProjects">
                <div className="projectContainer">
                    <a rel="noreferrer" target="_blank" href="http://161.35.229.217:4000/#/"><img className="projectImage" alt="swerveSite" src={swerveSite}/></a>
                    <div className="projectContent">
                        <a rel="noreferrer" target="_blank" href="http://161.35.229.217:4000/#/"><h1 className="headingLink">Start Up Eccommerce Website</h1></a>
                        <h3 className="headingLink">React, Node.js, PostgreSQL, HTML, CSS, Stripe, and Nodemailer</h3>
                        <a rel="noreferrer" target="_blank" href="https://github.com/GraidanChristensen/swerve"><img className="github" alt="githublogo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/></a>
                    </div> 
                </div>       


                <div className="projectContainer">
                    <a rel="noreferrer" target="_blank" href="https://wasatchmotoring.com/"><img className="projectImage" alt="motoSite" src={motoring}/></a>
                    <div className="projectContent">
                    <a rel="noreferrer" target="_blank" href="https://wasatchmotoring.com/"><h1 className="headingLink">Car Accessory Business Website</h1></a>
                    <a rel="noreferrer" target="_blank" href="https://github.com/GraidanChristensen/Wasatch-Motoring"><img className="github" alt="githublogo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/></a>
                    </div> 
                </div>          
            </div>
        )
    }
}