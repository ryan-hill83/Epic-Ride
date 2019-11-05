import React, { Component } from 'react';
import '../App.css'

export class Filter extends Component {

  render() {
    return(
    <div className="nav_bar">
    <div><button className="nav_buttons" onClick={this.props.allMountain}>All Mountain Boards</button></div>
    <div><button className="nav_buttons" onClick={this.props.freeStyle}>Freestyle Boards</button></div>
    <div><button className="nav_buttons" onClick={this.props.freeRide}>Freeride Boards</button></div>
    </div>
    )
  }

}


export default Filter