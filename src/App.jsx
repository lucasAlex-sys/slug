import Login from './Pages/Login';
import Feed from './Pages/Feed';
import Register from './Pages/Register'
import Profile from './Pages/Profile'
import React from 'react';
import { BrowserRouter as Redirect, Routes, Route, BrowserRouter,Navigate } from 'react-router-dom';
import Admin from './Pages/Admin';
import  {isAuthenticated}  from './Services/Auth';
import { useNavigate } from 'react-router-dom';

export const PrivateRoute = ({ children}) => {
  const auth = isAuthenticated();
  if (auth ) {
    return children
  }
  return <Navigate to="/" />
}
const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/feed' element={
                              <PrivateRoute>
                                  <Feed/>
                              </PrivateRoute>
          }/>
          <Route path='/register' element={
                                  <PrivateRoute>
                                    <Register />
                                  </PrivateRoute>
          }/>
          <Route path='/admin' element={
                               <PrivateRoute>
                                <Admin/>
                               </PrivateRoute> 
          } />
          <Route path='/profile/:matricula' element={
                                <PrivateRoute>
                                  <Profile />
                                </PrivateRoute>

          } />
        </Routes>    
    </BrowserRouter>
    
    
  )
}

export default App;
