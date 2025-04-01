"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const HeroSection = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current, { opacity: 0, y: 50, duration: 1,toggleActions: 'play reverse play reverse', });
    gsap.from(imageRef.current, { opacity: 0, scale: 1.1, duration: 1, delay: 0.5,toggleActions: 'play reverse play reverse', });
  }, []);

  return (
    <section className="relative w-full flex flex-col lg:flex-row items-center justify-center bg-gray-900 pt-16">
      {/* Left Column (Text Section) */}
      <div className="hidden lg:flex flex-col justify-center items-start text-left lg:w-1/2 px-10">
        <h4 className="text-sm text-gray-300 uppercase mb-2">Welcome to Insurerity</h4>
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight" ref={textRef}>
          Get Family Insurance Coverage Today!
        </h1>
        <p className="text-gray-300 mt-4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
          aenur pariatur non proident aute irure.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-600">
            Get Started →
          </button>
          <button className="border border-gray-300 text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800">
            Get a Quote →
          </button>
        </div>
      </div>

      {/* Right Column (Image Section) */}
      <div className="relative w-full lg:w-1/2">
        <div className="relative w-full h-auto lg:h-[500px]">
          <Image
            src="/4069890.jpg" // Change this to your actual image
            alt="Family Insurance"
            width={800} // Set width and height for better image rendering
            height={600}
            objectFit="cover"
            className="rounded-lg w-full h-auto lg:h-full"
            ref={imageRef}
            priority
          />
        </div>

        {/* Text Overlay for Mobile */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 lg:hidden bg-black/50">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Get Family Insurance Coverage Today!
          </h1>
          <p className="text-gray-300 mt-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
            aenur pariatur non proident aute irure.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-600">
              Get Started →
            </button>
            <button className="border border-gray-300 text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800">
              Get a Quote →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
