import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'

export class Content extends Component {

  constructor(props){
    super(props)
  }

  
  render() {
    let snowboardItems = this.props.snowboards.map((board,index) => {
      return <li key={index} className="list_item"><div className="content_div1">
      <h3>{board.name}</h3>
      <h3>$ {board.price}</h3>
      <h4>{board.terrain}</h4> 
      <h4>Shape: {board.shape}</h4>
      <p>Board Length:</p>
      {board.length.map((item, index) => <li key={index} className="length_item">
          <input type="radio" name="length" id={index} value={item} /> {item}
          </li>
      )}
      </div>
      <div className="content_div2">
      <button className="button" type="button" onClick={() => this.props.addToCart({board})}>Add to Cart</button>
      <img className="image" src={board.imageurl} />
      </div>
      </li>
      
    })

    return (
      <div className="snowboard_container">
      {snowboardItems}
      </div>
    )
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



export default connect(mapStateToProps, mapDispatchToProps)(Content)