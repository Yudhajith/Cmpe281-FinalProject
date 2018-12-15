import React, {Component} from 'react';
import {withRouter } from 'react-router-dom';
import {Button} from 'reactstrap';
import history from "./history";
import '../App.css';



class Home extends Component {
    constructor(props) {
        super(props);
        };


    render() {
        return (
            <div>
                <img className="bgImgHome" src="http://paperlief.com/images/busy-city-street-wallpaper-1.jpg" alt="281 App."/>
                <div className="cardoutline">
                    <img class="Logo-Welcome" src={require("../images/200.png")}
                         alt="San Jose State University"/>
                    <p className="Home-project-name">Smart Street Temperature, Light & Humidity Controller</p>
                        <Button outline color="primary" className="Home-Signup-btn" onClick={() => {
                            history.push({
                                pathname: '/signup'
                            });
                        }}>Signup</Button>

                        <Button outline color="primary" className="Home-Login-btn" onClick={() => {
                            history.push({
                                pathname: '/login'
                            });
                        }}>Login</Button>

                </div>
            </div>
        );
    }
}




export default withRouter(Home);