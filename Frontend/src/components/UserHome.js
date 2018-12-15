import React, { Component } from 'react';
import history from "./history";
import '../App.css';
import {Form, FormGroup, Label, Input,Table} from 'reactstrap';
import {connect} from "react-redux";
import {actiontemp,actionhumid,actiontable} from "../actions/loginactions";



class UserHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
         street_name:"Street 1",
         block_id:1,
         value:"",
         device_type:"Temperature",
         table_flag:false,
         Humidity_flag:false,
         temperature_flag:false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
    }
    handleChange(event){
        this.setState({device_type:event.target.value});
    }
    handleChange1(event){
        this.setState({street_name:event.target.value});
    }

    render() {
        return (
            <div>
                <div className="Topbar-userhome"/>
                <p className="Topbar-userhome-title">Welcome to IOT Management page</p>
                <div className="Topbar-sidebar">
                    <div className="text-center">
                        <img src={require("../images/200.png")} alt="281 App" className="logo1" />
                        <p color="grey">_________________________</p>
                        <button className="Home-My-City">My city</button>
                        <br/>
                        <button className="Home-DashBoard" onClick={()=>{history.push('/dashboard');}}>DashBoard</button>
                        <br/>
                        <button className="Home-IOT-Management" onClick={()=>{history.push('/post');}}>IOT Management</button>
                        <br/>
                        <button className="Home-Energy-Usage" onClick={()=>{history.push('/post');}}>Energy Usage</button>
                        <br/>
                        <button className="Home-Energy-Analysis" onClick={()=>{history.push('/');}}>Log Out</button>
                        <br/>
                    </div>
                </div>
                <p className="Device-details">Please enter device details</p>
                <div className="Home-Device-form">
                <Form>
                    <FormGroup>
                        <Label className="Street_Name">Street_Name</Label>
                        <Input type="select" onChange={this.handleChange1}>
                            <option value="The Alameda">The Alameda</option>
                            <option value="First & Santa clara">First & Santa clara</option>
                            <option value="The Alameda & Race">The Alameda & Race</option>
                            <option value="All">All</option>
                        </Input>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <Label className="Street_Name">Sensor Type</Label>

                        <Input type="select" onChange={this.handleChange}>
                            <option value="Temperature">Temperature</option>
                            <option value="Humidity">Humidity</option>
                            <option value="Light">Light</option>
                            <option value="All">All</option>
                        </Input>
                    </FormGroup>
                </Form>
                </div>

                <button className="Device-search-btn" onClick={() => {
                    this.setState({table_flag:true});
                    this.props.table_data(this.state);
                }}>Search Device</button>
                {(() => {
                   if(this.props.tableData!==null && this.props.tableData!==undefined){
                       return(
                           <div className="Device-info-table">
                           <Table dark>
                               <thead>
                               <tr>
                                   <th>Device Type</th>
                                   <th>Device Id</th>
                                   <th>Location</th>
                                   <th>Installed On</th>
                                   <th>Maintanance</th>
                                   <th>Device Status</th>
                               </tr>
                               </thead>
                               <tbody>
                               {this.props.tableData.map(row => {
                                   return(
                                       <tr>
                                           <td key={row.devicetype}>{row.devicetype}</td>
                                           <td key={row.deviceid}>{row.deviceid}</td>
                                           <td key={row.location}>{row.location}</td>
                                           <td key={row.installed}>{row.installed}</td>
                                           <td key={row.maintanance}>{row.maintanance}</td>
                                           <td key={row.devicehealth}>{row.devicehealth}</td>
                                       </tr>
                                   )
                               })
                               };
                               </tbody>
                           </Table>
                       </div>);
                   }
                    }
                )()}

                <button className="Device-temperature-btn" onClick={() => {
                    this.setState({temperature_flag:true});
                    this.props.Temp(this.state);
                }}>Get Latest Temperature</button>

                {(() => {
                    if(this.props.temp!==null && this.props.temp!==undefined){
                        return(<div className="Device-info-temperature">
                                <img className="temperature-data-logo" src={require("../images/temperature.JPG")}
                                     alt="281.App"/>
                                <p className="temperature-data">{this.props.temp}</p>
                            </div>
                        );
                    }
                    }
                )()}

                <button className="Device-Humidity-btn" onClick={() => {
                    this.setState({Humidity_flag:true});
                    this.props.Humid(this.state);
                }}>Get Latest Humidity</button>

                {(() => {
                        if(this.props.humid!==null && this.props.humid!==undefined){
                            return(<div className="Device-info-Humidity">
                               <img className="Humidity-data-logo" src={require("../images/if_weather_44_2682807.png")}
                               alt="281.App"/>
                               <p className="Humidity-data">{this.props.humid}</p>
                             </div>
                            );
                        }
                    }
                )()}
            </div>
        );
    }
}
const mapDispatchToProps =(dispatch)=> {
    return {
        Temp : (data) => dispatch(actiontemp(data)),
        Humid : (data) => dispatch(actionhumid(data)),
        table_data: (data) => dispatch(actiontable(data))
    };
}

const mapStateToProps =(stores)=> {

    return {
        temp: stores.stores.tempval,
        humid:stores.stores.humival,
        tableData:stores.stores.tableData
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);