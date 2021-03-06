import react, {Component} from 'react';
import './Contact.css'
import {Fade} from 'react-reveal';
import linkedin from '../../media/linkedinlogo.png'
import github from '../../media/githublogo.png'
import mail from '../../media/mail.png'
import Particles from 'react-particles-js';
import arrow from '../../media/arrow.png';
import {Link, animateScroll as scroll} from 'react-scroll';


export default class Contact extends Component{
    constructor(){
        super();
        this.state = {
            
        }
    }

    render(){
        return(
            <div className="Contact" id="Contact">
                <Particles className="particles"
                    params={{
                        "particles": {
                            "number": {
                                "value": 100
                            },
                            "size": {
                                "value": 5
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onHover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }}
                />
                <div className="socialLinks">
                    <div className="socialIcons">
                        <Fade top>

                            <a rel="noreferrer" target="_blank" href="https://github.com/GraidanChristensen"><img className="socialIcon" alt="github" src={github}/></a>
                            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/graidan-christensen/"><img className="socialIcon" alt="linkedIn" src={linkedin}/></a>
                            <a href="mailto:graidanc@gmail.com"><img className="socialIcon" alt="mailto" src={mail}/></a>
                        </Fade>
                    </div>
                    <Fade bottom>
                        <div className="contactMe">
                            <h2>Feel free to reach out through email or connect with me on social media. I am always open to freelance work and job offers.</h2>
                            <Link
                                activeClass="active"
                                to="Landing"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}>
                                 <img src={arrow} alt="arrow" className="arrow"/>
                            </Link>
                        </div>
                    </Fade>
                </div>
            </div>
        )
    }
}


