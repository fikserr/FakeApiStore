import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Admin from './layout/admin'
import Login from './page/login'
import Dashboardd from './page/dashboard'
import Products from './page/products'


function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path='/' element={<Admin/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='dashboard' element={<Dashboardd/>}/>
            <Route path='products' element={<Products/>}/>

          </Routes>
      </Router>
    </div>
  )
}

export default App