import React from 'react';
import { AppHeader} from './components/header'
import { AppTypeSort} from './components/type-of-sorting'
import { AppFooter} from './components/footer'
import './App.css';

function App() {
  return (
    <div>
      <AppHeader />
      <AppTypeSort />
      <AppFooter />
    </div>
  );
}

export default App;
