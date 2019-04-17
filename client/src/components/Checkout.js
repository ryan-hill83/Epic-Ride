import React, { Component } from 'react'
import { connect } from 'react-redux'
import cart from './images/cart.png'
import CheckoutArea from './CheckoutArea'
import Stripe from './Stripe'

class Checkout extends Component {
  render() {
    let cartItems = this.props.cart.map((board,index) => {
      return  <div>
              <li key={index} className="cart_item_checkout">
             <h3>{board.content.name}</h3>
             <img className="cart_image" src={board.content.imageurl} />
             <button type="button" className="button" onClick={() => this.props.removeFromCart({board})}>Remove</button>
             <p className="price_in_cart">$ {board.content.price}</p>
             </li>
             </div>
    })

   return(
      <div><p className="confirmation">Please Confirm your Purchase!</p>
      <div className="checkout_box">
      <img className="cart" src={cart} />
      <button type="button" className="button" onClick={() => this.props.checkOut()}>Purchase</button>
      <Stripe value={this.props.totalPrice} />
      <li className="margin_top">Quantity: {this.props.cartCounter}</li>
      <li className="price_at_checkout">Total: $ {this.props.totalPrice}</li>
      <li>{cartItems}</li>
      </div>
      </div>)
  
    }
    
  }

  const mapStateToProps = (state) => {
    return {
      cart: state.cart,
      cartCounter: state.cartCounter,
      totalPrice: state.totalPrice
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
    checkOut: () => {
        dispatch({type: "CHECKOUT"})
    },
    removeFromCart: (item) => {
      dispatch({type: "REMOVE", payload: item})
    }
  }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
