import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {topost} from '../actions/loginactions';
import {Nav, Navbar, NavDropdown, MenuItem, NavItem,FormGroup,Label,ControlLabel,FormControl}from 'react-bootstrap';
import {Input,Table} from 'reactstrap';

import {Link} from "react-router-dom";
// import {actionlogin} from '../actions/loginactions';
import {connect} from 'react-redux';
import history from "./history";

class Post extends Component {



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
            <div style={{backgroundColor:"black"}}>
                <div>
                </div>
                <div className="row justify-content-md-center" >



                    <Navbar Navbar inverse collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand >
                                <a componentClass={Link} href="/view" to="/view">View Sensors</a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <Navbar.Brand>
                                    <a componentClass={Link} href="/addsensor" to="/addsensor">Add sensor</a>
                                </Navbar.Brand>


                            </Nav>

                            <Nav>
                                <Navbar.Brand>
                                    <a componentClass={Link} href="/UserHome" to="/UserHome">Home</a>
                                </Navbar.Brand>


                            </Nav>
                            <Nav pullRight>
                                <NavItem eventKey={1} componentClass={Link} href="/chart" to="/chart">
                                    Connectivity Chart
                                </NavItem>

                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <div className="col-md-4">
                    </div>

                    <div className="col-md-3">
                        <form>
                            <div className="form-group">
                                <h1 style={{color:"silver"}}>Sensor Readings</h1>
                            </div>

                            <ControlLabel style={{color:"silver"}}>Select Sensor</ControlLabel>



                            <FormGroup controlId="formControlsSelect">

                                <select id="lang" onChange={(event) => {
                                    this.setState({
                                        sensor: event.target.value
                                    });
                                }} value={this.state.sensor}>
                                    <option value="select">Select</option>
                                    <option value="Temperature">Temperature</option>
                                    <option value="humidity">Humidity</option>
                                    <option value="Light">Light</option>
                                </select>
                            </FormGroup>

                            <ControlLabel style={{color:"silver"}}>Select Year</ControlLabel>
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

                            <ControlLabel style={{color:"silver"}}>Select Month</ControlLabel>
                            <FormGroup controlId="formControlsSelect2">

                                <select id="lang" onChange={(event) => {
                                    this.setState({
                                        month_inp: event.target.value
                                    });
                                }} value={this.state.month_inp}>
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

                            <ControlLabel style={{color:"silver"}}>Date</ControlLabel>

                            <FormGroup>

                                <Input type="date" name="date" id="exampleDate" value={this.state.date_inp} placeholder="date placeholder" onChange={(event) => {
                                    this.setState({
                                        date_inp: event.target.value
                                    });
                                }}/>
                            </FormGroup>



                            <FormGroup controlId="formControlsSelect">

                                <Input style={{color:"silver"}} type="radio" name="year"  onChange={(event) => {
                                    this.setState({
                                        year: event.target.value
                                    });
                                }} />
                                <label style={{color:'silver'}}>Year-wise</label>

                                <Input type="radio" style={{color:"silver"}} name="month" onChange={(event) => {
                                    this.setState({
                                        month: event.target.value
                                    });
                                }} />
                                <label style={{color:'silver'}}> Month-wise</label>

                                <Input type="radio" style={{color:"silver"}}  name="date" onChange={(event) => {
                                    this.setState({
                                        date: event.target.value
                                    });
                                }} />
                                <label style={{color:'silver'}}> Date-wise</label>

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

                <div className='tabl'>
                    {(this.state.table==1)?
                        <Table style={{align:'center'}}>

                            <thead>

                            <tr>

                                <th style={{color:"orange"}} >Timestamp</th>
                                <th style={{color:"orange"}}>{this.state.sensor} Reading</th>
                            </tr>
                            </thead>

                            <tbody>
                            { this.props.posted!==undefined&&this.props.posted.length!==0?
                                this.props.posted.map(row => {
                                    return(
                                        <tr>
                                            <td key={row.timestamp} style={{color:"silver"}}>{row.timestamp}</td>
                                            <td key={row.temperature} style={{color:"silver"}}>{row.value}</td>

                                        </tr>
                                    )
                                }):<div>Loading....</div>}
                            </tbody>
                        </Table>:null}
                </div>

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
export default connect(mapStateToProps, mapDispatchToProps)(Post);