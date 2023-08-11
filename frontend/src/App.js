import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, Signup, Home, Pack, Payment } from './Components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Pack />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />        
        <Route exact path='/payment' element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
