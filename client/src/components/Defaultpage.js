import React from 'react'
import Aboutus from './Aboutus'
import Carouselmain from './Carouselmain'
import Navbar from './Navbar'
import Newlogin from './Newlogin/Newlogin'
import Newregister from './Newregister/Newregister'
import { Routes,Route } from 'react-router-dom'
import Coxoxunan from './Coxoxunan'
import Footer from './Footer'
import BestBooks from './BestBooks/BestBooks'

import Coxsatilankitab from './Coxsatilankitab'

export default function Defaultpage() {
  return (
    <>
           <Routes>
        <Route path='/' element={
          <>
             <Navbar />
            <Carouselmain />
            <Aboutus />
            <Coxoxunan />
            <BestBooks />
            <Coxsatilankitab />
            <Footer />
          </>} ></Route>
      
          <Route path="/login" element={<Newlogin />} />
          <Route path="/register" element={<Newregister />} />
      </Routes>
    </>
  )
}
