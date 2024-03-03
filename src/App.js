import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './app/home';
import Contact from './app/contact';
import Layout from './app/layout';
import Front from './app/front';
import axios from 'axios';

function App() {
  

  return (
    <div className="App">
     

      <header className="App-header">
        
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path='/' element={<Front />} />
            <Route path='home' element={<Home />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
      </header>
    </div>
  );
}

export default App;
