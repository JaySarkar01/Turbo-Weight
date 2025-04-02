'use client'
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const socialLinksRef = useRef<HTMLDivElement>(null);
  const quickLinksRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Main footer animation
    if (footerRef.current) {
      gsap.from(footerRef.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });
    }

    // Staggered animations for footer sections
    const sections = [
      { ref: socialLinksRef, delay: 0.2 },
      { ref: quickLinksRef, delay: 0.3 },
      { ref: contactInfoRef, delay: 0.4 },
      { ref: newsletterRef, delay: 0.5 }
    ];

    sections.forEach((section) => {
      if (section.ref.current) {
        gsap.from(section.ref.current, {
          scrollTrigger: {
            trigger: section.ref.current,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse',
          },
          opacity: 0,
          y: 20,
          duration: 0.8,
          delay: section.delay,
          ease: 'back.out(1)'
        });
      }
    });

    // Social icons animation
    if (socialLinksRef.current) {
      const icons = socialLinksRef.current.querySelectorAll('svg');
      gsap.from(icons, {
        scrollTrigger: {
          trigger: socialLinksRef.current,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        },
        opacity: 0,
        y: 10,
        duration: 0.5,
        stagger: 0.1,
        ease: 'elastic.out(1, 0.5)'
      });
    }

    // Quick links animation
    if (quickLinksRef.current) {
      const links = quickLinksRef.current.querySelectorAll('li');
      gsap.from(links, {
        scrollTrigger: {
          trigger: quickLinksRef.current,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        },
        opacity: 0,
        x: -20,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
      });
    }

    // Contact info animation
    if (contactInfoRef.current) {
      const items = contactInfoRef.current.querySelectorAll('li');
      gsap.from(items, {
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        },
        opacity: 0,
        y: 15,
        duration: 0.7,
        stagger: 0.15,
        ease: 'back.out(1)'
      });
    }

    // Copyright animation
    const copyright = footerRef.current?.querySelector('.copyright');
    if (copyright) {
      gsap.from(copyright, {
        scrollTrigger: {
          trigger: copyright,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        },
        opacity: 0,
        y: 10,
        duration: 0.8,
        delay: 0.6,
        ease: 'power2.out'
      });
    }
  }, []);

  return (
    <footer ref={footerRef} className="bg-gray-900 text-gray-300 pt-16 pb-6 overflow-hidden">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Description */}
          <div className="space-y-4" ref={newsletterRef}>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center animate-pulse">
                <span className="text-white font-bold text-xl">TW</span>
              </div>
              <h2 className="text-2xl text-white font-bold">Turbo Weightronic</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
            Turbo Weightronics makes weighing easy and accurate with top-quality weighbridges, load cells, and industrial weighing systems. We focus on reliability, precision, and great service! 
            </p>
          </div>

          {/* Quick Links */}
          <div ref={quickLinksRef}>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'AboutUS', 'Products','Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-200 flex items-start group"
                  >
                    <span className="mr-2 text-teal-500 group-hover:translate-x-1 transition-transform">•</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div ref={contactInfoRef}>
            <h3 className="text-white text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start hover:text-white transition-colors">
                <svg
                  className="w-5 h-5 text-teal-500 mt-1 mr-3 flex-shrink-0 hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <div>
                  <p className="font-medium">Phone</p>
                  <p>+91 9837043672</p>
                </div>
              </li>
              <li className="flex items-start hover:text-white transition-colors">
                <svg
                  className="w-5 h-5 text-teal-500 mt-1 mr-3 flex-shrink-0 hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <div>
                  <p className="font-medium">Email</p>
                  <p>dilbaghsing@turbo.com</p>
                </div>
              </li>
              <li className="flex items-start hover:text-white transition-colors">
                <svg
                  className="w-5 h-5 text-teal-500 mt-1 mr-3 flex-shrink-0 hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <div>
                  <p className="font-medium">Address</p>
                  <p>7 H no 169, visharatnagar bilaspur dist-Rampur U.P.
                  postcode-244921</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div ref={socialLinksRef} className="flex flex-col space-y-6">
            <h3 className="text-white text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { name: 'Facebook', icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
                { name: 'Twitter', icon: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' },
                { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' }
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="text-gray-400 hover:text-teal-400 duration-200 bg-gray-800 p-2 rounded-full hover:bg-gray-700 hover:scale-110 transition-transform"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-10"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="copyright text-gray-500 text-sm">
            © {new Date().getFullYear()} Insureity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;