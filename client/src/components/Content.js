import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'

export class Content extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  handleOptionChange = (e, board) => {
    this.setState({
      [board]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  
  render() {
    let snowboardItems = this.props.snowboards.map((board,index) => {
      return <div><form onSubmit={this.handleSubmit}><li key={`board${index}`} className="list_item"><div className="content_div1">
      <h3>{board.name}</h3>
      <h3>$ {board.price}</h3>
      <h4>{board.terrain}</h4> 
      <h4>Shape: {board.shape}</h4>
      <p>Board Length:</p>    
      <select 
      defaultValue="Choose Length"
      value={this.state.selectedOption} 
      onChange={e => this.handleOptionChange(e, board.name)} 
      required>
      <option disabled>Choose Length</option>
      {board.length.map((length, index) =>     
            <option value={length} key={`boardLength${index}`}>{length}</option>     
      )}
      </select> cm
      </div>
      <div className="content_div2">
      <button className="content_button" 
      type="submit" 
      onClick={() => this.state[board.name] && this.props.addToCart({board}, this.state[board.name])}>
      Add to Cart
      </button>
      <img className="image" 
      src={board.imageurl} 
      alt={`snowboard ${board.name}`}/>
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