import react, {Component} from 'react';
import './About.css'
import Particles from 'react-particles-js';

export default class About extends Component{
    constructor(){
        super();
        this.state = {
            
        }
    }

    render(){
        return(
            <div className="About" id="About">
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
                <h1>I am a young and ambitious full stack web developer from Utah. I have studied and enjoyed coding and developing for about 3 years now. Any new language, skill, problem or task excites me and motivates me to learn and work hard. When I'm not coding I am on the mountain freestyle skiing or fly fishing. I recently received an Associate of Science degree from Snow College and completed DevMountain's web development course.</h1>
            </div>
        )
    }
}