import React, { useState } from 'react'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import '../../css/libro.css'
import '../../css/new-card.css'
export default function BestSeller() {
// solve heart function
//get props here too
//change imgs

const [isHovered, setIsHovered] = useState(false);

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
                                    <div className="offer" 
                                     onMouseEnter={() => setIsHovered(!isHovered)}
                                     onMouseLeave={() => setIsHovered(!isHovered)}>
                                         {isHovered ?(
                                               <span
                                               className="position-absolute top-1 end-0 bg-success text-white p-3 rounded-circle fs-5"><AiFillHeart size={23} /></span>
                                         ):(
                                         <span className="position-absolute top-1 end-0 bg-success text-white p-3 rounded-circle fs-5"><AiOutlineHeart size={23}/></span>)
}
                                      
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
