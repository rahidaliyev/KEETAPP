import React from 'react'
import '../../css/libro.css'
import '../../css/new-card.css'
export default function BestSeller() {
  return (
    <div  >
        <div className="carousel slide" data-bs-ride="carousel" id="slider4">
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
                <div className="product-card">
                    <div className="product-card-container">
                        <div className="product-wrapper">
                            <div className="product-card-info">
                                <div className="product-card-images">
                                    <div className="offer">
                                        <span
                                            className="position-absolute top-1 end-0 bg-danger text-white p-3 rounded-circle fs-5">34%</span>
                                    </div>
                                    <a href="#" className="product-link" title="product">
                                        <img src="https://www.adazing.com/wp-content/uploads/2020/03/stephen-king-116-scaled.jpg"
                                            className="product-img" alt=""/>
                                    </a>
                                </div>
                                <div className="product-card-body">
                                    <span className="product-info"><span className="book-info">Kitabın adı : </span> Pet
                                        SemaTary</span>
                                    <span className="product-info"><span className="book-info">Müəllif : </span>STEPHEN
                                        KING</span>
                                    <span className="product-info"><span className="book-info">Qiymət : </span>
                                        22.99$</span>
                                </div>
                            </div>
                        </div>                       
                    </div>
                </div>
            </div>
           
        </div>
      
    </div>
    </div>
  )
}
