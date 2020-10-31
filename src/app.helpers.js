import Home from './views/Home';

import axios from 'axios';
import cheerio from 'cheerio';
import _ from 'lodash';
import faker from 'faker';
import Lodash from './views/Lodash';

const proxy = `https://cors-anywhere.herokuapp.com`;

const _interopRequireDefault = (obj) => {
  return obj && obj.__esModule ? obj : {default: obj};
}

const expectObj = _interopRequireDefault(require('expect'));
const expect = expectObj.default;


export const pickView = (view, changeView) => {
  switch(view) {
    case 'lodash':
      return <Lodash changeView={changeView} />;
    default:
      return <Home changeView={changeView} />;
  };
};

export const addPackagesToWindow = () => {
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
};