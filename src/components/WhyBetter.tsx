'use client'
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs: React.FC = () => {
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
      className="relative w-full overflow-hidden py-20 backdrop-blur-[3px]"
      style={{ 
        backgroundImage: "url('/bg2.jpeg')", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover" 
      }}
    >
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="anim flex flex-col items-center">
          <p className="text-teal-400 text-lg font-bold uppercase mb-4 tracking-wider">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Quality Control & Precision in Measurement
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left w-full">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm anim">
              <h3 className="text-xl font-bold text-teal-400 mb-4">Our Quality Commitment</h3>
              <p className="text-white mb-4">
                Strict Quality Control System with 100% Satisfaction Guarantee
              </p>
              <p className="text-white">
                Skilled Professionals & Accurate Testing Methods ensure precision in every measurement.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm anim">
              <h3 className="text-xl font-bold text-teal-400 mb-4">The Importance of Metrology</h3>
              <p className="text-white">
                Metrology, the science of measurement, plays an important role in our daily lives and society. A precise and reliable measurement system can influence people&apos;s decisions and even shape their perspectives.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white/10 p-6 rounded-lg backdrop-blur-sm anim w-full max-w-3xl">
            <h3 className="text-xl font-semibold text-teal-400 mb-4">Measurement Impact</h3>
            <p className="text-white">
              Accurate measurements are crucial for a country&apos;s economy, helping to increase revenue in different industries and reduce financial losses in areas where weighing is essential. Many people do not realize that measurement accuracy affects not only industries but also everyday activities. Maintaining the right level of precision ensures efficiency and fairness across various sectors.
            </p>
          </div>

          <button className="mt-12 bg-teal-400 hover:bg-teal-400 text-white px-8 py-3 rounded-lg transition-all duration-300 anim">
            Get Started With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;