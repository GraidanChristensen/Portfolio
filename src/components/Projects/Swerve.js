import react, {Component} from 'react';
import swerveSite from '../../media/swervesite.png'
import './Projects.css'

export default class Swerve extends Component{
    render(){
        return(
            <div className="Project">
                <div className="swerveContent">
                    <h1>Start Up Eccommerce Website</h1>
                    <h3>React, Node.js, PostgreSQL, HTML, CSS, Stripe, and Nodemailer</h3>
                    <a rel="noreferrer" target="_blank" href="https://github.com/GraidanChristensen/swerve"><img className="github" alt="githublogo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/></a>
                </div>
                <a rel="noreferrer" target="_blank" href="http://161.35.229.217:4000/#/"><img className="swervesite" alt="swerveSite" src={swerveSite}/></a>
            </div>
        )
    }
}