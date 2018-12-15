import React, {Component} from 'react';
import {Route,Router, Switch} from 'react-router-dom';
import Login from "./Login";
import Welcome from "./Welcome";
import Signup from "./Signup";
import UserHome from "./UserHome";
import Home from "./Home";
import '../App.css';
import history from "./history";
import Post from "./Post";
import View from "./View";
import Addsensor from "./Addsensor";
import Chart from "./Chart";
import Dashboard from "./Dashboard";
import Stat from "./Stat";

class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route  path='/login' component={Login}/>
                    <Route  path='/welcome' component={Welcome}/>
                    <Route  path='/signup' component={Signup}/>
                    <Route  path='/UserHome' component={UserHome}/>
                    <Route  path='/post' component={Post}/>
                    <Route  path='/view' component={View}/>
                    <Route  path='/chart' component={Chart}/>
                    <Route  path='/addsensor' component={Addsensor}/>
                    <Route  path='/dashboard' component={Dashboard}/>
                    <Route  path='/stat' component={Stat}/>
                </Switch>
            </Router>
        );

    }
}
export default Routes;