import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { FiPhone, FiMapPin, FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
  ];

  const googleMapsUrl = "https://www.google.com/maps/place/Texas+Five+Star+Paint+%26+Body/@32.9210948,-96.6353575,17z/data=!3m1!4b1!4m6!3m5!1s0x864c1d1967da4713:0x2a5fdb5d453210e!8m2!3d32.9210903!4d-96.6327826!16s%2Fg%2F11rndn42mm?entry=ttu";

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-neutral-950 shadow-lg">
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to="/" className="flex-none text-white">
              <div className="flex flex-col">
                <span className="text-2xl font-semibold whitespace-nowrap">
                  Texas Five Star Paint & Body
                </span>
                <div className="flex items-center gap-2 text-red-600 mt-1">
                  <FaStar size={14} />
                  <FaStar size={14} />
                  <FaStar size={14} />
                  <FaStar size={14} />
                  <FaStar size={14} />
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-medium text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 ${
                      isActive ? 'text-white after:w-full' : 'hover:after:w-full'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Desktop CTA & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-5 rounded-md text-sm transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-900/50"
              >
                Get Directions
              </a>
              <button
                type="button"
                aria-label="Toggle menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-white hover:text-red-600 transition-colors"
              >
                <FiMenu size={28} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-xl transition-transform duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
        }`}
      >
        <div className="flex justify-end p-5">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-400 hover:text-red-600 transition-colors"
          >
            <FiX size={32} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full -mt-16">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-3xl font-bold transition-colors ${
                    isActive ? 'text-red-600' : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <div className="mt-12 text-center">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-900/50"
            >
              Get Directions
              <FiArrowUpRight />
            </a>
            <div className="mt-8 flex flex-col gap-4 text-gray-400">
               <a href="tel:2142999240" className="flex items-center justify-center gap-3 hover:text-white">
                  <FiPhone />
                  <span>(214)-299-9240</span>
               </a>
               <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 hover:text-white">
                  <FiMapPin />
                  <span>214 Range Dr, Garland, TX</span>
               </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
