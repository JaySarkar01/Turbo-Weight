"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let tl: gsap.core.Timeline | null = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play reverse play reverse",
      },
    });

    tl.from(headingRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    })
      .from(
        imageRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .from(
        contentRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        buttonRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(1.2)",
        },
        "-=0.3"
      );

    return () => {
      if (tl) {
        tl.kill();
        tl = null;
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Mobile & Tablet Layout (stacked) */}
        <div className="lg:hidden flex flex-col items-center">
          {/* Heading First */}
          <h2 ref={headingRef} className="text-3xl font-bold text-gray-800 mb-6 w-full text-center">
            About Us
          </h2>

          {/* Image Second */}
          <div ref={imageRef} className="w-full max-w-md mb-8 relative">
            <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/about.jpeg"
                alt="Precision Measurement Equipment"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Content Third */}
          <div ref={contentRef} className="w-full max-w-md px-4 mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">
              <span className="text-teal-600 font-bold">Turbo Weightronics</span> Industries
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Leading Manufacturer, Exporter, Supplier & Service Provider of
              Standard Weights & Calibration Services. Since 1999, we have been 
              engaged in manufacturing weights and mass standards, becoming the
              premier company in the metrology industry.
            </p>
          </div>

          {/* Button Last */}
          <div className="w-full max-w-md px-4">
            <Link 
              href="#contact"
              className="w-full sm:w-auto mx-auto flex items-center justify-center text-blue-600 font-medium hover:text-blue-800 transition-colors group px-6 py-2 border border-blue-600 rounded-lg"
            >
              Contact
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Desktop Layout (side-by-side) */}
        <div className="hidden lg:flex flex-row gap-12 items-center">
          {/* Content Section - Left Side */}
          <div className="w-1/2">
            <h2 ref={headingRef} className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
            <h3 ref={contentRef} className="text-3xl font-semibold text-gray-800 mb-4">
              Welcome to{" "}
              <span className="text-teal-600 font-bold">Turbo Weightronics</span>{" "}
              Industries Pvt. Ltd.
            </h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              As India&apos;s leading manufacturer of certified standard weights and 
              calibration services since 1999, we combine precision engineering 
              with rigorous quality standards to deliver measurement solutions 
              trusted by industries nationwide.
            </p>
            <Link 
              href="#contact"
              className="flex items-center text-blue-600 font-medium text-lg hover:text-blue-800 transition-colors group"
            >
              Contact
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          {/* Image Section - Right Side */}
          <div ref={imageRef} className="w-1/2 relative">
            <div className="relative h-[450px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/about.jpeg"
                alt="Precision Measurement Laboratory"
                fill
                className="object-cover object-center"
                sizes="50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;