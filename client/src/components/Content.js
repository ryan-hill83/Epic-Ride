import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'

export class Content extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectedOption: 0
    }
    
  }

  handleOptionChange = e => {
    console.log(e.target.value)
    this.setState({
      selectedOption: e.target.value
    })
  }

  
  render() {
    let snowboardItems = this.props.snowboards.map((board,index) => {
      return <div><form><li key={index} className="list_item"><div className="content_div1">
      <h3>{board.name}</h3>
      <h3>$ {board.price}</h3>
      <h4>{board.terrain}</h4> 
      <h4>Shape: {board.shape}</h4>
      <p>Board Length:</p>
      <select value={this.state.value} onChange={this.handleOptionChange}>
      <option value="">Choose Length</option>
      {board.length.map((item, index) => 
            <option value={item} key={index}>{item}</option>
      )}
      </select>
      </div>
      <div className="content_div2">
      <button className="button" type="button" onClick={() => this.props.addToCart({board}, this.state.selectedOption)}>Add to Cart</button>
      <img className="image" src={board.imageurl} />
      </div>
      </li>
      </form>
      </div>
      
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
      addToCart: (item, length) => {
        dispatch({type: "ADD", payload: item, length: length })
    },
    removeFromCart: (item) => {
      dispatch({type: "REMOVE", payload: item})
    }
  }

}



export default connect(mapStateToProps, mapDispatchToProps)(Content)

{/* <li key={index} className="length_item">
          <input type="radio" name="length" id={index} value={item} onChange={this.handleOptionChange} /> {item}
          </li> */}