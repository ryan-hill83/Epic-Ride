import React, { Component } from 'react'
import { connect } from 'react-redux'
import cart from './images/cart.png'
import Stripe from './Stripe'

class Checkout extends Component {
  render() {
    let cartItems = this.props.cart.map((board,index) => {
      return  <div key={`board${index}`}>
              <li className="cart_item_checkout">
             <h3>{board.content.name}</h3>
             <img className="cart_image" src={board.content.imageurl} />
             <button type="button" className="button" onClick={() => this.props.removeFromCart({board})}>Remove</button>
             <p className="price_in_cart">Price: ${board.content.price}</p>
             <p className="length_in_cart">Length: {board.length}cm</p>
             </li>
             </div>
    })

   return(
      <div>
      <div className="checkout_box">
      <img className="cart" src={cart} />
      <Stripe value={this.props.totalPrice} />
      <li className="margin_top">Quantity: {this.props.cartCounter}</li>
      <li className="price_at_checkout">Total: $ {this.props.totalPrice}</li>
      {cartItems}
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
