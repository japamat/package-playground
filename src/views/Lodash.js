import React from 'react';
import { useEffect } from 'react';

const Lodash = props => {
  useEffect(() => {
    
  })

  return (
    <div className="centered-div">
      <p className="home-btn" onClick={() => props.changeView('home')}>{`< `}home</p>
      <h3>Lodash</h3>
      <p>Use lodash in the console</p>
      <div className="block-div">
        <code>
          {`>`} _.isArray([])
        </code>
        <code>
          {`>`} true
        </code>
      </div>
    </div>
  );
}

export default Lodash;
