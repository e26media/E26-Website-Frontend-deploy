'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function DevOpsInternship() {
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
                subject: 'DevOps Internship',
                specificService: 'Internship Application',
                message: formData.message || 'Interested in DevOps Internship'
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
                                <div className="cmn-textslide">DevOps Internship</div>
                                <div><img src="/assets/img/E26media/elements/text-slide.png" alt="img" /></div>
                                <div className="cmn-textslide text-custom-storke">DevOps Internship</div>
                                <div><img src="/assets/img/E26media/elements/text-slide.png" alt="img" /></div>
                            </div>
                            <div className="comm">
                                <div className="cmn-textslide">DevOps Internship</div>
                                <div><img src="/assets/img/E26media/elements/text-slide.png" alt="img" /></div>
                                <div className="cmn-textslide text-custom-storke">DevOps Internship</div>
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
                                        src="/assets/img/E26media/service/devops.png" 
                                        alt="DevOps Internship" 
                                        className="w-100" 
                                        style={{ borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
                                    />
                                </div>
                            </div>
                            
                            <h1 className="white-clr mb-xxl-5 mb-xl-5 mb-lg-4 mb-4 text-center" style={{ fontSize: '2.5rem', fontWeight: '700' }} data-aos="zoom-in-left" data-aos-duration={1600}>
                                DevOps Internship
                            </h1>
                            <h2 className="text-center mb-xxl-5 mb-xl-4 mb-lg-4 mb-3" style={{ color: '#004f39', fontSize: '1.5rem', fontWeight: '500' }}>
                                Master automation. Build CI/CD pipelines. Deploy scalable cloud applications.
                            </h2>
                            
                            {/* Duration and Mode */}
                            <div className="d-flex flex-wrap align-items-center justify-content-center gap-xxl-4 gap-xl-3 gap-2 mb-xxl-5 mb-xl-4 mb-lg-4 mb-3">
                                <span className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3" style={{ color: '#004f39', borderColor: '#004f39' }}>
                                    <i className="far fa-clock me-2"></i>Duration: 1 / 2 / 3 Months
                                </span>
                                <span className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3" style={{ color: '#004f39', borderColor: '#004f39' }}>
                                    <i className="far fa-calendar-alt me-2"></i>Mode: Live + Hands-On + Project-Based
                                </span>
                                <span className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3" style={{ color: '#004f39', borderColor: '#004f39' }}>
                                    <i className="fas fa-graduation-cap me-2"></i>Eligibility: Engineering / IT / Computer Science
                                </span>
                            </div>
                            
                            {/* CTA Buttons */}
                            <div className="d-flex flex-wrap align-items-center justify-content-center gap-xxl-4 gap-xl-3 gap-3" data-aos="zoom-in-left" data-aos-duration={1800}>
                                <a href="#apply-form" className="radius-btn py-xxl-3 py-2 px-xxl-5 px-4" style={{ backgroundColor: '#004f39', color: 'white', fontWeight: '600', textDecoration: 'none' }}>
                                    👉 Apply Now
                                </a>
                                <Link href="/brochure/devops-internship.pdf" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3" style={{ color: '#004f39', borderColor: '#004f39' }}>
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
                            <h3 className="mb-xxl-5 mb-4 white-clr" style={{ fontSize: '2rem' }}>About the DevOps Internship</h3>
                            <div className="d-flex flex-md-nowrap flex-wrap justify-content-between gap-xxl-15 gap-xl-10 gap-lg-7 gap-sm-5 gap-3 mb-xxl-9 mb-xl-8 mb-lg-7 mb-4">
                                <p className="challenge-pra1" style={{ color: 'black', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    The DevOps Internship at E26 Media Pvt Ltd is designed for students and aspiring engineers who want practical exposure to modern software deployment, automation, and cloud infrastructure.
                                    If you are searching for a DevOps Internship in Mangalore, Bangalore, Udupi, or anywhere in Karnataka, this program provides real-world implementation experience — not just theoretical concepts.
                                </p>
                                <p style={{ color: 'black', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    In today's tech industry, companies require professionals who can automate workflows, manage cloud infrastructure, and streamline deployments. This internship prepares you with hands-on experience in Continuous Integration & Continuous Deployment (CI/CD), Containerization & Microservices, Cloud Hosting & Deployment, and Monitoring & Infrastructure Automation.
                                </p>
                            </div>

                            {/* What You'll Learn */}
                            <div className="finul-result">
                                <h3 className="mb-xxl-5 mb-4 white-clr">What You Will Learn & Implement</h3>
                                
                                <div className="row g-4 mb-xxl-6 mb-xl-5 mb-4">
                                    <div className="col-md-6">
                                        <div className="p-4" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                                            <h4 style={{ color: '#004f39', marginBottom: '20px' }}>
                                                <i className="fab fa-linux me-2" style={{ color: '#004f39' }}></i>
                                                Linux Fundamentals
                                            </h4>
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Linux command line</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>File system management</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>User & permission handling</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Shell scripting basics</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Server environment setup</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-4" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                                            <h4 style={{ color: '#004f39', marginBottom: '20px' }}>
                                                <i className="fab fa-git-alt me-2" style={{ color: '#004f39' }}></i>
                                                Git & Version Control
                                            </h4>
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Git fundamentals</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Branching strategies</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Merging & conflict resolution</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>GitHub workflow</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Managing collaborative repositories</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="row g-4 mb-xxl-6 mb-xl-5 mb-4">
                                    <div className="col-md-6">
                                        <div className="p-4" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                                            <h4 style={{ color: '#004f39', marginBottom: '20px' }}>
                                                <i className="fas fa-code-branch me-2" style={{ color: '#004f39' }}></i>
                                                CI/CD Pipeline Implementation
                                            </h4>
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Introduction to CI/CD architecture</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Automated build processes</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Continuous integration workflows</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Continuous deployment strategies</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Real-time deployment automation</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-4" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                                            <h4 style={{ color: '#004f39', marginBottom: '20px' }}>
                                                <i className="fab fa-docker me-2" style={{ color: '#004f39' }}></i>
                                                Docker & Containerization
                                            </h4>
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Docker fundamentals</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Creating Docker images</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Container management</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Docker Compose basics</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Deploying containerized applications</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="row g-4 mb-xxl-6 mb-xl-5 mb-4">
                                    <div className="col-md-6">
                                        <div className="p-4" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                                            <h4 style={{ color: '#004f39', marginBottom: '20px' }}>
                                                <i className="fas fa-cloud me-2" style={{ color: '#004f39' }}></i>
                                                Cloud Deployment Basics
                                            </h4>
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Introduction to Cloud Platforms</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Application hosting</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Virtual machines & server configuration</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Deployment best practices</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Infrastructure basics</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-4" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                                            <h4 style={{ color: '#004f39', marginBottom: '20px' }}>
                                                <i className="fas fa-chart-line me-2" style={{ color: '#004f39' }}></i>
                                                Automation & Monitoring
                                            </h4>
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Infrastructure automation concepts</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Deployment automation</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Log monitoring</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Performance tracking</li>
                                                <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Troubleshooting production environments</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Tools Covered */}
                                <h3 className="mb-xxl-4 mb-xl-3 mb-3 white-clr">Tools & Technologies Covered</h3>
                                <div className="d-flex flex-wrap gap-3 mb-xxl-6 mb-xl-5 mb-4">
                                    <span className="badge p-3 px-4" style={{ background: '#e8f5e9', color: '#004f39', fontSize: '1rem' }}>Linux</span>
                                    <span className="badge p-3 px-4" style={{ background: '#e8f5e9', color: '#004f39', fontSize: '1rem' }}>Git & GitHub</span>
                                    <span className="badge p-3 px-4" style={{ background: '#e8f5e9', color: '#004f39', fontSize: '1rem' }}>Docker</span>
                                    <span className="badge p-3 px-4" style={{ background: '#e8f5e9', color: '#004f39', fontSize: '1rem' }}>CI/CD tools</span>
                                    <span className="badge p-3 px-4" style={{ background: '#e8f5e9', color: '#004f39', fontSize: '1rem' }}>Cloud Platforms</span>
                                    <span className="badge p-3 px-4" style={{ background: '#e8f5e9', color: '#004f39', fontSize: '1rem' }}>Monitoring Tools</span>
                                </div>

                                {/* Live Project / Capstone */}
                                <h3 className="mb-xxl-4 mb-xl-3 mb-3 white-clr">Live Project / Capstone</h3>
                                <div className="p-4 mb-xxl-6 mb-xl-5 mb-4" style={{ background: '#f8f9fa', borderRadius: '12px' }}>
                                    <p style={{ fontSize: '1.1rem', color: '#333', marginBottom: '15px' }}>
                                        During the internship, you will:
                                    </p>
                                    <ul className="list-unstyled row">
                                        <div className="col-md-6">
                                            <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Build a complete CI/CD pipeline</li>
                                            <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Containerize an application using Docker</li>
                                            <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Deploy a live project to a cloud server</li>
                                        </div>
                                        <div className="col-md-6">
                                            <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Automate build & deployment process</li>
                                            <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#004f39' }}></i>Monitor performance and troubleshoot errors</li>
                                        </div>
                                    </ul>
                                    <p className="mt-3" style={{ fontStyle: 'italic', color: '#004f39' }}>
                                        You will present your final deployment architecture as a portfolio-ready project.
                                    </p>
                                </div>

                                {/* Why Choose E26 Media */}
                                <h3 className="mb-xxl-4 mb-xl-3 mb-3 white-clr">Why Choose E26 Media for DevOps Internship?</h3>
                                <div className="row g-4 mb-xxl-6 mb-xl-5 mb-4">
                                    <div className="col-md-4">
                                        <div className="p-3 text-center">
                                            <i className="fas fa-check-circle fa-2x mb-2" style={{ color: '#004f39' }}></i>
                                            <p>Industry-oriented training</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="p-3 text-center">
                                            <i className="fas fa-check-circle fa-2x mb-2" style={{ color: '#004f39' }}></i>
                                            <p>Real-time project implementation</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="p-3 text-center">
                                            <i className="fas fa-check-circle fa-2x mb-2" style={{ color: '#004f39' }}></i>
                                            <p>AI-integrated development environment</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="p-3 text-center">
                                            <i className="fas fa-check-circle fa-2x mb-2" style={{ color: '#004f39' }}></i>
                                            <p>Portfolio-ready deployment experience</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="p-3 text-center">
                                            <i className="fas fa-check-circle fa-2x mb-2" style={{ color: '#004f39' }}></i>
                                            <p>Internship Completion Certificate</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="p-3 text-center">
                                            <i className="fas fa-check-circle fa-2x mb-2" style={{ color: '#004f39' }}></i>
                                            <p>Mentorship from experienced professionals</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Stylish Progress Bars */}
                                <div className="row mt-xxl-8 mt-xl-6 mt-5">
                                    <h3 className="mb-xxl-4 mb-xl-3 mb-3 white-clr">Skill Development Progress</h3>
                                    <div className="col-md-6 mb-4">
                                        <div className="progress-item">
                                            <div className="d-flex justify-content-between mb-2">
                                                <span style={{ fontWeight: '600', color: '#004f39' }}>Linux & Scripting</span>
                                                <span style={{ fontWeight: '600', color: '#004f39' }}>100%</span>
                                            </div>
                                            <div className="progress" style={{ height: '10px', borderRadius: '10px', backgroundColor: '#e0e0e0' }}>
                                                <div className="progress-bar" style={{ width: '100%', backgroundColor: '#004f39', borderRadius: '10px' }}></div>
                                            </div>
                                            <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>Command Line, Shell Scripting, Server Setup</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="progress-item">
                                            <div className="d-flex justify-content-between mb-2">
                                                <span style={{ fontWeight: '600', color: '#004f39' }}>Git & Version Control</span>
                                                <span style={{ fontWeight: '600', color: '#004f39' }}>95%</span>
                                            </div>
                                            <div className="progress" style={{ height: '10px', borderRadius: '10px', backgroundColor: '#e0e0e0' }}>
                                                <div className="progress-bar" style={{ width: '95%', backgroundColor: '#004f39', borderRadius: '10px' }}></div>
                                            </div>
                                            <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>Branching, Merging, GitHub Workflow</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="progress-item">
                                            <div className="d-flex justify-content-between mb-2">
                                                <span style={{ fontWeight: '600', color: '#004f39' }}>CI/CD Pipelines</span>
                                                <span style={{ fontWeight: '600', color: '#004f39' }}>90%</span>
                                            </div>
                                            <div className="progress" style={{ height: '10px', borderRadius: '10px', backgroundColor: '#e0e0e0' }}>
                                                <div className="progress-bar" style={{ width: '90%', backgroundColor: '#004f39', borderRadius: '10px' }}></div>
                                            </div>
                                            <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>Automation, Integration, Deployment</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="progress-item">
                                            <div className="d-flex justify-content-between mb-2">
                                                <span style={{ fontWeight: '600', color: '#004f39' }}>Docker & Containers</span>
                                                <span style={{ fontWeight: '600', color: '#004f39' }}>85%</span>
                                            </div>
                                            <div className="progress" style={{ height: '10px', borderRadius: '10px', backgroundColor: '#e0e0e0' }}>
                                                <div className="progress-bar" style={{ width: '85%', backgroundColor: '#004f39', borderRadius: '10px' }}></div>
                                            </div>
                                            <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>Containerization, Docker Compose</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Career Opportunities */}
                                <h3 className="mb-xxl-5 mb-4 white-clr mt-xxl-6 mt-xl-5 mt-4">Career Opportunities After Completion</h3>
                                <div className="row g-4 mb-xxl-8 mb-xl-6 mb-5">
                                    <div className="col-md-3 col-6">
                                        <div className="text-center p-3">
                                            <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                                                <i className="fas fa-cogs fa-2x" style={{ color: '#004f39' }}></i>
                                            </div>
                                            <h5 style={{ color: '#004f39', fontSize: '1rem' }}>DevOps Engineer</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="text-center p-3">
                                            <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                                                <i className="fas fa-cloud fa-2x" style={{ color: '#004f39' }}></i>
                                            </div>
                                            <h5 style={{ color: '#004f39', fontSize: '1rem' }}>Cloud Associate</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="text-center p-3">
                                            <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                                                <i className="fas fa-chart-line fa-2x" style={{ color: '#004f39' }}></i>
                                            </div>
                                            <h5 style={{ color: '#004f39', fontSize: '1rem' }}>Site Reliability Engineer (SRE)</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="text-center p-3">
                                            <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                                                <i className="fas fa-rocket fa-2x" style={{ color: '#004f39' }}></i>
                                            </div>
                                            <h5 style={{ color: '#004f39', fontSize: '1rem' }}>Deployment Engineer</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6 mx-auto">
                                        <div className="text-center p-3">
                                            <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                                                <i className="fas fa-headset fa-2x" style={{ color: '#004f39' }}></i>
                                            </div>
                                            <h5 style={{ color: '#004f39', fontSize: '1rem' }}>Infrastructure Support Engineer</h5>
                                        </div>
                                    </div>
                                </div>

                                {/* FAQs */}
                                <h3 className="mb-xxl-4 mb-xl-3 mb-3 white-clr">FAQs – DevOps Internship</h3>
                                <div className="accordion mb-xxl-8 mb-xl-6 mb-5" id="faqAccordion">
                                    <div className="accordion-item mb-3" style={{ border: '1px solid #004f39', borderRadius: '10px' }}>
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" style={{ color: '#004f39', fontWeight: '600' }}>
                                                1. Is cloud covered in this internship?
                                            </button>
                                        </h2>
                                        <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Yes. Basic cloud deployment concepts are included. You will learn how to host, deploy, and manage applications on cloud environments.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mb-3" style={{ border: '1px solid #004f39', borderRadius: '10px' }}>
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" style={{ color: '#004f39', fontWeight: '600' }}>
                                                2. Is this internship technical?
                                            </button>
                                        </h2>
                                        <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Yes. This is a highly technical, implementation-focused internship designed for students who want practical DevOps experience.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mb-3" style={{ border: '1px solid #004f39', borderRadius: '10px' }}>
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" style={{ color: '#004f39', fontWeight: '600' }}>
                                                3. Do I need prior coding knowledge?
                                            </button>
                                        </h2>
                                        <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Basic programming knowledge is helpful, but we guide you step-by-step through the technical setup and deployment process.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mb-3" style={{ border: '1px solid #004f39', borderRadius: '10px' }}>
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" style={{ color: '#004f39', fontWeight: '600' }}>
                                                4. Will I work on real deployment projects?
                                            </button>
                                        </h2>
                                        <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Yes. You will build and deploy a real application using CI/CD and Docker as part of your capstone project.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mb-3" style={{ border: '1px solid #004f39', borderRadius: '10px' }}>
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5" style={{ color: '#004f39', fontWeight: '600' }}>
                                                5. Is this internship available for students in Mangalore and Bangalore?
                                            </button>
                                        </h2>
                                        <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Yes. We provide DevOps internship opportunities for students across Mangalore, Udupi, Bangalore, and Karnataka.
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
                                                    Apply for DevOps Internship
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