import React, { Component } from 'react'
import { connect } from 'react-redux'
import CheckoutForm from './CheckoutForm'
import {Elements, StripeProvider} from 'react-stripe-elements'
import '../App.css'

export class CheckoutArea extends Component {

    constructor(props){
        super(props)
      }

      render() {
   
        if(this.props.showCheckout == true){
            return( 
            
                <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
                <div className="example">
                <Elements>
                <CheckoutForm />
                </Elements>
                </div>
                </StripeProvider>)
        }
          else return <div></div> 
      }
    
}

const mapStateToProps = (state) => {
    return {
      cart: state.cart,
      showCheckout: state.showCheckout
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

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutArea)