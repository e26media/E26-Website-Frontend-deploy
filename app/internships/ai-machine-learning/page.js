'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function AIMachineLearningInternship() {
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
                subject: 'AI & Machine Learning Internship',
                specificService: 'Internship Application',
                message: formData.message || 'Interested in AI & Machine Learning Internship'
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
                message: 'Thank you for your interest! Our team will contact you shortly.'
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
                                <div className="cmn-textslide">AI & Machine Learning Internship</div>
                                <div><img src="/assets/img/E26media/elements/text-slide.png" alt="img" /></div>
                                <div className="cmn-textslide text-custom-storke">AI & Machine Learning Internship</div>
                                <div><img src="/assets/img/E26media/elements/text-slide.png" alt="img" /></div>
                            </div>
                            <div className="comm">
                                <div className="cmn-textslide">AI & Machine Learning Internship</div>
                                <div><img src="/assets/img/E26media/elements/text-slide.png" alt="img" /></div>
                                <div className="cmn-textslide text-custom-storke">AI & Machine Learning Internship</div>
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
                                        src="/assets/img/E26media/service/Artificial intelligence.png" 
                                        alt="AI & Machine Learning Internship" 
                                        className="w-100" 
                                        style={{ borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
                                    />
                                </div>
                            </div>
                            
                            <h1 className="white-clr mb-xxl-5 mb-xl-5 mb-lg-4 mb-4 text-center" style={{ fontSize: '2.5rem', fontWeight: '700' }} data-aos="zoom-in-left" data-aos-duration={1600}>
                                AI & Machine Learning Internship
                            </h1>
                            <h2 className="text-center mb-xxl-5 mb-xl-4 mb-lg-4 mb-3" style={{ color: '#004f39', fontSize: '1.5rem', fontWeight: '500' }}>
                                Build intelligent systems. Train predictive models. Solve real-world problems using AI.
                            </h2>
                            
                            {/* Duration and Mode */}
                            <div className="d-flex flex-wrap align-items-center justify-content-center gap-xxl-4 gap-xl-3 gap-2 mb-xxl-5 mb-xl-4 mb-lg-4 mb-3">
                                <span className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3" style={{ color: '#004f39', borderColor: '#004f39' }}>
                                    <i className="far fa-clock me-2"></i>Duration: 1 / 2 / 3 Months
                                </span>
                                <span className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3" style={{ color: '#004f39', borderColor: '#004f39' }}>
                                    <i className="far fa-calendar-alt me-2"></i>Mode: Live + Practical + Project-Based
                                </span>
                                <span className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3" style={{ color: '#004f39', borderColor: '#004f39' }}>
                                    <i className="fas fa-graduation-cap me-2"></i>Eligibility: Engineering / IT / CS / Data Science
                                </span>
                            </div>
                            
                            {/* CTA Buttons */}
                            <div className="d-flex flex-wrap align-items-center justify-content-center gap-xxl-4 gap-xl-3 gap-3" data-aos="zoom-in-left" data-aos-duration={1800}>
                                <a href="#apply-form" className="radius-btn py-xxl-3 py-2 px-xxl-5 px-4" style={{ backgroundColor: '#004f39', color: 'white', fontWeight: '600', textDecoration: 'none' }}>
                                    👉 Apply Now
                                </a>
                                <Link href="/brochure/ai-machine-learning.pdf" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3" style={{ color: '#004f39', borderColor: '#004f39' }}>
                                    📄 Download Brochure
                                </Link>
                            </div>
                            
                            {/* Location Badges */}
                            <div className="d-flex flex-wrap align-items-center justify-content-center gap-xxl-3 gap-xl-2 gap-2 mt-xxl-5 mt-xl-4 mt-lg-4 mt-3">
                                <span className="badge bg-light text-dark p-2 px-3 rounded-pill">Mangalore</span>
                                <span className="badge bg-light text-dark p-2 px-3 rounded-pill">Udupi</span>
                                <span className="badge bg-light text-dark p-2 px-3 rounded-pill">Bangalore</span>
                                <span className="badge bg-light text-dark p-2 px-3 rounded-pill">Karnataka</span>
                            </div>
                        </div>

                        {/* About Program */}
                        <div className="case-study-detials-inner mt-xxl-10 mt-xl-7 mt-6">
                            <h3 className="mb-xxl-5 mb-4 white-clr" style={{ fontSize: '2rem' }}>About the AI & Machine Learning Internship</h3>
                            <div className="d-flex flex-md-nowrap flex-wrap justify-content-between gap-xxl-15 gap-xl-10 gap-lg-7 gap-sm-5 gap-3 mb-xxl-9 mb-xl-8 mb-lg-7 mb-4">
                                <p className="challenge-pra1" style={{ color: 'black', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    The AI & Machine Learning Internship at E26 Media Pvt Ltd is designed for students who want practical exposure to Artificial Intelligence, predictive modeling, and real-world AI applications.
                                    If you are searching for an AI Internship in Mangalore, Bangalore, Udupi, or anywhere in Karnataka, this internship provides hands-on implementation experience instead of just theoretical concepts.
                                </p>
                                <p style={{ color: 'black', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    Artificial Intelligence is transforming industries — from healthcare and finance to marketing and automation. 
                                    This internship prepares you to understand core AI and ML algorithms, train and evaluate predictive models, 
                                    work with real-world datasets, build intelligent automation systems, and develop portfolio-ready AI projects.
                                </p>
                            </div>

                            {/* What You'll Learn */}
                            <div className="finul-result">
                                <h3 className="mb-xxl-5 mb-4 white-clr">What You Will Learn & Implement</h3>
                                
                                <div className="row g-4 mb-xxl-6 mb-xl-5 mb-4">
                                    <div className="col-md-6">
                                        <div className="p-4" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                                            <h4 style={{ color: '#004f39', marginBottom: '20px' }}>
                                                <i className="fas fa-robot me-2" style={{ color: '#004f39' }}></i>
                                                Machine Learning Fundamentals
                                            </h4>
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Supervised & Unsupervised Learning</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Regression & Classification Models</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Clustering Algorithms</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Model Evaluation Metrics</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Bias-Variance Tradeoff</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-4" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                                            <h4 style={{ color: '#004f39', marginBottom: '20px' }}>
                                                <i className="fas fa-brain me-2" style={{ color: '#004f39' }}></i>
                                                Deep Learning Basics
                                            </h4>
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Introduction to Neural Networks</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Activation & Loss Functions</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Backpropagation Concepts</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Deep Learning Architectures</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Real-world Deep Learning Use Cases</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="row g-4 mb-xxl-6 mb-xl-5 mb-4">
                                    <div className="col-md-6">
                                        <div className="p-4" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                                            <h4 style={{ color: '#004f39', marginBottom: '20px' }}>
                                                <i className="fas fa-network-wired me-2" style={{ color: '#004f39' }}></i>
                                                Neural Networks & Model Building
                                            </h4>
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Building Neural Networks from scratch</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Training & validation techniques</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Hyperparameter tuning</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Preventing overfitting</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-4" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                                            <h4 style={{ color: '#004f39', marginBottom: '20px' }}>
                                                <i className="fas fa-chart-line me-2" style={{ color: '#004f39' }}></i>
                                                Model Optimization & Deployment
                                            </h4>
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Feature engineering</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Data preprocessing</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Cross-validation</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Basic deployment concepts</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="row g-4 mb-xxl-6 mb-xl-5 mb-4">
                                    <div className="col-md-12">
                                        <div className="p-4" style={{ background: '#f8f9fa', borderRadius: '12px' }}>
                                            <h4 style={{ color: '#004f39', marginBottom: '20px' }}>
                                                <i className="fas fa-cogs me-2" style={{ color: '#004f39' }}></i>
                                                AI Applications & Automation Systems
                                            </h4>
                                            <ul className="list-unstyled row">
                                                <div className="col-md-6">
                                                    <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>AI in business & marketing</li>
                                                    <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Recommendation systems</li>
                                                    <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Predictive analytics</li>
                                                </div>
                                                <div className="col-md-6">
                                                    <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Basic NLP concepts</li>
                                                    <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Automation using AI APIs</li>
                                                    <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>AI-powered workflow integration</li>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Tools Covered */}
                                <h3 className="mb-xxl-4 mb-xl-3 mb-3 white-clr">Tools & Technologies Covered</h3>
                                <div className="d-flex flex-wrap gap-3 mb-xxl-6 mb-xl-5 mb-4">
                                    <span className="badge p-3 px-4" style={{ background: '#e8f5e9', color: '#004f39', fontSize: '1rem' }}>Python</span>
                                    <span className="badge p-3 px-4" style={{ background: '#e8f5e9', color: '#004f39', fontSize: '1rem' }}>NumPy & Pandas</span>
                                    <span className="badge p-3 px-4" style={{ background: '#e8f5e9', color: '#004f39', fontSize: '1rem' }}>Scikit-learn</span>
                                    <span className="badge p-3 px-4" style={{ background: '#e8f5e9', color: '#004f39', fontSize: '1rem' }}>TensorFlow / Keras</span>
                                    <span className="badge p-3 px-4" style={{ background: '#e8f5e9', color: '#004f39', fontSize: '1rem' }}>Jupyter Notebook</span>
                                    <span className="badge p-3 px-4" style={{ background: '#e8f5e9', color: '#004f39', fontSize: '1rem' }}>AI APIs</span>
                                </div>

                                {/* Live Project / Capstone */}
                                <h3 className="mb-xxl-4 mb-xl-3 mb-3 white-clr">Live Project / Capstone</h3>
                                <div className="p-4 mb-xxl-6 mb-xl-5 mb-4" style={{ background: '#f8f9fa', borderRadius: '12px' }}>
                                    <p style={{ fontSize: '1.1rem', color: '#333', marginBottom: '15px' }}>
                                        As part of your internship, you will:
                                    </p>
                                    <ul className="list-unstyled row">
                                        <div className="col-md-6">
                                            <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Select a real-world dataset</li>
                                            <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Clean & preprocess data</li>
                                            <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Train a machine learning model</li>
                                        </div>
                                        <div className="col-md-6">
                                            <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Optimize and evaluate performance</li>
                                            <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Present your results with analysis</li>
                                            <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Demonstrate a working AI solution</li>
                                        </div>
                                    </ul>
                                    <p className="mt-3" style={{ fontStyle: 'italic', color: '#004f39' }}>
                                        Your final project becomes a portfolio-ready AI case study for placements and interviews.
                                    </p>
                                </div>

                                {/* Why Choose E26 Media */}
                                <h3 className="mb-xxl-4 mb-xl-3 mb-3 white-clr">Why Choose E26 Media for AI Internship?</h3>
                                <div className="row g-4 mb-xxl-6 mb-xl-5 mb-4">
                                    <div className="col-md-4">
                                        <div className="p-3 text-center">
                                            <i className="fas fa-check-circle fa-2x mb-2" style={{ color: '#004f39' }}></i>
                                            <p>Practical, implementation-focused training</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="p-3 text-center">
                                            <i className="fas fa-check-circle fa-2x mb-2" style={{ color: '#004f39' }}></i>
                                            <p>Real dataset exposure</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="p-3 text-center">
                                            <i className="fas fa-check-circle fa-2x mb-2" style={{ color: '#004f39' }}></i>
                                            <p>Step-by-step mentorship</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="p-3 text-center">
                                            <i className="fas fa-check-circle fa-2x mb-2" style={{ color: '#004f39' }}></i>
                                            <p>AI-integrated learning environment</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="p-3 text-center">
                                            <i className="fas fa-check-circle fa-2x mb-2" style={{ color: '#004f39' }}></i>
                                            <p>Portfolio-ready capstone project</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="p-3 text-center">
                                            <i className="fas fa-check-circle fa-2x mb-2" style={{ color: '#004f39' }}></i>
                                            <p>Internship Completion Certificate</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Stylish Progress Bars */}
                                <div className="row mt-xxl-8 mt-xl-6 mt-5">
                                    <h3 className="mb-xxl-4 mb-xl-3 mb-3 white-clr">Skill Development Progress</h3>
                                    <div className="col-md-6 mb-4">
                                        <div className="progress-item">
                                            <div className="d-flex justify-content-between mb-2">
                                                <span style={{ fontWeight: '600', color: '#004f39' }}>Python for AI/ML</span>
                                                <span style={{ fontWeight: '600', color: '#004f39' }}>100%</span>
                                            </div>
                                            <div className="progress" style={{ height: '10px', borderRadius: '10px', backgroundColor: '#e0e0e0' }}>
                                                <div className="progress-bar" style={{ width: '100%', backgroundColor: '#004f39', borderRadius: '10px' }}></div>
                                            </div>
                                            <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>Python, NumPy, Pandas fundamentals</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="progress-item">
                                            <div className="d-flex justify-content-between mb-2">
                                                <span style={{ fontWeight: '600', color: '#004f39' }}>Machine Learning</span>
                                                <span style={{ fontWeight: '600', color: '#004f39' }}>95%</span>
                                            </div>
                                            <div className="progress" style={{ height: '10px', borderRadius: '10px', backgroundColor: '#e0e0e0' }}>
                                                <div className="progress-bar" style={{ width: '95%', backgroundColor: '#004f39', borderRadius: '10px' }}></div>
                                            </div>
                                            <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>Supervised, Unsupervised, Model Evaluation</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="progress-item">
                                            <div className="d-flex justify-content-between mb-2">
                                                <span style={{ fontWeight: '600', color: '#004f39' }}>Deep Learning</span>
                                                <span style={{ fontWeight: '600', color: '#004f39' }}>90%</span>
                                            </div>
                                            <div className="progress" style={{ height: '10px', borderRadius: '10px', backgroundColor: '#e0e0e0' }}>
                                                <div className="progress-bar" style={{ width: '90%', backgroundColor: '#004f39', borderRadius: '10px' }}></div>
                                            </div>
                                            <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>Neural Networks, TensorFlow/Keras</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="progress-item">
                                            <div className="d-flex justify-content-between mb-2">
                                                <span style={{ fontWeight: '600', color: '#004f39' }}>Model Deployment</span>
                                                <span style={{ fontWeight: '600', color: '#004f39' }}>85%</span>
                                            </div>
                                            <div className="progress" style={{ height: '10px', borderRadius: '10px', backgroundColor: '#e0e0e0' }}>
                                                <div className="progress-bar" style={{ width: '85%', backgroundColor: '#004f39', borderRadius: '10px' }}></div>
                                            </div>
                                            <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>Optimization, Basic Deployment Concepts</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Career Opportunities */}
                                <h3 className="mb-xxl-5 mb-4 white-clr mt-xxl-6 mt-xl-5 mt-4">Career Opportunities After Completion</h3>
                                <div className="row g-4 mb-xxl-8 mb-xl-6 mb-5">
                                    <div className="col-md-3 col-6">
                                        <div className="text-center p-3">
                                            <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                                                <i className="fas fa-robot fa-2x" style={{ color: '#004f39' }}></i>
                                            </div>
                                            <h5 style={{ color: '#004f39', fontSize: '1rem' }}>AI Engineer</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="text-center p-3">
                                            <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                                                <i className="fas fa-brain fa-2x" style={{ color: '#004f39' }}></i>
                                            </div>
                                            <h5 style={{ color: '#004f39', fontSize: '1rem' }}>Machine Learning Engineer</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="text-center p-3">
                                            <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                                                <i className="fas fa-chart-line fa-2x" style={{ color: '#004f39' }}></i>
                                            </div>
                                            <h5 style={{ color: '#004f39', fontSize: '1rem' }}>Data Science Associate</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="text-center p-3">
                                            <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                                                <i className="fas fa-search fa-2x" style={{ color: '#004f39' }}></i>
                                            </div>
                                            <h5 style={{ color: '#004f39', fontSize: '1rem' }}>AI Research Intern</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6 mx-auto">
                                        <div className="text-center p-3">
                                            <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                                                <i className="fas fa-cogs fa-2x" style={{ color: '#004f39' }}></i>
                                            </div>
                                            <h5 style={{ color: '#004f39', fontSize: '1rem' }}>Automation Developer</h5>
                                        </div>
                                    </div>
                                </div>

                                {/* FAQs */}
                                <h3 className="mb-xxl-4 mb-xl-3 mb-3 white-clr">FAQs – AI & ML Internship</h3>
                                <div className="accordion mb-xxl-8 mb-xl-6 mb-5" id="faqAccordion">
                                    <div className="accordion-item mb-3" style={{ border: '1px solid #004f39', borderRadius: '10px' }}>
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" style={{ color: '#004f39', fontWeight: '600' }}>
                                                1. Is AI difficult to learn?
                                            </button>
                                        </h2>
                                        <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                AI can seem complex initially, but we teach step-by-step with practical examples and real datasets to simplify concepts.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mb-3" style={{ border: '1px solid #004f39', borderRadius: '10px' }}>
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" style={{ color: '#004f39', fontWeight: '600' }}>
                                                2. Will I build real AI projects?
                                            </button>
                                        </h2>
                                        <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Yes. You will build at least one complete AI-based project and present it as part of your capstone.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mb-3" style={{ border: '1px solid #004f39', borderRadius: '10px' }}>
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" style={{ color: '#004f39', fontWeight: '600' }}>
                                                3. Is this internship suitable for engineering students?
                                            </button>
                                        </h2>
                                        <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Yes. This internship is especially suitable for CSE, IT, Data Science, and related engineering branches.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mb-3" style={{ border: '1px solid #004f39', borderRadius: '10px' }}>
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" style={{ color: '#004f39', fontWeight: '600' }}>
                                                4. Do I need prior programming knowledge?
                                            </button>
                                        </h2>
                                        <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Basic Python knowledge is helpful, but we guide you from fundamentals before moving to advanced ML concepts.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mb-3" style={{ border: '1px solid #004f39', borderRadius: '10px' }}>
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5" style={{ color: '#004f39', fontWeight: '600' }}>
                                                5. Is this internship available in Mangalore and Bangalore?
                                            </button>
                                        </h2>
                                        <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Yes. We offer AI internship opportunities for students across Mangalore, Udupi, Bangalore, and Karnataka.
                                            </div>
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
                                                    Apply for AI & Machine Learning Internship
                                                </h3>
                                                <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
                                                    Fill in your details and our team will contact you shortly
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
                    .accordion-button:not(.collapsed) {
                        background-color: #e8f5e9;
                        color: #004f39;
                    }
                    .accordion-button:focus {
                        box-shadow: 0 0 0 3px rgba(0,79,57,0.1);
                    }
                `}</style>
            </Layout>
        </>
    )
}