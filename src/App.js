import { useEffect } from 'react';
import _ from 'lodash';
import faker from 'faker';
import axios from 'axios';
import cheerio from 'cheerio';
import { packageList } from './app.data';

const proxy = `https://cors-anywhere.herokuapp.com`;

function App() {
  useEffect(() => {
    if (!window._) window._ = _;
    if (!window.faker) window.faker = faker;
    if (!window.cheerio) window.cheerio = cheerio;
    if (!window.axios) {
      window.axios = axios;
      window.axios.interceptors.request.use(config => ({
        ...config,
        url: `${proxy}/${config.url}`
      }), err => {
        return Promise.reject(err)
      });
    }
  })

  return (
    <div class="centered-div">
      <h3>Welcome to package-playground</h3>
      <p>you can play around with the following libraries right in the dev console</p>
      <table>

        <thead>
          <th>package</th>
          <th>variable name</th>
        </thead>
        { packageList.map(pkg => (
          <tr>
            <td>{pkg.name}</td>
            <td>{pkg.variable}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
