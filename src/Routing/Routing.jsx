import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Services from '../Components/Services/Services'
import OurWork from '../Components/OurWork/OurWork'
import ContactUs from '../Components/ContactUs/ContactUs'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/our-work' element={<OurWork/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
    </Routes>
  )
}

export default Routing