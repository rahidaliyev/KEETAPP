import React from 'react'
import '../css/libro.css'
import '../css/new-card.css'
import '../images/libro.jpg'
import '../images/yellow_back.jpg'
import '../pages/96e2a8f2-0045-42df-9c31-b9e6b70737b2.jpg'



export default function Aboutus() {
  return (
    <div>

<div class="section-padding about mt-5">
            <div class="about-me">
                <div class="about-me-container d-flex justify-content-center align-items-center">
                    <div class="about-images-container">
                        <div class="about-image">
                            <img src={require("../pages/96e2a8f2-0045-42df-9c31-b9e6b70737b2.jpg")} class="about-img" alt=""/>
                        
                        
                        </div>
                    </div>
                    <div class="about-info-container p-5">
                        <span class="about-title text-dark">
                            <q>
                                Biliklərin çoxluğu yox, keyfiyyəti
                                əhəmiyyətlidir. Çox şey bilən, ən lazımlı şeyləri bilməyə bilər.
                            </q>
                            <span class="d-block mt-3 fw-bold fs-2 text-dark text-capitalize">
                                -lev tolstoy
                            </span>
                        </span>
                        <span class="about-text nav-link-style text-dark mt-5">
                            <span class="nav-link-style text-dark d-block mt-5 mb-5 fs-1 fw-bold">Bu sayt nə üçün var
                                ?</span>
                            Bu sayt kitabların PDF şəklində pulsuz oxunulması üçün yaradılmışdır.
                            Eyni zamanda kitabların təqdimatı ən çox oxunan əsərlər , əsərlərdən motivlər
                            və müəlliflərin həyatı haqqında məlumatlar ala bilərsiniz.Kitabları oxumaq üçün,
                            Çox Oxunanlar bölməsinə gələrək,bir kitab seçin və "Davamını Oxu" buttonuna click
                            edərək seçdiyiniz kitabı oxumağa başlayın.
                        </span>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
