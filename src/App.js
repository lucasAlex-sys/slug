import logo from './logo.svg';
import {useState} from 'react';
import cefet from './logoCEFETMG.svg';
import Index from './Pages/Index.js';
import Feed from './Pages/Feed.js';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './Feed.css';

const App = () => {
      return(
        <Router>
          <Routes>
              <Route path='/' element={<Index />} />
              <Route path='/feed' element={<Feed />} />
          </Routes>
      </Router>
      )
}

export default App;
