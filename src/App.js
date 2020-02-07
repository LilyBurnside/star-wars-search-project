import React from 'react';
import {Route, Link} from 'react-router-dom';
import MainSearch from './components/MainSearch'
import SearchResults from './components/SearchResults'


export default class App extends React.Component  {
  
  state= {
    query: '',
    results: [],
    loading: false,
    touched: false,
    error: null
  }

  fetchSearchResults = (query) => {
    console.log('fetch called')
    return fetch(`https://swapi.co/api/people/?search=${query}`)
      .then(res => {
        if(res.ok) {
          return res.json();
        }
        return Promise.reject('Error handling search request')
      })
      .then(data => {
        console.log(data)
        this.setState({results: data.results, loading: false})
      })
      .catch(error => {
        console.log(error)
        this.setState({error: error.message})
      });
  }
  
  render(){
    return (
      <main className="App">
        <header>
        <Link to="/">
          <p>Everyone from...</p>
          <h1>Star Wars</h1>
        </Link>
        </header>
        <body>
        <Route path="/" render={(props) => {
          return (
            <MainSearch
              {...props}
              state={this.state}
              fetchResults = {(query) => this.fetchSearchResults(query)}
            />
          )}}
        />
        <Route path="/results" render={(props) => {
          return (
            <SearchResults
              state={this.state}
            />
          )}}
        />
        </body>
      </main>
    );
  }
}
