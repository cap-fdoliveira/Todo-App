import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/Home';
import NewTask from './views/NewTask';

ReactDOM.render(
  <React.StrictMode>
    <NewTask />
  </React.StrictMode>,
  document.getElementById('root')
);

