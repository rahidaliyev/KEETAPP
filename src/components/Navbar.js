import React from 'react'
import '../css/libro.css'
import '../css/new-card.css'
import '../images/libro.jpg'
import '../images/yellow_back.jpg'
import {IoBookSharp} from 'react-icons/io5'
import {IoSearch} from 'react-icons/io5'
import {CgProfile} from 'react-icons/cg'
import {FcLikePlaceholder} from  'react-icons/fc'

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
                                <div  className="logo" alt="Libro"><IoBookSharp size={50} /> </div> 
                            </a>
                        </div>
                    </div>
                    <form action="" className="search-form">
                        <input type="search" name="" placeholder="axtarış..." id="search-box"></input>
                        <label for="search-box"><IoSearch size={20} /> </label>
                    </form>
                    <div className="navbar-icons fs-1 d-flex justify-content-center align-items-center">

                       {/* search icon is not working */}
                        <icon id="search-btn"><IoSearch size={60} /></icon>
                        <a href="#"  title="Bəyənilənlər"> <FcLikePlaceholder size={30}/></a>
                        <div id="login-btn" title="Hesabım"><CgProfile size={30}/></div>
                        <div id="menu-btn" className="fa-solid fa-bars"></div>
                    </div>
                    <div className="login-form-container">
                        <div id="close-login-btn" className="fas fa-times"></div>
                        <form action="#">
                            <h3>daxil olun</h3>
                            <span className="d-block">istifadəçi adı</span>
                            <input type="email" className="box d-block" placeholder="email daxil edin" id=""></input>
                            <span>şifrə</span>
                            <input type="password" className="box d-block" placeholder="şifrənizi daxil edin" id=""/>
                            <div className="checkbox">
                                <input type="checkbox" id="remember-me"/>
                                <label for="remember-me">məni xatırla</label>
                            </div>
                            <input type="submit" value="Daxil ol" className="login-btn"/>
                            <p>Şifrəni unutmusan ? <a href="#">Bura basın</a></p>
                            <p>hesabınız yoxdur ? <a href="#">Bura basın</a></p>
                        </form>
                    </div>
                    <div className="register-form-container">
                        <div id="close-register-btn" className="fas fa-times"></div>
                        <form>
                            <h3>Qeydiyyat</h3>
                            <span className="d-block">İstifadəçi adı</span>
                            <input type="email" className="box d-block" placeholder="email daxil edin" id=""/>
                            <span>Şifrə</span>
                            <input type="password" className="box d-block" placeholder="şifrənizi daxil edin" id=""/>
                            <span>Şifrə Təkrar</span>
                            <input type="password" className="box d-block" placeholder="yenidən daxil edin " id=""/>
                            <input type="submit" value="Qeydiyyat" className="login-btn"/>
                        </form>
                    </div>
                    <div className="password-form-container">
                        <div id="close-password-btn" className="fas fa-times"></div>
                        <form>
                            <h3>şifrəni qaytar</h3>
                            <span className="d-block">istifadəçi adı</span>
                            <input type="email" className="box d-block" placeholder="email daxil edin" id=""/>
                            <input type="submit" value="Göndər" className="login-btn"/>
                        </form>
                    </div>
                    <div className="menu-bars-container">
                        <div id="close-menu-btn" className="fas fa-times"></div>
                        <nav className="toggle-menu">
                            <ul className="toggle-menu-container">
                                <li className="toggle-menu-items">
                                    <a href="" className="toggle-menu-item text-decoration-none">
                                        <span className="toggle-menu-link text-dark text-capitalize fs-1 fw-400">
                                            yeni gələnlər
                                        </span>
                                    </a>
                                </li>
                                <li className="toggle-menu-items">
                                    <a href="" className="toggle-menu-item text-decoration-none">
                                        <span className="toggle-menu-link text-dark fs-1 fw-400 text-capitalize">
                                            çox oxunanlar
                                        </span>
                                    </a>
                                </li>
                                <li className="toggle-menu-items">
                                    <a href="" className="toggle-menu-item text-decoration-none">
                                        <span className="toggle-menu-link text-dark fs-1 fw-400 text-capitalize">
                                            bədii kitablar
                                        </span>
                                    </a>
                                </li>
                                <li className="toggle-menu-items">
                                    <a href="" className="toggle-menu-item text-decoration-none">
                                        <span className="toggle-menu-link text-dark fs-1 fw-400 text-capitalize">
                                            nağıl kitabları
                                        </span>
                                    </a>
                                </li>
                                <li className="toggle-menu-items">
                                    <a href="" className="toggle-menu-item text-decoration-none">
                                        <span className="toggle-menu-link text-dark fs-1 fw-400 text-capitalize">
                                            tanınmış müəlliflər
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        </div>
        <div className="navbar-nav bg-success">
            <div className="navbar-items d-flex justify-content-center align-items-center">
                <a href="#" className="nav-item nav-link-style px-4 text-decoration-none fs-4 text-capitalize">
                    <span className="nav-link text-white">yeni gələnlər</span>
                </a>
                <a href="#" className="nav-item nav-link-style px-4 text-decoration-none fs-4 text-capitalize">
                    <span className="nav-link text-white">çox oxunanlar</span>
                </a>
                <a href="#" className="nav-item nav-link-style px-4 text-decoration-none fs-4 text-capitalize">
                    <span className="nav-link text-white">bədii kitablar</span>
                </a>
                <a href="#" className="nav-item nav-link-style px-4 text-decoration-none fs-4 text-capitalize">
                    <span className="nav-link text-white">nağıl kitabları</span>
                </a>
                <a href="#" className="nav-item nav-link-style px-4 text-decoration-none fs-4 text-capitalize">
                    <span className="nav-link text-white">tanınmış müəlliflər</span>
                </a>
            </div>
        </div>
        <div className="bottom-navbar d-flex justify-content-center align-items-center">
            <a href="#" className="bottom-navbar-nav fas fa-home" title="home"></a>
            <a href="#" className="bottom-navbar-nav fas fa-heart" title="heart"></a>
            <a href="#" className="bottom-navbar-nav fas fa-list" title="list"></a>
            <a href="#" className="bottom-navbar-nav fas fa-tags" title="tags"></a>
        </div> 
        </div>
    )
}
