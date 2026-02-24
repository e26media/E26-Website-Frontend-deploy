'use client'
import Layout from "@/components/layout/Layout"
import TextSLider7 from "@/components/sections/TextSLider7"
import TextSLider8 from "@/components/sections/TextSlider8"
import Link from "next/link"
import { useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 5,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".cmn-prev",
        prevEl: ".cmn-next",
    },

    breakpoints: {
        1199: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 3,
        },
        575: {
            slidesPerView: 3,
        },
        0: {
            slidesPerView: 3,
        },
    },
}
const style = {
    color: "red"
}


export default function MobileAppDevelopment() {
       const [isAccordion, setIsAccordion] = useState(1)
        const handleAccordion = (key) => {
            setIsAccordion(prevState => prevState === key ? null : key)
        }
        const [isTab, setIsTab] = useState(1)
        const handleTab = (i) => {
            setIsTab(i)
        }

    return (
        <>

            <Layout headerStyle={2} footerStyle={2} >
                {/* <TextSLider8/> */}
                  <div className="digital-solution mb-xxl-4 pb-lg-0 pb-15" style={{marginTop:'130px'}}>
                        <div className="mycustom-marque">
                            <div className="scrolling-wrap">
                                <div className="comm">
                                    <div className="cmn-textslide">Mobile App Development</div>
                                     <div><img src="/assets/img/E26media/elements/text-slide.png" alt="img" /></div>
                                    <div className="cmn-textslide text-custom-storke">Mobile App Development</div>
                                    <div><img src="/assets/img/E26media/elements/text-slide.png" alt="img" /></div>
                                </div>
                                <div className="comm">
                                     <div className="cmn-textslide">Mobile App Development</div>
                                     <div><img src="/assets/img/E26media/elements/text-slide.png" alt="img" /></div>
                                    <div className="cmn-textslide text-custom-storke">Mobile App Development</div>
                                    <div><img src="/assets/img/E26media/elements/text-slide.png" alt="img" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                <section className="Service-details  pb-space" style={{backgroundColor:'white',marginTop:'-30px'}} >
                    <div className="container">
                        <div className="service-details-header bb-border pb-xxl-9 pb-xl-7 pb-6">
                            <div className="thumb w-100 mb-xxl-12 mb-xl-9 mb-sm-6 mb-5" data-aos="zoom-in" data-aos-duration={1500}>
                                <img src="/assets/img/E26media/ourworks/wafa.png" alt="img" className="w-100"  style={{borderRadius:'20px'}}/>
                            </div>
                            <h3 className="white-clr mb-xxl-9 mb-xl-7 mb-lg-6 mb-4" data-aos="zoom-in-left" data-aos-duration={1600}>
                            Professional Mobile App Development Services 
                            </h3>
                            <div className="d-flex flex-wrap align-items-center gap-xxl-5 gap-xl-3 gap-2" data-aos="zoom-in-left" data-aos-duration={1800}>
                                <Link href="/service-details" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr" style={{color:'#004f39'}}>
                                  Android Application Development
                                </Link>
                                <Link href="/service-details" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr" style={{color:'#004f39'}}>
                                  iOS Application Development
                                </Link>
                                <Link href="/service-details" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr" style={{color:'#004f39'}}>
                                  Cross-Platform App Development
                                </Link>
                                <Link href="/service-details" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr" style={{color:'#004f39'}}>
                                    App Maintenance & Upgrades
                                </Link>
                            </div>
                        </div>
                        <div className="case-study-detials-inner mt-xxl-10 mt-xl-7 mt-6">
                            <h4 className="mb-xxl-7 mb-4 white-clr">
                                Service Overview
                            </h4>
                            <div className="d-flex flex-md-nowrap flex-wrap justify-content-between gap-xxl-15 gap-xl-10 gap-lg-7 gap-sm-5 gap-3 mb-xxl-9 mb-xl-8 mb-lg-7 mb-4">
                                <p className=" challenge-pra1"  style={{color:'black'}}>
                                We provide custom mobile app development services in Mangalore, creating high-performance, secure, and user-friendly applications for Android, iOS, and cross-platform environments. Our mobile solutions are designed to enhance user engagement, improve business efficiency, and drive digital growth.
                                </p>
                                <p style={{color:'black'}}>
Our mobile app development services focus on delivering scalable, intuitive, and future-ready applications tailored to your business requirements. From native Android and iOS apps to cross-platform solutions, we ensure seamless performance and excellent user experience.
                                </p>
                            </div>
                            <div className="finul-result">
                                <h4 className="mb-xxl-3 mb-2 white-clr">
                                    Benefits With Our Service
                                </h4>
                                <div className="d-md-flex flex-grid align-items-center gap-xxl-20 gap-xl-10 gap-lg-7 gap-md-6 gap-10">
                                    <div className="fiial-result-list mb-md-0 mb-4">
                                    <ul>
    <li>High-Performance & Scalable Apps</li>
    <li>Secure & Reliable Architecture</li>
    <li>User-Friendly UI/UX Design</li>
    <li>Ongoing Support & Upgrades</li>
</ul>

                                        {/* <ul>
                                            <li>
                                                consectetur placerat augue vestibulum
                                            </li>
                                            <li>
                                                consectetur placerat augue vestibulum
                                            </li>
                                            <li>
                                                consectetur placerat augue vestibulum
                                            </li>
                                        </ul> */}
                                    </div>
                                    <div className="result-progress-wrap">
                                        <div className="progres-item mb-xxl-6 mb-xl-5 mb-4">
                                            <div className="d-flex align-items-center justify-content-between mb-xxl-5 mb-3">
                                                <span className="conssub" id='conssub'>
                                                    customize
                                                </span>
                                                <span className="cons" id='conssub'>100%</span>
                                            </div>
                                            <div className="progress-solving">
                                                <div className="progress-bar" />
                                            </div>
                                        </div>
                                        <div className="progres-item">
                                            <div className="d-flex align-items-center justify-content-between mb-xxl-5 mb-3">
                                                <span className="conssub" id='conssub'>
                                                    Business
                                                </span>
                                                <span className="cons" id='conssub'>96%</span>
                                            </div>
                                            <div className="progress-solving">
                                                <div className="progress-bar" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




  {/* section */}
                   <section className="service-section pt-space pb-space">
                        <div className="container">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-17 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                                <div className="pricing-title">
                                    <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5" style={{color:'#004f39'}}>
                                        WHAT WE OFFER
                                    </div>
                                    <h2 className="stitle" style={{color:'#004f39'}}>
                                        Most <span className="fw-400" style={{color:'#004f39'}}>experienced</span> services
                                    </h2>
                                </div>
                                {/* <Link href="/service" className="radius-btn d-inline-flex radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-2">
                                    View All Service
                                    <span className="rot60 d-inline-block">
                                        <i className="fas fa-arrow-up theme-clr" />
                                    </span>
                                </Link> */}
                            </div>
                            {/*Service Tabing section*/}
                            <div className="row g-xxl-6 g-4">
                                <div className="service-tabing-wrap Faqs-section position-relative">
                                    <div className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bt-border  ${isAccordion === 1 ? "active" : ""}`}>
                                        <div className="header-area" onClick={() => handleAccordion(1)}>
                                            <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                                <div className="mtitle-ara">
                                                    <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                        01
                                                        <span className="rot60 d-inline-block theme-clr">
                                                            <i className="fa-solid fa-arrow-right" style={{color:'#004f39'}}/>
                                                        </span>
                                                    </span>
                                                    <span className="mtitle d-block mt-6">
                                                        <Link href="/mobile-app-development" style={{color:'#004f39'}}>
                                                         Android application development
                                                        </Link>
                                                    </span>
                                                    <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block" style={{color:'#004f39'}}>
                                                      Custom Android applications designed to deliver smooth performance, intuitive user experience, and scalable functionality for businesses across industries.
                                                    </span>
                                                </div>
                                                <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                                    <ul className="modern-list d-grid gap-2">
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right"  /> Native Android App Development
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" /> Material UI/UX Design
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" />Secure API & Database Integration
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" />Google Play Store Deployment Support
                                                        </li>
                                                    </ul>
                                                    <div className="tab-remove-thumb">
                                                        <img src="/assets/img/E26media/service/Website-Development.png" alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bt-border  ${isAccordion === 2 ? "active" : ""}`}>
                                        <div className="header-area" onClick={() => handleAccordion(2)}>
                                            <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                                <div className="mtitle-ara">
                                                    <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                        02
                                                        <span className="rot60 d-inline-block theme-clr">
                                                            <i className="fa-solid fa-arrow-right"  style={{color:'#004f39'}}/>
                                                        </span>
                                                    </span>
                                                    <span className="mtitle d-block mt-6">
                                                        <Link href="/mobile-app-development"  style={{color:'#004f39'}}>
                                                      iOS application development


                                                        </Link>
                                                    </span>
                                                    <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block" style={{color:'#004f39'}}>
                                                     Custom iOS applications built to deliver seamless performance, elegant design, and secure functionality for iPhone and iPad users.
                                                    </span>
                                                </div>
                                                <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                                    <ul className="modern-list d-grid gap-2">
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" /> Native iOS App Development
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" /> Modern UI/UX for Apple Devices
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" />Secure Backend & API Integration
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" />App Store Deployment & Support
                                                        </li>
                                                    </ul>
                                                    <div className="tab-remove-thumb">
                                                        <img src="/assets/img/E26media/website/1.png" alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 
                                    <div className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bb-border bt-border  ${isAccordion === 3 ? "active" : ""}`}>
                                        <div className="header-area" onClick={() => handleAccordion(3)}>
                                            <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                                <div className="mtitle-ara">
                                                    <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                        03
                                                        <span className="rot60 d-inline-block theme-clr">
                                                            <i className="fa-solid fa-arrow-right"  style={{color:'#004f39'}}/>
                                                        </span>
                                                    </span>
                                                    <span className="mtitle d-block mt-6">
                                                        <Link href="/mobile-app-development" style={{color:'#004f39'}}>
                                                          Cross-platform apps
                                                        </Link>
                                                    </span>
                                                    <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block" style={{color:'#004f39'}}>
                                                       Cost-effective and scalable cross-platform applications built to run seamlessly on Android and iOS using a single codebase, ensuring faster development and consistent performance.
                                                    </span>
                                                </div>
                                                <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                                    <ul className="modern-list d-grid gap-2">
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" /> Single Codebase for Multiple Platforms
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" /> Faster Development & Deployment
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" />Consistent UI Across Devices
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" /> Easy Maintenance & Updates
                                                        </li>
                                                    </ul>
                                                    <div className="tab-remove-thumb">
                                                        <img src="/assets/img/E26media/website/2.png" alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bb-border bt-border  ${isAccordion === 4 ? "active" : ""}`}>
                                        <div className="header-area" onClick={() => handleAccordion(4)}>
                                            <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                                <div className="mtitle-ara">
                                                    <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                        04
                                                        <span className="rot60 d-inline-block theme-clr">
                                                            <i className="fa-solid fa-arrow-right"  style={{color:'#004f39'}}/>
                                                        </span>
                                                    </span>
                                                    <span className="mtitle d-block mt-6">
                                                        <Link href="/mobile-app-development" style={{color:'#004f39'}}>
                                                          App maintenance & upgrades

                                                        </Link>
                                                    </span>
                                                    <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block" style={{color:'#004f39'}}>
                                                      Reliable app maintenance and upgrade services to ensure your mobile application stays secure, updated, and optimized for performance across all devices and operating system versions.
                                                    </span>
                                                </div>
                                                <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                                    <ul className="modern-list d-grid gap-2">
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" /> Regular Updates & Bug Fixes
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" /> Performance Monitoring & Optimization
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" /> Security Patches & Enhancements
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" /> Feature Improvements & Version Upgrades
                                                        </li>
                                                    </ul>
                                                    <div className="tab-remove-thumb">
                                                        <img src="/assets/img/E26media/website/2.png" alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                            {/*Service Tabing section*/}
                        </div>
                    </section>
                 {/* section */}












                        <div className="swiper study-slidewrap py-xxl-15 py-xl-10 py-9">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="study-thumb-slide w-100">
                                        <img src="/assets/img/E26media/ourworks/superstudy.png" alt="img" className="w-100"  style={{borderRadius:'10px'}}/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="study-thumb-slide w-100">
                                        <img src="/assets/img/E26media/ourworks/Al Mirath.webp" alt="img" className="w-100" style={{borderRadius:'10px'}} />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="study-thumb-slide w-100">
                                        <img src="/assets/img/E26media/works/HEVN.png" alt="img" className="w-100" style={{borderRadius:'10px'}}/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="study-thumb-slide w-100">
                                        <img src="/assets/img/E26media/ourworks/wafa.png" alt="img" className="w-100"  style={{borderRadius:'10px'}}/>
                                    </div>
                                </SwiperSlide>
                               
                            </Swiper>
                        </div>
                        <div className="slider-button d-flex align-items-center justify-content-between py-xxl-6 py-xl-5 py-4">
                            <div className="d-flex align-items-center gap-xxl-5 gap-3 gap-2">
                                <button className="cmn-prev cmn-border d-center" tabIndex={0} aria-label="Next slide">
                                    <i className="fas fa-chevron-left" />
                                </button>
                                <span className="fw-bold white-clr previus-text text-capitalize">
                                    previous
                                </span>
                            </div>
                            <h3 className="project-storke">
                                Services
                            </h3>
                            <div className="d-flex align-items-center gap-xxl-5 gap-3 gap-2">
                                <span className="fw-bold white-clr previus-text text-capitalize">
                                    Next
                                </span>
                                <button className="cmn-next cmn-border d-center" tabIndex={0} aria-label="Previous slide">
                                    <i className="fas fa-chevron-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                 

               

<style>
  {`
    li {
      color: black !important;
    },
  
  `}
</style>

            </Layout>
        </>
    )
}