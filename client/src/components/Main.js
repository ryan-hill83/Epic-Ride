import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import Filter from './Filter'
import Content from './Content'
import Cart from './Cart'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allSnowboards: [],
      filteredSnowboards: []
    }
  }

  componentDidMount() {
    axios.get('http://epicrideserver.herokuapp.com/').then(res => {
      this.setState({allSnowboards: res.data, filteredSnowboards: res.data})})
  }

  allMountainHandler = () => {  
        let allMountain = this.state.allSnowboards.filter(function (el) {
          return el.terrain.includes("All Mountain")
        })
        this.setState({ 
          filteredSnowboards: allMountain
        })
      }
  
  freeStyleHandler = () => {  
        let freeStyle = this.state.allSnowboards.filter(function (el) {
          return el.terrain.includes("Freestyle")
        })
        this.setState({ 
          filteredSnowboards: freeStyle
        })
      }

  freeRideHandler = () => {  
        let freeRide = this.state.allSnowboards.filter(function (el) {
          return el.terrain.includes("Freeride")
        })
        this.setState({ 
          filteredSnowboards: freeRide
        })
      }

  
      render() {
        return (
          <div>
          <Filter allMountain = {this.allMountainHandler}
          freeStyle = {this.freeStyleHandler}
          freeRide = {this.freeRideHandler}
          />
          <div className="main_area">
          <div className="cart_div"><Cart cart= {this.props.cart} /> </div>
          <div className="content_div"><Content snowboards = {this.state.filteredSnowboards}
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

export default connect(mapStateToProps, mapDispatchToProps)(Main)
