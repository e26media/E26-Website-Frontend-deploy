'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function DataScienceInternship() {
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
                subject: 'Data Science Internship',
                specificService: 'Internship Application',
                message: formData.message || 'Interested in Data Science Internship'
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
                                <div className="cmn-textslide">Data Science Internship</div>
                                <div><img src="/assets/img/E26media/elements/text-slide.png" alt="img" /></div>
                                <div className="cmn-textslide text-custom-storke">Data Science Internship</div>
                                <div><img src="/assets/img/E26media/elements/text-slide.png" alt="img" /></div>
                            </div>
                            <div className="comm">
                                <div className="cmn-textslide">Data Science Internship</div>
                                <div><img src="/assets/img/E26media/elements/text-slide.png" alt="img" /></div>
                                <div className="cmn-textslide text-custom-storke">Data Science Internship</div>
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
                                        src="/assets/img/E26media/service/data-science.png" 
                                        alt="Data Science Internship" 
                                        className="w-100" 
                                        style={{ borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
                                    />
                                </div>
                            </div>
                            
                            <h1 className="white-clr mb-xxl-5 mb-xl-5 mb-lg-4 mb-4 text-center" style={{ fontSize: '2.5rem', fontWeight: '700' }} data-aos="zoom-in-left" data-aos-duration={1600}>
                                Data Science Internship
                            </h1>
                            <h2 className="text-center mb-xxl-5 mb-xl-4 mb-lg-4 mb-3" style={{ color: '#004f39', fontSize: '1.5rem', fontWeight: '500' }}>
                                Build intelligent systems. Analyse real-world data. Become industry-ready in Data Science.
                            </h2>
                            
                            {/* Duration and Mode */}
                            <div className="d-flex flex-wrap align-items-center justify-content-center gap-xxl-4 gap-xl-3 gap-2 mb-xxl-5 mb-xl-4 mb-lg-4 mb-3">
                                <span className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3" style={{ color: '#004f39', borderColor: '#004f39' }}>
                                    <i className="far fa-clock me-2"></i>Duration: 1 / 2 / 3 Months
                                </span>
                                <span className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3" style={{ color: '#004f39', borderColor: '#004f39' }}>
                                    <i className="far fa-calendar-alt me-2"></i>Mode: Live + Practical + Industry Project-Based
                                </span>
                                <span className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3" style={{ color: '#004f39', borderColor: '#004f39' }}>
                                    <i className="fas fa-graduation-cap me-2"></i>Eligibility: Engineering, IT, CS, Mathematics, Statistics
                                </span>
                            </div>
                            
                            {/* CTA Buttons */}
                            <div className="d-flex flex-wrap align-items-center justify-content-center gap-xxl-4 gap-xl-3 gap-3" data-aos="zoom-in-left" data-aos-duration={1800}>
                                <a href="#apply-form" className="radius-btn py-xxl-3 py-2 px-xxl-5 px-4" style={{ backgroundColor: '#004f39', color: 'white', fontWeight: '600', textDecoration: 'none' }}>
                                    👉 Apply Now
                                </a>
                                <Link href="/brochure/data-science-internship.pdf" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3" style={{ color: '#004f39', borderColor: '#004f39' }}>
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
                            <h3 className="mb-xxl-5 mb-4 white-clr" style={{ fontSize: '2rem' }}>About the Data Science Internship</h3>
                            <div className="d-flex flex-md-nowrap flex-wrap justify-content-between gap-xxl-15 gap-xl-10 gap-lg-7 gap-sm-5 gap-3 mb-xxl-9 mb-xl-8 mb-lg-7 mb-4">
                                <p className="challenge-pra1" style={{ color: 'black', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    The Data Science Internship at E26 Media Pvt Ltd is designed for students and graduates who want practical, real-world exposure to machine learning, predictive modeling, and advanced analytics.
                                    If you are searching for a Data Science Internship in Mangalore, Udupi, Bangalore, or anywhere in Karnataka, this program provides industry-oriented training with real datasets, AI-powered tools, and portfolio-ready projects.
                                </p>
                                <p style={{ color: 'black', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    Data Science is one of the fastest-growing career domains. Companies today rely heavily on data to make decisions, optimize operations, predict trends, and improve customer experiences. This internship prepares you to understand real-world business datasets, build predictive machine learning models, perform data preprocessing and feature engineering, evaluate model performance, and develop deployable AI-based solutions.
                                </p>
                            </div>

                            {/* What You'll Learn */}
                            <div className="finul-result">
                                <h3 className="mb-xxl-5 mb-4 white-clr">What You Will Work On</h3>
                                
                                <div className="row g-4 mb-xxl-6 mb-xl-5 mb-4">
                                    <div className="col-md-6">
                                        <div className="p-4" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                                            <h4 style={{ color: '#004f39', marginBottom: '20px' }}>
                                                <i className="fab fa-python me-2" style={{ color: '#004f39' }}></i>
                                                Python Programming for Data Science
                                            </h4>
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Python fundamentals</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Data structures</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Functions & libraries</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Working with datasets</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Writing clean analytical code</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-4" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                                            <h4 style={{ color: '#004f39', marginBottom: '20px' }}>
                                                <i className="fas fa-broom me-2" style={{ color: '#004f39' }}></i>
                                                Data Cleaning & Preprocessing
                                            </h4>
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Handling missing values</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Removing duplicates</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Data normalization</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Feature scaling</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Encoding categorical variables</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="row g-4 mb-xxl-6 mb-xl-5 mb-4">
                                    <div className="col-md-6">
                                        <div className="p-4" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                                            <h4 style={{ color: '#004f39', marginBottom: '20px' }}>
                                                <i className="fas fa-chart-line me-2" style={{ color: '#004f39' }}></i>
                                                Exploratory Data Analysis (EDA)
                                            </h4>
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Understanding data distributions</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Identifying trends & patterns</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Correlation analysis</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Visualizing insights</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Generating data-driven hypotheses</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-4" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                                            <h4 style={{ color: '#004f39', marginBottom: '20px' }}>
                                                <i className="fas fa-calculator me-2" style={{ color: '#004f39' }}></i>
                                                Statistical Foundations
                                            </h4>
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Probability basics</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Mean, median, variance</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Hypothesis testing</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Sampling concepts</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Statistical reasoning in ML</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="row g-4 mb-xxl-6 mb-xl-5 mb-4">
                                    <div className="col-md-6">
                                        <div className="p-4" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                                            <h4 style={{ color: '#004f39', marginBottom: '20px' }}>
                                                <i className="fas fa-robot me-2" style={{ color: '#004f39' }}></i>
                                                Supervised & Unsupervised Learning
                                            </h4>
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Linear Regression</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Logistic Regression</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Decision Trees</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Random Forest</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>K-Means Clustering</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-4" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                                            <h4 style={{ color: '#004f39', marginBottom: '20px' }}>
                                                <i className="fas fa-chart-bar me-2" style={{ color: '#004f39' }}></i>
                                                Model Evaluation & Optimization
                                            </h4>
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Confusion Matrix</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Accuracy, Precision, Recall</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Cross-validation</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Hyperparameter tuning</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Avoiding overfitting</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="row g-4 mb-xxl-6 mb-xl-5 mb-4">
                                    <div className="col-md-12">
                                        <div className="p-4" style={{ background: '#f8f9fa', borderRadius: '12px' }}>
                                            <h4 style={{ color: '#004f39', marginBottom: '20px' }}>
                                                <i className="fas fa-briefcase me-2" style={{ color: '#004f39' }}></i>
                                                Real-Time Case Studies
                                            </h4>
                                            <ul className="list-unstyled row">
                                                <div className="col-md-6">
                                                    <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Business prediction problems</li>
                                                    <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Sales forecasting</li>
                                                    <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Customer segmentation</li>
                                                </div>
                                                <div className="col-md-6">
                                                    <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Classification tasks</li>
                                                    <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Data-driven decision-making scenarios</li>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Tools Covered */}
                                <h3 className="mb-xxl-4 mb-xl-3 mb-3 white-clr">Tools & Technologies Covered</h3>
                                <div className="d-flex flex-wrap gap-3 mb-xxl-6 mb-xl-5 mb-4">
                                    <span className="badge p-3 px-4" style={{ background: '#e8f5e9', color: '#004f39', fontSize: '1rem' }}>Python</span>
                                    <span className="badge p-3 px-4" style={{ background: '#e8f5e9', color: '#004f39', fontSize: '1rem' }}>Pandas</span>
                                    <span className="badge p-3 px-4" style={{ background: '#e8f5e9', color: '#004f39', fontSize: '1rem' }}>NumPy</span>
                                    <span className="badge p-3 px-4" style={{ background: '#e8f5e9', color: '#004f39', fontSize: '1rem' }}>Matplotlib</span>
                                    <span className="badge p-3 px-4" style={{ background: '#e8f5e9', color: '#004f39', fontSize: '1rem' }}>Seaborn</span>
                                    <span className="badge p-3 px-4" style={{ background: '#e8f5e9', color: '#004f39', fontSize: '1rem' }}>Scikit-learn</span>
                                    <span className="badge p-3 px-4" style={{ background: '#e8f5e9', color: '#004f39', fontSize: '1rem' }}>Jupyter Notebook</span>
                                </div>

                                {/* Live Project / Capstone */}
                                <h3 className="mb-xxl-4 mb-xl-3 mb-3 white-clr">Capstone Project</h3>
                                <div className="p-4 mb-xxl-6 mb-xl-5 mb-4" style={{ background: '#f8f9fa', borderRadius: '12px' }}>
                                    <p style={{ fontSize: '1.1rem', color: '#333', marginBottom: '15px' }}>
                                        As part of the internship, you will:
                                    </p>
                                    <ul className="list-unstyled row">
                                        <div className="col-md-6">
                                            <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Select or be assigned a real-world dataset</li>
                                            <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Perform complete data cleaning & EDA</li>
                                            <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Train machine learning models</li>
                                        </div>
                                        <div className="col-md-6">
                                            <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Optimize performance</li>
                                            <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Evaluate model accuracy</li>
                                            <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Present insights with proper reporting</li>
                                        </div>
                                    </ul>
                                    <p className="mt-3" style={{ fontStyle: 'italic', color: '#004f39' }}>
                                        Your final capstone project becomes a portfolio-ready Data Science case study that strengthens your resume and interview profile.
                                    </p>
                                </div>

                                {/* Why Choose E26 Media */}
                                <h3 className="mb-xxl-4 mb-xl-3 mb-3 white-clr">Why Choose E26 Media for Data Science Internship?</h3>
                                <div className="row g-4 mb-xxl-6 mb-xl-5 mb-4">
                                    <div className="col-md-4">
                                        <div className="p-3 text-center">
                                            <i className="fas fa-check-circle fa-2x mb-2" style={{ color: '#004f39' }}></i>
                                            <p>Hands-on, implementation-focused training</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="p-3 text-center">
                                            <i className="fas fa-check-circle fa-2x mb-2" style={{ color: '#004f39' }}></i>
                                            <p>Real-world dataset exposure</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="p-3 text-center">
                                            <i className="fas fa-check-circle fa-2x mb-2" style={{ color: '#004f39' }}></i>
                                            <p>Industry-relevant ML projects</p>
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
                                            <p>Portfolio-ready capstone</p>
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
                                                <span style={{ fontWeight: '600', color: '#004f39' }}>Python for Data Science</span>
                                                <span style={{ fontWeight: '600', color: '#004f39' }}>100%</span>
                                            </div>
                                            <div className="progress" style={{ height: '10px', borderRadius: '10px', backgroundColor: '#e0e0e0' }}>
                                                <div className="progress-bar" style={{ width: '100%', backgroundColor: '#004f39', borderRadius: '10px' }}></div>
                                            </div>
                                            <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>Python, Pandas, NumPy fundamentals</p>
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
                                            <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>Supervised & Unsupervised Learning</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="progress-item">
                                            <div className="d-flex justify-content-between mb-2">
                                                <span style={{ fontWeight: '600', color: '#004f39' }}>EDA & Visualization</span>
                                                <span style={{ fontWeight: '600', color: '#004f39' }}>90%</span>
                                            </div>
                                            <div className="progress" style={{ height: '10px', borderRadius: '10px', backgroundColor: '#e0e0e0' }}>
                                                <div className="progress-bar" style={{ width: '90%', backgroundColor: '#004f39', borderRadius: '10px' }}></div>
                                            </div>
                                            <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>Matplotlib, Seaborn, Pattern Identification</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="progress-item">
                                            <div className="d-flex justify-content-between mb-2">
                                                <span style={{ fontWeight: '600', color: '#004f39' }}>Statistics & Probability</span>
                                                <span style={{ fontWeight: '600', color: '#004f39' }}>85%</span>
                                            </div>
                                            <div className="progress" style={{ height: '10px', borderRadius: '10px', backgroundColor: '#e0e0e0' }}>
                                                <div className="progress-bar" style={{ width: '85%', backgroundColor: '#004f39', borderRadius: '10px' }}></div>
                                            </div>
                                            <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>Hypothesis Testing, Statistical Inference</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Career Opportunities */}
                                <h3 className="mb-xxl-5 mb-4 white-clr mt-xxl-6 mt-xl-5 mt-4">Career Opportunities After Completion</h3>
                                <div className="row g-4 mb-xxl-8 mb-xl-6 mb-5">
                                    <div className="col-md-3 col-6">
                                        <div className="text-center p-3">
                                            <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                                                <i className="fas fa-brain fa-2x" style={{ color: '#004f39' }}></i>
                                            </div>
                                            <h5 style={{ color: '#004f39', fontSize: '1rem' }}>Data Science Intern</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="text-center p-3">
                                            <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                                                <i className="fas fa-robot fa-2x" style={{ color: '#004f39' }}></i>
                                            </div>
                                            <h5 style={{ color: '#004f39', fontSize: '1rem' }}>Junior Data Scientist</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="text-center p-3">
                                            <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                                                <i className="fas fa-microchip fa-2x" style={{ color: '#004f39' }}></i>
                                            </div>
                                            <h5 style={{ color: '#004f39', fontSize: '1rem' }}>Machine Learning Associate</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="text-center p-3">
                                            <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                                                <i className="fas fa-chart-line fa-2x" style={{ color: '#004f39' }}></i>
                                            </div>
                                            <h5 style={{ color: '#004f39', fontSize: '1rem' }}>Data Analyst</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6 mx-auto">
                                        <div className="text-center p-3">
                                            <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                                                <i className="fas fa-search fa-2x" style={{ color: '#004f39' }}></i>
                                            </div>
                                            <h5 style={{ color: '#004f39', fontSize: '1rem' }}>Research Analyst</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6 mx-auto">
                                        <div className="text-center p-3">
                                            <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                                                <i className="fas fa-cogs fa-2x" style={{ color: '#004f39' }}></i>
                                            </div>
                                            <h5 style={{ color: '#004f39', fontSize: '1rem' }}>AI Associate</h5>
                                        </div>
                                    </div>
                                </div>

                                {/* FAQs */}
                                <h3 className="mb-xxl-4 mb-xl-3 mb-3 white-clr">FAQs – Data Science Internship</h3>
                                <div className="accordion mb-xxl-8 mb-xl-6 mb-5" id="faqAccordion">
                                    <div className="accordion-item mb-3" style={{ border: '1px solid #004f39', borderRadius: '10px' }}>
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" style={{ color: '#004f39', fontWeight: '600' }}>
                                                1. Is this internship beginner-friendly?
                                            </button>
                                        </h2>
                                        <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Yes. We start from Python fundamentals and gradually move toward advanced machine learning concepts step-by-step.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mb-3" style={{ border: '1px solid #004f39', borderRadius: '10px' }}>
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" style={{ color: '#004f39', fontWeight: '600' }}>
                                                2. Will I work on real datasets?
                                            </button>
                                        </h2>
                                        <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Yes. You will work on real-world industry datasets and build portfolio-ready projects.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mb-3" style={{ border: '1px solid #004f39', borderRadius: '10px' }}>
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" style={{ color: '#004f39', fontWeight: '600' }}>
                                                3. Is certification provided?
                                            </button>
                                        </h2>
                                        <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Yes. You receive an official Internship Completion Certificate from E26 Media Pvt Ltd after successful completion.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mb-3" style={{ border: '1px solid #004f39', borderRadius: '10px' }}>
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" style={{ color: '#004f39', fontWeight: '600' }}>
                                                4. Is this internship available in Mangalore & Bangalore?
                                            </button>
                                        </h2>
                                        <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Yes. We provide Data Science Internship opportunities for students across Mangalore, Udupi, Bangalore, and Karnataka.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mb-3" style={{ border: '1px solid #004f39', borderRadius: '10px' }}>
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5" style={{ color: '#004f39', fontWeight: '600' }}>
                                                5. Do I need prior coding knowledge?
                                            </button>
                                        </h2>
                                        <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Basic Python knowledge is helpful, but we guide you from foundational programming before moving into ML algorithms.
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
                                                    Apply for Data Science Internship
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