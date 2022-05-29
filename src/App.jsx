import Login from './Pages/Login';
import Feed from './Pages/Feed';
import Register from './Pages/Register'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App;
