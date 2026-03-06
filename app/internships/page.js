"use client";

import Layout from "@/components/layout/Layout";
import Project1 from "@/components/sections/Project1";
import StepWorking2 from "@/components/sections/StepWorking2";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Internships() {
  const internships = [
    "AI & Machine Learning",
    "Data Analytics",
    "Data Science",
    "DevOps",
    "Digital Marketing",
    "Full Stack Development",
    "Graphic Design",
    "Video Production"
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (forward && subIndex === internships[index].length) {
      setTimeout(() => setForward(false), 1000);
      return;
    }

    if (!forward && subIndex === 0) {
      setForward(true);
      setIndex((prev) => (prev + 1) % internships.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (forward ? 1 : -1));
    }, 100);

    return () => clearTimeout(timeout);
  }, [subIndex, forward, index, internships]);

  // Image mapping for internships
  const internshipImages = [
    "/assets/img/E26media/service/Artificial intelligence.png",
    "/assets/img/E26media/service/data-analytics.png",
    "/assets/img/E26media/service/data-science.png",
    "/assets/img/E26media/service/devops.png",
    "/assets/img/E26media/service/Digital Marketing.png",
    "/assets/img/E26media/service/Website Development.png",
    "/assets/img/E26media/service/graphic-design.png",
    "/assets/img/E26media/service/videography.png"
  ];

  // Link paths for each internship
  const internshipPaths = [
    "/internships/ai-machine-learning",
    "/internships/data-analytics",
    "/internships/data-science",
    "/internships/devops",
    "/internships/digital-marketing",
    "/internships/full-stack-development",
    "/internships/graphic-design",
    "/internships/video-production"
  ];

  // Descriptions for each internship
  const internshipDescriptions = [
    "Build intelligent systems. Train predictive models. Solve real-world problems using AI.",
    "Turn raw data into actionable business intelligence. Build dashboards. Drive decisions.",
    "Build intelligent systems. Analyse real-world data. Become industry-ready in Data Science.",
    "Master automation. Build CI/CD pipelines. Deploy scalable cloud applications.",
    "Run live campaigns. Generate measurable results. Become industry-ready.",
    "Design. Develop. Deploy. Become a complete web application developer.",
    "Design for brands. Create impactful visuals. Build a powerful portfolio.",
    "Create cinematic marketing videos. Learn storytelling. Build production skills."
  ];

  return (
    <>
      <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Internships">
        {/* Intro Section */}
        <section
          className="blog-intro pt-space pb-space"
          style={{ backgroundColor: "#fff" }}
        >
          <div className="container text-center">
            <h2 style={{ fontWeight: "700", marginBottom: "20px" }}>
              <span style={{ color: "#000", fontSize: 'clamp(40px, 8vw, 80px)' }}>Internship in </span>
              <span style={{ color: "#004f39", fontSize: 'clamp(30px, 6vw, 60px)' }}>
                {internships[index].substring(0, subIndex)}
              </span>
              <span style={{ borderRight: "3px solid #000", marginLeft: "8px", fontSize: 'clamp(30px, 4vw, 40px)', borderRadius: '3px' }}>|</span>
            </h2>
            <h3 style={{ color: "#000", fontSize: 'clamp(24px, 4vw, 32px)' }}>
              Gain Real-World Experience
            </h3>

            <p
              style={{
                color: "#004f39",
                fontSize: "clamp(16px, 2vw, 18px)",
                maxWidth: "700px",
                margin: "20px auto 30px",
                lineHeight: "1.6",
                padding: "0 15px"
              }}
            >
              Hands-on training, real projects, expert mentorship, and industry certification 
              to kickstart your career.
            </p>

            <p
              style={{
                backgroundColor: "#fff",
                color: "#004f39",
                display: "inline-block",
                padding: "10px 20px",
                fontWeight: "600",
                borderRadius: '30px',
                border: '2px solid #004f39',
                fontSize: 'clamp(14px, 1.5vw, 16px)',
                margin: "0 15px"
              }}
            >
              Proudly trained 1000+ students from IIT, NITK & leading national colleges
            </p>
          </div>
        </section>

        {/* Internships Grid Section */}
        <section className="blog-grid pb-space" style={{ backgroundColor: "#ffff", marginTop: '-50px' }}>
          <div className="container">
            <div className="row g-4 g-xl-6">
              {internshipPaths.map((path, index) => (
                <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                  <Link href={path} style={{ textDecoration: 'none' }}>
                    <div className="blog-widget-item h-100" style={{
                      border: "1px solid #004f39",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #ffff 0%, #e6f2ee 100%)",
                      padding: "20px",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 79, 57, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}>
                      <div className="thumb w-100 overflow-hidden mb-4" style={{
                        borderRadius: "8px",
                        height: "200px",
                        backgroundColor: "#f5f5f5"
                      }}>
                        <img
                          src={internshipImages[index]}
                          alt={internships[index]}
                          className="w-100 h-100"
                          style={{ objectFit: "cover" }}
                          loading="lazy"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/300x200?text=Internship";
                          }}
                        />
                      </div>
                      <div className="blog-cont flex-grow-1 d-flex flex-column">
                        <div className="d-flex align-items-center gap-3 mb-3">
                          <span className="radius-btn cmn-border radius100 py-1 px-3" style={{
                            backgroundColor: "#004f39",
                            color: "#ffff",
                            fontWeight: "500",
                            display: "inline-block",
                            fontSize: "14px"
                          }}>
                            Internship
                          </span>
                        </div>
                        <h5 style={{ marginBottom: "10px" }}>
                          <span style={{ color: "#004f39", fontWeight: "600", fontSize: "18px" }}>
                            {internships[index]}
                          </span>
                        </h5>
                        <p style={{
                          color: "#555",
                          fontSize: "14px",
                          lineHeight: "1.6",
                          marginTop: "5px",
                          flex: "1"
                        }}>
                          {internshipDescriptions[index]}
                        </p>
                        <div style={{ marginTop: "20px" }}>
                          <span style={{
                            color: "#004f39",
                            fontWeight: "500",
                            fontSize: "14px",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px"
                          }}>
                            Know more <i className="fas fa-arrow-right" style={{ fontSize: "12px" }}></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <StepWorking2 />
        <Project1 />
      </Layout>

      <style jsx>{`
        @media (max-width: 768px) {
          .blog-widget-item {
            padding: 15px !important;
          }
          .thumb {
            height: 160px !important;
          }
          .blog-intro {
            padding-top: 30px !important;
            padding-bottom: 30px !important;
          }
        }
        
        @media (max-width: 576px) {
          .blog-grid {
            margin-top: -30px !important;
          }
        }
      `}</style>
    </>
  );
}