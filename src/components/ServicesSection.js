'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate text content on scroll
    const subtitleElement = subtitleRef.current;
    const titleElement = titleRef.current;
    const descriptionElement = descriptionRef.current;

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

    // Animate service panels on scroll
    const panels = section.querySelectorAll('.services-panel');
    panels.forEach((panel, index) => {
      gsap.fromTo(
        panel,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: panel,
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

  const services = [
    {
      id: 1,
      title: 'Logo & Branding Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop',
      description: 'Creating memorable brand identities that resonate with your audience.',
    },
    {
      id: 2,
      title: 'Web Design',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop',
      description: 'Designing intuitive and beautiful web interfaces that engage users.',
    },
    {
      id: 3,
      title: 'Website Development',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=600&fit=crop',
      description: 'Building responsive, fast, and scalable websites that perform.',
    },
  ];

  return (
    <section ref={sectionRef} className="services-specialize-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p ref={subtitleRef} className="services-specialize-subtitle">
              Services
            </p>
            <h2 ref={titleRef} className="services-specialize-title">
              What I Specialize In
            </h2>
            <p ref={descriptionRef} className="services-specialize-description">
              Focused expertise in branding, packaging, and digital.
            </p>
          </div>
        </div>

        <div className="row g-4 mt-4">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="col-lg-4 col-md-6"
              ref={(el) => {
                if (el) panelsRef.current[index] = el;
              }}
            >
              <div className="services-panel">
                <div className="services-panel-image-wrapper">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="services-panel-image"
                  />
                  <div className="services-panel-overlay"></div>
                </div>
                <div className="services-panel-content">
                  <h3 className="services-panel-title">{service.title}</h3>
                  <p className="services-panel-description">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
