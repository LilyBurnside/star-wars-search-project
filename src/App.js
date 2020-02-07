import React from 'react';
import {Route, Link} from 'react-router-dom';
import MainSearch from './components/MainSearch'


export default class App extends React.Component  {
  
  state= {
    query: '',
    results: {},
    loading: false,
    touched: false,
    error: null
  }

  fetchSearchResults = (query) => {
    fetch(`https://swapi.co/api/people/?search=${query}`)
      .then(res => {
        if(res.ok) {
          return res.json();
        }
        return Promise.reject('Error handling search request')
      })
      .then(results => this.setState({results: results}))
      .catch(error => {
        this.setState({error: error.message})
      });
  }
  
  render(){
    return (
      <main className="App">
        <Link to="/">
          <p>Everything from...</p><h1>Star Wars</h1>
        </Link>
        <Route exact path="/" render={(props) => {
          return (
            <MainSearch
              state={this.state}
              fetchResults = {(query) => this.fetchSearchResults(query)}
            />
          )}}
        />
      </main>
    );
  }
}
