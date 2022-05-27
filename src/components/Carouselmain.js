import React from 'react'
import '../css/libro.css'
import '../css/new-card.css'
import '../images/1984.jpg'

export default function Carouselmain() {
  return (
    <div>
  <div className="carousel-container">
            <div className="carousel slide" data-bs-ride="carousel" id="slider1">
                <ol className="carousel-indicators">
                    <li data-bs-target="#slider1" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#slider1" data-bs-slide-to="1"></li>
                    <li data-bs-target="#slider1" data-bs-slide-to="2"></li>
                    <li data-bs-target="#slider1" data-bs-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item-container">
                        <div className="carousel-item-images">
                            <div className="carousel-images-wrapper">
                                <div className="carousel-item active" data-bs-interval="4000">
                                    <a href="#" className="carousel-bg-images">
                                        <img src="https://img2.wtftime.ru/store/2020/01/28/I1YKzqoM.jpg"
                                            className="carousel-bg-img" alt="carousel-bg-images"/>
                                    </a>
                                    <a href="#" className="carousel-images">
                                        {/* here */}
                                        <img src={require("../images/1984.jpg")} 
                                            className="carousel-img" alt="Hobbit"/>
                                    </a>
                                </div>
                                <div className="carousel-item" data-bs-interval="4000">
                                    <a href="#" className="carousel-bg-images">
                                        <img src="https://catherineasquithgallery.com/uploads/posts/2021-02/1614438700_57-p-temnii-fon-noch-64.jpg"
                                            className="carousel-bg-img" alt="carousel-bg-images"/>
                                    </a>
                                    <a href="#" className="carousel-images">
                                        <img src="https://pbs.twimg.com/media/DumG1jaWsAE0vcH.jpg" className="carousel-img"
                                            alt="Hobbit"/>
                                    </a>
                                </div>
                                <div className="carousel-item" data-bs-interval="4000">
                                    <a href="#" className="carousel-bg-images">
                                        <img src="https://cdn.culture.ru/images/109fc77e-a24f-5fb0-88b7-1f480749ba66"
                                            className="carousel-bg-img" alt="carousel-bg-images"/>
                                    </a>
                                    <a href="#" className="carousel-images">
                                        <img src="https://ornekkitap.blob.core.windows.net/images/book/cover/600x800/ZUVI0RDO69.png"
                                            className="carousel-img" alt="Hobbit"/>
                                    </a>
                                </div>
                                <div className="carousel-item" data-bs-interval="4000">
                                    <a href="#" className="carousel-bg-images">
                                        <img src="https://w-dog.ru/wallpapers/9/11/531622032320112/skaly-kanon-kamni-pustynya-nebo-oblaka.jpg"
                                            className="carousel-bg-img" alt="carousel-bg-images"/>
                                    </a>
                                    <a href="#" className="carousel-images">
                                        <img src="https://www.grafika.az/uploads/product/small/2020-05-06-23-50-211588794621.jpg"
                                            className="carousel-img" alt="Hobbit"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#slider1" className="carousel-control-prev" data-bs-slide="prev" title="prev">
                    <span className="carousel-control-prev-icon bg-success p-4"></span>
                </a>
                <a href="#slider1" className="carousel-control-next" data-bs-slide="next" title="next">
                    <span className="carousel-control-next-icon bg-success p-4"></span>
                </a>
            </div>
        </div>




    </div>
  )
}
