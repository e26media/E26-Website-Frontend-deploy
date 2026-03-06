'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState, useEffect } from "react"
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
        1199: { slidesPerView: 3 },
        991: { slidesPerView: 3 },
        767: { slidesPerView: 3 },
        575: { slidesPerView: 3 },
        0: { slidesPerView: 3 },
    },
}

export default function FullStackDevelopmentCourse() {
    const [isAccordion, setIsAccordion] = useState(1)
    const handleAccordion = (key) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }

    // Form State
    const [isMounted, setIsMounted] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // Handle form submission to Google Sheets
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)

        try {
            const scriptURL = 'https://script.google.com/macros/s/AKfycbzx7JNe9uRJFX0UA6GXbhr04mD4aeGXMxj0EiH236zA7sodlQqSSDf7k0jZrX4pCE6p/exec'
            
            const formDataToSend = {
                timestamp: new Date().toLocaleString('en-IN', { 
                    timeZone: 'Asia/Kolkata',
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                }),
                name: formData.name,
                email: formData.email,
                contact: formData.contact,
                subject: 'Full Stack Development Course',
                specificService: 'Course Application',
                message: formData.message || 'Interested in Full Stack Development Course'
            }

            await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formDataToSend)
            })

            setSubmitStatus({
                type: 'success',
                message: 'Thank you for your interest! Our course advisor will contact you shortly.'
            })
            
            setFormData({
                name: '',
                email: '',
                contact: '',
                message: ''
            })

        } catch (error) {
            console.error('Form submission error:', error)
            setSubmitStatus({
                type: 'error',
                message: 'Failed to send message. Please try again later.'
            })
        } finally {
            setIsSubmitting(false)
            setTimeout(() => setSubmitStatus(null), 5000)
        }
    }

    if (!isMounted) {
        return (
            <Layout headerStyle={2} footerStyle={2}>
                <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div className="text-center">
                        <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }

    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                {/* Animated Text Banner */}
                <div className="digital-solution mb-xxl-4 pb-lg-0 pb-15" style={{ marginTop: '130px' }}>
                    <div className="mycustom-marque">
                        <div className="scrolling-wrap">
                            <div className="comm">
                                <div className="cmn-textslide">Full Stack Development Course</div>
                                <div><img src="/assets/img/E26media/elements/text-slide.png" alt="img" /></div>
                                <div className="cmn-textslide text-custom-storke">Full Stack Development Course</div>
                                <div><img src="/assets/img/E26media/elements/text-slide.png" alt="img" /></div>
                            </div>
                            <div className="comm">
                                <div className="cmn-textslide">Full Stack Development Course</div>
                                <div><img src="/assets/img/E26media/elements/text-slide.png" alt="img" /></div>
                                <div className="cmn-textslide text-custom-storke">Full Stack Development Course</div>
                                <div><img src="/assets/img/E26media/elements/text-slide.png" alt="img" /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="Service-details pb-space" style={{ backgroundColor: 'white', marginTop: '-30px' }}>
                    <div className="container">
                        {/* Header with Image */}
                        <div className="service-details-header bb-border pb-xxl-9 pb-xl-7 pb-6">
                            <div className="d-flex justify-content-center mb-xxl-12 mb-xl-9 mb-sm-6 mb-5" data-aos="zoom-in" data-aos-duration={1500}>
                                <div style={{ width: '50%', maxWidth: '600px', margin: '0 auto' }}>
                                    <img 
                                        src="/assets/img/E26media/service/Website Development.png" 
                                        alt="Full Stack Development Course" 
                                        className="w-100" 
                                        style={{ borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
                                    />
                                </div>
                            </div>
                            
                            <h1 className="white-clr mb-xxl-5 mb-xl-5 mb-lg-4 mb-4 text-center" style={{ fontSize: '2.5rem', fontWeight: '700' }} data-aos="zoom-in-left" data-aos-duration={1600}>
                                Full Stack Development Training Program
                            </h1>
                            <h2 className="text-center mb-xxl-5 mb-xl-4 mb-lg-4 mb-3" style={{ color: '#004f39', fontSize: '1.5rem', fontWeight: '500' }}>
                                Build Complete Web Applications.
                            </h2>
                            
                            {/* Duration and Mode */}
                            <div className="d-flex flex-wrap align-items-center justify-content-center gap-xxl-4 gap-xl-3 gap-2 mb-xxl-5 mb-xl-4 mb-lg-4 mb-3">
                                <span className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3" style={{ color: '#004f39', borderColor: '#004f39' }}>
                                    <i className="far fa-clock me-2"></i>Duration: 3–6 Months
                                </span>
                                <span className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3" style={{ color: '#004f39', borderColor: '#004f39' }}>
                                    <i className="far fa-calendar-alt me-2"></i>Mode: Live Coding + Project-Based
                                </span>
                            </div>
                            
                            {/* CTA Buttons */}
                            <div className="d-flex flex-wrap align-items-center justify-content-center gap-xxl-4 gap-xl-3 gap-3" data-aos="zoom-in-left" data-aos-duration={1800}>
                                <a href="#apply-form" className="radius-btn py-xxl-3 py-2 px-xxl-5 px-4" style={{ backgroundColor: '#004f39', color: 'white', fontWeight: '600', textDecoration: 'none' }}>
                                    👉 Apply Now
                                </a>
                                <Link href="/brochure/full-stack-development.pdf" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3" style={{ color: '#004f39', borderColor: '#004f39' }}>
                                    📄 Download Brochure
                                </Link>
                            </div>
                            
                            {/* Location Badges */}
                            <div className="d-flex flex-wrap align-items-center justify-content-center gap-xxl-3 gap-xl-2 gap-2 mt-xxl-5 mt-xl-4 mt-lg-4 mt-3">
                                <span className="badge bg-light text-dark p-2 px-3 rounded-pill">Mangalore</span>
                                <span className="badge bg-light text-dark p-2 px-3 rounded-pill">Bangalore</span>
                                <span className="badge bg-light text-dark p-2 px-3 rounded-pill">Karnataka</span>
                            </div>
                        </div>

                        {/* About Program */}
                        <div className="case-study-detials-inner mt-xxl-10 mt-xl-7 mt-6">
                            <h3 className="mb-xxl-5 mb-4 white-clr" style={{ fontSize: '2rem' }}>About the Program</h3>
                            <div className="d-flex flex-md-nowrap flex-wrap justify-content-between gap-xxl-15 gap-xl-10 gap-lg-7 gap-sm-5 gap-3 mb-xxl-9 mb-xl-8 mb-lg-7 mb-4">
                                <p className="challenge-pra1" style={{ color: 'black', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    The Full Stack Development Training Program teaches front-end and back-end technologies to build complete web applications.
                                    Perfect for students searching for a Full Stack Development course in Karnataka.
                                </p>
                                <p style={{ color: 'black', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    You will learn to build complete web applications from scratch, master database management, API development, 
                                    and deployment through hands-on projects and real-world scenarios.
                                </p>
                            </div>

                            {/* What You'll Learn */}
                            <div className="finul-result">
                                <h3 className="mb-xxl-5 mb-4 white-clr">What You Will Learn</h3>
                                
                                <div className="row g-4 mb-xxl-6 mb-xl-5 mb-4">
                                    <div className="col-md-6">
                                        <div className="p-4" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                                            <h4 style={{ color: '#004f39', marginBottom: '20px' }}>
                                                <i className="fas fa-code me-2" style={{ color: '#004f39' }}></i>
                                                Front-End Development
                                            </h4>
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>HTML5</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>CSS3</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>JavaScript</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Responsive design</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-4" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                                            <h4 style={{ color: '#004f39', marginBottom: '20px' }}>
                                                <i className="fas fa-server me-2" style={{ color: '#004f39' }}></i>
                                                Back-End Development
                                            </h4>
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Server-side programming</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>REST APIs</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Database integration</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="row g-4 mb-xxl-6 mb-xl-5 mb-4">
                                    <div className="col-md-6">
                                        <div className="p-4" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                                            <h4 style={{ color: '#004f39', marginBottom: '20px' }}>
                                                <i className="fas fa-database me-2" style={{ color: '#004f39' }}></i>
                                                Database Management
                                            </h4>
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>SQL</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Database design</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>CRUD operations</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-4" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                                            <h4 style={{ color: '#004f39', marginBottom: '20px' }}>
                                                <i className="fas fa-cloud-upload-alt me-2" style={{ color: '#004f39' }}></i>
                                                Deployment
                                            </h4>
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Hosting basics</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Version control</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Project deployment</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Capstone Project */}
                                <h3 className="mb-xxl-4 mb-xl-3 mb-3 white-clt">Capstone Project</h3>
                                <div className="p-4 mb-xxl-6 mb-xl-5 mb-4" style={{ background: '#f8f9fa', borderRadius: '12px' }}>
                                    <p style={{ fontSize: '1.1rem', color: '#333' }}>
                                        Develop and deploy a complete web application.
                                    </p>
                                </div>

                                {/* Stylish Progress Bars */}
                                <div className="row mt-xxl-8 mt-xl-6 mt-5">
                                    <div className="col-md-6 mb-4">
                                        <div className="progress-item">
                                            <div className="d-flex justify-content-between mb-2">
                                                <span style={{ fontWeight: '600', color: '#004f39' }}>Front-End Mastery</span>
                                                <span style={{ fontWeight: '600', color: '#004f39' }}>100%</span>
                                            </div>
                                            <div className="progress" style={{ height: '10px', borderRadius: '10px', backgroundColor: '#e0e0e0' }}>
                                                <div className="progress-bar" style={{ width: '100%', backgroundColor: '#004f39', borderRadius: '10px' }}></div>
                                            </div>
                                            <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>HTML5, CSS3, JavaScript, Responsive Design</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="progress-item">
                                            <div className="d-flex justify-content-between mb-2">
                                                <span style={{ fontWeight: '600', color: '#004f39' }}>Back-End Development</span>
                                                <span style={{ fontWeight: '600', color: '#004f39' }}>95%</span>
                                            </div>
                                            <div className="progress" style={{ height: '10px', borderRadius: '10px', backgroundColor: '#e0e0e0' }}>
                                                <div className="progress-bar" style={{ width: '95%', backgroundColor: '#004f39', borderRadius: '10px' }}></div>
                                            </div>
                                            <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>Server-side Programming, REST APIs</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="progress-item">
                                            <div className="d-flex justify-content-between mb-2">
                                                <span style={{ fontWeight: '600', color: '#004f39' }}>Database Management</span>
                                                <span style={{ fontWeight: '600', color: '#004f39' }}>90%</span>
                                            </div>
                                            <div className="progress" style={{ height: '10px', borderRadius: '10px', backgroundColor: '#e0e0e0' }}>
                                                <div className="progress-bar" style={{ width: '90%', backgroundColor: '#004f39', borderRadius: '10px' }}></div>
                                            </div>
                                            <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>SQL, Database Design, CRUD Operations</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="progress-item">
                                            <div className="d-flex justify-content-between mb-2">
                                                <span style={{ fontWeight: '600', color: '#004f39' }}>Deployment & DevOps</span>
                                                <span style={{ fontWeight: '600', color: '#004f39' }}>85%</span>
                                            </div>
                                            <div className="progress" style={{ height: '10px', borderRadius: '10px', backgroundColor: '#e0e0e0' }}>
                                                <div className="progress-bar" style={{ width: '85%', backgroundColor: '#004f39', borderRadius: '10px' }}></div>
                                            </div>
                                            <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>Hosting, Version Control, Project Deployment</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Career Opportunities */}
                                <h3 className="mb-xxl-5 mb-4 white-clr mt-xxl-6 mt-xl-5 mt-4">Career Opportunities</h3>
                                <div className="row g-4 mb-xxl-8 mb-xl-6 mb-5">
                                    <div className="col-md-3 col-6">
                                        <div className="text-center p-3">
                                            <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                                                <i className="fas fa-laptop-code fa-2x" style={{ color: '#004f39' }}></i>
                                            </div>
                                            <h5 style={{ color: '#004f39', fontSize: '1rem' }}>Full Stack Developer</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="text-center p-3">
                                            <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                                                <i className="fas fa-code fa-2x" style={{ color: '#004f39' }}></i>
                                            </div>
                                            <h5 style={{ color: '#004f39', fontSize: '1rem' }}>Web Developer</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="text-center p-3">
                                            <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                                                <i className="fas fa-paint-brush fa-2x" style={{ color: '#004f39' }}></i>
                                            </div>
                                            <h5 style={{ color: '#004f39', fontSize: '1rem' }}>Front-End Developer</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="text-center p-3">
                                            <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                                                <i className="fas fa-server fa-2x" style={{ color: '#004f39' }}></i>
                                            </div>
                                            <h5 style={{ color: '#004f39', fontSize: '1rem' }}>Back-End Developer</h5>
                                        </div>
                                    </div>
                                </div>

                                {/* Application Form Section */}
                                <div id="apply-form" className="apply-form-section mt-xxl-8 mt-xl-6 mt-5">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <div className="form-container" style={{
                                                background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
                                                borderRadius: '20px',
                                                padding: '40px',
                                                boxShadow: '0 10px 30px rgba(0,79,57,0.1)',
                                                border: '1px solid rgba(0,79,57,0.2)'
                                            }}>
                                                <h3 style={{ color: '#004f39', marginBottom: '10px', textAlign: 'center' }}>
                                                    Apply for Full Stack Development Course
                                                </h3>
                                                <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
                                                    Fill in your details and our course advisor will contact you shortly
                                                </p>

                                                {submitStatus && (
                                                    <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`} style={{
                                                        padding: '15px',
                                                        borderRadius: '10px',
                                                        textAlign: 'center'
                                                    }}>
                                                        {submitStatus.message}
                                                    </div>
                                                )}

                                                <form onSubmit={handleSubmit}>
                                                    <div className="row g-4">
                                                        <div className="col-md-6">
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                placeholder="Full Name *"
                                                                className="form-control"
                                                                value={formData.name}
                                                                onChange={handleInputChange}
                                                                required
                                                                style={{
                                                                    padding: '12px 15px',
                                                                    borderRadius: '10px',
                                                                    border: '1px solid #004f39',
                                                                    fontSize: '15px'
                                                                }}
                                                            />
                                                        </div>

                                                        <div className="col-md-6">
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                placeholder="Email Address *"
                                                                className="form-control"
                                                                value={formData.email}
                                                                onChange={handleInputChange}
                                                                required
                                                                style={{
                                                                    padding: '12px 15px',
                                                                    borderRadius: '10px',
                                                                    border: '1px solid #004f39',
                                                                    fontSize: '15px'
                                                                }}
                                                            />
                                                        </div>

                                                        <div className="col-md-12">
                                                            <input
                                                                type="tel"
                                                                name="contact"
                                                                placeholder="Phone Number *"
                                                                className="form-control"
                                                                value={formData.contact}
                                                                onChange={handleInputChange}
                                                                required
                                                                style={{
                                                                    padding: '12px 15px',
                                                                    borderRadius: '10px',
                                                                    border: '1px solid #004f39',
                                                                    fontSize: '15px'
                                                                }}
                                                            />
                                                        </div>

                                                        <div className="col-md-12">
                                                            <textarea
                                                                name="message"
                                                                rows="4"
                                                                placeholder="Your Message (Optional) - Tell us about your background or questions"
                                                                className="form-control"
                                                                value={formData.message}
                                                                onChange={handleInputChange}
                                                                style={{
                                                                    padding: '12px 15px',
                                                                    borderRadius: '10px',
                                                                    border: '1px solid #004f39',
                                                                    fontSize: '15px'
                                                                }}
                                                            />
                                                        </div>

                                                        <div className="col-md-12 text-center">
                                                            <button
                                                                type="submit"
                                                                disabled={isSubmitting}
                                                                style={{
                                                                    padding: '14px 40px',
                                                                    backgroundColor: '#004f39',
                                                                    color: 'white',
                                                                    border: 'none',
                                                                    borderRadius: '50px',
                                                                    fontSize: '16px',
                                                                    fontWeight: '600',
                                                                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                                                    opacity: isSubmitting ? 0.7 : 1,
                                                                    transition: 'all 0.3s ease',
                                                                    minWidth: '200px'
                                                                }}
                                                                onMouseEnter={(e) => {
                                                                    if (!isSubmitting) {
                                                                        e.target.style.backgroundColor = '#00382a'
                                                                        e.target.style.transform = 'translateY(-2px)'
                                                                    }
                                                                }}
                                                                onMouseLeave={(e) => {
                                                                    if (!isSubmitting) {
                                                                        e.target.style.backgroundColor = '#004f39'
                                                                        e.target.style.transform = 'translateY(0)'
                                                                    }
                                                                }}
                                                            >
                                                                {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>

                                                <p style={{ textAlign: 'center', color: '#999', fontSize: '13px', marginTop: '20px' }}>
                                                    Your information is secure and will not be shared with third parties
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <style>{`
                    li { color: black !important; }
                    .progress-item {
                        transition: transform 0.3s ease;
                    }
                    .progress-item:hover {
                        transform: translateY(-5px);
                    }
                    .progress-bar {
                        transition: width 1.5s ease-in-out;
                    }
                    .form-control:focus {
                        outline: none;
                        border-color: #004f39 !important;
                        box-shadow: 0 0 0 3px rgba(0,79,57,0.1);
                    }
                    .alert-success {
                        background-color: #d4edda;
                        border: 1px solid #c3e6cb;
                        color: #155724;
                    }
                    .alert-danger {
                        background-color: #f8d7da;
                        border: 1px solid #f5c6cb;
                        color: #721c24;
                    }
                    .apply-form-section {
                        scroll-margin-top: 140px;
                    }
                `}</style>
            </Layout>
        </>
    )
}