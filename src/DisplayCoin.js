import React, { Component } from 'react'
import "./DisplayCoin.css"

class DisplayCoin extends Component {
  render() {
    let coinImage;
      this.props.headsTails ? coinImage = <img className="DisplayCoin" src={this.props.heads} /> : coinImage = <img className="DisplayCoin" src={this.props.tails} />;
    return (
      <div>
        <h1>Let's flip a coin!</h1>
        {coinImage}
      </div>
    )
  }
}

export default DisplayCoin