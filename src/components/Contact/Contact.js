import react, {Component} from 'react';
import './Contact.css'
import linkedin from '../../media/linkedinlogo.png'
import github from '../../media/githublogo.png'
import mail from '../../media/mail.png'
import Particles from 'react-particles-js';

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
                    <a rel="noreferrer" target="_blank" href="https://github.com/GraidanChristensen"><img className="socialIcon" alt="github" src={github}/></a>
                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/graidan-christensen/"><img className="socialIcon" alt="linkedIn" src={linkedin}/></a>
                    <a href="mailto:graidanc@gmail.com"><img className="socialIcon" alt="mailto" src={mail}/></a>
                </div>
            </div>
        )
    }
}


