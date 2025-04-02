'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaHeadset, FaTools, FaClock } from 'react-icons/fa';
import { ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

interface BenefitCard {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

const benefitData: BenefitCard[] = [
  {
    id: 1,
    title: 'Weighbridge Services',
    description: 'Professional weighbridge service and repairs to ensure optimal performance of your equipment.',
    icon: <FaTools className="w-8 h-8 text-teal-600" />,
  },
  {
    id: 2,
    title: 'Emergency Services',
    description: '24/7 emergency service available for critical weighing system failures and urgent repairs.',
    icon: <FaHeadset className="w-8 h-8 text-teal-600" />,
  },
  {
    id: 3,
    title: 'Extended Operating Hours',
    description: 'Open 7 days a week from 7 AM to 10 PM to serve your weighing needs at convenient times.',
    icon: <FaClock className="w-8 h-8 text-teal-600" />,
  }
];

const BenefitsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Section entrance animation
    gsap.from(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out"
    });

    // Heading animation
    gsap.from(headingRef.current, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 75%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      delay: 0.2,
      ease: "back.out(1.2)"
    });

    // Card animations
    cardRefs.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 75%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: index * 0.15,
        ease: "power2.out"
      });

      // Enhanced hover animation
      const icon = card.querySelector('.benefit-icon');
      if (icon) {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -5,
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
            duration: 0.3
          });
          gsap.to(icon, { 
            scale: 1.15,
            duration: 0.3
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            duration: 0.3
          });
          gsap.to(icon, { 
            scale: 1,
            duration: 0.3
          });
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-xl text-teal-600 font-bold tracking-wide">
            Our Advantages
          </h2>
          <h1 ref={headingRef} className="mt-2 text-3xl md:text-4xl font-bold text-gray-800">
            Turbo Weightronics Benefits
          </h1>
          <p className="mt-2 text-lg text-gray-600 max-w-3xl mx-auto">
            Engineered for accuracy, built for durability, and supported by experts
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitData.map((item) => (
            <div
              key={item.id}
              ref={addToRefs}
              className="bg-white rounded-xl shadow-md p-6 text-center flex flex-col items-center cursor-pointer transition-all hover:shadow-lg"
            >
              <div className="w-20 h-20 mb-4 flex items-center justify-center bg-teal-50 rounded-full">
                <div className="benefit-icon transition-transform">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
