import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Content from './components/Content'
import Cart from './components/Cart'

const JsonFile = require('./snowboards.json')


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      snowboards: []
    }
  }

  componentDidMount() {
    this.setState({snowboards: JsonFile.snowboards})
  }

  allMountainHandler = () => {  
        let allMountain = JsonFile.snowboards.filter(function (el) {
          return el.terrain.includes("All Mountain")
        })
        this.setState({
          snowboards: allMountain
        })
      }
  
  freeStyleHandler = () => {  
        let allMountain = JsonFile.snowboards.filter(function (el) {
          return el.terrain.includes("Freestyle")
        })
        console.log(allMountain)
        this.setState({
          snowboards: allMountain
        })
      }

  freeRideHandler = () => {  
        let allMountain = JsonFile.snowboards.filter(function (el) {
          return el.terrain.includes("Freeride")
        })
        this.setState({
          snowboards: allMountain
        })
      }
  
 
  render() {
    return (
      <div>
      <Header/>
      <Nav allMountain = {this.allMountainHandler}
      freeStyle = {this.freeStyleHandler}
      freeRide = {this.freeRideHandler}
      />
      <div className="main_area">
      <div className="cart_div"><Cart cart= {this.props.cart} /></div>
      <div className="content_div"><Content snowboards = {this.state.snowboards}
      addToCart = {this.props.addToCart}
      />
      </div>
      </div>
      </div>
      
    );
  }
}


const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => {
      dispatch({type: "ADD", payload: item })
  },
  removeFromCart: (item) => {
    dispatch({type: "REMOVE", payload: item})
  }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
