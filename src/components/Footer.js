'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const brandRef = useRef(null);
  const menuRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    // Animate footer content on scroll
    const brandElement = brandRef.current;
    const menuElement = menuRef.current;
    const socialElement = socialRef.current;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: footer,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });

    if (brandElement) {
      timeline.fromTo(
        brandElement,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );
    }

    if (menuElement) {
      timeline.fromTo(
        menuElement,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.5'
      );
    }

    if (socialElement) {
      timeline.fromTo(
        socialElement,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.5'
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars && trigger.vars.trigger === footer) {
          trigger.kill();
        }
      });
    };
  }, []);

  const menuLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'TikTok', href: '#' },
    { name: 'YouTube', href: '#' },
  ];

  return (
    <footer ref={footerRef} className="footer-section">
      <div className="footer-watermark">PixelEdge</div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div ref={brandRef} className="footer-brand">
              <h2 className="footer-brand-name">PixelEdge</h2>
              <p className="footer-brand-tagline">Great design should feel invisible.</p>
              <p className="footer-brand-description">
                We are a website designer focused on building clean, intuitive interfaces that solve real-world problems.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div ref={menuRef} className="footer-menu">
              <h3 className="footer-heading">Menu</h3>
              <ul className="footer-links">
                {menuLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div ref={socialRef} className="footer-social">
              <h3 className="footer-heading">Social</h3>
              <ul className="footer-links">
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
