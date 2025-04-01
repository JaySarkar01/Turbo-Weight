"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" className="h-8" width={10} height={10}/>
          <span className="text-xl font-bold text-gray-900">Insurerity</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-500">About Us</Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-500">Services</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-blue-500">Pricing</Link>
        </div>

        {/* Contact Us Button */}
        <Link href="/contact" className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700">
          Contact Us →
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <Link href="/" className="block px-6 py-3 text-gray-700 hover:bg-gray-100">Home</Link>
          <Link href="/about" className="block px-6 py-3 text-gray-700 hover:bg-gray-100">About Us</Link>
          <Link href="/services" className="block px-6 py-3 text-gray-700 hover:bg-gray-100">Services</Link>
          <Link href="/pricing" className="block px-6 py-3 text-gray-700 hover:bg-gray-100">Pricing</Link>
          <Link href="/contact" className="block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700">Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
