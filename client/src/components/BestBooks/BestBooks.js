import React from 'react'
import './BestBooks.css'
export default function BestBooks() {
  return (
    <div>
        <div className="carousel slide section-padding all-features" id="slider2">
            <h2 className="nav-link-style d-flex fs-1 justify-content-center align-items-center mt-4 mb-4">Ən Yaxşı Bədii
                Kitablarımız</h2>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="features">
                        <div className="features-wrapper">
                            <div className="features-left-container">
                                <img src="https://i.pinimg.com/736x/7d/d9/54/7dd9543c7277b9bcdf0a6ddeda458674.jpg"
                                    className="features-img" alt=""/>
                            </div>
                            <div className="features-right-container">
                                <img src="https://1.bp.blogspot.com/--iMiT9IAfKY/VLfyU4GsCuI/AAAAAAAAESo/qSezpFZuwQg/s1600/En%2Biyi%2Bfantastik%2Bkitap%2Bserileri%2B%23ilk10%2B%2810%29.jpg"
                                    className="features-img" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="features">
                        <div className="features-wrapper">
                            <div className="features-left-container">
                                <img src="http://1.bp.blogspot.com/-JVBa4HfRyIs/VLfygTuWnxI/AAAAAAAAETE/dlZgs32yCOI/s1600/En%2Biyi%2Bfantastik%2Bkitap%2Bserileri%2B%23ilk10%2B(7).jpg"
                                    className="features-img" alt=""/>
                            </div>
                            <div className="features-right-container">
                                <img src="http://2.bp.blogspot.com/-joFncZCh7_g/VUPYxKZJzwI/AAAAAAAAIqw/XdDVv7AHddM/s1600/Nisan%2Bay%C4%B1%2Bokunan%2Bkitaplar.jpg"
                                    className="features-img" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#slider2" className="carousel-control-prev" data-bs-slide="prev" title="prev">
                <span className="carousel-control-prev-icon bg-dark text-white p-4"></span>
            </a>
            <a href="#slider2" className="carousel-control-next" data-bs-slide="next" title="next">
                <span className="carousel-control-next-icon bg-dark text-white p-4"></span>
            </a>
        </div>
    </div>
  )
}
