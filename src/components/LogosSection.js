'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function LogosSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const logosRef = useRef([]);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const titleElement = titleRef.current;

    if (sectionElement && titleElement) {
      // Simple scroll-based animation without ScrollTrigger
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const tl = gsap.timeline();

              tl.fromTo(
                titleElement,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
              );

              if (logosRef.current.length > 0) {
                tl.fromTo(
                  logosRef.current,
                  { opacity: 0, y: 30 },
                  {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power2.out',
                  },
                  '-=0.4'
                );
              }

              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(sectionElement);

      return () => {
        if (sectionElement) {
          observer.unobserve(sectionElement);
        }
      };
    }
  }, []);

  // Placeholder logo data
  const logos = [
    { id: 1, name: 'Supa Blox' },
    { id: 2, name: 'Ship Blox' },
    { id: 3, name: 'Frame Blox' },
    { id: 4, name: 'Hype Blox' },
    { id: 5, name: 'Supa Blox' },
  ];

  return (
    <section ref={sectionRef} className="logos-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <h2 ref={titleRef} className="logos-title">
              Trusted by Brands I&apos;ve Helped Shape
            </h2>
          </div>
          <div className="col-lg-8">
            <div className="logos-grid">
              {logos.map((logo, index) => (
                <div
                  key={logo.id}
                  className="logo-item"
                  ref={(el) => {
                    if (el) logosRef.current[index] = el;
                  }}
                >
                  <div className="logo-wrapper">
                    <div className="logo-placeholder">
                      <span className="logo-text-placeholder">{logo.name}</span>
                    </div>
                  </div>
                  {index < logos.length - 1 && (
                    <div className="logo-divider"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

