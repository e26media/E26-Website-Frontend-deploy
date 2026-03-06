'use client'
import Layout from "@/components/layout/Layout"
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

export default function AutomationServices() {
       const [isAccordion, setIsAccordion] = useState(1)
        const handleAccordion = (key) => {
            setIsAccordion(prevState => prevState === key ? null : key)
        }

    return (
        <>

            <Layout headerStyle={2} footerStyle={2} >
                  <div className="digital-solution mb-xxl-4 pb-lg-0 pb-15" style={{marginTop:'130px'}}>
                        <div className="mycustom-marque">
                            <div className="scrolling-wrap">
                                <div className="comm">
                                    <div className="cmn-textslide">Automation Services</div>
                                     <div><img src="/assets/img/E26media/elements/text-slide.png" alt="img" /></div>
                                    <div className="cmn-textslide text-custom-storke">Automation Services</div>
                                    <div><img src="/assets/img/E26media/elements/text-slide.png" alt="img" /></div>
                                </div>
                                <div className="comm">
                                     <div className="cmn-textslide">Automation Services</div>
                                     <div><img src="/assets/img/E26media/elements/text-slide.png" alt="img" /></div>
                                    <div className="cmn-textslide text-custom-storke">Automation Services</div>
                                    <div><img src="/assets/img/E26media/elements/text-slide.png" alt="img" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                <section className="Service-details  pb-space" style={{backgroundColor:'white',marginTop:'-30px'}} >
                    <div className="container">
                        <div className="service-details-header bb-border pb-xxl-9 pb-xl-7 pb-6">
                            <div className="thumb w-100 mb-xxl-12 mb-xl-9 mb-sm-6 mb-5" data-aos="zoom-in" data-aos-duration={1500}>
                                <img src="/assets/img/E26media/service/robot.jpg" alt="Automation Robotics" className="w-100"  style={{borderRadius:'20px'}}/>
                            </div>
                            <h3 className="white-clr mb-xxl-9 mb-xl-7 mb-lg-6 mb-4" data-aos="zoom-in-left" data-aos-duration={1600}>
                            Intelligent Automation Solutions For Modern Businesses
                            </h3>
                            <div className="d-flex flex-wrap align-items-center gap-xxl-5 gap-xl-3 gap-2" data-aos="zoom-in-left" data-aos-duration={1800}>
                                <Link href="/automation-services" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr" style={{color:'#004f39'}}>
                                  Robotic Process Automation
                                </Link>
                                <Link href="/automation-services" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr" style={{color:'#004f39'}}>
                                  Business Logic & Workflow Automation
                                </Link>
                            </div>
                        </div>
                        <div className="case-study-detials-inner mt-xxl-10 mt-xl-7 mt-6">
                            <h4 className="mb-xxl-7 mb-4 white-clr">
                                Service Overview
                            </h4>
                            <div className="d-flex flex-md-nowrap flex-wrap justify-content-between gap-xxl-15 gap-xl-10 gap-lg-7 gap-sm-5 gap-3 mb-xxl-9 mb-xl-8 mb-lg-7 mb-4">
                                <p className=" challenge-pra1"  style={{color:'black'}}>
                                We deliver cutting-edge automation solutions that transform your business operations. From robotic process automation to intelligent workflow systems, our services help organizations reduce manual effort, minimize errors, and accelerate digital transformation.
                                </p>
                                <p style={{color:'black'}}>
Our automation services combine advanced technologies with strategic implementation to create seamless, efficient processes. We help businesses achieve operational excellence through customized automation solutions that drive productivity and growth.
                                </p>
                            </div>
                            <div className="finul-result">
                                <h4 className="mb-xxl-3 mb-2 white-clr">
                                    Benefits With Our Service
                                </h4>
                                <div className="d-md-flex flex-grid align-items-center gap-xxl-20 gap-xl-10 gap-lg-7 gap-md-6 gap-10">
                                    <div className="fiial-result-list mb-md-0 mb-4">
                                    <ul>
    <li>Increased Operational Efficiency</li>
    <li>Reduced Manual Errors</li>
    <li>Cost-Effective Solutions</li>
    <li>Scalable Automation Architecture</li>
</ul>
                                    </div>
                                    <div className="result-progress-wrap">
                                        <div className="progres-item mb-xxl-6 mb-xl-5 mb-4">
                                            <div className="d-flex align-items-center justify-content-between mb-xxl-5 mb-3">
                                                <span className="conssub" id='conssub'>
                                                    Process Efficiency
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
                                                    Cost Reduction
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
                                        Most <span className="fw-400" style={{color:'#004f39'}}>experienced</span> automation services
                                    </h2>
                                </div>
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
                                                        <Link href="/automation-services" style={{color:'#004f39'}}>
                                                         Robotic Process Automation
                                                        </Link>
                                                    </span>
                                                    <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block" style={{color:'#004f39'}}>
                                                      Deploy software robots to automate repetitive, rule-based tasks across your enterprise applications, freeing your workforce for higher-value activities.
                                                    </span>
                                                </div>
                                                <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                                    <ul className="modern-list d-grid gap-2">
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right"  /> Automated Data Entry & Processing
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" /> Legacy System Integration
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" />Screen Scraping & OCR Capabilities
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" />24/7 Unattended Automation
                                                        </li>
                                                    </ul>
                                                    <div className="tab-remove-thumb">
                                                        <img src="/assets/img/E26media/website/2.png" alt="RPA" />
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
                                                        <Link href="/automation-services"  style={{color:'#004f39'}}>
                                                      Business Process Automation
                                                        </Link>
                                                    </span>
                                                    <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block" style={{color:'#004f39'}}>
                                                     Streamline complex business workflows by automating end-to-end processes across departments, ensuring consistency and efficiency.
                                                    </span>
                                                </div>
                                                <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                                    <ul className="modern-list d-grid gap-2">
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" /> Invoice & Purchase Order Automation
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" />HR Onboarding & Payroll Processing
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" />Customer Service Workflow Automation
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" />Compliance & Reporting Automation
                                                        </li>
                                                    </ul>
                                                    <div className="tab-remove-thumb">
                                                        <img src="/assets/img/E26media/website/3.png" alt="BPA" />
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
                                                        <Link href="/automation-services" style={{color:'#004f39'}}>
                                                          Workflow Automation
                                                        </Link>
                                                    </span>
                                                    <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block" style={{color:'#004f39'}}>
                                                       Design and implement automated workflows that connect people, systems, and data for seamless task management and approval processes.
                                                    </span>
                                                </div>
                                                <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                                    <ul className="modern-list d-grid gap-2">
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" /> Visual Workflow Builder
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" /> Automated Approval Chains
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" />Task Assignment & Tracking
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" />Real-time Notifications & Alerts
                                                        </li>
                                                    </ul>
                                                    <div className="tab-remove-thumb">
                                                        <img src="/assets/img/E26media/website/2.png" alt="Workflow" />
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
                                                        <Link href="/automation-services" style={{color:'#004f39'}}>
                                                          Intelligent Document Processing
                                                        </Link>
                                                    </span>
                                                    <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block" style={{color:'#004f39'}}>
                                                      Automate the extraction, classification, and processing of data from unstructured documents using AI and machine learning.
                                                    </span>
                                                </div>
                                                <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                                    <ul className="modern-list d-grid gap-2">
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" /> OCR & Intelligent Data Capture
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" />Document Classification & Indexing
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" />Automated Data Validation
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" />Integration with ERP & CRM Systems
                                                        </li>
                                                    </ul>
                                                    <div className="tab-remove-thumb">
                                                        <img src="/assets/img/E26media/website/3.png" alt="Document Processing" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bb-border bt-border  ${isAccordion === 5 ? "active" : ""}`}>
                                        <div className="header-area" onClick={() => handleAccordion(5)}>
                                            <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                                <div className="mtitle-ara">
                                                    <span className="d-inine-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                        05
                                                        <span className="rot60 d-inline-block theme-clr">
                                                            <i className="fa-solid fa-arrow-right"  style={{color:'#004f39'}}/>
                                                        </span>
                                                    </span>
                                                    <span className="mtitle d-block mt-6">
                                                        <Link href="/automation-services" style={{color:'#004f39'}}>
                                                          AI/ML Integration for Automation
                                                        </Link>
                                                    </span>
                                                    <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block" style={{color:'#004f39'}}>
                                                      Enhance automation capabilities with artificial intelligence and machine learning for predictive analytics, decision-making, and process optimization.
                                                    </span>
                                                </div>
                                                <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                                    <ul className="modern-list d-grid gap-2">
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" />Predictive Process Analytics
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" />Intelligent Decision Automation
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" />Natural Language Processing
                                                        </li>
                                                        <li className="d-flex align-items-center gap-2">
                                                            <i className="fas fa-chevron-right" />Continuous Learning & Optimization
                                                        </li>
                                                    </ul>
                                                    <div className="tab-remove-thumb">
                                                        <img src="/assets/img/E26media/website/3.png" alt="AI ML Integration" />
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
                                        <img src="/assets/img/E26media/ourworks/superstudy.png" alt="Automation Project" className="w-100"  style={{borderRadius:'10px'}}/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="study-thumb-slide w-100">
                                        <img src="/assets/img/E26media/ourworks/Al Mirath.webp" alt="Automation Case Study" className="w-100" style={{borderRadius:'10px'}} />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="study-thumb-slide w-100">
                                        <img src="/assets/img/E26media/works/HEVN.png" alt="Automation Success" className="w-100" style={{borderRadius:'10px'}}/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="study-thumb-slide w-100">
                                        <img src="/assets/img/E26media/ourworks/wafa.png" alt="Automation Results" className="w-100"  style={{borderRadius:'10px'}}/>
                                    </div>
                                </SwiperSlide>
                               
                            </Swiper>
                        </div>
                        <div className="slider-button d-flex align-items-center justify-content-between py-xxl-6 py-xl-5 py-4">
                            <div className="d-flex align-items-center gap-xxl-5 gap-3 gap-2">
                                <button className="cmn-prev cmn-border d-center" tabIndex={0} aria-label="Previous slide">
                                    <i className="fas fa-chevron-left" />
                                </button>
                                <span className="fw-bold white-clr previus-text text-capitalize">
                                    previous
                                </span>
                            </div>
                            <h3 className="project-storke">
                                Automation Solutions
                            </h3>
                            <div className="d-flex align-items-center gap-xxl-5 gap-3 gap-2">
                                <span className="fw-bold white-clr previus-text text-capitalize">
                                    Next
                                </span>
                                <button className="cmn-next cmn-border d-center" tabIndex={0} aria-label="Next slide">
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
    }
  `}
</style>

            </Layout>
        </>
    )
}