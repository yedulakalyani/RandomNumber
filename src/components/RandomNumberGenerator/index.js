// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNum: 0,
  }

  onGetRandomNumber = () => {
    const num = Math.ceil(Math.random() * 100)
    this.setState({randomNum: num})
  }

  render() {
    const {randomNum} = this.state

    return (
      <div className="bg-container">
        <div className="bg">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            onClick={this.onGetRandomNumber}
            className="button"
          >
            Generate
          </button>
          <p className="para">{randomNum}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
