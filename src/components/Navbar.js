import React from 'react'
import '../css/new-card.css'
import '../css/libro.css'
import '../images/logoofweb.png'
import { Route,Routes } from 'react-router-dom'
import Newlogin from './Newlogin/Newlogin'
import Newregister from './Newregister/Newregister'
import { Link } from 'react-router-dom'
import { IoSearch } from 'react-icons/io5'
import { CgProfile } from 'react-icons/cg'
import { FcLikePlaceholder } from 'react-icons/fc'
import Form from 'react-bootstrap/Form'
const style={ height: '80px', marginTop: '1rem' }


export default function Navbar() {

    return (
        <div>
            <div className="container">
                <div className="navbar-container">
                    <header className="navbar-wrapper d-flex justify-content-between align-items-center p-4 px-0">
                        <div className="navbar-logo">
                            <div className="logo-wrapper">
                                <a href="./index.html"
                                    className="logo-font-style d-flex align-items-center text-decoration-none text-dark">
                                    {/* icon color change! */}
                                    <div className="logo" alt="Libro"><img src={require("../images/logoofweb.png")} style={style} /> </div>
                                </a>
                            </div>
                        </div>
                        <Form action="" className="search-form">
                            <input type="search" name="" placeholder="axtarış..." id="search-box"></input>
                            <label htmlFor="search-box"><IoSearch style={{ fontSize: "2rem" }} /> </label>
                        </Form>
                        <div className="navbar-icons fs-1 d-flex justify-content-center align-items-center">

                         
                            <a id="search-btn"><IoSearch style={{fontSize: '3rem'}}  /></a>
                            <a href="#" title="Bəyənilənlər"> <FcLikePlaceholder style={{fontSize: '3rem'}} /></a>
                           
                          <Link to="/login"><CgProfile className='text-success'  size={30} /></Link>
                           
                        </div>
                          
                    </header>
                </div>
            </div>
            <div className="navbar-nav bg-success">
                <div className="navbar-items d-flex justify-content-center align-items-center">
                    <a href="#aboutid" className="nav-item nav-link-style px-4 text-decoration-none fs-4 text-capitalize">
                        <span className="nav-link text-white">Haqqımızda</span>
                    </a>
                    <a href="#" className="nav-item nav-link-style px-4 text-decoration-none fs-4 text-capitalize">
                        <span className="nav-link text-white">çox oxunanlar</span>
                    </a>
                    <a href="#" className="nav-item nav-link-style px-4 text-decoration-none fs-4 text-capitalize">
                        <span className="nav-link text-white">bədii kitablar</span>
                    </a>
                    <a href="#" className="nav-item nav-link-style px-4 text-decoration-none fs-4 text-capitalize">
                        <span className="nav-link text-white">Çox satılanlar</span>
                    </a>
                    <a href="#" className="nav-item nav-link-style px-4 text-decoration-none fs-4 text-capitalize">
                        <span className="nav-link text-white">Əlaqə</span>
                    </a>
                </div>
            </div>
            <div className="bottom-navbar d-flex justify-content-center align-items-center bg-danger">
                <a href="#" className="bottom-navbar-nav fas fa-home" title="home"></a>
                <a href="#" className="bottom-navbar-nav fas fa-heart" title="heart"></a>
                <a href="#" className="bottom-navbar-nav fas fa-list" title="list"></a>
                <a href="#" className="bottom-navbar-nav fas fa-tags" title="tags"></a>
            </div>
        </div>
    )
}
