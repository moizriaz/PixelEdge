'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    
    gsap.fromTo(
        contentRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
    );

  }, []);

  return (
    <section ref={sectionRef} className="cta-section py-5 my-5">
      <div className="container">
        <div 
          className="cta-container position-relative overflow-hidden d-flex align-items-center justify-content-center text-center"
          style={{
            borderRadius: '40px',
            minHeight: '500px',
            backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&q=80")', // Abstract orange/red vibrant image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: '0 20px 40px rgba(255, 93, 26, 0.2)'
          }}
        >
          {/* Overlay */}
          <div 
            className="position-absolute top-0 start-0 w-100 h-100" 
            style={{ 
                background: 'linear-gradient(135deg, rgba(255, 93, 26, 0.4) 0%, rgba(128, 0, 128, 0.4) 100%)',
                zIndex: 1
            }}
          ></div>
          
          <div className="position-relative z-2 p-4 p-md-5" ref={contentRef} style={{ maxWidth: '800px' }}>
            <h4 
                className="text-white mb-3" 
                style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '600',
                    textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}
            >
                Start Your Brand
            </h4>
            <h2 
                className="text-white mb-4 fw-bold" 
                style={{ 
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
                    lineHeight: '1.1',
                    textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                }}
            >
              Let's Bring Your
              <br />
              Brand to Life
            </h2>
            <p 
                className="text-white mb-5 mx-auto" 
                style={{ 
                    fontSize: '1.1rem', 
                    maxWidth: '600px', 
                    opacity: 0.9,
                    textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                }}
            >
              Ready to make something amazing together? Whether you're starting fresh or evolving your brand, I'm here to help.
            </p>
            
            <a 
                href="#" 
                className="cta-btn d-inline-flex align-items-center bg-white text-dark text-decoration-none px-4 py-3 rounded-pill fw-bold"
                style={{
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                }}
            >
                <span className="me-3" style={{ fontSize: '1.1rem' }}>Get in Touch</span>
                <span 
                    className="icon-circle d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                        width: '32px',
                        height: '32px',
                        backgroundColor: '#FF5D1A',
                        color: 'white'
                    }}
                >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
