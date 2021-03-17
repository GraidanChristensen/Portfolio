import react, {Component} from 'react';
import swerveSite from '../../media/swervesite.png'
import motoring from '../../media/motoring.png'
import helohome from '../../media/helohome.png'
import helofeed from '../../media/helofeed.png'
import helopost from '../../media/helopost.png'
import github from '../../media/GitHub.png'
import {Fade} from 'react-reveal';
import arrow from '../../media/greyarrow.png'
import './SmallProjects.css'

export default class SmallProjects extends Component{
    constructor(){
        super();
        this.state={
            toggleDrop: false
        }
    }

    handleClick = () => {
        this.setState({
            toggleDrop: !this.state.toggleDrop
        })
    }

    render(){
        return(
            <div className="SmallProjects">
                <div className="projectContainer">
                    <a rel="noreferrer" target="_blank" href="http://161.35.229.217:4000/#/"><img className="projectImage" alt="swerveSite" src={swerveSite}/></a>
                    <div className="projectContent">
                        <a rel="noreferrer" target="_blank" href="http://161.35.229.217:4000/#/"><h1 className="headingLink">Start Up Eccommerce Website</h1></a>
                        <h3 className="headingLink">React, Node.js, PostgreSQL, Javascript, HTML, CSS, Stripe, and Nodemailer</h3>
                        <a rel="noreferrer" target="_blank" href="https://github.com/GraidanChristensen/swerve"><img className="github" alt="githublogo" src={github}/></a>
                    </div> 
                </div>   

                <div className="projectContainer" onClick={() => {this.handleClick()}}>
                    <img className="projectImage" alt="helo site" src={helohome}/>
                    <div className="projectContent">
                        <h1 onClick={() => {this.handleClick()}} className="headingLink">Social Media Site</h1>
                        <h3 onClick={() => {this.handleClick()}} className="headingLink">React, Node.js, PostgreSQL, Javascript, CSS</h3>
                        <a rel="noreferrer" target="_blank" href="https://github.com/GraidanChristensen/helo"><img className="github" alt="githublogo" src={github}/></a>
                    </div>
                </div>  

                    <Fade bottom opposite when={this.state.toggleDrop}>
                    <img className={this.state.toggleDrop ? "heloImage" : "hideImage"} alt="helo site" src={helofeed}/>
                    <img className={this.state.toggleDrop ? "heloImage" : "hideImage"} alt="helo site" src={helopost}/>
                    <img onClick={() => {this.handleClick()}} className={this.state.toggleDrop ? "heloArrow" : "hideImage"} alt="slide up arrow" src={arrow}/>
                    </Fade> 
                <div className="projectContainer">
                    <a rel="noreferrer" target="_blank" href="https://wasatchmotoring.com/"><img className="projectImage" alt="motoSite" src={motoring}/></a>
                    <div className="projectContent">
                    <a rel="noreferrer" target="_blank" href="https://wasatchmotoring.com/"><h1 className="headingLink">Car Accessory Business Website</h1></a>
                    <a rel="noreferrer" target="_blank" href="https://github.com/GraidanChristensen/Wasatch-Motoring"><img className="github" alt="githublogo" src={github}/></a>
                    </div> 
                </div>    
            </div>
        )
    }
}