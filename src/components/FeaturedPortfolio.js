'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function FeaturedPortfolio() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate title on scroll
    const titleElement = titleRef.current;
    if (titleElement) {
      gsap.fromTo(
        titleElement,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Animate portfolio items on scroll
    const items = section.querySelectorAll('.featured-portfolio-item');
    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars && trigger.vars.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  const featuredProjects = [
    {
      id: 1,
      title: 'Connecting you to the home you love',
      description: 'A modern real estate platform with intuitive property search and listings',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      client: 'UIXSHUVO',
    },
    {
      id: 2,
      title: 'Ultra-real minimalist web design',
      description: 'Sophisticated interior design showcase with dark, luxurious aesthetics',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      client: 'Fiverr',
    },
    {
      id: 3,
      title: 'Modern Living Spaces',
      description: 'Bright and airy contemporary design portfolio showcasing minimalist interiors',
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&h=600&fit=crop',
      client: 'CDA',
    },
    {
      id: 4,
      title: 'Orange Blox',
      description: 'Flowing shapes in iridescent hues, from deep blues and purples to vibrant pinks and oranges',
      image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=600&fit=crop',
      client: 'Creative Studio',
    },
    {
      id: 5,
      title: 'Nova Scene',
      description: 'Ethereal effects with abstract art and generative design elements',
      image: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=600&fit=crop',
      client: 'Design Agency',
    },
    {
      id: 6,
      title: 'E-commerce Excellence',
      description: 'Premium online shopping experience with seamless user interface',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      client: 'Retail Brand',
    },
  ];

  return (
    <section ref={sectionRef} className="featured-portfolio-section">
      <div className="container">
        <h2 ref={titleRef} className="featured-portfolio-title">
          Featured Projects
        </h2>
        <div className="row">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="col-lg-4 col-md-6 mb-4"
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
            >
              <div className="featured-portfolio-item">
                <div className="featured-portfolio-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="featured-portfolio-image"
                  />
                  <div className="featured-portfolio-overlay">
                    <a href="#" className="featured-portfolio-view-btn">
                      <span>View</span>
                      <svg
                        width="19"
                        height="15"
                        viewBox="0 0 19 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.9287 0.292745C11.3191 -0.0976805 11.9522 -0.0974828 12.3428 0.292745L18.707 6.657C19.0976 7.04753 19.0976 7.68054 18.707 8.07106L12.3428 14.4353C11.9522 14.8256 11.3191 14.8257 10.9287 14.4353C10.5383 14.0449 10.5385 13.4118 10.9287 13.0213L15.5859 8.36403L0 8.36403L0 6.36403L15.5859 6.36403L10.9287 1.70681C10.5385 1.31626 10.5383 0.68317 10.9287 0.292745Z"
                          fill="#FF5D1A"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="featured-portfolio-content">
                  <p className="featured-portfolio-client">{project.client}</p>
                  <h3 className="featured-portfolio-item-title">{project.title}</h3>
                  <p className="featured-portfolio-item-description">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

