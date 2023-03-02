import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem/index'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResult = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="destination-search-container">
          <h1 className="main-heading">Destination Search</h1>
          <div className="search-container">
            <input
              type="search"
              placeholder="Search"
              className="search-input"
              onChange={this.onSearchInput}
              value={searchInput}
            />
            <img
              className="search-icon"
              alt="Search Icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            />
          </div>
          <ul className="items-container">
            {searchResult.map(eachItem => {
              const {id} = eachItem
              return <DestinationItem destinationItem={eachItem} key={id} />
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
