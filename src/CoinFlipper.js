import React, { Component } from 'react'
import DisplayCoin from "./DisplayCoin"
import "./CoinFlipper.css"

class CoinFlipper extends Component {
  static defaultProps = {
    coin: [
      "heads",
      "tails"
    ]
  }
  constructor(props) {
    super(props)
    this.state = {
      totalFlips: 0,
      headsCount: 0,
      tailsCount: 0,
      heads: undefined
    }

    this.handleClicks = this.handleClicks.bind(this)
  }

  countFlips(currentState) {
    return { totalFlips: currentState.totalFlips + 1 }
  }

  pickHeadTails(currentState) {
    let index = Math.floor(Math.random() * this.props.coin.length)
    let coin = this.props.coin;
    if (coin[index] === "heads") {
      return { headsCount: currentState.headsCount + 1 , heads: true }
    } else {
      return { tailsCount: currentState.tailsCount + 1, heads: false }
    }
  }

  startNewFlip() {
    this.setState(this.countFlips)
  }

  startHeadTails() {
    this.setState(this.pickHeadTails)
  }

  handleClicks(event) {
    this.startNewFlip(event)
    this.startHeadTails(event)
  }

  render() {
    console.log(this.state.headsCount)
    console.log(this.state.tailsCount)
    return (
      <div className="CoinFlipper">
        <DisplayCoin 
          heads={this.state.heads}
          />
        <button onClick={this.handleClicks}>Flip Coin</button>
        <div>
          <h3>Out of {this.state.totalFlips} flips, there have been {this.state.headsCount} heads and {this.state.tailsCount} tails. </h3>
        </div>
     </div>

      // EXAMPLE
      // onClick={(event) => { func1(event); func2();}}

    )
  }
}

export default CoinFlipper