'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface BenefitCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const benefitData: BenefitCard[] = [
  {
    id: 1,
    title: 'Complete Insurance Solutions',
    description: 'Dolorem ipsum nua adeiesci velit ruia...',
    icon: '/icons/insurance.svg',
  },
  {
    id: 2,
    title: 'Risk Management Solutions',
    description: 'Dolorem ipsum nua adeiesci velit ruia...',
    icon: '/icons/risk.svg',
  },
  {
    id: 3,
    title: 'Claims Management',
    description: 'Dolorem ipsum nua adeiesci velit ruia...',
    icon: '/icons/claims.svg',
  },
];

const BenefitsSection: React.FC = () => {
  const cardRefs = useRef<HTMLDivElement[]>([]);
  
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 40%',
            scrub: true,
            toggleActions: 'play reverse play reverse',
          },
        }
      );

      // ✅ Image Pop-Up Hover Animation
      const img = card.querySelector('img');
      if (img) {
        gsap.set(img, { scale: 1 }); // Set default scale

        card.addEventListener('mouseenter', () => {
          gsap.to(img, { scale: 1.1, duration: 0.3, ease: 'power3.out' });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(img, { scale: 1, duration: 0.3, ease: 'power3.out' });
        });
      }
    });
  }, []);

  return (
    <section className="benefits-container w-full py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-sm text-teal-600 font-semibold tracking-wide">
            What We Provide
          </h2>
          <h1 className="mt-2 text-2xl md:text-4xl font-bold text-gray-800">
            Benefits if You Have Our Insurance
          </h1>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Quisruam est qui dolorem ipsum quia dolor sit amet adipisci velit, sed nuia non numuam.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {benefitData.map((item) => (
            <div
              key={item.id}
              ref={addToRefs}
              className="bg-white rounded-lg shadow-sm p-6 text-center flex flex-col items-center cursor-pointer transition-transform"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-teal-100 rounded-full overflow-hidden">
                <img src={item.icon} alt={item.title} className="w-8 h-8 transition-transform" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">
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
