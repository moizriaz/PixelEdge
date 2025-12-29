'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Banner() {
  const bannerRef = useRef(null);
  const heyTextRef = useRef(null);
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const descRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    if (heyTextRef.current) {
      tl.fromTo(
        heyTextRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
      );
    }

    if (titleRef.current) {
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.5"
      );
    }

    if (taglineRef.current) {
      tl.fromTo(
        taglineRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      );
    }

    if (descRef.current) {
      tl.fromTo(
        descRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.4"
      );
    }

    if (servicesRef.current) {
      tl.fromTo(
        servicesRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.4"
      );
    }
  }, []);

  return (
    <section ref={bannerRef} className="banner-section">
      <div className="banner-background">
        <div className="gradient-overlay"></div>
        <div className="abstract-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="banner-content">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-left">
                <p ref={heyTextRef} className="hey-text">Hey we are</p>
                <h1 ref={titleRef} className="hero-title">
                  Creative <br /> WEB Developer
                </h1>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-right">
                <h2 ref={taglineRef} className="hero-tagline">
                  Design With Precision. Built With Edge.
                </h2>
                <p ref={descRef} className="hero-description">
                  A creative digital agency shaping powerful brands through
                  stunning design, seamless development, and user-first
                  experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={servicesRef} className="services-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
              <div className="service-item">
                <span className="service-number">#01</span>
                <span className="service-name">Brand Identity Design</span>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
              <div className="service-item">
                <span className="service-number">#02</span>
                <span className="service-name">Website Design</span>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
              <div className="service-item">
                <span className="service-number">#03</span>
                <span className="service-name">Website Development</span>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="service-item">
                <span className="service-number">#04</span>
                <span className="service-name">Social Media Marketing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


