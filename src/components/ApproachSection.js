'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function ApproachSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll('.approach-card');
    
    // Animate cards on scroll
    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars && trigger.vars.trigger === triggerRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="approach-section py-5 my-5">
      <div className="container" ref={triggerRef}>
        <div className="row mb-5 align-items-end">
          <div className="col-lg-6">
            <p style={{ color: '#FF5D1A', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Intentional. Collaborative. Built to Last.
            </p>
            <h2 style={{ fontSize: '3.5rem', fontWeight: '700', lineHeight: '1.1', position: 'relative', display: 'inline-block' }}>
              How I Approach Every
              <br />
              Project
              <span style={{ position: 'absolute', bottom: '5px', left: 0, width: '100%', height: '8px', backgroundColor: '#FF5D1A', zIndex: -1, opacity: 0.3 }}></span>
            </h2>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <p className="lead" style={{ fontSize: '1.25rem', color: '#555' }}>
              I design with clarity and purpose—blending strategy and style to build brands that look great and work everywhere.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {/* Card 1: Strategy First - Image */}
          <div className="col-lg-6">
            <div 
              className="approach-card h-100 position-relative animate-card"
              style={{ 
                borderRadius: '24px', 
                overflow: 'hidden', 
                minHeight: '400px',
                backgroundImage: 'url("https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}
            >
              <div 
                className="content p-5 d-flex flex-column justify-content-end h-100"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}
              >
                <div style={{ width: '50px', height: '4px', backgroundColor: '#FF5D1A', marginBottom: '1rem' }}></div>
                <h3 className="text-white mb-2 fw-bold">Strategy First</h3>
                <p className="text-white-50 mb-0">Every design decision is rooted in a clear brand strategy. No guesswork.</p>
              </div>
            </div>
          </div>

          {/* Card 2: Design That Resonates - Solid Orange */}
          <div className="col-lg-6">
            <div 
              className="approach-card h-100 position-relative animate-card"
              style={{ 
                borderRadius: '24px', 
                overflow: 'hidden', 
                minHeight: '400px',
                backgroundColor: '#FF5D1A',
                boxShadow: '0 10px 30px rgba(255, 93, 26, 0.3)'
              }}
            >
              <div className="content p-5 d-flex flex-column justify-content-end h-100">
                <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.3)', marginBottom: '1.5rem' }}></div>
                <h3 className="text-white mb-2 fw-bold" style={{ fontSize: '2rem' }}>Design That Resonates</h3>
                <p className="text-white mb-0" style={{ opacity: 0.9 }}>Visuals that connect emotionally and communicate clearly.</p>
              </div>
            </div>
          </div>

          {/* Card 3: Future-Proof Systems - Solid Light Gray */}
          <div className="col-lg-6">
            <div 
              className="approach-card h-100 position-relative animate-card"
              style={{ 
                borderRadius: '24px', 
                overflow: 'hidden', 
                minHeight: '400px',
                backgroundColor: '#E5E5E5',
              }}
            >
              <div className="content p-5 d-flex flex-column justify-content-end h-100">
                <div style={{ width: '100%', height: '4px', backgroundColor: '#FF5D1A', marginBottom: '1.5rem' }}></div>
                <h3 className="text-dark mb-2 fw-bold" style={{ fontSize: '2rem' }}>Future-Proof Systems</h3>
                <p className="text-muted mb-0">Design that's flexible, scalable, and easy to use.</p>
              </div>
            </div>
          </div>

          {/* Card 4: Consistency Across Touchpoints - Image */}
          <div className="col-lg-6">
            <div 
              className="approach-card h-100 position-relative animate-card"
              style={{ 
                borderRadius: '24px', 
                overflow: 'hidden', 
                minHeight: '400px',
                backgroundImage: 'url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}
            >
               <div 
                className="content p-5 d-flex flex-column justify-content-end h-100"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }}
              >
                <div style={{ width: '100%', height: '4px', backgroundColor: '#FF5D1A', marginBottom: '1.5rem' }}></div>
                <h3 className="text-white mb-2 fw-bold" style={{ fontSize: '2rem' }}>Consistency Across Touchpoints</h3>
                <p className="text-white-50 mb-0">From logo to social templates, I help you stay on-brand everywhere.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
