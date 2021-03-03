import React, { useState, useEffect } from "react"
  // core version + navigation, pagination modules:
  import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Zoom,EffectFade } from 'swiper';

  import { Swiper, SwiperSlide, } from 'swiper/react'
 
  
 
 
  import 'swiper/swiper-bundle.css';
//   import 'swiper-bundle.css'
//   import gallery2 from '../images/gallery2.jpg' ;
//   import gallery3 from '../images/gallery3.jpg' ;
//   import gallery4 from '../images/gallery4.jpg' ;
  import gallery4 from '../images/dto1.jpg' ;
  import gallery3 from '../images/dto2.jpeg' ;
  import gallery2 from '../images/dto3.jpg' ;
  import gallery1 from '../images/dto4.jpg' ;
  import "../css/Carousel.css";
//   import 'swiper/swiper.scss';
//   import 'swiper/components/navigation/navigation.scss';
//   import 'swiper/components/pagination/pagination.scss';
//   import 'swiper/components/scrollbar/scrollbar.scss';


  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Zoom, EffectFade  ]);

function Carousel() {
      // configure Swiper to use modules
 

   return (
      
  // init Swiper:
//   < Slider main container -->
<Swiper className='containerFoto'

spaceBetween={50}
slidesPerView={2.5}
grabCursor= {true}
loop= {true}  
EffectFade={false}
Navigation={true}
// zoom= {true}
zoom= {{
  maxRatio: 5,
  containerClass:'swiper-zoom-container'}
}
pagination={{ clickable: true }}
scrollbar={{ draggable: true }}
onSwiper={(swiper) => console.log(swiper)}
onSlideChange={() => console.log('slide change')}
>
<SwiperSlide ><img  alt='aa' src={gallery2}></img></SwiperSlide>
<SwiperSlide><img  alt='aa' src={gallery2}></img></SwiperSlide>
<SwiperSlide><img  alt='aa' src={gallery2}></img></SwiperSlide>
<SwiperSlide><img  alt='aa' src={gallery2}></img></SwiperSlide>
<SwiperSlide><img  alt='aa' src={gallery2}></img></SwiperSlide>
...
</Swiper>


  );
}

export default Carousel;