import React, { Component } from 'react'
import { randomSide } from "./helpers"
import Coin from "./Coin"
import "./CoinFlipper.css"

class CoinFlipper extends Component {
  static defaultProps = {
    coins: [
      {side: "heads", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg" },
      {side: "tails", imgSrc: "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg" }
    ]
  }
  constructor(props) {
    super(props)
    this.state = {
      totalFlips: 0,
      headFlips: 0,
      tailFlips: 0,
      coinFace: null
    }

    this.handleClick = this.handleClick.bind(this)
  }

  flipCoin() {
    let newCoin = randomSide(this.props.coins)
    this.setState(currentState => {
      return {
        coinFace: newCoin,
        totalFlips: currentState.totalFlips + 1,
        headFlips: currentState.headFlips + (newCoin.side === "heads" ? 1: 0),
        tailFlips: currentState.tailFlips + (newCoin.side === "tails" ? 1: 0)
      }
    });
  }

  handleClick(e) {
    this.flipCoin();
  }

  render() {
    return (
      <div className="CoinFlipper">
        <h2>Let's flip a coin!</h2>
        {this.state.coinFace && <Coin data={this.state.coinFace} />}
        <p>Out of {this.state.totalFlips}, there have been {this.state.headFlips}{" "}
        heads and {this.state.tailFlips} tails.</p>
        <button onClick={this.handleClick}>Flip me!</button>
     </div>
    )
  }
}

export default CoinFlipper