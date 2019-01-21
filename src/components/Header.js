import React, { Component } from 'react';
import '../App.css'
import snow from './images/snow.jpeg'

export class Header extends Component {

    render() {
      return (
        <div className="header">
        <div className="header_text"><img className="logo" src={snow} /><p className="epic_ride">Epic Ride</p> <p className="snowboard_supply">Snowboard Supply</p></div>
        </div>
  
      )
  }

  }
  
  export default Header