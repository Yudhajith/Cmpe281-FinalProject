import React, {PropTypes, Component} from 'react';


import {greatPlaceStyle} from './my_great_place_styles.js';

export default class MyGreatPlace extends Component {
  static propTypes = {
    
  };

  static defaultProps = {};



  render() {
    return (
       <div style={greatPlaceStyle}>
          {this.props.text}
       </div>
    );
  }
}
