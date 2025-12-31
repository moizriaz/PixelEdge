'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function ValuesSection() {
  const sectionRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef([]);

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

    // Animate cards on scroll
    const cards = section.querySelectorAll('.values-card');
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
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

  const values = [
    {
      id: 1,
      title: 'Mission',
      description: 'To help brands express their unique voice with clarity and beauty.',
    },
    {
      id: 2,
      title: 'Vision',
      description: 'A world where thoughtful design drives meaningful connections.',
    },
    {
      id: 3,
      title: 'Values',
      description: 'Simplicity, empathy, creativity, and strategic thinking.',
    },
    {
      id: 4,
      title: 'Design Philosophy',
      description: 'Good design solves problems and tells stories that stick.',
    },
  ];

  return (
    <section ref={sectionRef} className="values-section">
      <div className="values-background-wrapper">
        <div className="values-background-image">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&h=900&fit=crop"
            alt="Person from behind"
            fill
            style={{ objectFit: 'cover' }}
            className="values-bg-img"
            priority
          />
          <div className="values-overlay"></div>
        </div>
        
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="values-content">
                <p ref={subtitleRef} className="values-subtitle">
                  Values
                </p>
                <h2 ref={titleRef} className="values-title">
                  What Guides My Work
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <p ref={descriptionRef} className="values-description">
                My mission, vision, and values are at the core of every project—guiding how I think, create, and collaborate to build brands that matter.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="values-cards-container">
        <div className="container">
          <div className="row">
            {values.map((value, index) => (
              <div
                key={value.id}
                className="col-lg-3 col-md-6 mb-4"
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
              >
                <div className="values-card">
                  <div className="values-card-line"></div>
                  <h3 className="values-card-title">{value.title}</h3>
                  <p className="values-card-description">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
