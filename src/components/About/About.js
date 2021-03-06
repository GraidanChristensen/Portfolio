import react, {Component} from 'react';
import {Fade} from 'react-reveal';
import './About.css'

export default class About extends Component{
    constructor(){
        super();
        this.state = {
            
        }
    }

    render(){
        return(
            <div className="About" id="About">
                <div className="aboutSpacing">
                    <Fade left>
                        <h1>I'm a young and ambitious full stack web developer from Utah. I've enjoyed coding for about 3 years now.</h1>
                    </Fade>
                    <h1> </h1>
                </div>
                <div className="aboutSpacing">
                    <Fade right>
                        <h1> </h1>
                        <h1> I recently received an Associate of Science degree from Snow College and completed DevMountain's web development course. Any new language, skill, problem or task excites me and motivates me to learn and work hard.</h1>
                    </Fade>
                </div>
                <div className="aboutSpacing">
                    <Fade left>
                        <h1>When I'm not coding I am on the mountain freestyle skiing or fly fishing.</h1>
                    </Fade>
                    <h1> </h1>
                </div>
            </div>
        )
    }
}