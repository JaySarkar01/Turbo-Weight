'use client'
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

const mockTestimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Quia voluptas aspernatur aurudt aut fugit, beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem sed neatae vitae dicta ripiscing elit.",
    name: "Katrina Parker",
    role: "Happy Client",
    avatar: "/OIP (1).jfif",
    rating: 5
  },
  {
    id: 2,
    quote: "The insurance coverage provided was exactly what my family needed. The service was exceptional and the team was very responsive to all our queries.",
    name: "Michael Johnson",
    role: "Satisfied Customer",
    avatar: "/OIP (1).jfif",
    rating: 4
  },
  {
    id: 3,
    quote: "I've been with this company for years and they've never let me down. Their family packages are comprehensive and affordable.",
    name: "Sarah Williams",
    role: "Long-term Client",
    avatar: "/OIP (1).jfif",
    rating: 5
  },
  {
    id: 4,
    quote: "When we needed to make a claim, the process was smooth and stress-free. Highly recommend their services for families.",
    name: "David Chen",
    role: "Policy Holder",
    avatar: "/OIP (1).jfif",
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeAvatar, setActiveAvatar] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
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

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? mockTestimonials.length - 1 : prev - 1));
    setActiveAvatar(currentIndex === 0 ? mockTestimonials.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === mockTestimonials.length - 1 ? 0 : prev + 1));
    setActiveAvatar(currentIndex === mockTestimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const handleAvatarClick = (index: number) => {
    setCurrentIndex(index);
    setActiveAvatar(index);
  };

  const currentTestimonial = mockTestimonials[currentIndex];

  return (
    <section ref={sectionRef} className="w-full py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Small Label */}
        <p className="text-teal-600 text-sm font-semibold uppercase mb-2">
          Testimonials
        </p>
        
        {/* Main Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          What Our Clients are Saying
        </h2>
        
        {/* Star Rating */}
        <div className="flex justify-center mb-6">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < currentTestimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.945a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.363 2.448a1 1 0 00-.363 1.118l1.286 3.945c.3.921-.755 1.688-1.54 1.118l-3.363-2.448a1 1 0 00-1.176 0l-3.363 2.448c-.785.57-1.84-.197-1.54-1.118l1.286-3.945a1 1 0 00-.363-1.118L2.074 9.372c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.287-3.945z" />
            </svg>
          ))}
        </div>
        
        {/* Testimonial Text */}
        <blockquote className="text-gray-600 italic max-w-2xl mx-auto mb-6">
        &ldquo;{currentTestimonial.quote}&rdquo;
        </blockquote>
        
        {/* Client Info */}
        <div className="mb-8">
          <h3 className="text-gray-800 font-semibold text-lg">{currentTestimonial.name}</h3>
          <p className="text-sm text-gray-500">{currentTestimonial.role}</p>
        </div>

        {/* Navigation and Avatars */}
        <div className="flex justify-center items-center space-x-4">
          {/* Left Arrow - Now visible on all screens */}
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="focus:outline-none"
          >
            <svg
              className="w-5 h-5 text-gray-400 hover:text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Avatars with rounded images */}
          <div className="flex space-x-2">
            {mockTestimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => handleAvatarClick(index)}
                className={`focus:outline-none transition-all duration-300 ${activeAvatar === index ? 'ring-2 ring-teal-500 transform scale-110' : ''}`}
              >
                <div className="overflow-hidden rounded-full">
                  <Image
                  width={0}
                  height={0}
                    src={testimonial.avatar}
                    alt={`Avatar ${index + 1}`}
                    className={`w-10 h-10 object-cover ${activeAvatar === index ? 'border-teal-500' : 'border-gray-200'}`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Right Arrow - Now visible on all screens */}
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="focus:outline-none"
          >
            <svg
              className="w-5 h-5 text-gray-400 hover:text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;