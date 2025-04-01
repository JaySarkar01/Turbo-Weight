'use client'
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyBetter: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current.querySelectorAll('.anim'), {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full overflow-hidden py-20 bg-black"
      style={{ 
        backgroundImage: "url('/OIP.jfif')", 
        backgroundPosition: "right", 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover" 
      }}
    >
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Left Column - Main Content */}
          <div className="anim flex flex-col space-y-6 max-w-xl text-center lg:text-left">
            <p className="text-teal-400 text-sm font-semibold uppercase">Why Choose Us</p>
            <h2 className="text-4xl font-bold text-white">
              Why We're Better than Others
            </h2>
            <p className="text-gray-300">
              Nuisruam est qui dolorem ipsum quia dolor sit amet adipisci velit, sed nuia non numuam.
            </p>
            <button className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition w-fit mx-auto lg:mx-0">
              Get Started
            </button>
          </div>

          {/* Right Column - Stats (single row) */}
          <div className="anim flex gap-12">
            <div className="text-center">
              <span className="block text-4xl font-bold text-white">95+</span>
              <span className="text-sm text-gray-300">Awards Win</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-bold text-white">320+</span>
              <span className="text-sm text-gray-300">Insurance Policies</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-bold text-white">100%</span>
              <span className="text-sm text-gray-300">Satisfied Customers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBetter;