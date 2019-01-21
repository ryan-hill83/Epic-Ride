import React, {Component} from 'react';
import { connect } from 'react-redux'
import {CardElement, injectStripe} from 'react-stripe-elements';
import '../App.css'

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

 

  async submit(ev) {
  let {token} = await this.props.stripe.createToken({name: "Name"});
  let response = await fetch("/charge", {
    method: "POST",
    headers: {"Content-Type": "text/plain"},
    body: token.id,
    amount: this.props.totalPrice
  });

  if (response.ok) console.log("Purchase Complete!")
  }

  render() {
    return (
      <div className="checkout">
        <p>Credit Card Info:</p>
        <CardElement />
        <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    totalPrice: state.totalPrice
  }
}


export default connect(mapStateToProps)(injectStripe(CheckoutForm))
