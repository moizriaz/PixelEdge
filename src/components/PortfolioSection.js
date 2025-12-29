'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function PortfolioSection() {
  const sectionToPinRef = useRef(null);
  const sectionPinRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const scrollTriggersRef = useRef([]);

  useEffect(() => {
    const sectionToPin = sectionToPinRef.current;
    const sectionPin = sectionPinRef.current;
    const titleElement = titleRef.current;
    const subtitleElement = subtitleRef.current;
    const descriptionElement = descriptionRef.current;
    const buttonElement = buttonRef.current;

    if (!sectionToPin || !sectionPin) return;

    // Initialize function
    const initAnimations = () => {
      const scrollTriggers = [];

      // Animate text content on initial load
      const textTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionToPin,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      scrollTriggers.push(textTimeline.scrollTrigger);

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
      const carousel = sectionPin.querySelector('.portfolio-carousel');
      if (!carousel) return scrollTriggers;

      // Set portfolio items to visible
      const portfolioItems = carousel.querySelectorAll('.portfolio-item');
      portfolioItems.forEach((item) => {
        gsap.set(item, { opacity: 1, scale: 1 });
      });

      // CRITICAL: Reset carousel to start position (x: 0) - showing first items
      gsap.set(carousel, { 
        x: 0,
        clearProps: 'transform'
      });

      // Wait for next frame to ensure layout is calculated
      requestAnimationFrame(() => {
        // Force layout recalculation
        ScrollTrigger.refresh();

        // Calculate scroll distance
        const carouselWidth = carousel.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = Math.max(0, carouselWidth - viewportWidth);

        // Ensure carousel is still at x: 0 before creating animation
        gsap.set(carousel, { x: 0 });

        // Create horizontal scroll animation
        const horizontalScroll = gsap.fromTo(
          carousel,
          { x: 0 }, // Start position - showing first items
          {
            x: -scrollDistance, // End position - showing last items
            ease: 'none',
            scrollTrigger: {
              trigger: sectionToPin,
              start: 'top center',
              end: () => `+=${scrollDistance}`,
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          }
        );

        scrollTriggers.push(horizontalScroll.scrollTrigger);
        scrollTriggersRef.current = scrollTriggers;
      });

      return scrollTriggers;
    };

    // Initialize with a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      initAnimations();
      ScrollTrigger.refresh();
    }, 150);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      
      // Kill all ScrollTriggers
      scrollTriggersRef.current.forEach((trigger) => {
        if (trigger && trigger.kill) {
          trigger.kill();
        }
      });
      
      scrollTriggersRef.current = [];

      // Cleanup any remaining triggers for this section
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars && trigger.vars.trigger === sectionToPin) {
          trigger.kill();
        }
      });
    };
  }, []);

  const portfolios = [
    {
      id: 1,
      title: 'Real Estate Platform',
      description: 'Property search and listings',
      category: 'Real Estate',
    },
    {
      id: 2,
      title: 'Luxury Interior Design',
      description: 'Dark mode luxury showcase',
      category: 'Interior Design',
    },
    {
      id: 3,
      title: 'Modern Living Spaces',
      description: 'Contemporary design portfolio',
      category: 'Lifestyle',
    },
    {
      id: 4,
      title: 'E-commerce Platform',
      description: 'Online shopping experience',
      category: 'E-commerce',
    },
    {
      id: 5,
      title: 'Creative Agency',
      description: 'Brand identity and design',
      category: 'Agency',
    },
    {
      id: 6,
      title: 'Fitness App',
      description: 'Workout tracking and nutrition',
      category: 'Health & Fitness',
    },
    {
      id: 7,
      title: 'Travel Booking',
      description: 'Hotel and flight reservations',
      category: 'Travel',
    },
    {
      id: 8,
      title: 'Food Delivery',
      description: 'Restaurant ordering platform',
      category: 'Food & Beverage',
    },
    {
      id: 9,
      title: 'Music Streaming',
      description: 'Premium audio experience',
      category: 'Entertainment',
    },
    {
      id: 10,
      title: 'Education Platform',
      description: 'Online learning management',
      category: 'Education',
    },
    {
      id: 11,
      title: 'Healthcare Portal',
      description: 'Patient management system',
      category: 'Healthcare',
    },
    {
      id: 12,
      title: 'Fashion E-commerce',
      description: 'Trendy clothing marketplace',
      category: 'Fashion',
    },
  ];

  return (
    <section id="section_to-pin" ref={sectionToPinRef} className="portfolio-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="portfolio-content">
              <p ref={subtitleRef} className="portfolio-subtitle">
                Behind the Designs
              </p>
              <h2 ref={titleRef} className="portfolio-title">
                Shaping Experiences That Make Life Simpler
              </h2>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="portfolio-description-wrapper">
              <p ref={descriptionRef} className="portfolio-description">
                we are webiste designer focused on building clean, intuitive
                interfaces that solve real-world problems.
              </p>
              <p className="portfolio-sub-description">
                Let&apos;s Build Something Meaningful Together
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

      <div id="section_pin" ref={sectionPinRef} className="portfolio-carousel-wrapper">
        <div className="portfolio-carousel">
          {portfolios.map((portfolio) => (
            <div key={portfolio.id} className="portfolio-item">
              <div className="portfolio-image-wrapper">
                <div className="portfolio-image-placeholder">
                  <span className="portfolio-category">{portfolio.category}</span>
                  <span className="portfolio-name">{portfolio.title}</span>
                </div>
              </div>
              <div className="portfolio-info">
                <h3 className="portfolio-item-title">{portfolio.title}</h3>
                <p className="portfolio-item-description">{portfolio.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
