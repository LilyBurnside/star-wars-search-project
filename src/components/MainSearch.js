import React from 'react'

import './MainSearch.css'

export default class MainSearch extends React.Component {

  handleSubmit = (event) => {
    console.log('handle')
    event.preventDefault();
    let query = document.getElementById("input").value;
    this.setState({
      loading: true,
      touched: true
    })
    this.props.fetchResults(query).then(() => this.props.history.push('/results'));
    this.validateInput();
  }

  validateInput = () => {
    const input = this.props.state.query.trim();
    if (input.length <= 0) {
      return 'Please define search';
    }
  }

  render(){
    return(
      <form className="search-form" onSubmit={event => {
        this.handleSubmit(event)
      }}>
        <label htmlFor="input">Search for anyone in Star Wars!</label>
        {this.props.state.touched && <p className="error">{this.validateInput()}</p>}
        <input 
          type="text" 
          id="input" 
          placeholder="e.g. Skywalker"></input>
          <button type="submit" className="input-button" onClick={() => this.validateInput()}>Search</button>
      </form>
    )
  }
}