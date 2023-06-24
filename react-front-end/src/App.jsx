import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import {  BrowserRouter,Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CheckoutPage from './pages/CheckoutPage';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/login" element={<HomePage />} />
        <Route path="/checkout" component={CheckoutPage} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
