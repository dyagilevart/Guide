import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Brand from './brand.js';

import styled, { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
   /*font-family: "Roboto","Helvetica","Arial",sans-serif;  'Segoe UI';*/
  font-family: 'Montserrat', sans-serif;

}
body {
  min-height: 100vh;
  background: #f3f3f3;
}

`

ReactDOM.render(
  <>
    <Global />
    <App />
    {/*
    вытаскивай то, с чем хочешь рабоать
      <App />
      <Brand />
    */}
  </>,
  document.getElementById('root')
);