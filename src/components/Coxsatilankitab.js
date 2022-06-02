import React from 'react'
import { Route, Routes } from 'react-router'
import '../css/libro.css'
import '../css/new-card.css'
import '../pages/96e2a8f2-0045-42df-9c31-b9e6b70737b2.jpg'
import BestSeller from './BestSeller/BestSeller'


export default function Coxsatilankitab() {
  return (
    <div style={{display: 'flex',flexDirection: 'row', justifyContent: 'center'}}>
        <Routes>
            <Route path='/' element={
            <>
            <BestSeller/>
            <BestSeller/>
            <BestSeller/>
            <BestSeller/>
            <BestSeller/>
            </>}>

            </Route>
        </Routes>

    </div>
  )
}
