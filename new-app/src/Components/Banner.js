import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
  return (
    <div className='container-sm home-banner'>
         <Carousel>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1cWYDsMwtb9-SKefte9Eo4SjLohRUSdxO5gSMFJZ7Aw8g9bwtfYJjOT_--Ynv-Eylmn8&usqp=CAU" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://newvistahealth.com/wp-content/uploads/2022/10/1.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://cdn.quotesgram.com/img/10/44/1231162159-badb308e037e8d2f129348a252228e05.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </div>
  )
}

export default Banner