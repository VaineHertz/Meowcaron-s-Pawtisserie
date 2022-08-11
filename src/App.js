import React, { useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import CatchGame from './components/CatchGame'
import Menu from './components/Menu'
import Contact from './components/Contact'
import RefreshToken from './components/RefreshToken'
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="/game" element={<CatchGame />}></Route>
      <Route path="/order" element={<Menu />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/refresh-token" element={<RefreshToken/>}></Route>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
}

export default App;
