import { useEffect, useState } from 'react';

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
