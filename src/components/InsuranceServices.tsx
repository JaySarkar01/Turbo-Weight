'use client'
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: 'Health Insurance',
    description: 'Ensure your family’s health and well-being with our extensive medical coverage.',
    icon: '/icons/health.svg', // Replace with your icon path
  },
  {
    id: 2,
    title: 'Homeowners Insurance',
    description: 'Protect your family and valuable assets from potential home-related damages.',
    icon: '/icons/home.svg', // Replace with your icon path
  },
  {
    id: 3,
    title: 'Auto Insurance',
    description: 'Keep your family safe on the road with flexible insurance coverage options.',
    icon: '/icons/auto.svg', // Replace with your icon path
  },
  {
    id: 4,
    title: 'Life Insurance',
    description: 'Plan for your family’s future with financial security and peace of mind.',
    icon: '/icons/life.svg', // Replace with your icon path
  },
  {
    id: 5,
    title: 'Umbrella Insurance',
    description: 'Extend your family’s protection beyond standard coverage with added liability.',
    icon: '/icons/umbrella.svg', // Replace with your icon path
  },
  {
    id: 6,
    title: 'Family Package Plans',
    description: 'Bundle your insurance needs to save money and simplify your coverage.',
    icon: '/icons/family.svg', // Replace with your icon path
  },
];

const InsuranceServices: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  // Attach refs to each card for GSAP
  const addToCardRefs = (el: HTMLDivElement) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Animate cards when they enter the viewport
    gsap.from(cardRefs.current, {
      scrollTrigger: {
        trigger: sectionRef.current, 
        start: 'top 80%',
        toggleActions: 'play reverse play reverse',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Comprehensive Range of Family Insurance Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              ref={addToCardRefs}
              className="bg-white rounded-lg shadow p-6 flex flex-col"
            >
              {/* Icon */}
              <div className='flex justify-center items-center'>
              <div className="mb-4 w-12 h-12 flex items-center justify-center bg-teal-100 rounded-full">
                <img src={service.icon} alt={service.title} className="w-6 h-6" />
              </div>

              </div>
              

              <div className='flex justify-center items-center flex-col'>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4  [text-align-last:center]">
                {service.description}
              </p>

              {/* Link or Button */}
              <a
                href="#"
                className="mt-auto text-teal-600 hover:text-teal-800 font-semibold text-sm inline-flex items-center"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceServices;