import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Navbar/Nav'

const Layouts = () => {
  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
    </>

  )
}

export default Layouts
