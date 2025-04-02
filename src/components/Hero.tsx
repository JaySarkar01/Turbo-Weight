"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const HeroSection = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current, { 
      opacity: 0, 
      y: 50, 
      duration: 1,
      ease: "power3.out"
    });
    gsap.from(imageRef.current, { 
      opacity: 0, 
      duration: 1.5, 
      delay: 0.3,
      ease: "power2.out"
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-gray-900">
      {/* Background Image - Full height with navbar overlap */}
      <div className="absolute inset-0 z-0" ref={imageRef}>
        <Image
          src="/two.png"
          alt="Family Insurance"
          fill
          priority
          quality={100}
          className="object-cover"
          style={{ objectPosition: 'center calc(50% + 40px)' }}
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      {/* Content Container - Pushed down by navbar height */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-[80px] min-h-[calc(100vh-80px)] flex items-center">
        <div className="w-full max-w-3xl mx-auto text-center py-12">
          <div ref={textRef}>
            <h4 className="text-md text-teal-400 uppercase mb-4 tracking-widest font-bold">
              Welcome to Turbo Weightronics
            </h4>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-medium text-white leading-tight mb-6">
            Precision Weighing Solutions for a <span className="text-teal-400 font-bold">Smarter</span> Tomorrow 
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 mx-auto max-w-2xl leading-relaxed">
            Empowering industries with cutting-edge weighbridge technology, ensuring accuracy, efficiency, and reliability. From manufacturing to logistics, our solutions are designed to optimize your weighing operations with precision and ease.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/20">
                Get Started →
              </a>
              {/* <button className="border-2 border-white hover:bg-white/5 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105">
                Get a Free Quote
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white mt-2 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;