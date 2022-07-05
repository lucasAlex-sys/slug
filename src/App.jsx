import Login from './Pages/Login';
import Feed from './Pages/Feed';
import Register from './Pages/Register'
import Profile from './Pages/Profile'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Admin from './Pages/Admin';


function App ()  {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/feed' element={<Feed/>} />
          <Route path='/feed/search' element={<Feed />} />
          <Route path='/register' element={<Register />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/profile/:matricula' element={<Profile />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
