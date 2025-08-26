import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Services from '../Pages/Services/Services'
import OurWork from '../Pages/OurWork/OurWork'
import ContactUs from '../Pages/ContactUs/ContactUs'
import PageNotFound from '../Pages/PageNotFound/PageNotFound'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/our-work' element={<OurWork/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  )
}

export default Routing