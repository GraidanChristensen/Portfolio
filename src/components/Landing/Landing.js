import react, {Component} from 'react';
import './Landing.css'
import portrait from '../../media/profile pic.j bwjpg.jpg'

export default class Landing extends Component{
    render(){
        return(
            <div className="Landing">
                <h1>Graidan<br></br>Christensen</h1>
                <img src={portrait} alt="portrait"/>
            </div>
        )
    }
}