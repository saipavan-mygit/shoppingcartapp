import React from 'react';

import './App.css';
import Cart  from './components/Cart';
import {Routes,Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Cart/>}/>
      </Routes>
    </>
  );
}

export default App;
