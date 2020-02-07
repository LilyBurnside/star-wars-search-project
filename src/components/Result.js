import React from 'react';

import './Result.css'

function Result(props) {
  console.log(props.name)
  return(
    <div className="person">
      <h2>{props.person.name}</h2>
    </div>
  )
}

export default Result;