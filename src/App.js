import { useEffect } from 'react';
import _ from 'lodash';
import faker from 'faker';
import axios from 'axios';
import cheerio from 'cheerio';
import { packageList } from './app.data';

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

const expectObj = _interopRequireDefault(require('expect'));
const expect = expectObj.default;

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
    };
    if (!window.expect) window.expect = expect;
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
            <tr key={pkg.name}>
              <td>{pkg.name}</td>
              <td>{pkg.variable}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
