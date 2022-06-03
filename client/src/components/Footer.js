import React from 'react'
import '../css/libro.css'

export default function Footer() {
  return (
    <div id='footer'>
<footer className="footer bg-danger" >
        <div className="container">
            <div className="footer__content">
                <div className="footer__nav">
                    <div className="footer__nav-top">
                        <ul className="footer__nav-list">
                            <h3 className="footer__nav-title">Şirkət</h3>
                            <li className="footer__nav-item">
                                <a href="#" className="footer__nav-link">Haqqımızda</a>
                            </li>
                            <li className="footer__nav-item">
                                <a href="#" className="footer__nav-link">Karyera</a>
                            </li>
                            <li className="footer__nav-item">
                                <a href="#" className="footer__nav-link">Bloq</a>
                            </li>
                            <li className="footer__nav-item">
                                <a href="#" className="footer__nav-link">"Əlaqə"</a>
                            </li>
                        </ul>
                      
                        <ul className="footer__nav-list">
                            <h3 className="footer__nav-title">Kömək</h3>
                            <li className="footer__nav-item">
                                <a href="#" className="footer__nav-link">Ödəniş</a>
                            </li>
                            <li className="footer__nav-item">
                                <a href="#" className="footer__nav-link">Çatdırılma</a>
                            </li>
                            <li className="footer__nav-item">
                                <a href="#" className="footer__nav-link">Geri-qaytarma</a>
                            </li>
                            <li className="footer__nav-item">
                                <a href="#" className="footer__nav-link">FAQ</a>
                            </li>
                        </ul>
                        <ul className="footer__nav-list">
                            <h3 className="footer__nav-title">Digər</h3>
                            <li className="footer__nav-item">
                                <a href="#" className="footer__nav-link">Tərəfdaş</a>
                            </li>
                            <li className="footer__nav-item">
                                <a href="#" className="footer__nav-link">
                                    Saytın xəritəsi</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__nav-bottom">
                        <a href="#" className="footer__nav-social"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="footer__nav-social"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#" className="footer__nav-social"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="#" className="footer__nav-social"><i className="fa-brands fa-pinterest-p"></i></a>
                        <a href="#" className="footer__nav-social"><i className="fa-brands fa-youtube"></i></a>
                        <a href="#" className="footer__nav-social"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
                <div className="footer__request">
                    <h3 className="footer__nav-title">KİTAB TƏLƏB EDİN</h3>
                    <p className="footer__nav-text">Kitab tələb etmək üçün aşağıdakı Formanı doldurun. Kitab əlçatan olan
                        kimi sizə məlumat verəcəyik.</p>
                    <form action="submit" className="footer__request-form">
                        <div className="footer__request-left">
                        <label htmlFor="" className="footer__request-label">
                                Email: *
                                <input type="email" className="footer__request-input" required/>
                            </label>

                            <label htmlFor="" className="footer__request-label">
                                Müəllif: *
                                <input type="text" className="footer__request-input" required/>
                            </label>
                           
                        </div>
                        <div className="footer__request-right">
                        <label htmlFor="" className="footer__request-label">
                                Telefon:
                                <input type="tel" className="footer__request-input"/>
                            </label>
                            <label htmlFor="" className="footer__request-label">
                                Kitab adı: *
                                <input type="text" className="footer__request-input" required/>
                            </label>
                                                       
                        </div>
                        <div className="footer__submit">
                        <button className="footer__submit-btn" type="submit">Təsdiqlə</button>
                    </div>
                    </form>
                    
                </div>
            </div>
            <div className="footer__copyright">
                <p>Müəllif hüququ © 2022 . Keet.app. Bütün hüquqlar qorunur</p>
            </div>
        </div>
    </footer>
    </div>
  )
}
