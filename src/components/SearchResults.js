import React from 'react';
import Result from './Result'

import './SearchResults.css'


export default class SearchResults extends React.Component {
  render(){
    const resultList = this.props.state.results.map((person, index) => <Result person={person} key={index}/>)
    console.log(resultList);
    return(
      <div className="results">
        {this.props.state.loading ? <h2>Loading...</h2> : <div>{resultList}</div>}
      </div>
    )
  }
}