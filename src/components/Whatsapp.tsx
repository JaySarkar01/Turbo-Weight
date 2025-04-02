'use client'
import React, { useState, useRef, useEffect } from "react";
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [shake, setShake] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Refs for animation targets
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contactInfoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const formRef = useRef<HTMLDivElement>(null);
  const formElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: false }));
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === "",
      message: formData.message.trim() === ""
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    setIsSubmitting(true);
    const phoneNumber = "+919837043672";
    const message = `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1000);
  };

  // Animation setup
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

    // Contact info items animation
    contactInfoRefs.current.forEach((item, index) => {
      if (item) {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 75%",
            toggleActions: "play none none none"
          },
          opacity: 0,
          x: -30,
          duration: 0.5,
          delay: index * 0.1,
          ease: "power2.out"
        });
      }
    });

    // Form container animation
    gsap.from(formRef.current, {
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 75%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      x: 30,
      duration: 0.8,
      ease: "power3.out"
    });

    // Form elements staggered animation
    formElementsRef.current.forEach((element, index) => {
      if (element) {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          opacity: 0,
          y: 20,
          duration: 0.5,
          delay: index * 0.1,
          ease: "power1.out"
        });
      }
    });

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Add contact info ref
  const addContactInfoRef = (el: HTMLDivElement | null, index: number) => {
    contactInfoRefs.current[index] = el;
  };

  // Add form element ref
  const addFormElementRef = (el: HTMLDivElement | null, index: number) => {
    formElementsRef.current[index] = el;
  };

  return (
    <section ref={sectionRef} className="w-full py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold text-teal-600 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team for inquiries or support
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information - Left Side */}
          <div className="space-y-6">
            {[
              {
                icon: <FaWhatsapp className="text-teal-600 text-xl" />,
                title: "WhatsApp",
                text: "+91 9837043672",
                subtext: "Available 24/7"
              },
              {
                icon: <FaPhone className="text-teal-600 text-xl" />,
                title: "Call Us",
                text: "+91 9837043672",
                subtext: "Available 24/7"
              },
              {
                icon: <FaEnvelope className="text-teal-600 text-xl" />,
                title: "Email",
                text: "dilbagh@turboweightronics.com",
                subtext: "Response within 24 hours"
              },
              {
                icon: <FaMapMarkerAlt className="text-teal-600 text-xl" />,
                title: "Location",
                text: "7 H no 169, Visharatnagar Bilaspur Dist-Rampur ",
                subtext: "U.P. Postcode-244921"
              }
            ].map((item, index) => (
              <div 
                key={index}
                ref={el => addContactInfoRef(el, index)}
                className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="bg-teal-100 p-3 rounded-full flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                  <p className="text-sm text-gray-500">{item.subtext}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form - Right Side */}
          <div 
            ref={formRef}
            className={`bg-white rounded-xl shadow-md p-6 md:p-8 transition-all ${
              shake ? "animate-shake" : ""
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div ref={el => addFormElementRef(el, 0)}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">Please enter your name</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div ref={el => addFormElementRef(el, 1)}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div ref={el => addFormElementRef(el, 2)}>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    placeholder="+91 9876543210"
                  />
                </div>
              </div>

              <div ref={el => addFormElementRef(el, 3)}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your message..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">Please enter your message</p>
                )}
              </div>

              <div ref={el => addFormElementRef(el, 4)} className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all ${
                    isSubmitting
                      ? "bg-teal-400 cursor-not-allowed"
                      : "bg-teal-600 hover:bg-teal-700"
                  } text-white`}
                >
                  <FaWhatsapp className="text-xl mr-2" />
                  {isSubmitting ? "Sending..." : "Send via WhatsApp"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-8px); }
          40%, 80% { transform: translateX(8px); }
        }
        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;