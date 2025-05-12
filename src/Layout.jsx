import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const Layout = () => {
  return (
    <div>
        <Navbar />
        <hr />
        <Outlet />
        <Footer className="min-h-screen" />
    </div>
  )
}

export default Layout