import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {topost} from '../actions/loginactions';
import { Chart } from "react-charts";
import {Nav, Navbar, NavDropdown, MenuItem, NavItem,FormGroup,Label,ControlLabel,FormControl}from 'react-bootstrap';
import {Input,Table} from 'reactstrap';

import {Link} from "react-router-dom";
// import {actionlogin} from '../actions/loginactions';
import {connect} from 'react-redux';
import history from "./history";

class Stat extends Component {



    state = {
        sensor: 'fire',
        year_inp: '2050',
        month_inp:'try',
        date_inp:'',
        year:'',
        month:'',
        date: '',
        print:'',
        readings: 0,
        table:0

    };

    navigate()
    {
        history.push('/UserHome');
    }

    onclick=(e)=>{
        console.log("clicked");
        this.setState({
            table: 1
        });
        this.props.job(this.state);
    }



    render() {

        if (this.props.posted===200){
            alert("project add successfull");
            this.navigate();
        }
        return (
            <div style={{backgroundColor:"silver"}}>
                <div>
                </div>
                <div className="row justify-content-md-center" >



                    <Navbar Navbar inverse collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand >
                                <a componentClass={Link} href="/UserHome" to="/UserHome">Home</a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <Navbar.Brand>
                                    <a componentClass={Link} href="/Dashboard" to="/Dashboard">Dashboard</a>
                                </Navbar.Brand>


                            </Nav>
                            <Nav pullRight>
                                <NavItem eventKey={1} componentClass={Link} href="/chart" to="/chart">

                                </NavItem>

                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <div className="col-md-4">
                    </div>

                    <div className="col-md-3">
                        <form>
                            <div className="form-group">
                                <h1 style={{color:"black"}}>View Statistics</h1>
                            </div>

                            <ControlLabel style={{color:"black"}}>Select the type of data you would like to view</ControlLabel>



                            <FormGroup controlId="formControlsSelect">

                                <select id="lang" onChange={(event) => {
                                    this.setState({
                                        sensor: event.target.value
                                    });
                                }} value={this.state.sensor}>
                                    <option value="select">Select</option>
                                    <option value="Temperature">Temperature</option>
                                    <option value="humidity">Humidity</option>
                                </select>
                            </FormGroup>

                            <ControlLabel style={{color:"black"}}>Select the year you would like to view</ControlLabel>
                            <FormGroup controlId="formControlsSelect1">
                                <select id="lang1" onChange={(event) => {
                                    this.setState({
                                        year_inp: event.target.value
                                    });
                                }} value={this.state.year_inp}>
                                    <option value="select">Select</option>
                                      <option value="2016">2016</option>
                                      <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                </select>
                            </FormGroup>

                            <ControlLabel style={{color:"black"}}>Select the month you would like to view</ControlLabel>
                            <FormGroup controlId="formControlsSelect2">

                                <select id="lang" onChange={(event) => {
                                    this.setState({
                                        month_inp: event.target.value
                                    });
                                }} value={this.state.month_inp}>
                                    <option value="select">Select</option>
                                    <option value="select">Select</option>
                                    <option value="Jan">Jan</option>
                                    <option value="Feb">Feb</option>
                                    <option value="Mar">Mar</option>
                                    <option value="Apr">Apr</option>
                                    <option value="May">May</option>
                                    <option value="Jun">Jun</option>
                                    <option value="Jul">Jul</option>
                                    <option value="Aug">Aug</option>
                                    <option value="sep">Sep</option>
                                    <option value="Oct">Oct</option>
                                    <option value="Nov">Nov</option>
                                    <option value="Dec">Dec</option>
                                </select>

                            </FormGroup>

                            <ControlLabel style={{color:"black"}}>Select the time range</ControlLabel>

                            <FormGroup>

                                <Input type="date" name="date" id="exampleDate" value={this.state.date_inp} placeholder="date placeholder" onChange={(event) => {
                                    this.setState({
                                        date_inp: event.target.value
                                    });
                                }}/>
                            </FormGroup>






                            <div className="form-group">

                                <button
                                    className="btn btn-primary"
                                    type="button"
                                    onClick={this.onclick}>
                                    Show
                                </button>
                            </div>
                        </form>
                    </div>




                        {(this.state.table==1)?
                        <div className ="col-md-3"
                         style={{
                           width: "400px",
                           height: "300px"
                         }}
                        >
                         <Chart
                           data={[
                             {
                               label: "Series 1",
                               data: [[8, 20], [20, 20], [31, 20], [39, 24.12], [42, 20], [52, 20], [54, 24.06], [64, 24.12], [66, 20], [74, 24.12]]
                             }

                           ]}
                           axes={[
                             { primary: true, type: "ordinal", position: "bottom" },
                             { type: "ordinal", position: "left" }
                           ]}
                         />

                         <p>
                                             Average Value is 21.642 
                          </p>
                        </div>:null}


                </div>
            </div>
        );
    }
}



const mapDispatchToProps =(dispatch)=> {
    return {
        job : (data) => dispatch(topost(data))
    };
}

const mapStateToProps =(stores)=> {
    console.log('in post stores:',stores);
    return {
        posted : stores.stores.readings,
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Stat);
