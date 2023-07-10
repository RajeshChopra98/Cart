import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Home from './components/Home';
import "./styles/app.scss"
import "./styles/colors.scss"
import Cart from './components/Cart';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={ <Home />} ></Route>
        <Route path='/cart' element={ <Cart />} ></Route>
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App;