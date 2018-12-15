import React, {Component} from 'react';
import PropTypes from 'prop-types';
import history from "./history";
import {addsensor} from '../actions/loginactions';
import {connect} from 'react-redux';
import {Button, Input} from 'reactstrap';
import '../App.css';
import {ControlLabel, FormGroup} from "react-bootstrap";

class Addsensor extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };

    state = {
        sensor_name: '',
        location: '',
        date_inp:'',
        password: '',
        phone_no: 123456789,
        recruiter:false,
        modal: false
    };

    componentWillMount(){
        this.setState({
            email: '',
            username: '',
            password: ''
        });
    }

    navigate()
    {
        this.props.Sign(this.state);
        history.push('/post');
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
                        Add Sensor
                    </div>


                    <input
                        className="Signup-firstname"
                        type="text"
                        placeholder="Sensor Name"
                        value={this.state.sensor_name}
                        onChange={(event) => {
                            this.setState({
                                sensor_name: event.target.value
                            });
                        }}
                    />



                    <input
                        className="Signup-lastname"
                        type="text"
                        placeholder="Location"
                        value={this.state.location}
                        onChange={(event) => {
                            this.setState({
                                location: event.target.value
                            });
                        }}
                    />





                        <Input
                            className="Signup-last"
                            type="date" name="date" id="exampleDate" value={this.state.date_inp} placeholder="date placeholder" onChange={(event) => {
                            this.setState({
                                date_inp: event.target.value
                            });
                        }}/>





                    {/*<input*/}
                        {/*className="Signup-email"*/}
                        {/*type="text"*/}
                        {/*placeholder="Device-ID"*/}
                        {/*value={this.state.email}*/}
                        {/*onChange={(event) => {*/}
                            {/*this.setState({*/}
                                {/*email: event.target.value*/}
                            {/*});*/}
                        {/*}}*/}
                    {/*/>*/}








                    <Button
                        outline color="primary"
                        className="real-signup-btn"
                        type="button"
                        onClick={() => {this.props.Sign(this.state);
                            history.push('/post');}}>
                        Add
                    </Button>


                </div>
            </div>
        );
    }
}

const mapDispatchToProps =(dispatch)=> {
    return {
        Sign : (data) => dispatch(addsensor(data)),
    };
}

const mapStateToProps =(stores)=> {

    return {
        signin: stores.stores.status
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Addsensor);