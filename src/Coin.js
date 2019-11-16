import React, { Component } from 'react'
import "./Coin.css"

class Coin extends Component {
  render() {
    return (
      <div>
        <div className="Coin">
          <img src={this.props.data.imgSrc} alt={this.props.data.side}/>
        </div>
      </div>
    )
  }
}

export default Coin