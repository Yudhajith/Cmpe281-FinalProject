import React, {PropTypes, Component} from 'react';
import {dashboard} from '../actions/loginactions';

import {Nav, Navbar, NavDropdown, MenuItem, NavItem,FormGroup,Label,ControlLabel,FormControl}from 'react-bootstrap';
import {Input,Table} from 'reactstrap';
import GoogleMapReact from 'google-map-react';
import MyGreatPlace from './my_great_place.jsx';
import {Link} from "react-router-dom";
// import {actionlogin} from '../actions/loginactions';
import {connect} from 'react-redux';
import history from "./history";


class Dashboard extends Component {



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

    static defaultProps = {
      center: {
        lat: 37.33,
        lng: -121.88
      },
      zoom: 11
    };

    render() {

        if (this.props.posted===200){
            alert("project add successfull");
            this.navigate();
        }
        return (
          <div style={{backgroundColor:"white"}}>
            <div style={{backgroundColor:"black"}}>
                <div>
                </div>
                <div className="row justify-content-md-center" >



                    <Navbar Navbar inverse collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand >
                                <p>System Dashboard</p>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <Navbar.Brand>
                                    <p></p>
                                </Navbar.Brand>


                            </Nav>
                            <Nav pullRight>
                                <NavItem eventKey={1} componentClass={Link} href="/stat" to="/stat">
                                View Statistics
                                </NavItem>

                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <div className="col-md-4">
                    </div>

                    <div className="col-md-3">
                        <form>
                            <div className="form-group">
                                <h1 style={{color:"silver"}}>San Jose Nodes</h1>
                            </div>
















                        </form>
                    </div>


                    {(this.state.table==1)?
                        <Table>

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

            <div style={{ height: '100vh', width: '100%' }}>
              <GoogleMapReact

                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}


              >

              <MyGreatPlace lat={37.3382} lng={-121.8863} text={'A'} />
              <MyGreatPlace lat={37.3380} lng={-121.8860} text={'B'} />
              <MyGreatPlace lat={37.3378} lng={-121.8858} text={'C'} />
              <MyGreatPlace lat={37.3385} lng={-121.8865} text={'D'} />
              <MyGreatPlace lat={37.3375} lng={-121.8855} text={'E'} />
              <MyGreatPlace lat={37.3370} lng={-121.8850} text={'F'} />

                <AnyReactComponent
                  lat={37.3382}
                  lng={-121.8863}
                  text={'San Jose'}


                />
              </GoogleMapReact>
            </div>

            </div>
        );
    }
}

const AnyReactComponent = ({ text }) => <div>{text}</div>;




export default Dashboard;
