"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// Sample FAQ Data
interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Can I customize my insurance plan?",
    answer:
      "Our experienced insurance agents can help you assess your family’s needs and recommend the appropriate coverage options based on factors such as your family size.",
  },
  {
    question: "What factors can affect my insurance?",
    answer:
      "Factors such as age, location, and type of coverage can all influence your insurance rates and eligibility.",
  },
  {
    question: "How can I determine the right coverage?",
    answer:
      "Consider your financial situation, family size, and any specific risks you want to protect against. Speaking with an expert can help clarify your options.",
  },
];

const FaqSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, []);

  const toggleFaq = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section ref={containerRef} className="w-full bg-sky-50 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative flex flex-col md:flex-row items-center">
      {/* Image - comes first in mobile (due to flex-col), then on right in desktop (due to md:flex-row) */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 md:ml-8 order-1 md:order-2 flex justify-center">
        <div className="relative w-full max-w-sm md:max-w-none">
        <Image src="/OIP.jfif" alt="Happy Family" width={500} height={300} className="rounded-lg shadow-md w-full h-auto object-cover" />
        
        </div>
      </div>
  
      {/* FAQ Content - comes after image in mobile, then on left in desktop */}
      <div className="w-full md:w-1/2 order-2 md:order-1">
        {/* Small Title */}
        <p className="text-teal-600 text-sm font-semibold uppercase mb-2 text-center md:text-left">
          FAQ&apos;s
        </p>
        {/* Main Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">
          Frequently Asked Questions
        </h2>
        {/* Subtitle */}
        <p className="text-gray-600 mb-6 text-center md:text-left">
          Duisruam est qui dolorem ipsum quia dolor sit amet adipisci velit,
          sed nuia non numuam.
        </p>
  
        {/* FAQ Items */}
        <div className="space-y-2">
          {faqData.map((item, index) => {
            const realIndex = index + 1;
            const isOpen = activeIndex === realIndex;
            return (
              <div
                key={item.question}
                className="border-b border-gray-200 mb-5"
              >
                <button
                  onClick={() => toggleFaq(realIndex)}
                  className="flex justify-between items-center w-full text-left focus:outline-none"
                >
                  <span className="text-gray-800 font-medium">
                    Q: {item.question}
                  </span>
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <p className="text-gray-600 mt-2">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
  );
};

export default FaqSection;
