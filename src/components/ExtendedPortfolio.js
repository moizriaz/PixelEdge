'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function ExtendedPortfolio() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate text content on scroll
    const titleElement = titleRef.current;
    const subtitleElement = subtitleRef.current;
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

    // Setup horizontal scroll carousel
    const carousel = carouselRef.current;
    if (carousel) {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();

        const carouselWidth = carousel.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = Math.max(0, carouselWidth - viewportWidth);

        gsap.set(carousel, { x: 0 });

        // Animate portfolio items with rotation
        const items = carousel.querySelectorAll('.extended-portfolio-item');
        items.forEach((item, index) => {
          // Random rotation between -8 and 8 degrees
          const rotation = (Math.random() - 0.5) * 16;
          gsap.set(item, { rotation: rotation });

          // Animate on scroll
          gsap.fromTo(
            item,
            { opacity: 0, scale: 0.8, rotation: rotation + 10 },
            {
              opacity: 1,
              scale: 1,
              rotation: rotation,
              duration: 0.8,
              delay: index * 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: item,
                start: 'left 80%',
                toggleActions: 'play none none none',
              },
            }
          );
        });

        // Horizontal scroll animation
        const horizontalScroll = gsap.fromTo(
          carousel,
          { x: 0 },
          {
            x: -scrollDistance,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top center',
              end: () => `+=${scrollDistance}`,
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
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

  const extendedProjects = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1543269664-7eef42226a21?w=400&h=500&fit=crop',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=500&fit=crop',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=500&fit=crop',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
    },
  ];

  return (
    <section ref={sectionRef} className="extended-portfolio-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="extended-portfolio-content">
              <p ref={subtitleRef} className="extended-portfolio-subtitle">
                Behind the Designs
              </p>
              <h2 ref={titleRef} className="extended-portfolio-title">
                Curious What Else I&apos;ve Created?
              </h2>
              <p ref={descriptionRef} className="extended-portfolio-description">
                Explore more brand identities, packaging, and digital design work in my extended portfolio.
              </p>
              <a
                ref={buttonRef}
                href="#"
                className="btn btn-portfolio"
              >
                <span className="btn-text">Get in Touch</span>
                <span className="btn-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon-circle"
                  >
                    <circle cx="16" cy="16" r="16" fill="#ffffff"/>
                  </svg>
                  <div className="arrow-container">
                    <svg
                      width="19"
                      height="15"
                      viewBox="0 0 19 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="arrow arrow-exit"
                    >
                      <path
                        d="M10.9287 0.292745C11.3191 -0.0976805 11.9522 -0.0974828 12.3428 0.292745L18.707 6.657C19.0976 7.04753 19.0976 7.68054 18.707 8.07106L12.3428 14.4353C11.9522 14.8256 11.3191 14.8257 10.9287 14.4353C10.5383 14.0449 10.5385 13.4118 10.9287 13.0213L15.5859 8.36403L0 8.36403L0 6.36403L15.5859 6.36403L10.9287 1.70681C10.5385 1.31626 10.5383 0.68317 10.9287 0.292745Z"
                        fill="#FF5D1A"
                      />
                    </svg>
                    <svg
                      width="19"
                      height="15"
                      viewBox="0 0 19 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="arrow arrow-enter"
                    >
                      <path
                        d="M10.9287 0.292745C11.3191 -0.0976805 11.9522 -0.0974828 12.3428 0.292745L18.707 6.657C19.0976 7.04753 19.0976 7.68054 18.707 8.07106L12.3428 14.4353C11.9522 14.8256 11.3191 14.8257 10.9287 14.4353C10.5383 14.0449 10.5385 13.4118 10.9287 13.0213L15.5859 8.36403L0 8.36403L0 6.36403L15.5859 6.36403L10.9287 1.70681C10.5385 1.31626 10.5383 0.68317 10.9287 0.292745Z"
                        fill="#FF5D1A"
                      />
                    </svg>
                  </div>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="extended-portfolio-carousel-wrapper">
        <div ref={carouselRef} className="extended-portfolio-carousel">
          {extendedProjects.map((project) => (
            <div key={project.id} className="extended-portfolio-item">
              <div className="extended-portfolio-image-wrapper">
                <Image
                  src={project.image}
                  alt={`Portfolio project ${project.id}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="extended-portfolio-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
