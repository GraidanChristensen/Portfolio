import react, {Component} from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';
import './Menu.css'

export default class Menu extends Component{
    render(){
        return(
            <div className="Menu">
                <ul className="menuList">
                    <Link className="menuLink"
                        activeClass="active"
                        to="Landing"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        Home
                    </Link>
                    <Link className="menuLink"
                        activeClass="active"
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        About
                    </Link>
                    <Link className="menuLink"
                        activeClass="active"
                        to="SmallProjects"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        Projects
                    </Link>
                    <Link className="menuLink"
                        activeClass="active"
                        to="Contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        Contact
                    </Link>

                </ul>
            </div>
        )
    }
}