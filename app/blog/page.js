"use client";

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("all");

  const blogs = [
    {
      id: 1,
      title: "The Future of AI in Digital Marketing",
      excerpt: "Explore how artificial intelligence is revolutionizing digital marketing strategies, from personalized content to predictive analytics and automated campaigns.",
      author: "E26 Media Team",
      date: "January 15, 2026",
      readTime: "5 min read",
      category: "AI & Tech",
      image: "/assets/img/E26media/blog/ai-ml.jpg",
      slug: "future-of-ai-in-digital-marketing",
      tags: ["AI", "Digital Marketing", "Technology"]
    },
    {
      id: 2,
      title: "Top Web Development Trends in 2026",
      excerpt: "Discover the latest web development trends shaping 2026, including AI-powered development, WebAssembly, serverless architecture, and more.",
      author: "E26 Media Team",
      date: "Feb 10, 2026",
      readTime: "4 min read",
      category: "Web Development",
      image: "/assets/img/E26media/blog/web-dev.jpg",
      slug: "web-development-trends-2026",
      tags: ["Web Development", "JavaScript", "Technology"]
    }
  ];

  const categories = ["all", "AI & Tech", "Web Development"];

  const filteredBlogs = activeCategory === "all" 
    ? blogs 
    : blogs.filter(blog => blog.category === activeCategory);

  return (
    <>
      <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Blog">

        {/* Blog Grid Section */}
        <section className="blog-grid pt-space pb-space" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            {/* Category Filter */}
            <div className="row mb-5">
              <div className="col-12">
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`btn px-4 py-2 rounded-pill ${
                        activeCategory === category 
                          ? 'btn-success' 
                          : 'btn-outline-success'
                      }`}
                      style={{
                        backgroundColor: activeCategory === category ? '#004f39' : 'transparent',
                        borderColor: '#004f39',
                        color: activeCategory === category ? 'white' : '#004f39',
                        fontWeight: '500',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {category === 'all' ? 'All Posts' : category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Blog Cards */}
            <div className="row g-4 justify-content-center">
              {filteredBlogs.map((blog) => (
                <div className="col-lg-6 col-md-12" key={blog.id}>
                  <Link href={`/blog/${blog.slug}`} style={{ textDecoration: 'none' }}>
                    <div 
                      className="blog-card h-100"
                      style={{
                        background: 'white',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        height: '100%'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-10px)';
                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,79,57,0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                      }}
                    >
                      {/* Blog Image */}
                      <div className="blog-image" style={{ height: '300px', overflow: 'hidden' }}>
                        <img 
                          src={blog.image} 
                          alt={blog.title}
                          style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease'
                          }}
                          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/800x400?text=Blog+Post';
                          }}
                        />
                      </div>

                      {/* Blog Content */}
                      <div className="blog-content p-4">
                        {/* Meta Info */}
                        <div className="d-flex align-items-center gap-3 mb-3 flex-wrap">
                          <span 
                            className="badge px-3 py-2 rounded-pill"
                            style={{ 
                              background: '#e8f5e9', 
                              color: '#004f39',
                              fontWeight: '500'
                            }}
                          >
                            {blog.category}
                          </span>
                          <span style={{ color: '#666', fontSize: '0.9rem' }}>
                            <i className="far fa-calendar-alt me-1" style={{ color: '#004f39' }}></i>
                            {blog.date}
                          </span>
                          <span style={{ color: '#666', fontSize: '0.9rem' }}>
                            <i className="far fa-clock me-1" style={{ color: '#004f39' }}></i>
                            {blog.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 style={{ 
                          color: '#004f39', 
                          fontSize: '1.5rem', 
                          fontWeight: '700',
                          marginBottom: '15px',
                          lineHeight: '1.4'
                        }}>
                          {blog.title}
                        </h3>

                        {/* Excerpt */}
                        <p style={{ 
                          color: '#555', 
                          fontSize: '1rem', 
                          lineHeight: '1.7',
                          marginBottom: '20px'
                        }}>
                          {blog.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="d-flex gap-2 mb-3 flex-wrap">
                          {blog.tags.map((tag, index) => (
                            <span 
                              key={index}
                              style={{ 
                                fontSize: '0.85rem',
                                color: '#004f39',
                                background: '#f0f0f0',
                                padding: '4px 12px',
                                borderRadius: '20px'
                              }}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        {/* Author & Read More */}
                        <div className="d-flex align-items-center justify-content-between mt-3">
                          <div className="d-flex align-items-center gap-2">
                            <div 
                              className="rounded-circle bg-success d-flex align-items-center justify-content-center"
                              style={{ 
                                width: '40px', 
                                height: '40px',
                                background: '#004f39',
                                color: 'white',
                                fontSize: '1.2rem',
                                fontWeight: '600'
                              }}
                            >
                              {blog.author.charAt(0)}
                            </div>
                            <div>
                              <span style={{ fontSize: '0.9rem', color: '#333', fontWeight: '500' }}>
                                {blog.author}
                              </span>
                            </div>
                          </div>
                          <span 
                            style={{ 
                              color: '#004f39', 
                              fontWeight: '600',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '5px'
                            }}
                          >
                            Read More <i className="fas fa-arrow-right" style={{ fontSize: '0.9rem' }}></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Newsletter Section */}
            <div className="row mt-5 justify-content-center">
              <div className="col-lg-8">
                <div 
                  className="newsletter-card p-5 text-center"
                  style={{ 
                    background: 'linear-gradient(135deg, #004f39 0%, #00382a 100%)',
                    borderRadius: '20px',
                    color: 'white'
                  }}
                >
                  <h3 className="mb-3" style={{ fontSize: '2rem', fontWeight: '700' }}>
                    Subscribe to Our Newsletter
                  </h3>
                  <p className="mb-4" style={{ fontSize: '1.1rem', opacity: '0.9' }}>
                    Get the latest tech insights, trends, and updates delivered to your inbox
                  </p>
                  <div className="row justify-content-center">
                    <div className="col-md-8">
                      <div className="d-flex gap-2">
                        <input 
                          type="email" 
                          className="form-control form-control-lg"
                          placeholder="Enter your email"
                          style={{ 
                            borderRadius: '50px',
                            border: 'none',
                            padding: '12px 20px'
                          }}
                        />
                        <button 
                          className="btn btn-light btn-lg"
                          style={{ 
                            borderRadius: '50px',
                            padding: '12px 30px',
                            fontWeight: '600',
                            color: '#004f39',
                            border: 'none'
                          }}
                        >
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{`
          @media (max-width: 768px) {
            .blog-card {
              margin-bottom: 20px;
            }
            .blog-image {
              height: 200px !important;
            }
            .newsletter-card {
              padding: 30px 20px !important;
            }
            .newsletter-card h3 {
              font-size: 1.5rem !important;
            }
            h1 {
              font-size: 2rem !important;
            }
          }
        `}</style>
      </Layout>
    </>
  );
}