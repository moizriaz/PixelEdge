'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate text content on scroll
    const subtitleElement = subtitleRef.current;
    const titleElement = titleRef.current;
    const taglineElement = taglineRef.current;
    const descriptionElement = descriptionRef.current;
    const buttonElement = buttonRef.current;
    const imageElement = imageRef.current;

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

    if (taglineElement) {
      textTimeline.fromTo(
        taglineElement,
        { opacity: 0, y: 20 },
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

    if (imageElement) {
      gsap.fromTo(
        imageElement,
        { opacity: 0, scale: 1.1 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imageElement,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars && trigger.vars.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-content">
              <p ref={subtitleRef} className="about-subtitle">
                About us
              </p>
              <h2 ref={titleRef} className="about-title">
                Designer. Strategist. Creative partner.
              </h2>
              <p ref={taglineRef} className="about-tagline">
                Blending clarity and creativity to build brands with purpose.
              </p>
              <p ref={descriptionRef} className="about-description">
                Dominic Wagner, a freelance brand designer with 15 years of experience helping startups, creatives, and growing businesses build identities that feel like them. With a background in design, marketing, art direction, and brand strategy. I bring a balance of strategy and style to every project. Whether it&apos;s your first brand or a full refresh, I&apos;m here to guide you every step of the way.
              </p>
              <a
                ref={buttonRef}
                href="#"
                className="btn btn-read-more"
              >
                <span className="btn-read-more-text">Read More</span>
                <span className="btn-read-more-icon">
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
          <div className="col-lg-6">
            <div ref={imageRef} className="about-image-wrapper">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop"
                alt="Creative professional"
                fill
                style={{ objectFit: 'cover' }}
                className="about-image"
                priority
              />
              <div className="about-image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
