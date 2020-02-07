import React from 'react'

export default class MainSearch extends React.Component {

  handleOnInputChange = (event) => {
    console.log('handle')
    const query = event.target.value
    this.setState({
      query,
      loading: true,
      touched: true
    })
    this.validateInput()
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
        event.preventDefault();
        let query = document.getElementById("input").value;
        this.props.fetchResults(query);
      }}>
        <label htmlFor="input">Search for anything Star Wars <p>(movies only)</p> related!</label>
        {this.props.state.touched && <p className="error">{this.validateInput()}</p>}
        <input 
          type="text" 
          id="input" 
          placeholder="e.g. Skywalker" 
          onChange={this.handleOnInputChange}></input>
        <button type="submit" className="input-button" onClick={() => this.validateInput()}>Search</button>
      </form>
    )
  }
}