'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const QuoteForm: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-12 bg-teal-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <p className="text-teal-600 text-sm font-semibold uppercase mb-2">
            Get a Quote
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Secure Your Family Future With Us.
          </h2>
          <p className="text-gray-600 mb-6">
            Reiciendis voluptatibus maiores alias perferendis doloribus asperiores.
            Provide a few details, and we'll help you get started.
          </p>
        </div>

        {/* Right Content: Form */}
        <div className="md:w-1/2 w-full">
          <div className="bg-white rounded-lg shadow p-6">
            <form className="space-y-4">
              {/* Name Field */}
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
              {/* Email Field */}
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
              {/* Insurance Type (Select) */}
              <select
                defaultValue=""
                className="w-full px-4 py-3 border border-gray-200 rounded text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              >
                <option value="" disabled>
                  Insurance Type
                </option>
                <option value="health">Health Insurance</option>
                <option value="auto">Auto Insurance</option>
                <option value="home">Homeowners Insurance</option>
                <option value="life">Life Insurance</option>
              </select>
              {/* Message Field (Textarea) */}
              <textarea
                placeholder="Message"
                className="w-full px-4 py-3 border border-gray-200 rounded h-24 resize-none focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
              {/* Submit Button */}
              <button
                type="submit"
                className="bg-teal-600 text-white w-full py-3 rounded font-semibold hover:bg-teal-700 transition"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;