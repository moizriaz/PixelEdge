'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Header() {
  const headerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const navLinksRef = useRef([]);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen && navLinksRef.current.length > 0) {
      gsap.fromTo(
        navLinksRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
      );
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
          !event.target.closest('.navbar-toggler')) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('scroll', handleScroll);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header ref={headerRef} className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <span className="logo-text">PixelEdge</span>
            </a>
            <button
              className={`navbar-toggler ${isMenuOpen ? 'active' : ''}`}
              type="button"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
            <div 
              ref={menuRef}
              className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
              id="navbarNav"
            >
              <ul className="navbar-nav ms-auto align-items-center">
                <li className="nav-item">
                  <a 
                    className="nav-link" 
                    href="#"
                    onClick={closeMenu}
                    ref={(el) => navLinksRef.current[0] = el}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a 
                    className="nav-link" 
                    href="#"
                    onClick={closeMenu}
                    ref={(el) => navLinksRef.current[1] = el}
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a 
                    className="nav-link" 
                    href="#"
                    onClick={closeMenu}
                    ref={(el) => navLinksRef.current[2] = el}
                  >
                    Projects
                  </a>
                </li>
                <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
                  <a 
                    className="btn btn-cta" 
                    href="#"
                    onClick={closeMenu}
                    ref={(el) => navLinksRef.current[3] = el}
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
                        <circle cx="16" cy="16" r="16" fill="var(--color-main)"/>
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
                            fill="white"
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
                            fill="white"
                          />
                        </svg>
                      </div>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

