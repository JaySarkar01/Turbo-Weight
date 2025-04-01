'use client'
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: 'play reverse play reverse',
      }
    });

    tl.from(contentRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    .from(imageRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out"
    }, "-=0.4")
    .from(testimonialRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(1.2)"
    }, "-=0.3");

    return () => tl.kill();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Mobile & Tablet Layout (stacked) */}
        <div className="lg:hidden flex flex-col items-center text-center">
          {/* Centered Content */}
          <div ref={contentRef} className="w-full max-w-md mb-10 px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              We Provide the Best<br />Insurance Policy
            </h3>
            <p className="text-gray-600 mb-6 text-base leading-relaxed">
              Reiciendis voluptatibus maiores alias consequatur aut perferendis 
              doloribus asperiores repellat maxime place at facere possimus 
              omnis volutas.
            </p>
            <button className="mx-auto flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Image with Overlapping Testimonial */}
          <div className="w-full relative">
            <div ref={imageRef} className="relative w-full h-64 sm:h-80 aspect-video rounded-lg overflow-hidden shadow-md">
              <Image
                src="/4069890.jpg"
                alt="Insurance Team"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
            <div ref={testimonialRef} className="absolute -bottom-6 right-4 w-3/4 bg-blue-50/95 backdrop-blur-sm p-4 sm:p-5 rounded-lg shadow-lg border border-white/20">
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-1 sm:mb-2">06</div>
              <blockquote className="text-gray-700 text-sm sm:text-base italic mb-2 sm:mb-3">
                "Insurance was the best investment I ever made."
              </blockquote>
              <div className="text-gray-800 font-medium text-sm sm:text-base">— Kevin Doe</div>
            </div>
          </div>
        </div>

        {/* Desktop Layout (side-by-side) */}
        <div className="hidden lg:flex flex-row gap-8 items-start">
          {/* Content Section - Left Side */}
          <div ref={contentRef} className="w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              We Provide the Best <span className="block">Insurance Policy</span>
            </h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Reiciendis voluptatibus maiores alias consequatur aut perferendis 
              doloribus asperiores repellat maxime place at facere possimus 
              omnis volutas.
            </p>
            <button className="flex items-center text-blue-600 font-medium text-lg hover:text-blue-800 transition-colors group">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Image Section - Right Side */}
          <div className="w-1/2 relative">
            <div ref={imageRef} className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
              <Image
                src="/4069890.jpg"
                alt="Insurance Team"
                fill
                className="object-cover"
                sizes="50vw"
                priority
              />
            </div>
            <div ref={testimonialRef} className="absolute -top-12 -right-8 w-3/4 bg-blue-50/95 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20">
              <div className="text-5xl font-bold text-blue-600 mb-3">06</div>
              <blockquote className="text-gray-700 text-lg italic mb-4">
                "Insurance was the best investment I ever made."
              </blockquote>
              <div className="text-gray-800 font-medium">— Kevin Doe</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;