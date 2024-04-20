import {Component} from 'react'
import './index.css'

class BrowseHistory extends Component {
  state = {
    searchInput: '',
    latestHistoryList: initialHistoryList,
    isTrue: false,
  }

  FillFunction = value => {
    const {latestHistoryList} = this.state
    const newHistoryList = latestHistoryList.filter(
      eachValue => eachValue.id !== value,
    )

    if (newHistoryList.length === 0) {
      this.setState({latestHistoryList: newHistoryList, isTrue: true})
    } else {
      this.setState({latestHistoryList: newHistoryList})
    }
  }

  changeFunction = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, newHistoryList} = this.state
    let {isTrue} = this.state
    const newHistoryList = latestHistoryList.filter(eachValue =>
      eachValue.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    if (newHistoryList.length === 0) {
      isTrue: true
    }

    return (
      <div className="main-container">
        <div className="top-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="search-holder">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="text"
              placeholder="Search history"
              className="input-search"
              onChange={this.changeFunction}
              value={searchInput}
            />
          </div>
        </div>
        <div className="content-holder">
          {!isTrue && (
            <ul className="inner-holder">
              {newHistoryList.map(eachObject => (
                <li
                  key={eachObject.id}
                  uniqueId={eachObject.id}
                  className="item-holder"
                >
                  <p className="time">{eachObject.timeAccessed}</p>
                  <div className="icon-holder">
                    <img
                      src={eachObject.logoUrl}
                      alt="domain-logo"
                      className="logo-element"
                    />
                    <div className="logo-content">
                      <p className="name">{eachObject.title}</p>
                      <p className="website">{eachObject.domainUrl}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="del-button"
                    onClick={FillFunction(eachObject.id)}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                      alt="delete"
                      className="del-icon"
                      data-testid="delete"
                    />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default BrowseHistory
