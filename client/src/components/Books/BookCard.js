import React from 'react'
import './Book.css'

export default function BookCard() {
  return (
        <div className='container'>
            <div className="card-info">
                <div className="card-info-container rounded mx-3 mb-5">
                    <div className="card-carousel" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <a href="#" className="carousel-item active carousel-image-container" data-bs-interval="3000">
                                <img src="https://i.pinimg.com/736x/10/c9/50/10c9507a0cafbd25dddbacc0e9abb386--hobbit-book-the-hobbit.jpg"
                                    className="card-img" alt="hobbit" />
                            </a>
                            <a href="#" className="carousel-item carousel-image-container" data-bs-interval="3000">
                                <img src="https://img.elephantjournal.com/wp-content/uploads/2012/12/pbbc063012.jpg"
                                    className="card-img" alt="hobbit" />
                            </a>
                            <a href="#" className="carousel-item carousel-image-container" data-bs-interval="3000">
                                <img src="https://i.pinimg.com/originals/ca/c3/ca/cac3ca6bdc282f083cf49d44e7b4d7df.jpg"
                                    className="card-img" alt="hobbit" />
                            </a>
                            <a href="#" className="carousel-item carousel-image-container" data-bs-interval="3000">
                                <img src="https://u.livelib.ru/reader/Scout_Alice/o/lqnqziiw/o-o.jpeg" className="card-img"
                                    alt="hobbit" />
                            </a>
                            <a href="#" className="carousel-item carousel-image-container" data-bs-interval="3000">
                                <img src="https://scientificrussia.ru/images/x/12dx-full.jpg" className="card-img"
                                    alt="hobbit" />
                            </a>
                        </div>
                    </div>
                    <div className="card-body p-3">
                        <div className="card-text-wrapper">
                            <span className="card-text fs-5 fw-bold">
                                Bilbo Baggins’in Gandalf tarafından hiç beklemediği bir anda
                                evine gelen 13 cüce ile değişen hayatı, Orta Dünya’nın kaderini değiştirecek olan Tek
                                Yüzük’ün bulunuşu, ulu ejder Smaug’un öldürülüşü ve kadim cüce kenti Erebor’un kurtuluşu
                                anlatılmaktadır.
                            </span>
                        </div>
                        <span className="author fs-4 fw-bold text-dark text-capitalize d-block p-3 px-0">
                            müəllif :
                            <span className="author-name text-capitalize text-dark fs-5 fw-normal">J. R. R. Tolkien</span>
                        </span>
                        <span className="book-info text-capitalize text-dark fs-4 fw-bold d-block p-3 px-0">
                            kitabın adı :
                            <span className="book-name text-capitalize text-dark fs-5 fw-normal">hobbit</span>
                        </span>
                        <span>
                            <a href="#" className="text-decoration-none">
                                <button
                                    className="bg-success card-btn d-block rounded text-capitalize text-white fs-4 p-2 w-100">
                                    davamını oxu
                                </button>
                            </a>
                        </span>
                    </div>
                </div>                      
            </div>         
        </div>
  )
}
