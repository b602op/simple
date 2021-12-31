import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('app')

  console.log(container, ' container')

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    container
  );
})


