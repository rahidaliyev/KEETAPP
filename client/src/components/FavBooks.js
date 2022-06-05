import React, { useState,useEffect} from 'react'
import store from '../redux/store'
import Footer from './Footer'
import Navbar from './Navbar'
import BestSeller from './BestSeller/BestSeller'
export default function FavBooks() {
    const [card,setCard]=useState([])
    useEffect(()=>{
        const favourite=store.getState()
        setCard(favourite.favcard)
    })
    console.log(card)
    return (
    <div>
       <Navbar/>
       {    card.map((el)=>{return <BestSeller {...el}/>})}
       <Footer/> 
    </div>
  )
}
