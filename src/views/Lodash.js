import React from 'react';
import { useEffect } from 'react';
import { packageList } from '../app.data';

const Lodash = props => {
  useEffect(() => {
    
  })

  return (
    <div className="centered-div">
      <p className="home-btn" onClick={() => props.changeView('home')} >home</p>
      <h3>Lodash</h3>
      <p>Use lodash in the console</p>
      <code>
        {`>`} _.isArray([])
      </code>
      <code>
        {`>`} true
      </code>
    </div>
  );
}

export default Lodash;
