import React, {Component} from 'react';
import history from "./history";
import {actionsign} from '../actions/loginactions';
import {connect} from 'react-redux';
import {Button} from 'reactstrap';
import '../App.css';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email:'',
            password: ''
        };
    }

    navigate()
    {
        history.push('/login');
    }

    render() {

        if (this.props.signin===200){
            alert("sign up successfull");
            this.navigate();
        }
        return (
            <div>
            <div className="bgImg">
            </div>



                <div className="cardoutline">
                        <div className="Welcome-signup">
                            Signup
                        </div>
                            <input
                                className="Signup-username"
                                type="text"
                                placeholder="User Name"
                                value={this.state.username}
                                onChange={(event) => {
                                    this.setState({
                                        username: event.target.value
                                    });
                                }}
                            />
                            <input
                                className="Signup-email"
                                type="text"
                                placeholder="E-Mail"
                                value={this.state.email}
                                onChange={(event) => {
                                    this.setState({
                                        email: event.target.value
                                    });
                                }}
                            />
                            <input
                                className="Signup-password"
                                type="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={(event) => {
                                    this.setState({
                                        password: event.target.value
                                    });
                                }}
                            />

                           <Button
                                outline color="primary"
                                className="real-signup-btn"
                                type="button"
                                onClick={() => this.props.Sign(this.state)}>
                                Submit
                            </Button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps =(dispatch)=> {
    return {
        Sign : (data) => dispatch(actionsign(data)),
    };
}

const mapStateToProps =(stores)=> {

    return {
        signin: stores.stores.status
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);