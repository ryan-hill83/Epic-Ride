import React, { Component } from 'react'
import { connect } from 'react-redux'
import cart from './images/cart.png'

class Checkout extends Component {
  render() {
    return (
      <div className="checkout_box">
        <img className="cart" src={cart} />
      </div>
      
    );
  }
}

export default Checkout;
