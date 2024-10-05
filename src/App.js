// App.js
import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Hotels from './components/Hotels';

function App() {
  return (
    <>
          <Header />

    <Home/>
      <Routes>
        <Route  path="/" element={Home} />
        <Route path="/hotels" element={Hotels} />
      </Routes>
    
    </>
  );
}

export default App;
