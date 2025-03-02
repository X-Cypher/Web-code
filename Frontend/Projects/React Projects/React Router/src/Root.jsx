import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router'

// Structure of Each page = Header, Content, Footer
// ye aise isliye bnaya because we wanted to keep the header and footer of both pages same
function Root() {
  return (
    <>
        <Header />
        <Outlet /> {/* outlet wali jagah override ho jayegi jo element apan pass krenge uss se*/}
        <Footer />
    </>
  )
}

export default Root