import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo-r.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const LinkClass = 'text-indigo-700 hover:bg-gray-300 hover:text-white rounded-md px-3 py-2 cursor-pointer';

  return (
    <nav className="bg-white border-b border-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="hero" smooth={true} duration={500} className="flex items-center cursor-pointer">
            <img className="h-10 w-auto" src={logo} alt="React Jobs" />
            <span className="hidden md:block text-indigo-700 text-2xl font-bold ml-2">Nexus</span>
          </Link>

          {/* Hamburger Icon */}
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-indigo-700 hover:bg-gray-300 focus:outline-none md:hidden"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:ml-auto space-x-2">
            <Link to="about" smooth={true} duration={500} className={LinkClass}>
              About
            </Link>
            <Link to="features" smooth={true} duration={500} className={LinkClass}>
              Features
            </Link>
            <Link to="testimonials" smooth={true} duration={500} className={LinkClass}>
              Testimonials
            </Link>
            <Link to="pricing" smooth={true} duration={500} className={LinkClass}>
              Pricing
            </Link>
            <Link to="faq" smooth={true} duration={500} className={LinkClass}>
              FAQ
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-2 px-4 pb-4">
              <Link to="about" smooth={true} duration={500} className={LinkClass} onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link to="features" smooth={true} duration={500} className={LinkClass} onClick={() => setIsOpen(false)}>
                Features
              </Link>
              <Link to="testimonials" smooth={true} duration={500} className={LinkClass} onClick={() => setIsOpen(false)}>
                Testimonials
              </Link>
              <Link to="pricing" smooth={true} duration={500} className={LinkClass} onClick={() => setIsOpen(false)}>
                Pricing
              </Link>
              <Link to="faq" smooth={true} duration={500} className={LinkClass} onClick={() => setIsOpen(false)}>
                FAQ
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
