import React, {Component} from 'react';
import {connect} from "react-redux";
import image from './Cloud.PNG';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, handle, Image, Grid, Col } from 'react-bootstrap';
import {Link} from "react-router-dom";

class Chart extends Component {


    render(){
        console.log(this.props)
        return(
            <div>
                <Navbar Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand >
                            <a componentClass={Link} href="/view" to="/view">view Sensors</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <Navbar.Brand>
                                <a componentClass={Link} href="/post" to="/post">Dashboard</a>
                            </Navbar.Brand>


                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} componentClass={Link} href="/chart" to="/chart">
                                connectivity chart
                            </NavItem>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <h1><strong>Cloud Connectivity chart </strong></h1>
                <Grid>
                    <Col xs={10} md={10}>
                        <Image src={image}  thumbnail/>
                    </Col>

                </Grid>

            </div>


        )
    }
}

const mapStateToProps =(stores)=> {

    return {
        email : stores.stores.email,
        username: stores.stores.username,
    };
}
export default connect(mapStateToProps)(Chart);

//export default withRouter(Welcome);