import React from 'react';
import { useEffect } from 'react';
import { packageList } from '../app.data';

const Home = props => {
  useEffect(() => {
    
  })

  return (
    <div className="centered-div">
      <h3>Welcome to package-playground</h3>
      <p>you can play around with the following libraries right in the dev console</p>
      <table>
        <thead>
          <tr>
            <th>package</th>
            <th>variable name</th>
          </tr>
        </thead>
        <tbody>
          { packageList.map(pkg => (
            <tr
              key={pkg.name}
              onClick={() => props.changeView(pkg.name)}
              className="tr-line"
            >
              <td>{pkg.name}</td>
              <td>{pkg.variable}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
