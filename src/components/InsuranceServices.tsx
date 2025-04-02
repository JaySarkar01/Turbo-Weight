'use client'
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProductItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const productsData: ProductItem[] = [
  {
    id: 1,
    title: 'Concrete Weighbridges',
    description: 'Built for heavy-duty use, our concrete weighbridges offer unmatched stability and long-lasting performance. Perfect for industries that need a permanent, low-maintenance weighing solution.',
    image: '/concretcell.jpeg',
  },
  {
    id: 2,
    title: 'Steel Weighbridges',
    description: 'Need flexibility? Our steel weighbridges are lightweight, easy to install, and ideal for industries that require quick setup and relocation. Strong, reliable, and built to handle high loads.',
    image: '/steel.jpeg',
  },
  {
    id: 3,
    title: 'Industrial Weighing',
    description: 'From manufacturing to logistics, we provide advanced weighing systems tailored for industrial use. Our solutions ensure precise measurements, helping businesses maintain efficiency and accuracy.',
    image: '/steel_b.jpeg',
  },
  {
    id: 4,
    title: 'Portable Axle Pads',
    description: 'For on-the-go weighing, our portable axle pads are the perfect choice. Easy to transport and set up, they provide quick and accurate axle weight measurements, ideal for transport and construction industries.',
    image: '/portable_axel.jpeg',
  },
  {
    id: 5,
    title: 'Load Cells',
    description: 'The heart of any weighing system! Our high-precision load cells ensure reliable and accurate weight readings, whether used in weighbridges, industrial scales, or custom applications.',
    image: '/load_Cell.jpeg',
  },
  {
    id: 6,
    title: 'Remote Displays & Printers',
    description: 'Stay updated with real-time weight readings using our remote displays. Plus, our high-speed printers allow instant documentation of weight records, making data tracking seamless and efficient.',
    image: '/rdp.jpeg',
  },
  {
    id: 7,
    title: 'Apalto Intelligent Terminal',
    description: 'Advanced weighing terminal with intuitive interface and robust data management capabilities for precise weight monitoring and reporting.',
    image: '/aplato_terminal.jpeg',
  },
  {
    id: 8,
    title: 'Turbo Intelligent Terminal',
    description: 'High-performance terminal offering fast processing, multiple communication interfaces, and user-friendly operation for demanding weighing applications.',
    image: '/Turbo_intelligent_terminal.jpeg',
  },
  {
    id: 9,
    title: 'Weight Indicator',
    description: 'Digital indicators providing clear, accurate weight readings with customizable displays for various industrial weighing applications.',
    image: '/Indicater.jpeg',
  },
  {
    id: 10,
    title: 'Pit-less Weighbridge',
    description: 'Surface-mounted weighbridge solution requiring no civil construction, offering easy installation and maintenance with full weighing accuracy.',
    image: '/Pit less weight bridge.jpeg',
  }
];

const WeightronicsProducts: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const addToCardRefs = (el: HTMLDivElement) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useEffect(() => {
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out',
    });

    cardRefs.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 75%',
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: index * 0.1,
        ease: 'back.out(1.2)',
      });

      gsap.to(card, {
        scale: 1.03,
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
        duration: 0.3,
        paused: true,
        ease: 'power1.out',
      });

      card.addEventListener('mouseenter', () => gsap.to(card, { scale: 1.03, duration: 0.3 }));
      card.addEventListener('mouseleave', () => gsap.to(card, { scale: 1, duration: 0.3 }));
    });
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-center">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-teal-600">
            Turbo Weightronics Products
          </h2>
          <div className="mt-4 h-1 w-20 bg-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
          {productsData.map((product) => (
            <div
              key={product.id}
              ref={addToCardRefs}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 w-full max-w-md"
            >
              <div className="h-48 md:h-56 overflow-hidden relative">
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  layout="fill" 
                  objectFit="cover"
                  className="transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 md:p-7">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-5 leading-relaxed">
                  {product.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium transition-colors duration-200"
                >
                  Contact
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
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

export default WeightronicsProducts;
