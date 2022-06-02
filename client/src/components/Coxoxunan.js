import React from 'react'
import { Route, Routes } from 'react-router'
import '../css/libro.css'
import '../css/new-card.css'

import '../pages/96e2a8f2-0045-42df-9c31-b9e6b70737b2.jpg'
import BookCard from './Books/BookCard'
export default function Coxoxunan() {
  return (
    < div style={{ marginLeft: '38px',marginRight: '38px'}}>
         <div className="section-padding">
            <h2 className="title nav-link-style text-capitalize d-flex fs-1 justify-content-center">çox oxunanlar</h2>
            <span className="nav-link-style d-flex fs-4 fw-bold justify-content-center">
                Ən çox oxunulan və bəyənilən PDF-lər
            </span>
        </div>
        <div className="cardsdisplay" >
        <Routes>
            <Route path='/' element={
            <>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            </>}>

            </Route>
        </Routes>
        </div>
   
    </div>
  )
}
