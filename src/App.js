import { useEffect, useState } from 'react';
import _ from 'lodash';
import faker from 'faker';
import axios from 'axios';
import cheerio from 'cheerio';
import { packageList } from './app.data';

import {
  addPackagesToWindow,
  pickView,
} from './app.helpers';


function App() {
  const [view, changeView] = useState('home');

  useEffect(() => {
    addPackagesToWindow()
  })

  return (
    <div className="centered-div">
      { pickView(view, changeView) }
    </div>
  );
}

export default App;
