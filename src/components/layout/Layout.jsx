import React from 'react'
import Navbar from '../navbar/Navbar'
import Home from '../home/Home'
import Uservices from '../uservices/Uservices'

import Footer from '../footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import Slideer from '../ubaid/Slideer'



const Layout = () => {
  const location = useLocation()
  return (
    <div className='bg-green-700 w-auto h-auto overflow-hidden' >
      <Navbar />
      {location.pathname === '/' && (
        <>
          <Home />
          <Slideer />
          <Uservices />
        </>
      )}
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
