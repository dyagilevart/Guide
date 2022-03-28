import React from 'react';
import styled from 'styled-components'

import {AppHeader} from './components/header'
import {AppTypeSort} from './components/type-of-sorting'
import {AppFooter} from './components/footer'
import BasicGrid from './components/grid'


export default function App() {
  return (
    <>
      <AppHeader />
      <AppTypeSort />
      {/* Список иконок с марками */}
      <BasicGrid />
      <AppFooter />
    </>
  );
}
//  background-color: #f3f3f3;