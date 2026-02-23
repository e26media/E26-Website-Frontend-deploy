'use client'

import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay],
    spaceBetween: 20,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        1199: { slidesPerView: 3 },
        991: { slidesPerView: 2 },
        0: { slidesPerView: 1 },
    },
}

export default function Testimonial3() {
    return (
        <div style={{ background: "linear-gradient(to top, #ffffff2e 1%, #ddeae657 100%)" }}>
            <section className="testimonial-section">

                <div className="container">
                    {/* Title */}
                    <div className="mb-5">
                        <h2 className="stitle" style={{ color: '#004f39' }}>
                           Testimonials
                            
                        </h2>
                    </div>

                    {/* Swiper */}
                    <Swiper {...swiperOptions} className="align-items-stretch">

                        {/* Card 1 */}
                        <SwiperSlide>
                            <div className="testimonial-card">
                                <h6 className="name">Rameeza Banu</h6>
                                <div className="rating">
                                    ⭐⭐⭐⭐⭐
                                </div>
                                <p>
                                    The training program provided strong fundamentals with real-time project exposure.
                                    Mentors were supportive and the structured curriculum helped me confidently
                                    transition from beginner to industry-ready professional.
                                </p>
                            </div>
                        </SwiperSlide>

                        {/* Card 2 */}
                        <SwiperSlide>
                            <div className="testimonial-card">
                                <h6 className="name">Zulfa</h6>
                                <div className="rating">
                                    ⭐⭐⭐⭐⭐
                                </div>
                                <p>
                                    As a Data Science beginner, I found the teaching approach extremely clear and
                                    practical. Live sessions, assignments, and case studies helped me understand
                                    concepts and apply them confidently.
                                </p>
                            </div>
                        </SwiperSlide>

                        {/* Card 3 */}
                        <SwiperSlide>
                            <div className="testimonial-card">
                                <h6 className="name">Ibrahim Kaleel</h6>
                                <div className="rating">
                                    ⭐⭐⭐⭐⭐
                                </div>
                                <p>
                                    A highly professional learning environment with genuine mentorship. Trainers focus
                                    on skill improvement, provide continuous feedback, and guide students towards
                                    real-world industry expectations.
                                </p>
                            </div>
                        </SwiperSlide>

                        {/* Card 4 */}
                        <SwiperSlide>
                            <div className="testimonial-card">
                                <h6 className="name">Mohammed Safwan</h6>
                                <div className="rating">
                                    ⭐⭐⭐⭐⭐
                                </div>
                                <p>
                                    The Digital Marketing program was well-structured with practical learning modules
                                    covering SEO, social media, and paid advertising. Great support from trainers and
                                    excellent value for career growth.
                                </p>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>

                {/* Styles */}
                <style jsx>{`
                    .testimonial-section {
                        padding: 60px 0;
                    }

                    .testimonial-card {
                        background: #ffffff;
                        border-radius: 14px;
                        padding: 24px;
                        height: 100%;
                        border: 1px solid rgba(0,79,57,0.08);
                        box-shadow: 0 8px 25px rgba(0, 79, 57, 0.08);
                        transition: 0.3s ease;
                    }

                    .testimonial-card:hover {
                        transform: translateY(-6px);
                        box-shadow: 0 18px 40px rgba(0, 79, 57, 0.15);
                    }

                    .name {
                        font-weight: 600;
                        font-size: 16px;
                        color: #004f39;
                        margin-bottom: 6px;
                    }

                    .rating {
                        color: #004f39;
                        font-size: 14px;
                        margin-bottom: 10px;
                    }

                    .testimonial-card p {
                        font-size: 14px;
                        line-height: 1.6;
                        color: #555;
                        margin: 0;
                    }
                `}</style>

            </section>
        </div>
    )
}
