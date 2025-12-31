'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function MoreProjectsSection() {
  const sectionRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate text content on scroll
    const subtitleElement = subtitleRef.current;
    const titleElement = titleRef.current;
    const descriptionElement = descriptionRef.current;
    const buttonElement = buttonRef.current;

    const textTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    if (subtitleElement) {
      textTimeline.fromTo(
        subtitleElement,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );
    }

    if (titleElement) {
      textTimeline.fromTo(
        titleElement,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.4'
      );
    }

    if (descriptionElement) {
      textTimeline.fromTo(
        descriptionElement,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.4'
      );
    }

    if (buttonElement) {
      textTimeline.fromTo(
        buttonElement,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
        '-=0.3'
      );
    }

    // Initialize carousel position
    const carousel = carouselRef.current;
    if (carousel) {
      gsap.set(carousel, { x: 0 });
      
      // Animate carousel items on scroll
      const items = carousel.querySelectorAll('.more-projects-item');
      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars && trigger.vars.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  const projects = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=600&h=800&fit=crop',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=800&fit=crop',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1543269664-7eef42226a21?w=600&h=800&fit=crop',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&h=800&fit=crop',
    },
  ];

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const itemWidth = carousel.querySelector('.more-projects-item')?.offsetWidth || 0;
    const gap = 30;
    const scrollAmount = (itemWidth + gap) * direction;

    gsap.to(carousel, {
      x: `+=${-scrollAmount}`,
      duration: 0.6,
      ease: 'power2.out',
    });

    setCurrentIndex((prev) => {
      const newIndex = prev + direction;
      const maxIndex = projects.length - 3; // Show 3 items at a time
      return Math.max(0, Math.min(newIndex, maxIndex));
    });
  };

  return (
    <section ref={sectionRef} className="more-projects-section">
      <div className="more-projects-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p ref={subtitleRef} className="more-projects-subtitle">
                More Projects
              </p>
              <h2 ref={titleRef} className="more-projects-title">
                Want to See More?
              </h2>
              <p ref={descriptionRef} className="more-projects-description">
                There&apos;s plenty more where that came from—check out the full archive of recent work and case studies.
              </p>
              <a
                ref={buttonRef}
                href="#"
                className="btn btn-browse-projects"
              >
                <span className="btn-browse-text">Browse all Projects</span>
                <span className="btn-browse-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="#FF5D1A"/>
                    <path
                      d="M9 6L15 12L9 18"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="more-projects-carousel-wrapper">
        <div className="container">
          <div className="more-projects-carousel-container">
            <div ref={carouselRef} className="more-projects-carousel">
              {projects.map((project) => (
                <div key={project.id} className="more-projects-item">
                  <div className="more-projects-image-wrapper">
                    <Image
                      src={project.image}
                      alt={`Project ${project.id}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="more-projects-image"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="more-projects-navigation">
              <button
                className="more-projects-nav-btn"
                onClick={() => scrollCarousel(-1)}
                disabled={currentIndex === 0}
                aria-label="Previous projects"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L6 10L12 16"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className="more-projects-nav-btn"
                onClick={() => scrollCarousel(1)}
                disabled={currentIndex >= projects.length - 3}
                aria-label="Next projects"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 4L14 10L8 16"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
