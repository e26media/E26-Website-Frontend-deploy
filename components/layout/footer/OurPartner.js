'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"


const swiperOptions = {
    
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },

    breakpoints: {
        1199: {
            slidesPerView: 5,
        },
        991: {
            slidesPerView: 4,
        },
        767: {
            slidesPerView: 4,
        },
        500: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 2,
        },
    },
}


export default function OurPartner() {
    return (
        <>
       <div className="home-blog-version4   bg1-clr position-relative " style={{backgroundColor:'white',marginBottom:'10px'}} >
                       <div className="container zindex position-relative">
                        <div className="pricing-title" >
                           
                            <h2 className="stitle " style={{color:'#004f39',textAlign:'center !important',marginBottom:'10px'}}>
                              Our  Academic Partners
                            </h2>
                        </div>
                     
  <div className="footer-client ">
                        
                            <div className="swiper trusted-inner">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <Link href="/">
                                            <img src="/assets/img/E26media/partner/1.png" alt="img" />
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link href="/">
                                            <img src="/assets/img/E26media/partner/7.png" alt="img" />
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link href="/">
                                            <img src="/assets/img/E26media/partner/3.png" alt="img" />
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link href="/">
                                            <img src="/assets/img/E26media/partner/4.png" alt="img" />
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link href="/">
                                            <img src="/assets/img/E26media/partner/9.png" alt="img" />
                                        </Link>
                                    </SwiperSlide>
                                   
                                   
                                </Swiper>
                            </div>
                        </div>


                           
                           </div>
                           </div>


<style>
  {`
  .footer-client {
  border: none !important}
.footer-client .swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* FORCE image to be bigger */
.footer-client .swiper-slide img {
  width: 200px !important;
  max-width: 160px !important;
  height: auto !important;
  object-fit: contain;
  display: block;
}
  `}
</style>
        
        </>
    )
}