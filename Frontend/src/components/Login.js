import React, {Component} from 'react';
import {actionlogin} from '../actions/loginactions';
import {connect} from 'react-redux';
import history from "./history";
import {Button} from 'reactstrap';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email:'',
            username: '',
            password: ''
        };
    }

    navigate()
    {
        history.push('/UserHome');
    }


    render() {

        if (this.props.loggedin===200){
            this.navigate();
        }
        return (
            <div>
                <div className="bgImg">
                </div>
                <div className="cardoutline">
                    <div className="Welcome" >
                        Login
                    </div>
                            <input
                                className="emailbox"
                                type="text"
                                label="Email"
                                placeholder="Enter Email"
                                value={this.state.email}
                                onChange={(event) => {
                                    this.setState({
                                        email: event.target.value
                                    });
                                }}
                            />
                            <input
                                className="passwordbox"
                                type="password"
                                label="password"
                                placeholder="Enter Password"
                                value={this.state.password}
                                onChange={(event) => {
                                    this.setState({
                                        password: event.target.value
                                    });
                                }}
                            />
                            <Button
                                className="Login-btn"
                                type="button"
                                onClick={() => this.props.log(this.state)}>
                                Login
                            </Button>
                </div>            </div>
        );
    }
}

const mapDispatchToProps =(dispatch)=> {
    return {
        log : (data) => dispatch(actionlogin(data))
    };
}
const mapStateToProps =(stores)=> {
    console.log(stores);
    return {
        loggedin : stores.stores.login,
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
