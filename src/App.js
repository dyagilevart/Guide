import React from 'react';
import {
  AppHeader, 
  AppTypeSort, 
  AppFooter} 
from './components'

import './css/App.css';


export default function App() {
  return (
    <div>
      <AppHeader />
      <AppTypeSort />
      {/* Список иконок с марками */}
      <AppFooter />
    </div>
  );
}