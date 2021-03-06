import react, {Component} from 'react';
import {Fade} from 'react-reveal';
import fish from '../../media/b&wfish.jpg';
import './About.css'
import skivid from '../../media/b&wskivid.mov'

export default class About extends Component{
    constructor(){
        super();
        this.state = {
            
        }
    }

    render(){
        return(
            <div className="About" id="About">
                <div className="firstAbout large">
                    <Fade left>
                        <h1>I'm a young and ambitious full stack web developer from Utah. I've enjoyed coding for about 3 years.  Any new language, skill, problem or task excites me and motivates me to learn and work hard.</h1>
                    </Fade>
                </div>
                <div className="aboutSpacing large">
                    <Fade left>
                        <img src={fish} alt="fishing large" />
                    </Fade>
                    <Fade right>
                        <h1> I recently received an Associate of Science degree from Snow College and completed DevMountain's web development course.</h1>
                    </Fade>
                </div>
                <div className="aboutSpacing large">
                    <Fade left>
                        <h1>When I'm not coding I am on the mountain freestyle skiing or fly fishing.</h1>
                    </Fade>
                    <Fade right>
                    <video className="skiVid large" loop autoPlay muted src={skivid}> Your browser does not support this video</video>
                    </Fade>
                </div>

                {/*displays on mobile view*/}
                <Fade bottom>
                <div className="firstAbout small">
                    <h1>I'm a young and ambitious full stack web developer from Utah. I've enjoyed coding for about 3 years.  Any new language, skill, problem or task excites me and motivates me to learn and work hard.</h1>
                </div>
                </Fade>

                <div className="aboutSpacing small">
                <Fade bottom>
                    <img src={fish} alt="fishing small" />
                    <h1> I recently received an Associate of Science degree from Snow College and completed DevMountain's web development course.</h1>
                    {/* <video className="skiVideo small" loop autoPlay muted src={skivid}> Your browser does not support this video</video> */}
                    <div dangerouslySetInnerHTML={{
                        __html: `
                        <video 
                        width="70%"
                        loop
                        muted
                        autoplay
                        >
                        <source src=${skivid} type="video/mp4" />
                        </video>`
                    }}
                    />
                    <h1>When I'm not coding I am on the mountain freestyle skiing or fly fishing.</h1>
                </Fade>
                </div>

            </div>
        )
    }
}