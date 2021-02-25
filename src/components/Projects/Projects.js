import react, {Component} from 'react';
import Carousel from 'react-elastic-carousel';
import Swerve from './Swerve';

import './Projects.css'

export default class Projects extends Component{
    render(){
        return(
            <div className="Projects">
                <Carousel className="projectCarousel">
                    <Swerve/>
                </Carousel>
            </div>
        )
    }
}