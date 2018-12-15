import React, {Component} from 'react';
import {actionview,actiondelete} from '../actions/loginactions';
import {connect} from 'react-redux';
import history from "./history";
import {Button, ListGroup, ListGroupItem, Table} from 'reactstrap';
import {Nav, Navbar, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";

class View extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email:'',
            username: '',
            password: '',
            del:'',
            modal: false,
            flag:false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }


    navigate()
    {
        history.push('/welcome');
    }

    componentWillMount(){
        this.props.log(this.state);
    }

    componentWillUpdate(){
        this.props.log(this.state);
    }


    render() {

        if (this.props.loggedin===200){
            this.navigate();
        }

        if(this.props.del===true&& this.state.flag===true){
            this.setState({flag:false});
            window.location.reload(true);
        }

        return (

            <div>

                <div className="bgImg">
                </div>
                <Navbar Navbar inverse collapseOnSelect>
                    <Navbar.Header>

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


                <div className="Welcome" >
                    Sensors
                </div>

                <div className="cardoutline" style={{backgroundColor:"black"}}>

                    <Table>

                        <thead>

                        <tr>

                            <th style={{color:"orange"}} >Sensor</th>
                            <th style={{color:"orange"}}>{this.state.sensor} Location</th>
                            <th style={{color:"orange"}}>{this.state.installed} Action</th>
                        </tr>
                        </thead>

                        <tbody>
                        { this.props.loggedin!==undefined&&this.props.loggedin.length!==0?
                            this.props.loggedin.map(row => {
                                return(
                                    <tr>
                                        <td key={row.devicetype} style={{color:"silver"}}>{row.devicetype}</td>
                                        <td key={row.location} style={{color:"silver"}}>{row.location}</td>
                                        <td key={row.location} style={{color:"silver"}}> <Button
                                            color="danger"
                                            type="button"
                                            onClick={() => {
                                                this.props.del({del:row.devicetype});
                                                this.setState({flag:true});
                                            }} >
                                            Delete
                                        </Button></td>

                                    </tr>
                                )
                            }):<div>Loading....</div>}
                        </tbody>
                    </Table>











                </div>


            </div>
        );
    }
}

const mapDispatchToProps =(dispatch)=> {
    return {
        log : (data) => dispatch(actionview(data)),
        del : (data) => dispatch(actiondelete(data))
    };
}
const mapStateToProps =(stores)=> {
    console.log('view:',stores.stores.view);
    return {
        loggedin : stores.stores.view,
        del : stores.stores.del,
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(View);
