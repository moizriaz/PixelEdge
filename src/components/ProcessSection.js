'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    
    gsap.fromTo(
        itemsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
    );

  }, []);

  const steps = [
    {
      id: "01",
      title: "Strategy",
      description: "",
      isHighlight: true,
      image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=800&q=80" // Hat image similar to design
    },
    {
      id: "02",
      title: "Design",
      description: "Creating your visual identity system and touchpoints.",
      isHighlight: false
    },
    {
      id: "03",
      title: "Development",
      description: "Understanding your vision and design to develop your dreams",
      isHighlight: false
    },
    {
      id: "04",
      title: "Delivery",
      description: "Providing all assets, brand guidelines, and support.",
      isHighlight: false
    },
    {
      id: "05",
      title: "Ongoing Support",
      description: "I stay available for updates, extensions, and evolution.",
      isHighlight: false
    }
  ];

  return (
    <section ref={sectionRef} className="process-section py-5 my-5">
      <div className="container">
        {/* Header */}
        <div className="row mb-5">
          <div className="col-lg-6">
            <p style={{ color: '#FF5D1A', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Step-by-Step
            </p>
            <h2 style={{ fontSize: '3rem', fontWeight: '700', lineHeight: '1.1' }}>
              My Process, Step by Step
            </h2>
          </div>
          <div className="col-lg-6 d-flex align-items-end justify-content-lg-end mt-4 mt-lg-0">
             <p className="lead mb-0 text-muted" style={{ fontSize: '1.1rem', maxWidth: '450px' }}>
              From first ideas to final assets, I follow a clear, collaborative process—built to turn your vision into a brand that works and lasts.
            </p>
          </div>
        </div>

        {/* Steps List */}
        <div className="steps-container d-flex flex-column gap-3">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              ref={el => itemsRef.current[index] = el}
              className={`process-step p-4 p-md-5 rounded-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between ${step.isHighlight ? 'text-white' : 'bg-white text-dark'}`}
              style={{
                backgroundColor: step.isHighlight ? '#FF5D1A' : '#F8F9FA',
                boxShadow: step.isHighlight ? '0 15px 30px rgba(255, 93, 26, 0.3)' : 'none',
                minHeight: '140px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
                {/* Image for Highlighted Step */}
                {step.isHighlight && step.image && (
                   <div 
                    className="position-absolute end-0 top-0 h-100 d-none d-md-block"
                    style={{
                        width: '40%',
                        backgroundImage: `url(${step.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        maskImage: 'linear-gradient(to right, transparent, black 20%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%)'
                    }}
                   ></div>
                )}

                <div className="step-content d-flex flex-column flex-md-row align-items-md-center position-relative z-1 w-100">
                    {/* Number and Bar */}
                     <div className="d-flex align-items-center mb-3 mb-md-0 me-md-5">
                        <div style={{ width: '4px', height: '60px', backgroundColor: step.isHighlight ? '#CC4A15' : '#FF5D1A', marginRight: '2rem', borderRadius: '2px' }}></div>
                        <span className="fw-bold" style={{ fontSize: '3.5rem', lineHeight: '1' }}>{step.id}</span>
                     </div>
                     
                     {/* Title */}
                     <div className="me-md-auto mb-2 mb-md-0">
                         <h3 className="fw-bold mb-0" style={{ fontSize: '2rem' }}>{step.title}</h3>
                     </div>

                     {/* Description */}
                     {!step.isHighlight && (
                         <div className="step-description text-md-end" style={{ maxWidth: '400px' }}>
                             <p className="mb-0 text-muted" style={{ fontSize: '1.05rem' }}>{step.description}</p>
                         </div>
                     )}
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
