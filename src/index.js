import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Brand from './brand.js';

ReactDOM.render(
  <React.StrictMode>
    <Brand />
    {/*
    вытаскивай то, с чем хочешь рабоать
      <App />
      <Brand />
    */}
  </React.StrictMode>,
  document.getElementById('root')
);