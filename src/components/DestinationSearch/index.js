// Write your code here

import './index.css'
import {Component} from 'react'
import Destinationitem from '../DestinationItem/index'

class DestinationSearch extends Component {
  state = {input: ''}

  updatestate = event => {
    this.setState({input: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {input} = this.state
    // eslint-disable-next-line
    const filteredinput = destinationsList.filter(each =>
      each.name.toLowerCase().includes(input.toLowerCase()),
    )

    return (
      <div className="bg-div">
        <div className="search-div">
          <h1>Destination Search</h1>
          <div className="search-input-div">
            <input
              onChange={this.updatestate}
              placeholder="search"
              className="input"
              type="search"
            />
            <img
              className="icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
              alt="search icon"
            />
          </div>

          <ul className="listitems">
            {filteredinput.map(a => (
              <Destinationitem item={a} key={a.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
